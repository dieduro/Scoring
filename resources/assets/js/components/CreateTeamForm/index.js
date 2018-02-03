import React from 'react'
import Btn from '../Btn'


export default class CreateTeamForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        }    
    } 

    getCategoryId() {
        let gender = document.getElementsByName('gender');
        for (var i = 0, length = gender.length; i < length; i++)
        {
            if (gender[i].checked)
            {   
                gender = gender[i].value
            break;
            }
        }
        let category = document.getElementsByName('category');
        for (var i = 0, length = category.length; i < length; i++)
        {
            if (category[i].checked)
            {   
                category = category[i].value
            break;
            }
        }
        let category_id = null
        if (gender == "male") {
            if (category == "rxd"){
                category_id = 1
            }else {
                category_id = 3
            }
        }else {
            if (category == "rxd"){
                category_id = 2
            }else {
                category_id = 4
            }
        }
        return category_id

    }

    createTeam(e) { //verifica {team} e invoca la funcion create() del parent, con parametro teamData
        e.preventDefault();
        let codigo = this.refs.codigo.value;
        let name = this.refs.name.value;
        let ath1 = this.refs.ath1.value;
        let ath2 = this.refs.ath2.value;
        let box = this.refs.box.value;
        let category_id = this.getCategoryId()
        
        if (name == "" || ath1== "" || ath2== "" )  {
            this.setState({error:"Revisá los campos. Hay un error en ellos." })

        }else {       
            this.setState({error: null })
            const teamData = {
                codigo,
                name, 
                ath1,
                ath2,
                box,
                category_id,
                
            }
            this.props.create(teamData); //invoca método del parent component
            this.setState(this.state)
    
            //RESETEAMOS EL VALUE DE LOS INPUTS
            this.refs.codigo.value = "";
            this.refs.name.value = "";
            this.refs.ath1.value = "" ;
            this.refs.ath2.value = "" ;
            this.refs.box.value = "" ;
        }      
    }
    render ()   {
        
        return <div>
            <form id="registerTeam">
              <div className="radioTeam">
                <div>
                  <label htmlFor="gender">Sexo</label>
                </div>
                <input type="radio" name="gender" value="male" /> Masculino<br />
                <input type="radio" name="gender" value="female" /> Femenino
              </div>
              <div className="radioTeam">
                <div>
                  <label htmlFor="categroy">Nivel</label>
                </div>
                <input type="radio" name="category" value="rxd" /> RXD<br />
                <input type="radio" name="category" value="scaled" /> Scaled<br />
              </div>
              <div>
                <input type="text" ref="codigo" placeholder="Código" />
                <input type="text" ref="name" placeholder="Nombre del Equipo" />
                <input type="text" ref="ath1" placeholder="Atleta #1" />
                <input type="text" ref="ath2" placeholder="Atleta #2" />
                <input type="text" ref="box" placeholder="Box" />
              </div>
              <Btn text="Crear Equipo" funcion={this.createTeam.bind(this)} />
              <p id="error"> {this.state.error} </p>
            </form>
          </div>;
    }
}
