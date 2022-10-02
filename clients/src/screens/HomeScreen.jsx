import React from 'react';
import Product from '../components/Product';
import products from '../products';

const HomeScreen = () => {
  return (
    <div>
    <div className='row justify-content-center'>
    {products.map(product => {
     return <Product product={product} /> 
    })}
     </div>
    
    </div>
  )
}

export default HomeScreen