import React, { Component } from 'react';
import './main.css';

class Headings extends Component{
    render(){
        return (<ul>
            {this.props.itemList.map((item,index) => 
                <div class ='row' key={index}>
                    <div className='recipes'>{item.Item}</div>
                    <div className='desp'>Description: {item.Description}</div>
                </div>
            )}
        </ul>);
    }        
}

export default Headings;