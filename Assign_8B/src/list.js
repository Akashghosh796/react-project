import React, {Component} from 'react';
import './main.css'

class List extends Component{
    render() {
        return (<div>
            {this.props.itemList.map((item,index) => 
                <div className='recipes' key={index}>
                    <div className='desp'>{item.Item}</div>
                    <div className=''>Description: {item.Description}</div>
                    <div className=''>Ingrediants: 
                        <ol>
                            {item.Ingrediants.map(ingrediant => (
                                <li key={ingrediant}>{ingrediant}</li>
                            ))}
                        </ol>
                    </div>
                    <div className=''>Steps: {item.Steps}</div>
                    <button onClick = {() => this.props.onRemoveRecipe(item.id)}>Delete</button>
                </div> 
            )}
            </div>);
    }
}

export default List;