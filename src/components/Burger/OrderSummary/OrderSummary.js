import React from 'react';

import Aux from '../../../hoc/Aux'
import './OrderSummary.css'

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return <li>
        <span style={{textTransform:"capitalize"}}> {igKey} </span>: {props.ingredients[igKey]}
        </li>
    })
    return (
        <Aux>
            <h3>Your Order </h3>
            <p> A delicious burger with following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p> <strong>Total Price: {props.price} $ </strong></p>
            <p> Continue to checkout?</p>

            <button onClick ={props.cancelled} className="Button Danger"> CANCEL </button>
            <button className="Button Success" onClick={props.continued}> CONTINUE </button>
        </Aux>
    )

}

export default orderSummary;