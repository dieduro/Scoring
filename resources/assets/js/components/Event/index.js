import React, { Component } from 'react';
import '../../index.css';
import '../../App.css';
import SetScoreForm from '../SetScoreForm';
import Btn from '../Btn';
import TeamList from '../TeamList';
import List from '../List';
import EventScores from '../EventScores';
import axios from 'axios';

import { Jumbotron, Col, Panel } from 'react-bootstrap';

class Event extends Component {
    constructor(props){
        super(props)
        
        this.state= {
            eventId : null,
            categoryId: null,
        }
    }

    showEvent() {
       let event = this.refs.event_id.value
        
        this.setState({
            eventId : event
        })
        
    }

    categoryChosen() {
       let category = this.refs.category_id.value
       this.setState({
        categoryId : category
    }) 
    }
    back() {
        this.props.backToApp()
    }

    render() {
        console.log(this.state)
        return (
            <div>
                {this.state.eventId ? 
                <EventScores event={this.state.eventId} category_id={this.state.categoryId}/>
                :
                <div>
                    <header className="App-header">
                    <h1 className="App-title">Eventos</h1>
                    </header>
                    
                    <Jumbotron>
                    <h3>Elegí una categoría</h3>
                    <form action="">
                            <label htmlFor="category_id">Evento</label>
                            <select name="category_id" id="category_id" ref="category_id" onInput={this.categoryChosen.bind(this)} >
                                <option value="1">Hombres RxD</option>
                                <option value="2">Mujeres RxD</option>
                                <option value="3">Hombres Scaled</option>
                                <option value="4">Mujeres Scaled</option>
                            </select>
                        </form>
                    { this.state.categoryId &&
                    <div>
                        <h3>Seleccioná un evento para poder seguir</h3>
                            <form action="">
                                <label htmlFor="event_id">Evento</label>
                                <select name="event_id" id="event_id" ref="event_id" onInput={this.showEvent.bind(this)} >
                                    <option value="0">No Event</option>
                                    <option value="1">Evento 1</option>
                                    <option value="2">Evento 2</option>
                                    <option value="3">Evento 3</option>
                                    <option value="4">Evento 4</option>
                                    <option value="5">Evento 5</option>
                                    <option value="6">Evento 6</option>
                                </select>
                            </form>
                    </div>
                    }
                    </Jumbotron> 
                </div>
                 }
                 <Btn text="Volver" funcion={this.back.bind(this)}/>  
            </div>
        )
    }
    
}


export default Event


