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
        this.showCat_1 = this.showCat_1.bind(this)
        this.showCat_2 = this.showCat_2.bind(this)
        this.showCat_3 = this.showCat_3.bind(this)
        this.showCat_4 = this.showCat_4.bind(this)
        this.state= {
            leaderboard: null,
            category: null
        }
    }

    fetchLeaderboard(categoryId) {
            fetch('/api/leaderboard/'+ categoryId)
            .then(response => {
                return response.json();
            })
            .then(leaderboard => {
                let category
                switch (categoryId) {
                  case 1:
                    category = "Hombres RXD";
                    break;
                  case 2:
                    category = "Mujeres RXD";
                    break;
                  case 3:
                    category = "Hombres Scaled";
                    break;
                  case 4:
                    category = "Mujeres Scaled";
                    break;
                    default: null
                }
                this.setState({ 
                    leaderboard : leaderboard,
                    category: category 
                });
                
            }) .catch(function(error) {
                console.log(error);
            });
            
        }
        
      back() {
        this.props.backToApp()
    }
    showCat_1(){
        this.fetchLeaderboard(1);
    }
    showCat_2(){
        this.fetchLeaderboard(2);
    }
    showCat_3(){
        this.fetchLeaderboard(3);
    }
    showCat_4(){
        this.fetchLeaderboard(4);
    }
    

    render(){
        const leaderboard = this.state.leaderboard
        const category = this.state.category
        return <div>
            <Jumbotron>
              <h1 className="App-title">Leaderboards</h1>
            </Jumbotron>
            <div className="flex">
              <Button bsStyle="primary" onClick={this.showCat_1}>
                Hombres RXD
              </Button>
              <Button bsStyle="primary" onClick={this.showCat_2}>
                Mujeres RXD
              </Button>
              <Button bsStyle="primary" onClick={this.showCat_3}>
                Hombres Scaled
              </Button>
              <Button bsStyle="primary" onClick={this.showCat_4}>
                Mujeres Scaled
              </Button>
            </div>

            {this.state.leaderboard && <div>
                <h2>Categoria: {category} </h2>
                <Leaderboard data={leaderboard} />
              </div>}
          </div>;
    }
}

export default LeaderboardDash