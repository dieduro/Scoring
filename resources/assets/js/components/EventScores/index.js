import React, { Component } from 'react';
import '../../index.css';
import '../../App.css';
import SetScoreForm from '../SetScoreForm';
import Btn from '../Btn';
import TeamList from '../TeamList';
import axios from 'axios';

import { Jumbotron, Col, Panel } from 'react-bootstrap';

class EventScores extends Component {
  constructor(props){
    super(props)
    this.fetchUpdatedTeams = this.fetchUpdatedTeams.bind(this);
    this.fetchNonUpdatedTeams = this.fetchNonUpdatedTeams.bind(this);

    this.state= {
        nonUpdatedTeams : [],
        updatedTeams : [],
        event : this.props.event,
        // categoryId: this.props.category_id
    }

  }

  componentDidMount() {
    let event = this.state.event
    this.fetchNonUpdatedTeams(event);
    /* fetch API in action */    
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
      if (team.team_id == id) {
        flag = true
      }
    })
    return flag
  }
  
  setScore(team_id, score) {
    if (this.validateTeamId(team_id)){
      let category_id = this.state.event.category_id
      const teamScore = {
        team_id,
        score,
        category_id
        
      }
      this.state.nonUpdatedTeams.forEach((team)=>{
        if(team.team_id == team_id){
            team.show=false
        }
      }) 
      const url = '/api/event/' + this.state.event.id+'/cargarScore/'
      axios.post(url,teamScore)
      .then(response=> {
        this.fetchUpdatedTeams(this.state.event.id)
        //console.log(response);
      })
      .catch(function(error) {
        //console.log(error);
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
       console.log(response.data); 
    })
    .catch(function(error) {
      console.log(error);
    });
  }
  storePositions() {
    let teams = this.setPositions()
    let event_id = this.state.event.id
    let teamArray =[]
    teams.forEach((team)=>{
      let data = {
        team_id : team.team_id,
        event_id : event_id,
        points : team.pts
      }
      teamArray.push(data)
    })
    let teamJsonString = JSON.stringify(teamArray)
    console.log(teamJsonString)

    const url = '/api/event/'+event_id+'/storePositions'
    const config = {
      headers : {
        'Content-Type': 'application/json'
      },
      data : teamArray
    }
    
     this.axiosPost(url, config)
        // let response = this.axiosPost(url, data).then((response)=>{
        //   responses.push(response)
        // })
 
  }



 
 render() {  
  let nonUpdatedTeams
  if (this.state.nonUpdatedTeams) {
    nonUpdatedTeams = this.state.nonUpdatedTeams.filter(function (team) {
      return (team.show === true);
    });
  
  }
  let updatedTeams = this.state.updatedTeams
  if (updatedTeams){
    updatedTeams = updatedTeams.sort(function(a, b){return a.score - b.score})
  }
    
    return (
      <div>
          <h1 className="App-title">Cargar Resultados</h1>
 
        <Jumbotron>
          <h3>Evento: {this.state.event.name}</h3>
          <SetScoreForm update={this.setScore.bind(this)}/>
         
         { nonUpdatedTeams.length == 0 && 
          <Btn text="Guardar Posiciones" funcion={this.storePositions.bind(this)}/>
         }
  
        </Jumbotron>
        {this.state.nonUpdatedTeams ?
        
        <div>
          <Col className="column" md={6} sm={6}>
            <TeamList  entries={nonUpdatedTeams}/>
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
            <TeamList entries={updatedTeams}/>   
          </Col>
        </div>
        }
        
       
         
      

        
       </div>
     
    )
    
  }
}
export default EventScores;