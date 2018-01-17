import React, { Component } from 'react';
import '../../index.css';
import '../../App.css';
import Btn from '../Btn';
import Leaderboard from '../Leaderboard';
import axios from 'axios';
import { Jumbotron, Col, Panel, Button  } from 'react-bootstrap';

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
            <Button bsStyle="primary">Hombres RXD</Button>
            <Button bsStyle="primary">Mujeres RXD</Button>
            <Button bsStyle="primary">Hombres Scaled</Button>
            <Button bsStyle="primary">Mujeres Scaled</Button>
               
            {this.state.leaderboard &&
                <div>
                    <h2>Categoria</h2>
                <Leaderboard data={this.state.leaderboard}/>
                </div>
            }
            </div>
        )
    }
}

export default LeaderboardDash