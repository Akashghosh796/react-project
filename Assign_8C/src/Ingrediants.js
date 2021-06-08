import React, {Component} from 'react';
import './main.css'

class Ingrediants extends Component{
    render(){
        return (<ul>
            {this.props.itemList1.map((item,index) => 
                <div class ='row' key={index}>
                    <div className='desp'>Ingrediants: 
                        <ol>
                            {item.Ingrediants.map(ingrediant => (
                                <li key={ingrediant}>{ingrediant}</li>
                            ))}
                        </ol>
                    </div>
                </div>)}
            </ul>);
    }
}

export default Ingrediants;