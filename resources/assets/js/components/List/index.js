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
      return  <div key={item.team_id}> 
                <Team className="team" texto={item}/>
              </div>
  } 
  delete(key) {
    this.props.delete(key);
  }
  render() {
    var entries = this.props.entries;
    var teamList = entries.map(this.createTasks);

    return (
      <ul className="theList">
          {teamList}
      </ul>
    );
  }

    
}
