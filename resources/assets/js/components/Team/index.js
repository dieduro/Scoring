import React, {Component} from 'react'
import { Panel } from 'react-bootstrap';

export default class Team extends Component {
    constructor(props){
        super(props)
        
    }

    render() {
        
        return (
          
                <Panel>
                    <div>
                        <h1> {this.props.data.name} </h1>
                        <h3>{this.props.data.ath1} y {this.props.data.ath2}</h3>
                        <p>Id: {this.props.data.id} </p><br/> 
                        {this.props.data.score ? 
                        <p> { `Score: ${this.props.data.score}` }</p> : <p> No hay score registrado</p> 
                        }
                    </div>
                </Panel>

            
        )
    }
}