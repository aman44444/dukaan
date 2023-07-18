import React from 'react';
import {BrowserRouter as  Router,Routes, Route, Link} from "react-router-dom";
const Header = () => {
    return (
        <div className='ui fixed menu'>
            <div className='ui container center'>
              <Link to='all'>  <h2><a>Fake</a>Shop</h2></Link>
            </div>
        </div>
    )
};

export default Header;