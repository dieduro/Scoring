import React from 'react'
import Btn from '../Btn'


export default class SetScoreForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error : false,
        }    
    }  
    

    addTieInput() {
        const setScore = document.querySelector('#setScore')
        const tiebreakInput = document.createElement('input')
        tiebreakInput.placeholder = 'Tiebreak'
        tiebreakInput.ref = 'tiebreak'
        setScore.appendChild(tiebreakInput)
    }
    updateTeam(e) { //verifica {team} e invoca la funcion update() del parent, con parametros team y score
        e.preventDefault();
    
        let team = this.refs.team_id.value;
        let score = this.refs.score.value;
     
        if (team == "" || score== "" )  {
            this.setState({error:"Revisá los campos. Hay un error en ellos." })

        }else {
            this.props.update(team, score);
            this.refs.team_id.value = "";
            this.refs.score.value = "" ;
            this.setState({error: null })
         }
          
        
    }
    render ()   {
        const event = this.props.event
        if (event.tiebreak) {
            this.addTieInput()
        }   

        return(
        <div>
            <form id="setScore">
                <input  type="text" ref="team_id" placeholder="Id del Equipo" />
                <input  type="text" ref="score" placeholder="Score" />

            
            </form>
                <Btn text="Cargar" funcion={this.updateTeam.bind(this)} />
                <p id="error"> {this.state.error} </p>
        </div>    
        )
    }
}



