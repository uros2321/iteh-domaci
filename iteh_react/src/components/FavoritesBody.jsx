import React from 'react'
import Product from './Product'

function FavoritesBody({products, removeFavorite}){
    return (
    <div className="favorites-body">
            <div className='upperFav'>
                <h1 className='upperText'>  Sačuvani proizvodi  </h1>
            </div>  
            <div className='favProducts'>
                {products.map((product)=>(
                <Product product={product} key={product.id} removeFavorite={removeFavorite}/>
                ))}
            </div>
    </div>

    )
}

export default FavoritesBody