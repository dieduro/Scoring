import React from 'react'
import Btn from '../Btn'
// import List from '../List'

export default class Form extends React.Component {
    constructor(props) {
        super(props);    
    }  
   
     updateTeam(e) { //verifica {team} e invoca la funcion update() del parent, con parametros team y score
        e.preventDefault();
        
        let team = this.refs.team_id.value;
        let score = this.refs.score.value;
        console.log(team);
        console.log(score);
        this.props.update(team, score);
        this.refs.team_id.value = "";
        this.refs.score.value = "" ;



      
    }
    render ()   {
        return(
        <div>
            <form>
                <input  type="text" ref="team_id" placeholder="Id del Equipo" />
                <input  type="text" ref="score" placeholder="Score" />  
                <Btn text="Cargar" funcion={this.updateTeam.bind(this)} />
            </form>
        </div>    
        )
    }
}








  // axios.post('/verifyTeam', {
        //     team: team

        // }).then((response)=>{
        //     if (response.data ===true) {
        //         this.props.update(team, score)
        //     }
        // })




        // if(this.props.verifyTeam(team)){
        //     this.props.setScore(result)
        // }else {
        //     alert()
        // }
        
        // var teamArray = this.state.teams;
        // console.log(teamArray);
 
        // if (this.name.value !== "") {
        //     teamArray.unshift({
        //         text: [
        //             team,
        //             result,
                    
        //         ],
        //         key: Date.now()
        //     });
        
        //     this.setState({
        //     teams: teamArray
        //     });
        // }   
    //     team = "";
    //     result = "";
    // }

      
    // componentDidMount(){
    //     console.log(this.name)
    // }
    // onSubmit (e) {
    //     fetch (`localhost:3000/api/categories/create/${this.state.name}`, {
    //       method: 'POST'
    //     })
    //     .then(res => res.json())
    //     .then(res => {
    //       if (res.success) { // exito
    //         alert('Categoría creada');
    //       }
    //     });
    // }
    // deleteTeam(key) {
    //     var filteredTeams = this.state.teams.filter(function (team) {
    //       return (team.key !== key);
    //     });
       
    //     this.setState({
    //       teams: filteredTeams
    //     });
    //   }
// 