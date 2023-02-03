import React, { Component } from 'react'
import Product from './Product'
import ProductStore from '../stores/ProductStore'

class VendingMachine extends Component {
    constructor() {
        super()
        this.state = {
            products: [],
            tokens: 0
        }
        this.addToken = () => {
            let oldTokens=this.state.tokens;
            oldTokens=oldTokens+1;
            this.setState({
                tokens: oldTokens
            })
        }

        this.buyProduct = (price) => {
           if(this.state.tokens>=price){
               let oldTokens=this.state.tokens;
               oldTokens=oldTokens-price;
               this.setState({
                   tokens: oldTokens
               })
           }
        }
    }
    componentDidMount(){
		this.store = new ProductStore()
		this.setState({
			products:  this.store.getAll()
		})
	}
    render() {
        return (
            <div>
                {this.state.products.map((el, index) => 
                <Product key={index} item={el} onBuy={()=>{this.buyProduct(el.price)}}  />)}
                <div>Tokens: {this.state.tokens}</div>
                <input type="button" value="add token" onClick={this.addToken} />
            </div>
        )
    }
}

export default VendingMachine