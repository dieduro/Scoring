import React, { Component } from 'react';
import '../../index.css';
import '../../App.css';
import Btn from '../Btn';
import Leaderboard from '../Leaderboard';
import axios from 'axios';
import { Jumbotron, Col, Panel } from 'react-bootstrap';

class LeaderboardDash extends Component {
    constructor(props){
        super(props)
     
        this.state= {
            leaderboard: null  
        }
    }
    componentDidMount(){
        this.fetchLeaderboard(1)
    }

    fetchLeaderboard(categoryId) {
    
            fetch('/api/leaderboard/'+ categoryId)
            .then(response => {
                return response.json();
            })
            .then(leaderboard => {
                
                this.setState({ leaderboard : leaderboard });
                
            }) .catch(function(error) {
                console.log(error);
            });
            
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

                <h2>HOla Mundo</h2>
               

                <Leaderboard data={this.state.leaderboard} />
               
            </div>
        )
    }
}

export default LeaderboardDash