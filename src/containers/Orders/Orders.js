import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import axios from '.././../axios-orders'

class Orders extends Component {
    state ={
        order: [],
        loading: true
    }
    componentDidMount(){
        axios.get('orders.json').then(res =>{
                const fetchedOrders = [];
            for(let i in res.data){
                fetchedOrders.push({
                    ...res.data[i],
                    id: i
                });
            }
            this.setState({loading:false, order:fetchedOrders})
        }).catch(

                this.setState({loading:false})
        )
    }

    render() {
        return (
            <div>
                    {this.state.order.map(order =>(
                        <Order 
                        i={order.id}
                        ingredients = {order.ingredients}
                        price= {+order.price}
                         />
                    ))}

            </div>
        )
    }
}

export default Orders