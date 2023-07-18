import React from 'react'
import {BrowserRouter as  Router,Routes, Route, Link} from "react-router-dom";

const ProductFilter = () => {
    return(
        <div className='filterssection'>
        
        <div className='filter'>
        <Link to="mens"><a>Men's</a></Link>
        </div>
        <div className='filter'>
        <Link to="womens">Women's</Link>
        </div>
        <div className='filter'>
        <Link to="jewelary">Jewelary</Link>
        </div>
        <div className='filter'>
        <Link to="electronics">Electronics</Link>
        </div>
        
      
        </div>
    )
}

export default ProductFilter;