import React from 'react'
import Btn from '../Btn'


export default class SetScoreForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error : false,
        }    
    } 
    
    updateTeam(e) { //verifica {team} e invoca la funcion update() del parent, con parametros team y score
        e.preventDefault();

        const teamScore = {
            team : this.refs.team_id.value,
            score : this.refs.score.value
        }
        if (this.refs.tiebreak) {
            teamScore.tiebreak = this.refs.tiebreak.value 
        }
        console.log(teamScore)
     
        if (teamScore.team == "" || teamScore.score== ""  )  {
            this.setState({error:"Revisá los campos. Hay un error en ellos." })

        }else {
            this.props.update(teamScore);
           
            this.refs.team_id.value = "";
            this.refs.score.value = "" ;
            if (this.refs.tiebreak){
                this.refs.tiebreak.value = "" ;
            }
            this.setState({error: null })
         }   
        
    }

    render ()   {
        const event = this.props.event
        return(
            <div>
            { event.tiebreak==1 ?
           
            <form id="setScore">
                <input  type="text" ref="team_id" placeholder="Id del Equipo" />
                <input  type="text" ref="score" placeholder="Score" />
                <input  type="text" ref="tiebreak" placeholder="Tiebreak" />
            </form>
            :
            <form id="setScore">
                <input  type="text" ref="team_id" placeholder="Id del Equipo" />
                <input  type="text" ref="score" placeholder="Score" />
            </form>
            }
                <Btn text="Cargar" funcion={this.updateTeam.bind(this)} />
                <p id="error"> {this.state.error} </p>
        </div>    
        )
    }
}



