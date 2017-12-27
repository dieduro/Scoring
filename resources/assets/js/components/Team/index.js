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
        
        return (
            <li>
                <Panel>
                    <div>
                        <h1> {this.props.texto.name} </h1>
                        <p>Id: {this.props.texto.id} <br/>Score: {this.props.texto.score}<br/>Updated: {this.props.texto.updated}</p>
                        {/* <Btn  text="Borrar" funcion={this.delete.bind(this)} /> */}
                    </div>
                </Panel>
            </li>
            
        )
    }
}