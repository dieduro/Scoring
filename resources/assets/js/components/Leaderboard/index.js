import React, { Component } from 'react';
import '../../index.css';
import '../../App.css';
import List from '../List';
import { Jumbotron, Col, Panel } from 'react-bootstrap';

class Leaderboard extends Component {
    constructor(props){
        super(props)
       
    }
    
    
    render(){
        const leaderboard = this.props.data
         
        return (
            <div>
                <div className="table leaderboard_table">
                    <div className="thead">
                        <div className="theading">Posición</div>
                        <div className="theading">Equipo</div>
                        <div className="theading">Evento #1</div>
                        <div className="theading">Evento #2</div>
                        <div className="theading">Evento #3</div>
                        <div className="theading">Evento #4</div>
                        <div className="theading">Evento #5</div>
                        <div className="theading">Puntaje Total</div>
                    </div>
                    <div className="tbody">
                       
                            <List entries={leaderboard} itemType='leaderboardTeam'/>
                    
                    </div>        
                </div>
            </div>
        )
    }
}

export default Leaderboard