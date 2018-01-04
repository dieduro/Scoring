import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './index.css';

import './App.css';
import Event from './components/Event';
import Teams from './components/Teams';

import List from './components/List';
import Btn from './components/Btn';

import axios from 'axios';

import { Jumbotron, Col, Panel } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props)
 
    this.state= {
      
    }
   
  }
  fetchLeaderboard(category_id) {
    fetch('/api/leaderboards')
    .then(response => {
        return response.json();
    })  
    .then(teams => {
        this.setState({ teams : teams });
    }) .catch(function(error) {
      console.log(error);
    });
  }
  componentDidMount() {
  }

 render() {  
    return (
      <div className="App">
        {/* <Teams /> */}
        <Event category="1" />
        {/* <div>
          <Col className="column" md={3} sm={3}>
            <h2>Hombres RXD</h2>
            <List  entries={leaderboard_cat1}/>
          </Col>
          <Col className="column" md={3} sm={3}>
            <h2>Mujeres RXD</h2>
            <List  entries={leaderboard_cat2}/>
          </Col>
          <Col className="column" md={3} sm={3}>
            <h2>Hombres Scaled</h2>
            <List  entries={leaderboard_cat3}/>
          </Col>
          <Col className="column" md={3} sm={3}>
            <h2>Mujeres Scaled</h2>
            <List  entries={leaderboard_cat4}/>
          </Col>
        </div> */}
      
       </div>
     
    )
    
  }
}
export default App;
const rootDiv = document.getElementById('root');

ReactDOM.render(<App />, rootDiv );

