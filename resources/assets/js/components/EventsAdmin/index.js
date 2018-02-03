import React, { Component } from 'react';
import '../../index.css';
import '../../App.css';
import SetScoreForm from '../SetScoreForm';
import Btn from '../Btn';
import List from '../List';
import EventScores from '../EventScores';
import EventForm from '../EventForm';
import axios from 'axios';

class EventsAdmin extends Component {
    constructor(props){
        super(props)
        this.fetchEvents = this.fetchEvents.bind(this)
        this.storeEvent = this.storeEvent.bind(this)
        this.state= {
            hasTiebreak : false,
            events:[],
            culo: false
            
            
        }
    }
    componentDidMount(){
        this.fetchEvents()
    }
    
    fetchEvents(){
        fetch('/api/event')
        .then(response => {
            return response.json();
        })
        .then(events => {
          this.setState({ events : events });
    
        }) .catch(function(error) {
          console.log(error);
        });

    }

    storeEvent(event) {
        const url = '/api/event/store'
        axios.post(url,event)
        .then(response=> {
            this.fetchEvents()
            //console.log(response);
        })
        .catch(function(error) {
            //console.log(error);
        });

    }
    render() {
        const events = this.state.events;
        return <div>
            
            <EventForm storeEvent={this.storeEvent.bind(this)} />
            <div className="table">
              <div className="gridEvents thead">
                <div className="theading">Categoria</div>
                <div className="theading">Evento Nº</div>
                <div className="theading">Workout</div>
                <div className="theading">Mide por</div>
                <div className="theading">Time Cap</div>
                <div className="theading">TieBreak</div>
              </div>
              <div className="tbody">
                <List entries={events} itemType="event" />
              </div>
            </div>
          </div>;
    }

}

export default EventsAdmin;