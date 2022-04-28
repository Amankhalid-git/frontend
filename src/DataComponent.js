import React from "react";
import {useSelector} from "react-redux";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";


const columns = [
    { field: 'id', headerName: 'ID', width: 110 },
    { field: 'userId', headerName: 'UserId', width: 110 },
    { field: 'title', headerName: 'Title', width: 800 },
    { field: 'completed', headerName: 'Completed', width: 100 }
  
  ];

const DataComponent = ()=>{
    const products = useSelector((state)=> state.allProducts.products);


return(

 <div style={{ height: 1400, width: '100%' }}>
                    <DataGrid
                        rows={products}
                        columns={columns}
                         />
                </div>



);

};
   


export default DataComponent;