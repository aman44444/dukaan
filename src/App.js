import React from "react";
import './App.css'
import Header from './components/Header';
import {BrowserRouter as  Router,Routes, Route, Link} from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";

import Mens from "./components/Mens";
import ProductFilter from "./components/ProductsFilters";
import Electronics from "./components/Electronics";
import Jewelary from "./components/Jewelary";



export default function App() {
  return (
    <div>
      <Router>
      <Header/>
      <ProductFilter/>
      <Routes>
      <Route path="/" exact element={ <ProductListing/> }/>
      <Route path="/all" exact element={ <ProductListing/> }/>
      <Route path="/product/:productId" exact element={ <ProductDetail/> }/>
       <Route path="/mens" element={ <Mens/>}/>
       <Route path="/jewelary" element={ <Jewelary/>}/>
       <Route path="/electronics" element={ <Electronics/>}/>
      <Route>404 Not Found</Route>
      </Routes>
      
      </Router>
    </div>
  );
}

