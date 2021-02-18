import React from 'react'

const Product = ({ product }) => {
    const { image, name, style, price } = product;
    return (
        <div className='product'>
            <img className='product-img' src={image} alt={name}/>
            <h3 className='product-name'>{name}</h3>
            <h4 className='product-style'>{style}</h4>
            <p className='product-price'>£{price}</p>
        </div>
    )
}

export default Product;
