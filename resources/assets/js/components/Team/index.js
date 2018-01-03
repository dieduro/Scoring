import React, {Component} from 'react'
//import Btn from '../Btn'
import { Panel } from 'react-bootstrap';

export default class Team extends Component {
    constructor(props){
        super(props)
        this.delete = this.delete.bind(this);
    }
    delete(key) {
        this.props.delete(key);
      }
    render() {
        // console.log(this.props.texto);
        return (
            <li>
                <Panel>
                    <div>
                        <h1> {this.props.texto.team_name} </h1>
                        {/* <h3>{this.props.texto.ath1} y {this.props.texto.ath2}</h3> */}
                        <p>Id: {this.props.texto.team_id} <br/>Score: {this.props.texto.score}<br/>Updated: {this.props.texto.updated}</p>
                        {/* <Btn  text="Borrar" funcion={this.delete.bind(this)} /> */}
                    </div>
                </Panel>
            </li>
            
        )
    }
}