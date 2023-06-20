import { useState, useEffect } from 'react'
import Product from './Product'
import ProductStore from '../stores/ProductStore'

const store = new ProductStore()

const VendingMachine = () => {
    const [products, setProducts] = useState([])
    const [tokens, setTokens] = useState(0)

    const addToken = () => {
        setTokens(tokens + 1)
    }

    const buyProduct = (price) => {
        if (tokens >= price) {
            setTokens(tokens - price)
        }
    }

    useEffect(() => {
        setProducts(store.getAll())
    }, [])

    return (
        <div>
            {products.map((el, index) => 
                <Product key={index} name={el.name} price={el.price} onBuy={buyProduct}  />
            )}
            <div>Tokens: {tokens}</div>
            <button onClick={addToken}>add token</button>
        </div>
    )
}

export default VendingMachine