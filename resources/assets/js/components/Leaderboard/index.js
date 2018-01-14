import React, { Component } from 'react';
import '../../index.css';
import '../../App.css';
import List from '../List';
import { Jumbotron, Col, Panel } from 'react-bootstrap';

class Leaderboard extends Component {
    constructor(props){
        super(props)
     
        this.state= {

            leaderboard : this.props.data
        }
       
    }
    

    render(){
      
         
        return (
            <div>
                <div className="table">
                    <div className="thead">
                        <div className="theading">Equipo</div>
                        <div className="theading">Posición</div>
                        <div className="theading">Evento #1</div>
                        <div className="theading">Evento #2</div>
                        <div className="theading">Evento #3</div>
                        <div className="theading">Evento #4</div>
                        <div className="theading">Evento #5</div>
                        <div className="theading">Puntaje Total</div>
                    </div>
                    <div className="tbody">
                       
                            <List entries={this.state.leaderboard} itemType='leaderboardTeam'/>
                    
                    </div>        


                    {/* <div >
                        <div >
                            <div className="cell" id="id">1</div>
                            <div className="cell" id="category">H RxD</div>
                            <div className="cell" id="eventNumber">1</div>
                            <div className="cell" id="wod">Max C&J</div>
                            <div className="cell" id="type">Peso</div>
                            <div className="cell" id="timebreaks">No</div>
                        </div>
                        
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Leaderboard