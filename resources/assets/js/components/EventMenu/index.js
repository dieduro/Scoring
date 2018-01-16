import React, { Component } from 'react';
import '../../index.css';
import '../../App.css';
import SetScoreForm from '../SetScoreForm';
import Btn from '../Btn';
import Event from '../Event';
import List from '../List';
import EventScores from '../EventScores';
import axios from 'axios';

import { Jumbotron, Col, Panel } from 'react-bootstrap';

class EventMenu extends Component {
    constructor(props){
        super(props)
        
        this.state= {
            event : null,
            categoryId: null,
            events : null,
            categories: []
        }
    }
    componentDidMount(){
        this.categories()
        
    }

    showEvent() {
       let event_id = this.refs.event_id.value
       let events = this.state.events
       let findEvent = (event) => event.id == event_id
       let eventChosen = events.find(findEvent)
        this.setState({
            event : eventChosen
        })
        
    }

    
    

    categories() {
        
        fetch('/api/categories/')
        .then(response => {
            return response.json();
        })
        .then(categories => {
            
            this.setState({ categories : categories });
            this.setCategoryOptions()
            
            
        }) .catch(function(error) {
            console.log(error);
        });
        
    }
    events(categoryId) {
        
        fetch('/api/categories/'+ categoryId + '/events')
        .then(response => {
            return response.json();
        })
        .then(events => {
            
            this.setState({ events : events });
            
        }) .catch(function(error) {
            console.log(error);
        });
        
    }

    setCategoryOptions() {
        let categories = this.state.categories
        let selectCategories = document.querySelector('#category_id')
        if (selectCategories){
            categories.forEach(category => {
                let optionElement = document.createElement('option')
                optionElement.value = category.id
                optionElement.innerHTML = category.sexo +' ' + category.nivel
                selectCategories.appendChild(optionElement)
                
            })
        }
    }
    categoryChosen() {
        let category = this.refs.category_id.value
        let events = this.events(category)
        this.setState({
            categoryId : category,
            events: events
        })
    }

    setEventOptions() {
       
        let selectEvents = document.querySelector('#event_id')
        let events = this.state.events
        if(selectEvents.length > 1) {  
            for (let i=1; i<selectEvents.length ; i++){
                let e = i-1
                if (events[e].loaded == 0) {    
                selectEvents[i].value =  events[e].id
                selectEvents[i].innerHTML = events[e].eventNumber +'º - ' + events[e].name
                }
            }
        }
        else {  
            events.forEach(event => {
                if (event.loaded == 0) {
                    let optionElement = document.createElement('option') 
                    optionElement.value = event.id
                    optionElement.innerHTML = event.eventNumber +'º - ' + event.name
                    selectEvents.appendChild(optionElement)
                }  
            })
        }
    }

    back() {
        this.props.backToApp()
    }
    
    

    render() {
        const event = this.state.event
        if (this.state.events) {
            this.setEventOptions()
        }
        return (
            <div>
                <div>
                    <h1 className="App-title">Eventos</h1>
                    <Jumbotron>
                    <h3>Elegí una categoría</h3>
                    <form action="">
                        <label htmlFor="category_id">Categoría</label>
                        <select name="category_id" id="category_id" ref="category_id" onInput={this.categoryChosen.bind(this)} >
                            <option value="0">Categoría</option>
                        </select>
                        </form>
                    { this.state.categoryId && 
                    <div>
                        <h3>Seleccioná un evento para poder seguir</h3>
                            <form action="">
                                <label htmlFor="event_id">Evento</label>
                                <select name="event_id" id="event_id" ref="event_id" onInput={this.showEvent.bind(this)} >
                                    <option className="evtOption" value="0">No Event</option>
                                </select>
                            </form>
                    </div>
                    }
                    </Jumbotron> 
                   
                    {this.state.event && 
                        <EventScores event={event} back={this.back.bind(this)} />
                    }
                </div>
                 <Btn text="Volver" funcion={this.back.bind(this)}/>  
            </div>
        )
    }
    
}


export default EventMenu


