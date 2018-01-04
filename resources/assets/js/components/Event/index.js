import React, { Component } from 'react';
import '../../index.css';
import '../../App.css';
import SetScoreForm from '../SetScoreForm';
import Btn from '../Btn';
import List from '../List';
import EventScores from '../EventScores';
import axios from 'axios';

import { Jumbotron, Col, Panel } from 'react-bootstrap';

class Event extends Component {
    constructor(props){
        super(props)
        
        this.state= {
            eventId : null,
            category_id: this.props.category,
        }
    }

    showEvent() {
        event = this.refs.event_id.value
        
        this.setState({
            eventId : event
        })
        
        }
    render() {
        console.log('event:' + this.state.eventId)
        return (
            
            <div>
                {this.state.eventId ? 
                <EventScores event={this.state.eventId} />
                :
               <div>
                <header className="App-header">
                <h1 className="App-title">Eventos</h1>
                </header>
                <Jumbotron>
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
                    </Jumbotron> 
                </div>
                 }  
            </div>
        )
    }
    
}


export default Event


