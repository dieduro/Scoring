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
        categoryId: this.props.category_id
    }
   
  }

  componentDidMount() {
    let event_id = this.state.event.id
    let category = this.state.categoryId
    this.fetchNonUpdatedTeams(category, event);
    /* fetch API in action */    
  }

  fetchNonUpdatedTeams(category, event) {
    fetch('/api/event/c'+category+'e'+event)
        .then(response => {
            return response.json();
        })
        .then(teams => {   
            let teamsArray = teams;
            teamsArray.forEach((team) => {
              team.show = true
            })
            this.fetchUpdatedTeams(event)
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
  
  setScore(team_id, score) {
    const teamScore = {
      team_id,
      score
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

  }
  storePositions(){
    
    let teams = this.state.updatedTeams
    for (let i=0; i < teams.length ; i++) {
      let p = i + 1
      if (!teams[i].pos){
        teams[i].pts = p
        for (let j=i+1; j < teams.length ; j++) {
          if (teams[i].score == teams[j].score) {
            teams[j].pts = i
          }  
        }
      }
    }
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