import React, {Component} from 'react'
import Team from '../Team'
// import Btn from '../Btn'


export default class List extends Component {
    constructor(props){
        super(props)
        this.createTasks = this.createTasks.bind(this);
        this.delete = this.delete.bind(this);
    }

  createTasks(item) {
    
      return  <div key={item.key}> 
                <Team  texto={item}/>
                {/* <button  onClick={()=> this.delete(item.key)}>Borrar</button> */}
              </div>
  } 
  delete(key) {
    this.props.delete(key);
  }
  render() {
    var todoEntries = this.props.entries;
    var teamList = todoEntries.map(this.createTasks);

 
    return (
      <ul className="theList">
          {teamList}
      </ul>
    );
  }

    
}
// {/* <li onClick={() => this.delete(item.key)} 
//               key={item.key}><h1> {item.text[0]} </h1>
//               <p>{item.text[1]} <br/> {item.text[2]} <br/>{item.text[3]}</p></li>
//      */}