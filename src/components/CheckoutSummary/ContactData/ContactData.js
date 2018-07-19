import React, { Component } from 'react'
import './ContactData.css'
import Button from '../../UI/Button/Button'
import axios from '../../../axios-orders'
class ContactData extends Component {

state ={
    loading:false,
    name: '',
    email: '',
    address:{
        street: '',
        postalCode: ''
    }
}

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true })
        const orders = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: "Kerim Balayev",
            email: "balayevkerim@gmail.com",
            phoneNumber: "+36205069654",
            address: {
                street: "Hadhazi str 47",
                city: "Debrecen",
                zipCode: 4029,
                country: "Hungary"
            }
        } 

        axios.post('/orders.json', orders)
        .then(response => this.setState({ loading: false}))
        .catch(this.setState({ loading: false }))
     
 // console.log(this.props.ingredients)
}

    render() {
        return (
            <div className="ContactData">
                <h1> Enter your contact details </h1>
                <form>
                    <input className="Input" type="text" name="name" placeholder="Your Name" />
                    <input className="Input" type="email" name="name" placeholder="Your Email" />
                    <input className="Input" type="text" name="street" placeholder="Street" />
                    <input className="Input" type="text" name="postalCode" placeholder="Postal Code" />

                    <Button clicked={this.orderHandler}> ORDER</Button>
                </form>
            </div>
        )
    }
}
export default ContactData