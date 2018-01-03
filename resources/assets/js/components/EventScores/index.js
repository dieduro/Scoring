import React, { Component } from 'react';
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
    this.state= {
        nonUpdatedTeams : [
          
        ],
        updatedTeams : [

        ],
        eventId : 1,
        category_id: 1,
   
    }
   
  }
  componentDidMount() {
    this.fetchNonUpdatedTeams();
    /* fetch API in action */    
  }
  fetchNonUpdatedTeams() {
    fetch('/api/event/'+this.state.eventId)
        .then(response => {
            return response.json();
        })
        .then(teams => {   
            let teamsArray = teams;
            teamsArray.forEach((team) => {
              team.show = true
              })
           
             this.fetchUpdatedTeams();
            //Fetched product is stored in the state
             this.setState({ nonUpdatedTeams : teamsArray });
        });
  }
  fetchUpdatedTeams() {
    
    fetch('/api/event/'+this.state.eventId + '/scores')
    .then(response => {
        
        return response.json();
    })
    .then(eventResults => {
        let teamsArray = eventResults;
        this.setState({ updatedTeams : teamsArray });
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
    const url = '/api/event/' + this.state.eventId+'/cargarScore/'
    axios.post(url,teamScore)
    .then(response=> {
      this.fetchUpdatedTeams()
      //console.log(response);
    })
    .catch(function(error) {
      //console.log(error);
    });
    this.setState({
      nonUpdatedTeams: this.state.nonUpdatedTeams.filter(function (team) {
        return (team.show === true);
      })
    }) 
  }

 
 render() {  
    let nonUpdatedTeams = this.state.nonUpdatedTeams.filter(function (team) {
      return (team.show === true);
    });
    let updatedTeams = this.state.updatedTeams
    updatedTeams = updatedTeams.sort(function(a, b){return a.score - b.score})
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Cargar Resultados</h1>
        </header>
        <Jumbotron>
          <h3>Evento: -id del Evento-</h3>
          <SetScoreForm update={this.setScore.bind(this)}/>
        </Jumbotron>
        <Col className="column" md={6} sm={6}>
          <List  entries={nonUpdatedTeams}/>
        </Col>
       
        <Col className="column" md={6} sm={6}>  
          <List entries={updatedTeams}/>   
        </Col> 
        
       </div>
     
    )
    
  }
}
export default EventScores;