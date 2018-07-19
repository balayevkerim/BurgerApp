import React, { Component } from 'react';
import Aux from '../../hoc/Aux.js';
import './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    closeSideDrawer = () =>{
        this.setState({showSideDrawer: false})
    }

    drawerToggle =() =>{
        this.setState((prevState) =>{
           return  {showSideDrawer:!this.state.showSideDrawer}
        })
    }
    render() {
        return (
            <Aux>
                <Toolbar openDrawer={this.drawerToggle}/>
                <SideDrawer
                open={this.state.showSideDrawer}
                closed ={this.closeSideDrawer} />
                <main className="Content">{this.props.children} </main>

            </Aux>
        )
    }
}

export default Layout