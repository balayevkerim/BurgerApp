import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
const navigationItems = (props) => (

    <ul className="NavItems">
        <NavigationItem exact link="/"> Burger  </NavigationItem>
        <NavigationItem link="/orders"> Orders</NavigationItem>

    </ul>
);

export default navigationItems   