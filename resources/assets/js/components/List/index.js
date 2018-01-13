import React, {Component} from 'react'
import Team from '../Team'
import Event from '../Event'
import '../../App.css';


export default class List extends Component {
    constructor(props){
        super(props)
        this.createTasks = this.createTasks.bind(this);
        
      }
      
      
      createTasks(item) {
       
        switch (this.props.itemType) {
          case 'event':
          
          return (<li key={item.id}>
            <Event data={item}/>
      </li>) 
          
        break;
        case 'team' :
        console.log('teaaammmsmsmsmisnin')
        return(  
        <li key={item.id}>
                  <Team data={item}/>
        </li> )
        break
        default:
        return null   
      }
    }

    render() {
      var entries = this.props.entries;
      var list = entries.map(this.createTasks);
    return (
      <ul className="theList" id="list">
          {list}
      </ul>
    );
  }

    
}