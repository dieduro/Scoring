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
            event : null,
            categoryId: null,
            events : [],
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

    categoryChosen() {
       let category = this.refs.category_id.value
       let events = this.events(category)
       this.setState({
        categoryId : category,
        events: events
    }) 
    }
    categories() {
    
        fetch('/api/categories/')
        .then(response => {
            return response.json();
        })
        .then(categories => {
            
            this.setState({ categories : categories });
    
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
    setEventOptions() {
        let events = this.state.events
        let selectEvents = document.querySelector('#event_id')
        if (selectEvents){
            events.forEach(event => {
                let optionElement = document.createElement('option')
                optionElement.value = event.id
                optionElement.innerHTML = event.eventNumber +'º - ' + event.name
                selectEvents.appendChild(optionElement)
                
            })
        }
    }
    back() {
        this.props.backToApp()
    }

    render() {
        console.log(this.state)
        this.setCategoryOptions()
        this.setEventOptions()
        return (
            <div>
                <div>
                    <h1 className="App-title">Eventos</h1>
                    <Jumbotron>
                    <h3>Elegí una categoría</h3>
                    <form action="">
                        <label htmlFor="category_id">Evento</label>
                        <select name="category_id" id="category_id" ref="category_id" onInput={this.categoryChosen.bind(this)} >
                            <option value="0">Categoría</option>
                            {/* <option value="1">Hombres RxD</option>
                            <option value="2">Mujeres RxD</option>
                            <option value="3">Hombres Scaled</option>
                            <option value="4">Mujeres Scaled</option> */}
                        </select>
                        </form>
                    { this.state.categoryId &&
                    <div>
                        <h3>Seleccioná un evento para poder seguir</h3>
                            <form action="">
                                <label htmlFor="event_id">Evento</label>
                                <select name="event_id" id="event_id" ref="event_id" onInput={this.showEvent.bind(this)} >
                                    <option value="0">No Event</option>
                                </select>
                            </form>
                    </div>
                    }
                    </Jumbotron> 
                    {this.state.event && 
                        <EventScores event={this.state.event} category_id={this.state.categoryId}/>
                    }
                </div>
                 <Btn text="Volver" funcion={this.back.bind(this)}/>  
            </div>
        )
    }
    
}


export default Event


