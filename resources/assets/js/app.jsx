import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './index.css';
// import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Btn from './components/Btn';
import List from './components/List';
import axios from 'axios';

import { Jumbotron, Col, Panel } from 'react-bootstrap';

class App extends Component {
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
    this.fetchNonUpdatedTeams();/* fetch API in action */    
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
              console.log(teamsArray)
             this.fetchUpdatedTeams();
            //Fetched product is stored in the state
             this.setState({ nonUpdatedTeams : teamsArray });
        });
  }
  fetchUpdatedTeams() {
    
    fetch('/api/event/'+this.state.eventId + '/scores')
    .then(response => {
        console.log(response)
        return response.json();
    })
    .then(eventResults => {
        let teamsArray = eventResults
        this.setState({ updatedTeams : teamsArray });
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
    .then(function(response) {
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
    this.fetchUpdatedTeams()
    
  }

 
 render() {  
    let nonUpdatedTeams = this.state.nonUpdatedTeams.filter(function (team) {
      return (team.show === true);
    });
    let updatedTeams = this.state.updatedTeams
    updatedTeams = updatedTeams.sort(function(a, b){return a.score - b.score})
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Cargar Resultados</h1>
        </header>
        <Jumbotron>
          <h3>Evento: -id del Evento-</h3>
          <Form update={this.setScore.bind(this)}/>
        </Jumbotron>
        <Col className="column" md={6} sm={6}>
          <List  entries={nonUpdatedTeams}/>
        </Col>
       
        <Col className="column" md={6} sm={6}>  
          <List entries={updatedTeams}/>   
        </Col> 
        
       </div>
     
    );
    
  }
}
export default App;
const rootDiv = document.getElementById('root');

ReactDOM.render(<App />, rootDiv );

