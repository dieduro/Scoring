import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './index.css';

import './App.css';
import EventScores from './components/EventScores';
import Teams from './components/Teams';

import Btn from './components/Btn';

import axios from 'axios';

import { Jumbotron, Col, Panel } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props)
 
    this.state= {
      
    }
   
  }
 
 render() {  
    return (
      <div className="App">
        <Teams categoria="RXD" sexo="Hombres" />
        {/* <EventScores /> */}
      
       </div>
     
    )
    
  }
}
export default App;
const rootDiv = document.getElementById('root');

ReactDOM.render(<App />, rootDiv );

