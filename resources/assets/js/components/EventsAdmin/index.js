import React, { Component } from 'react';
import '../../index.css';
import '../../App.css';
import SetScoreForm from '../SetScoreForm';
import Btn from '../Btn';
import List from '../List';
import EventScores from '../EventScores';
import axios from 'axios';

class EventsAdmin extends Component {
    constructor(props){
        super(props)
        this.tiebreakHandler = this.tiebreakHandler.bind(this)
        this.fetchEvents = this.fetchEvents.bind(this)
        this.state= {
            hasTiebreak : false,
            events:[],
            culo: false
            
            
        }
    }
    componentDidMount(){
        this.fetchEvents()
    }
    tiebreakHandler() {
       this.setState({hasTiebreak:true})
      
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

    storeEvent() {
        
        let category_id = this.refs.category.value
        let eventNumber = this.refs.eventNumber.value
        let name = this.refs.name.value
        let wod = this.refs.wod.value;
        let tiebreak = document.getElementsByName('tiebreak');
        let qTiebreaks = 0
        if (this.refs.qTiebreaks) {
            qTiebreaks = this.refs.qTiebreaks.value
        }
        for (var i = 0, length = tiebreak.length; i < length; i++)
        {
            if (tiebreak[i].checked)
            {   
                tiebreak = tiebreak[i].value
            break;
            }
        }
        let midePor = this.refs.midePor.value;
        
            const event = {
              category_id,
              eventNumber,
              name,
              wod,
              tiebreak,
              qTiebreaks,
              midePor
            }
            
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
         console.log(this.state.events)  
        const events = this.state.events;
        return (
            <div>
                <div>
                    <form action="">
                        <select name="category" id="category" ref="category">
                            <option value="1">Hombres RXD</option>
                            <option value="2">Mujeres RXD</option>
                            <option value="3">Hombres Scaled</option>
                            <option value="4">Mujeres Scaled</option>
                        </select>
                        <label htmlFor="eventNumber">Evento Nº</label>
                        <select name="eventNumber" id="eventNumber" ref="eventNumber">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <input type="text" ref="name" placeholder="Nombre del Evento"/>
                       
                        <textarea name="wod" id="wod" cols="30" rows="3" ref="wod" placeholder="Descripción del WOD"></textarea>
                        
                        <label htmlFor="tiebreak">Tiebreaks?</label>
                        <input type="radio" ref="tiebreak" onChange={this.tiebreakHandler} name="tiebreak" id="tiebreak" value="Sí"/>
                        <label htmlFor="tiebreak">Sí</label>
                        <input type="radio"  ref="tiebreak" name="tiebreak" id="tiebreak" value="No"/>
                        <label htmlFor="tiebreak">No</label>
                        { this.state.hasTiebreak &&
                            <div><label htmlFor="qTiebreaks">¿Cuántos?</label><input type="number" ref="qTiebreaks" name="qTiebreaks" id="qTiebreaks" min="1" max="5"/></div>
                        }

                        <label htmlFor="midePor">Mide por:</label>
                        <select name="midePor" id="midePor" ref="midePor">
                            <option value="time">Tiempo</option>
                            <option value="reps">Reps</option>
                            <option value="weight">Peso</option>
                        </select>
                        <Btn text="Guardar Evento" funcion={this.storeEvent.bind(this)}/>
                    </form>
                </div>


               
                <div className="table">
                    <div className="thead">
                        <div className="theading">Categoria</div>
                        <div className="theading">Evento Nº</div>
                        <div className="theading">Workout</div>
                        <div className="theading">Mide por</div>
                        <div className="theading">TieBreak</div>
                    </div>
                    <div className="tbody">
                       
                            <List entries={events} itemType='event'/>
                    
                    </div>  
                </div>
            </div>
        )
    }

}

export default EventsAdmin;