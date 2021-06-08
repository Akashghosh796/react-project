import React, {Component} from 'react';
import './main.css'

class Steps extends Component{
    render(){
        return (<ul>
            {this.props.itemList2.map((item,index) => 
                <div class ='row' key={index}>
                   <div className='desp'>Steps: {item.Steps}</div>
                </div>)}
            </ul>);
    }
}

export default Steps;