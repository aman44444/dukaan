import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import {setProducts} from'../redux/actions/productAction';





const ProductListing = () => {

    // const [Filters, setFilters] = useState({
    //     cotegories: [],
    //     price: []
    // })
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log('errr',err)
        });
        dispatch(setProducts(response.data));
    }
    
    useEffect(() => {
        fetchProducts();
    },[])

    console.log("Products: ",products);

    // const showFilteredResults = (filters) => {
    //     if()
    // }

    // const handleFilters = (filters,category) => {
    //  console.log(filters)
    //  const newFilters = { ...Filters}

    //  newFilters[category] = filters

    //  if(category === 'price') {

    //  }

    //  showFilteredResults(newFilters)
    //  setFilters(newFilters)
   

    return(
        <div className='ui grid container'>
         {/* <CheckBox  handleFilters={filters => handleFilters(filters, "categories")}/> */}
        <ProductComponent/>
        
    </div>)
}

export default ProductListing;