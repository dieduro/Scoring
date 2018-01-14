import React, {Component} from 'react'


export default class Event extends Component {
    constructor(props){
        super(props)
        
    }


    render() {
        let event = this.props.data
        return (
            <div>
                <div className="cell" id="category">{event.category}</div>
                <div className="cell" id="eventNumber">{event.eventNumber}</div>
                <div className="cell" id="name">{event.name}</div>
                <div className="cell" id="wod">{event.wod}</div>
                <div className="cell" id="type">{event.midePor}</div>
                <div className="cell" id="tiebreak">{event.tiebreak}</div>
                <div className="cell" id="tiebreak">{event.qTiebreaks}</div>
            </div>    
        )
    }
}