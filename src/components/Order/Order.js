import React from 'react'
import './Order.css'

const order = (props) => {
    const ingredients = [];

    for(let ingredientName in props.ingredients){
        ingredients.push({
            name: ingredientName,
            amount:props.ingredients[ingredientName]
        })
    }


    const igOutput = ingredients.map(ig =>{
        return <span>{ig.name} <strong>({ig.amount}) </strong> </span>
    })
    return (
        <div className="Order">
            <p>Ingredients: {igOutput}  </p>
            <p> Price {props.price.toFixed(2)} $</p>
        </div>
    )
}


export default order