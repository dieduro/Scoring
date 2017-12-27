import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './index.css';
// import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Btn from './components/Btn';
import List from './components/List';
import axios from 'axios';

import { Jumbotron, Col } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props)
    this.updateScores = this.updateScores.bind(this)
    this.state= {
        teams : [
          
        ],
        eventId : 1  
    }
    // this.componentWillMount = this.componentWillMount.bind(this);
    // this.runAxios= this.runAxios.bind(this);
  }

  componentDidMount() {
    /* fetch API in action */
    fetch('/api/teams')
        .then(response => {
            
            return response.json();
        })
        .then(teams => {
            let teamsArray = teams
            teamsArray.forEach((team) => {
            team.updated = 'false'
            })
            //Fetched product is stored in the state
            this.setState({ teams : teamsArray });
        });
        
  }


  updateScores(e){
    e.preventDefault()
    let updatedTeams = this.state.teams.filter((team) => {
      return team.updated == 'true'
    })
    console.log(updatedTeams)
    let url = '/api/cargarScoresEvento/' + this.state.eventId
    axios.post(url, {
      data : updatedTeams,
    })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    });
    // resultElement.innerHTML = generateSuccessHTMLOutput(response);
    // resultElement.innerHTML = generateErrorHTMLOutput(error);
  }

  setScore(team_id, score) {
    let team = this.state.teams.find((aTeam)=> aTeam.id == team_id);
    team.score = score;
    team.updated = 'true';
    this.forceUpdate();
}

 render() {  
    let nonUpdatedTeams = this.state.teams.filter(function (team) {
      return (team.updated === 'false');
    });
    let updatedTeams = this.state.teams.filter(function (team) {
      return (team.updated === 'true');
    });
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
          <Btn text="Guardar scores" funcion={this.updateScores}/>
        </Col>
      </div>
     
    );
    
  }
}
export default App;
const rootDiv = document.getElementById('root');

ReactDOM.render(<App />, rootDiv );

