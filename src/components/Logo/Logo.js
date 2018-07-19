import React from 'react'
import './Logo.css'
import burgerLogo from '../../assets/burger-logo.png'
import { Link } from 'react-router-dom'
const logo = (props) => (

    <div className="Logo" style={{ height: props.height }}>
        <Link to="/"> <img src={burgerLogo} alt="BurgerLogo"/> </Link>
    </div>
)
export default logo