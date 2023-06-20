const Product = (props) => {
    const { name, price, onBuy } = props
    return (
        <div>
             <div>Name:</div>
            <div>{name}</div>
            <div>Price:</div>
            <div>{price}</div>
            <button onClick={() => onBuy(price)}>buy</button>
        </div>
    )
}

export default Product