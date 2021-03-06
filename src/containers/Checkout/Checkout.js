import React, { Component } from 'react'
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'
import ContactData from '../../components/CheckoutSummary/ContactData/ContactData'
import {Route} from 'react-router-dom'
class Checkout extends Component {
    state ={
        ingredients:null,
        price: 0
    }
    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients ={};
        let price = 0; 
        for( let param of query.entries()){
            if(param[0]==='price'){
                price = param[1]
            }
            else{
                
            ingredients[param[0]] =  +param[1]
            }
        }

        this.setState({ingredients:ingredients,totalPrice:price })
    }

    cancelOrder =() =>{
         this.props.history.goBack('/')
    }
    continueOrder = () =>{
        this.props.history.replace('/checkout/contact-form')
        
    }
    render() {
        return (
            <div>
                    <CheckoutSummary 
                    ingredients ={this.state.ingredients} 
                    cancel={this.cancelOrder}
                    continue = {this.continueOrder}/>
                    <Route 
                    path={this.props.match.url + '/contact-form'}
                     render ={() => (<ContactData ingredients={this.state.ingredients} price ={this.state.totalPrice} />)} />
                    
            </div>
        )
    }
}

export default Checkout