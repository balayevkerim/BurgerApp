import React from 'react'
import './CheckoutSummary.css'
import Burger from '../Burger/Burger'

const checkoutSummary = (props) => (

    <div className="CheckoutSummary">
        <h1> I hope it tastes well </h1>
        <div style={{width: "100%", margin:"auto"}}> 
            <Burger ingredients ={props.ingredients} />
        </div>
        
            <button className="Button Danger" onClick={props.cancel}> Cancel</button>
            <button className="Button Success" onClick ={props.continue}> Continue</button>
       


    </div>
)

export default checkoutSummary;