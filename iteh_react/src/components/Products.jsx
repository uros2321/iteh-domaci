import React from 'react'
import Product from './Product'

function Products({products, addFavorites, removeFavorite}){
    return (
        <div className='products'>
            {products.map((product)=>(
                <Product product={product} addFavorites={addFavorites} removeFavorite={removeFavorite}/>
            ))}
        </div>
    )
}

export default Products