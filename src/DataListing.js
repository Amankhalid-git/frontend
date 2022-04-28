import React, { useEffect } from "react";
import axios from "axios"
import {useDispatch} from "react-redux";
import DataComponent from "./DataComponent";
import {setProducts} from "./redux/actions/productActions"

const DataListing = ()=>{
const dispatch = useDispatch();

    const fetchProducts = async () =>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
        .catch((err) => {
            console.log("Err", err);
        });
        dispatch(setProducts(response.data));
    };
     
useEffect(()=>{
 fetchProducts();
},[]);

 return(
     <div>
         <DataComponent/>
     </div>
 );
};

export default DataListing;