import React, { Component } from 'react';
import '../../index.css';
import '../../App.css';
import Btn from '../Btn';
import List from '../List';
import EventScores from '../EventScores';
import EventsAdmin from '../EventsAdmin';
import EventMenu from '../EventMenu';
import axios from 'axios';

class EventsDash extends Component {
    constructor(props){
        super(props)
       
        this.state= {
        
            section: 0
            
        }
    }

    backToThis() {
        this.setState({
          section : 0
        })
      }
    scoresSection() {
        this.state.section == 1 ? this.setState({section:0}): this.setState({section: 1})
      }
      eventAdminSection() {
        this.state.section == 2 ? this.setState({section:0}): this.setState({section: 2})
      }



    render(){
        return <div className="section">
            <div>
              <Btn text="Administrar Eventos" class="btn btn_section" funcion={this.eventAdminSection.bind(this)} />
              <Btn text="Cargar Resultados" class="btn btn_section" funcion={this.scoresSection.bind(this)} />
            </div>
            <div className="Ev_section">
              {(() => {
                switch (this.state.section) {
                  case 1:
                    return <EventMenu backToApp={this.backToThis.bind(this)} />;
                    break;
                  case 2:
                    return <EventsAdmin />;

                    break;
                  default:
                    return null;
                }
              })()}
            </div>
          </div>;

    }
}

export default EventsDash