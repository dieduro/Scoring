import React, { Component } from 'react';
import '../../index.css';
import '../../App.css';
import CreateTeamForm from '../CreateTeamForm';
import Btn from '../Btn';
import axios from 'axios';
import { Jumbotron, Col, Panel } from 'react-bootstrap';

class LeaderboardDash extends Component {
    constructor(props){
        super(props)
     
        this.state= {
            
          
        }
       
    }
        
      back() {
        this.props.backToApp()
    }

    render(){
      
         
        return (
            <div>
                <Jumbotron>
                    <h1 className="App-title">Leaderboards</h1>
                </Jumbotron>
               
            </div>
        )
    }
}

export default LeaderboardDash