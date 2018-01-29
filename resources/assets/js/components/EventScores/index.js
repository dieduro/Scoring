import React, { Component } from 'react';
import moment from 'moment';
import '../../index.css';
import '../../App.css';
import SetScoreForm from '../SetScoreForm';
import Btn from '../Btn';
import List from '../List';
import axios from 'axios';

import { Jumbotron, Col, Panel } from 'react-bootstrap';

class EventScores extends Component {
  constructor(props){
    super(props)
    this.fetchUpdatedTeams = this.fetchUpdatedTeams.bind(this);
    this.fetchNonUpdatedTeams = this.fetchNonUpdatedTeams.bind(this);
    this.convertToSeconds = this.convertToSeconds.bind(this); 

    this.state= {
        nonUpdatedTeams : [],
        updatedTeams : [],
        event: null
        
        // categoryId: this.props.category_id
    }

  }
  componentWillReceiveProps(nextProps) {
    this.setState({ event: nextProps.event });
    this.fetchNonUpdatedTeams(nextProps.event);  
  }

  componentDidMount() {
    let event = this.props.event
    this.fetchNonUpdatedTeams(event);
    this.setState({
      event: event
    })
   
  }

  fetchNonUpdatedTeams(event) {
    let category = event.category_id
    let event_id = event.id
    fetch('/api/event/c'+category+'e'+event_id)
        .then(response => {
            return response.json();
        })
        .then(teams => {   
            let teamsArray = teams;
            teamsArray.forEach((team) => {
              team.show = true
            })
            this.fetchUpdatedTeams(event_id)
            this.setState({ 
              nonUpdatedTeams : teamsArray
             })
            //Fetched product is stored in the state
        })
  }
  fetchUpdatedTeams(event) {
    
    fetch('/api/event/'+ event + '/scores')
    .then(response => {
        return response.json();
    })
    .then(eventResults => {
      this.setState({ updatedTeams : eventResults });
    }) .catch(function(error) {
      console.log(error);
    });
  }
  validateTeamId(id) {
    let flag = false
    this.state.nonUpdatedTeams.forEach((team)=>{
      if (team.id == id) {
        flag = true
      }
    })
    return flag
  }
  
  
  convertToSeconds(time){
    let arr = time.split(':')
    let mToS = arr[0] * 60
    let sec = parseInt(arr[1],10)
    let total = mToS + sec
    return total
  
  }
  

  validateScore(score){


  }
  
  setScore(teamScore) {
    console.log(this.convertToSeconds(teamScore.score))
    if (this.validateTeamId(teamScore.team)){
      let category_id = this.state.event.category_id
      teamScore.category_id = category_id
      
      this.state.nonUpdatedTeams.forEach((team)=>{
        if(team.id == teamScore.team){
            team.show=false
        }
      }) 
      const url = '/api/event/' + this.state.event.id+'/cargarScore'
      axios.post(url,teamScore).then(response=> {
        this.fetchUpdatedTeams(this.state.event.id)
      }).catch(function(error) {
      });
      let teams = this.state.nonUpdatedTeams.filter(function (team) {
        return (team.show === true);
      })
      this.setState({
        nonUpdatedTeams: teams
      })
    }else {
       alert("El equipo ingresado no existe en esta categoría")
    }
  }
  setPositions(){
    let teams = this.state.updatedTeams
    for (let i=0; i < teams.length ; i++) {
      let p = i + 1
      if (!teams[i].pts){
        teams[i].pts = p
        for (let j=i+1; j < teams.length ; j++) {
          if (teams[i].score === teams[j].score) {
            teams[j].pts = p
          }  
        }
      }
    }
    return teams
  }

  async axiosPost(url, data) {
    axios.post(url,data)
    .then(response=> {
      // console.log(response.data); 
    })
    .catch(function(error) {
      console.log(error);
    });
  }
  storePositions() {
    let teams = this.setPositions()
    console.log(teams)
    let event_id = this.state.event.id
    let teamArray =[]
    teams.forEach((team)=>{
      let data = {
        team_id : team.id,
        event_id : event_id,
        points : team.pts
      }
      teamArray.push(data)
    })
    let teamJsonString = JSON.stringify(teamArray)
    const url = '/api/event/'+event_id+'/storePositions'
    const config = {
      headers : {
        'Content-Type': 'application/json'
      },
      data : teamArray
    }
    
    this.axiosPost(url, config)
    alert('Resultados de evento: '+event_id+', cargados satisfactoriamente.')
    setTimeout(this.props.back(), 3000)
 
  }
  sortTeams(event, updatedTeams) {
    const eventScores = this
    updatedTeams = updatedTeams.sort(function(a, b){

      switch (event.midePor){
        case 'time':
          if (eventScores.convertToSeconds(a.score) > eventScores.convertToSeconds(b.score)){
            return 1
          } else if (eventScores.convertToSeconds(a.score) == eventScores.convertToSeconds(b.score)){
            if (event.tiebreak) {
              if (eventScores.convertToSeconds(a.tiebreak) > eventScores.convertToSeconds(b.tiebreak)){
                return 1
              } else if (eventScores.convertToSeconds(a.tiebreak) < eventScores.convertToSeconds(b.tiebreak)) {
                return -1
              } else {
                return 0
              }
            }
          } else {
            return -1
          }
          break;
        case 'reps':
        case 'peso':
        return parseInt(b.score,10) - parseInt(a.score,10)
          break;
      default:
      return $score
      }
    })

  }

 render() {  
  const event = this.state.event

  let nonUpdatedTeams = this.state.nonUpdatedTeams
  if (nonUpdatedTeams) {
    nonUpdatedTeams = this.state.nonUpdatedTeams.filter(function (team) {
      return (team.show === true);
    });
  
  }
  const updatedTeams = this.state.updatedTeams
  if (updatedTeams){
    this.sortTeams(event, updatedTeams)
  }
  
    return (
      <div>
          <h1 className="App-title">Cargar Resultados</h1>
      { this.state.event &&
        <Jumbotron>
          <h3>Evento: {event.name}</h3>
          <p>Mide Por: {event.midePor}</p>
          <SetScoreForm update={this.setScore.bind(this)} event={event}/>
         
         { nonUpdatedTeams.length == 0 && 
          <Btn text="Guardar Posiciones" funcion={this.storePositions.bind(this)}/>
         }
  
        </Jumbotron>
      }
        {this.state.nonUpdatedTeams ?
        
        <div>
          <Col className="column" md={6} sm={6}>
            <List  entries={nonUpdatedTeams} itemType='team'/>
          </Col>
        </div>
          :
        <div>
          <h3>Cargando Equipos y Resultados</h3> 
        </div>
        }
        {this.state.updatedTeams &&
        <div>
          
          <Col className="column" md={6} sm={6}>  
            <List entries={updatedTeams} itemType='team'/>   
          </Col>
        </div>
        }
        
       
      
      

        
       </div>
     
    )
    
  }
}
export default EventScores;