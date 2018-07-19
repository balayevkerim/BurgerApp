import React from 'react'
import './Button.css'

const button =(props) =>(
        <div> 
            <button className ="Button Success" onClick ={props.clicked}> {props.children}</button>
        </div>
);

export default button