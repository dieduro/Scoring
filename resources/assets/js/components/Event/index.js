import React, {Component} from 'react'
import "../../App.css";


export default class Event extends Component {
    constructor(props){
        super(props)
        
    }


    render() {
        const event = this.props.data
        let timeCap
        event.timeCap == null ? timeCap='--' : timeCap=event.timeCap
        let tiebreak = null
        if (event.tiebreak== 1){
            tiebreak = 'Sí'
        }else {
            tiebreak = 'No'
        }
        return (
            <div className="gridEvents itemDiv">
                <div className="cell" id="category">{event.category}</div>
                <div className="cell" id="eventNumber">{event.eventNumber}</div>
                <div className="cell" id="wod">{event.wod}</div>
                <div className="cell" id="type">{event.midePor}</div>
                <div className="cell" id="timeCap">{timeCap}</div>
                <div className="tiebreakCell cell " id="tiebreak">{tiebreak}</div>
               
            </div>    
        )
    }
}