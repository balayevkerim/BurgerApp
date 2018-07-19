import React from 'react';
import './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
const toolbar = (props) => (
    <header className="Toolbar">
        <div onClick={props.openDrawer} className="DrawerToggle">
            <div></div>
            <div></div>
            <div></div>
        </div>
            <Logo height ="80%"/>

        <nav className="Desktop">
            <NavigationItems />
        </nav>

    </header>
)

export default toolbar;