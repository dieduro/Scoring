import React from "react";
import Btn from "../Btn";
import "../../index.css";
import "../../App.css";

export default class CreateTeamForm extends React.Component {
    constructor(props) {
        super(props);
        this.tiebreakHandler = this.tiebreakHandler.bind(this);
        this.timeCapHandler = this.timeCapHandler.bind(this);
        this.state = {
        error: null,
        hasTiebreak:false,
        timeType: false
        };
    }
    tiebreakHandler() {
            const tiebreak = document.querySelector('input[name="tiebreak"]');
            if (tiebreak.checked) {
                this.setState({hasTiebreak:true})
            } else {
                this.setState({ hasTiebreak: false })
            }
    }
    timeCapHandler() {
          const typeSelect = document.querySelector('select[name="midePor"]');
          const type = typeSelect.options[typeSelect.selectedIndex].value;
          if (type == 'time') {
            this.setState({ timeType: true });
          } else {
            this.setState({ timeType: false });
          }
    }

    createEvent(){
        let category_id = this.refs.category.value;
        let eventNumber = this.refs.eventNumber.value;
        let name = this.refs.name.value;
        let wod = this.refs.wod.value;
        let tiebreakCheck = document.querySelector('input[name="tiebreak"]');
        let tiebreak
        let timeCap;
        let qTiebreaks = 0;
        if (tiebreakCheck.checked) {
          tiebreak = 1;
        } else {
          tiebreak = 0;
        }
        if (tiebreak == "Sí") {
          qTiebreaks = this.refs.qTiebreaks.value;
          if (!qTiebreaks) {
            qTiebreaks = 1;
          }
        }
        if (this.state.timeType){
          timeCap = this.refs.timeCap.value;
          
        }
        let midePor = this.refs.midePor.value;
        const event = { category_id, eventNumber, name, wod, tiebreak, qTiebreaks, midePor, timeCap };
        console.log(event)
        this.props.storeEvent(event)
        this.refs.category.value= 0;
        this.refs.eventNumber.value = 0;
        this.refs.name.value = "";
        this.refs.wod.value = "";
        tiebreakCheck.checked = false
    }


  
  render() {
    return <div>
        <form className="eventForm" action="">
          <div className="eventFormField">
            <label htmlFor="category">Categoría</label>
            <select className="input" name="category" id="category" ref="category">
              <option value="0">Seleccione Categoría</option>
              <option value="1">Hombres RXD</option>
              <option value="2">Mujeres RXD</option>
              <option value="3">Hombres Scaled</option>
              <option value="4">Mujeres Scaled</option>
            </select>
          </div>
          <div className="eventFormField">
            <label htmlFor="eventNumber">Evento Nº</label>
            <select className="input" name="eventNumber" id="eventNumber" ref="eventNumber">
              <option value="0">--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">Final</option>
            </select>
          </div>
          <div className="eventFormField">
            <label htmlFor="name">Nombre del Evento</label>
            <input className="input" type="text" ref="name" placeholder="Nombre del Evento" />
          </div>
          <div className="eventFormField">
            <label htmlFor="wod">Descripción del Wod</label>
            <textarea className="input" name="wod" id="wod" cols="40" rows="2" ref="wod" placeholder="Descripción del WOD" />
          </div>
          <div className="eventFormField">
            <label htmlFor="tiebreak">Tiebreaks?</label>
            <input className="input" type="checkbox" ref="tiebreak" onChange={this.tiebreakHandler} name="tiebreak" id="tiebreakCheck" value="Sí" />
          </div>
          {this.state.hasTiebreak && <div className="qtiebreaks">
              <label htmlFor="qTiebreaks">¿Cuántos?</label>
              <input type="number" ref="qTiebreaks" name="qTiebreaks" id="qTiebreaks" min="1" max="5" />
            </div>}
          <div className="eventFormField">
            <label htmlFor="midePor">Mide por:</label>
            <select className="input" name="midePor" id="midePor" ref="midePor" onChange={this.timeCapHandler}>
              <option value=""> -- </option>
              <option value="time">Tiempo</option>
              <option value="reps">Reps</option>
              <option value="weight">Peso</option>
            </select>
            {this.state.timeType && <div className="timeCap">
                <label htmlFor="timeCap">Time Cap: </label>
                <input type="number" ref="timeCap" name="timeCap" id="timeCap" min="1" max="60" />
              </div>}
          </div>
          <div className="submitEvent">
            <Btn text="Guardar Evento" funcion={this.createEvent.bind(this)} />
          </div>
        </form>
      </div>;
  }
}
