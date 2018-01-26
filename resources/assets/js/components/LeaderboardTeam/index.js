import React, {Component} from 'react'
import { Panel } from 'react-bootstrap';

export default class LeaderboardTeam extends Component {
    constructor(props){
        super(props)
        
    }

    render() {
        const data = this.props.data

        let ev1 = data.eventScores[0] ? `${data.eventScores[0].points} pts - ${data.eventScores[0].score}`  : '--'
        let ev2 = data.eventScores[1] ? `${data.eventScores[1].points} pts - ${data.eventScores[1].score}`  : '--'
        let ev3 = data.eventScores[2] ? `${data.eventScores[2].points} pts - ${data.eventScores[2].score}`  : '--'
        let ev4 = data.eventScores[3] ? `${data.eventScores[3].points} pts - ${data.eventScores[3].score}`  : '--'
        let ev5 = data.eventScores[4] ? `${data.eventScores[4].points} pts - ${data.eventScores[4].score}`  : '--'
      
        let ts = data.team.totalScore ? data.team.totalScore : "--";

        
        
      return <div className="itemDiv">
              <div className="cell" id="pos">
              {data.position}
            </div>
            <div className="cell" id="teamName">
              {data.team.name}
            </div>
            <div className="cell" name="eventScores" id="ev1">
              {ev1}
            </div>
            <div className="cell" name="eventScores" id="ev2">
              {ev2}
            </div>
            <div className="cell" name="eventScores" id="ev3">
              {ev3}
            </div>
            <div className="cell" name="eventScores" id="ev4">
              {ev4}
            </div>
            <div className="cell" name="eventScores" id="ev5">
              {ev5}
            </div>

            <div className="cell" id="wod">
              {ts}
            </div>
          </div>;
    }
}