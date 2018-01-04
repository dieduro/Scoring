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
        nonUpdatedTeams : null,
        updatedTeams : null,
        eventId : this.props.event,
    }
   
  }

  componentDidMount() {
    let event = this.state.eventId
    this.fetchNonUpdatedTeams(event);
    /* fetch API in action */    
  }

  fetchNonUpdatedTeams(event) {
    fetch('/api/event/'+event)
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
    const url = '/api/event/' + this.state.eventId+'/cargarScore/'
    axios.post(url,teamScore)
    .then(response=> {
      this.fetchUpdatedTeams(this.state.eventId)
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
        <header className="App-header">
          <h1 className="App-title">Cargar Resultados</h1>
        </header>
        <Jumbotron>
          <h3>Evento: {this.state.eventId}</h3>
          <SetScoreForm update={this.setScore.bind(this)}/>
        </Jumbotron>
        
        {this.state.nonUpdatedTeams ?
        
        <div>
          <Col className="column" md={6} sm={6}>
            <List  entries={nonUpdatedTeams}/>
          </Col>
        </div>
          :
        <div>
          <h3>Cargando Equipos y Resultados</h3> 
        </div>
        }
        {this.state.updatedTeams ?
        <div>
          <Col className="column" md={6} sm={6}>  
            <List entries={updatedTeams}/>   
          </Col>
        </div>
          :
        <div>
         
        </div>
        }
       
         
      

        
       </div>
     
    )
    
  }
}
export default EventScores;