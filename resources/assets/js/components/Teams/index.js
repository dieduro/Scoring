import React, { Component } from 'react';
import '../../index.css';
import '../../App.css';
import CreateTeamForm from '../CreateTeamForm';
import Btn from '../Btn';
import List from '../List';
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
        
        if (this.state.teams != []) {   
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
                    <h1 className="App-title">Registrar Equipo</h1>
                    <Jumbotron>
                        <h3>Inscribir Equipo</h3>
                        <CreateTeamForm create={this.storeTeam.bind(this)}/>
                    </Jumbotron>
                    <div>
                    <Col className="column" md={3} sm={3}>
                    <h2 className="teamHeading">Hombres RXD</h2>
                    <List  entries={teams_cat1} itemType='team'/>
                  </Col>
                    <Col className="column" md={3} sm={3}>
                    <h2 className="teamHeading">Mujeres RXD</h2>
                    <List  entries={teams_cat2} itemType='team'/>
                  </Col>
                    <Col className="column" md={3} sm={3}>
                    <h2 className="teamHeading">Hombres Scaled</h2>
                    <List  entries={teams_cat3} itemType='team'/>
                  </Col>
                    <Col className="column" md={3} sm={3}>
                    <h2 className="teamHeading">Mujeres Scaled</h2>
                    <List  entries={teams_cat4} itemType='team'/>
                  </Col>
                    </div>
            
                    <Btn text="Volver" funcion={this.back.bind(this)}/>  
                </div>
            )
        }else {
            <h2>Cargando Equipos</h2>
        }
    }
}

export default Teams