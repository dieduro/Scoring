import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './index.css';
// import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
// import Team from './components/Team';
import List from './components/List';
import axios from 'axios';

import { Jumbotron, Col } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props)
   
    this.state= {
        teams : [
          
        ]  
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
            team.updated = false
            })
            //Fetched product is stored in the state
            console.log(teamsArray)
            this.setState({ teams : teamsArray });
        });
        
  }
  // componentWillMount(){
  //  this.runAxios();

  // }
  // runAxios(){
     
  //   axios.get('api/teams')
  //   .then(function (response) {
  //     const teamsArray = response.data;
      
  //     teamsArray.forEach((team) => {
  //       team.updated = false
  //     })
  //     console.log(teamsArray)
  //     console.log(this)
  //     this.setState({
  //      teams : teamsArray 
  //     })
  //   })
  //   .catch(function (error) {
  //   console.log(error);
  //   });
  // }

  setScore(team_id, score) {
    let team = this.state.teams.find((aTeam)=> aTeam.id == team_id);
    team.score = score;
    team.updated = true;
    this.forceUpdate();
}

 render() {   
    let nonUpdatedTeams = this.state.teams.filter(function (team) {
      return (team.updated === false);
    });
    let updatedTeams = this.state.teams.filter(function (team) {
      return (team.updated === true);
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
        <Col md={6} sm={6}>
          <List  entries={nonUpdatedTeams}/>
        </Col>
        <Col md={6} sm={6}>  
          <List entries={updatedTeams}/>   
        </Col>
      </div>
     
    );
    
  }
}
export default App;
const rootDiv = document.getElementById('root');

ReactDOM.render(<App />, rootDiv );


// {id : 1, name : "A", score : "000", updated : false},
//           {id : 2, name : "B", score : "111", updated : false},
//           {id : 3, name : "C", score : "222", updated : false},
//           {id : 4, name : "D", score : "333", updated : false}
