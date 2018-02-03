import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './index.css';

import './App.css';
import EventsAdmin from './components/EventsAdmin';
import EventsDash from './components/EventsDash';
import Teams from './components/Teams';
import LeaderboardDash from './components/LeaderboardDash';
import List from './components/List';
import Btn from './components/Btn';
import axios from 'axios';
import { Jumbotron, Col, Panel } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props)
 
    this.state= {
      section : 0
      
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
  backToThis() {
    this.setState({
      section : 0
    })
  }
  teamSection() {
    this.state.section == 1 ? this.setState({section:0}): this.setState({section: 1})
  }
  eventSection() {
    this.state.section == 2 ? this.setState({section:0}): this.setState({section: 2})
  }
  leaderboardSection() {
    this.state.section == 3 ? this.setState({section:0}): this.setState({section: 3})
  }

 render() {  
    return <div className="app-container">
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">DMD Live Scoring</h1>
          </header>
          <div className="leftNav">
            <Btn text="Equipos" class="btn btn_leftNav" funcion={this.teamSection.bind(this)} />
            <Btn text="Eventos" class="btn btn_leftNav" funcion={this.eventSection.bind(this)} />
            <Btn text="Leaderboards" class="btn btn_leftNav" funcion={this.leaderboardSection.bind(this)} />
          </div>
          <div className="sectionContainer">
            {(() => {
              switch (this.state.section) {
                case 1:
                  return <Teams backToApp={this.backToThis.bind(this)} />;
                  break;
                case 2:
                  return <EventsDash backToApp={this.backToThis.bind(this)} />;
                  break;
                case 3:
                  return <LeaderboardDash />;
                  break;
                default:
                  return null;
              }
            })()}
          </div>
        </div>
      </div>;
    
  }
}
export default App;
const rootDiv = document.getElementById('root');

ReactDOM.render(<App />, rootDiv );

