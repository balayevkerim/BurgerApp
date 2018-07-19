import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'


const INGREDIENT_PRICES = {
    salad: 0.5,
    meat: 1.4,
    cheese: 0.3,
    bacon: 1

}
class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 4,
        purchasing: false,
        loading: false
    }

    componentDidMount() {
        axios.get('https://react-burger-46bc4.firebaseio.com/ingredients.json').then(response => {
            this.setState({ ingredients: response.data })
        })
    }
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCount;
        const price_for_type = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + price_for_type;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredient })


    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCount;
        const price_for_type = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - price_for_type;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredient })

    }
    modalShowHandler = () => {
        this.setState({ purchasing: true })
    }
    canceledPurchase = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinued = () => {


        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        //queryParams.push('price =' + this.state.totalPrice)
        const queryString = queryParams.join('&')
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        })
    }

    render() {
        let orderSummary = null;


        let burger = <Spinner />
        if (this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        addedIngredient={this.addIngredientHandler}
                        removedIngredient={this.removeIngredientHandler}
                        price={this.state.totalPrice}
                        modalShow={this.modalShowHandler} />
                </Aux>
            );
            orderSummary = <OrderSummary
                ingredients={this.state.ingredients}
                cancelled={this.canceledPurchase}
                continued={this.purchaseContinued}
                price={this.state.totalPrice.toFixed(2)} />
        }
        if (this.state.loading) {
            orderSummary = <Spinner />
        }
        return (
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.canceledPurchase} >
                    {orderSummary}
                </Modal>
                {burger}


            </Aux>
        )
    }
}

export default BurgerBuilder