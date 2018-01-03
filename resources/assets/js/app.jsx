import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './index.css';

import './App.css';
import Form from './components/Form';
import EventScores from './components/EventScores';
import Btn from './components/Btn';
import List from './components/List';
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
       <EventScores/>
      
       </div>
     
    );
    
  }
}
export default App;
const rootDiv = document.getElementById('root');

ReactDOM.render(<App />, rootDiv );

