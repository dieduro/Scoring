import React, {Component} from 'react'
import moment from 'moment';
import { Panel } from 'react-bootstrap';

export default class Team extends Component {
    constructor(props){
        super(props)
        
    }
    

    render() {
        
        return <div className="teamCard">
            <h2 className="teamName"> {this.props.data.name} </h2>
            <p className="id">#{this.props.data.codigo} </p>
            <h3 className="athletes">
              {this.props.data.ath1} y {this.props.data.ath2}
            </h3>
            <br />
            {this.props.data.score ? <p className="score">
                {" "}
                {`Score: ${this.props.data.score}`}
              </p> : <p className="score"> No hay score registrado</p>}
          </div>;
    }
}