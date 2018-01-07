import React, {Component} from 'react'
import Team from '../Team'
import '../../App.css';


export default class List extends Component {
    constructor(props){
        super(props)
        this.createTasks = this.createTasks.bind(this);
        this.delete = this.delete.bind(this);
    }

  createTasks(item) {
     console.log(item)
      return <li key={item.id}>
                <div className="cell" id="category">{item.category}</div>
                <div className="cell" id="eventNumber">{item.eventNumber}</div>
                <div className="cell" id="name">{item.name}</div>
                <div className="cell" id="wod">{item.wod}</div>
                <div className="cell" id="type">{item.midePor}</div>
                <div className="cell" id="tiebreak">{item.tiebreak}</div>
                <div className="cell" id="tiebreak">{item.qTiebreaks}</div>
             </li>
      
  } 
  delete(key) {
    this.props.delete(key);
  }
  render() {
    var entries = this.props.entries;
    var list = entries.map(this.createTasks);

    return (
      <ul className="theList">
          {list}
      </ul>
    );
  }

    
}