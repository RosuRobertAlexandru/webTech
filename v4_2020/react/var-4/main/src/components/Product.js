import React, { Component } from 'react'

class Product extends Component {

    render(){
        let {item} = this.props
        return (
            <div>
                  {item.name}
                  <button value="buy" onClick={this.props.onBuy} />     
            </div>
        )
    }
}

export default Product