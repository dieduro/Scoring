import React, { Component } from 'react';
import '../../index.css';
import '../../App.css';
import CreateTeamForm from '../CreateTeamForm';
import Btn from '../Btn';
import TeamList from '../TeamList';
import axios from 'axios';
import { Jumbotron, Col, Panel } from 'react-bootstrap';

class Teams extends Component {
    constructor(props){
        super(props)
     
        this.state= {
            teams: []
          
        }
       
    }
        
    componentDidMount() {

        fetch('/api/teams')
        .then(response => {
            return response.json();
        })  
        .then(teams => {
            this.setState({ teams : teams });
        }) .catch(function(error) {
          console.log(error);
        });
    }
       

    storeTeam(teamData) {
        const url = '/api/teams/create'
        axios.post(url,teamData)
        .then(response=> {
            console.log(response);
            this.componentDidMount()
        })
        .catch(function(error) {
          console.log(error);
        });
        
      }
      back() {
        this.props.backToApp()
    }

    render(){
        let teams_cat1 = this.state.teams.filter(function (team) {
            return (team.category_id === 1);
          });
        let teams_cat2 = this.state.teams.filter(function (team) {
            return (team.category_id === 2);
          });
        let teams_cat3 = this.state.teams.filter(function (team) {
            return (team.category_id === 3);
          });
        let teams_cat4 = this.state.teams.filter(function (team) {
            return (team.category_id === 4);
          });
         
        return (
            <div>
                <header className="App-header">
                <h1 className="App-title">Registrar Equipo</h1>
                </header>
                <Jumbotron>
                    <h3>Inscribir Equipo</h3>
                    <CreateTeamForm create={this.storeTeam.bind(this)}/>
                </Jumbotron>
                <div>
                <Col className="column" md={3} sm={3}>
                <h2>Hombres RXD</h2>
                <TeamList  entries={teams_cat1}/>
              </Col>
                <Col className="column" md={3} sm={3}>
                <h2>Mujeres RXD</h2>
                <TeamList  entries={teams_cat2}/>
              </Col>
                <Col className="column" md={3} sm={3}>
                <h2>Hombres Scaled</h2>
                <TeamList  entries={teams_cat3}/>
              </Col>
                <Col className="column" md={3} sm={3}>
                <h2>Mujeres Scaled</h2>
                <TeamList  entries={teams_cat4}/>
              </Col>
                </div>
                <Btn text="Volver" funcion={this.back.bind(this)}/>  
            </div>
        )
    }
}

export default Teams