import React from 'react';
import './BuildControls.js';
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
   {label: 'Salad', type: 'salad'},
   {label: 'Meat', type: 'meat'},
   {label: 'Bacon', type: 'bacon'},
   {label: 'Cheese', type: 'cheese'},
]; 

const buildControls = (props) =>(
    <div className="BuildControls"> 
    <p> Current price: {props.price.toFixed(2)} $ </p>
        {controls.map(ctrl => {
              return <BuildControl 
              label={ctrl.label}
               key={ctrl.label}
               added ={() =>props.addedIngredient(ctrl.type)}
               removed ={() =>props.removedIngredient(ctrl.type)} />
        })}

        <button className="OrderButton" onClick={props.modalShow}> ORDER NOW</button>

    </div>
)

export default buildControls