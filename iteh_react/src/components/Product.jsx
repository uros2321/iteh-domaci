import React from 'react'
import {GrFavorite} from 'react-icons/gr'
import Navbar from './Navbar'
import {MdFavorite} from 'react-icons/md'


function Product({product, addFavorites, removeFavorite}){
    
    return (
        <div className='product'>
            <img src={product.img} alt="" className='image' />
            <p className='name'>{product.name}</p>
            <p className='price'>Cena: {product.price}</p>
            {product.favorite===false ? (<button className='save' onClick={()=>addFavorites(product.id)}><GrFavorite/></button>)
             : (<button className='unsave' onClick={()=>removeFavorite(product.id)}><MdFavorite/></button>)}
        </div>
    )
}

export default Product