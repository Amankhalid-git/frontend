import  { useState, useEffect } from 'react'
import * as React from 'react';
import axios from './axios.js'
import { DataGrid } from '@mui/x-data-grid';

    const columns = [
        { field: 'id', headerName: 'ID', width: 110 },
        { field: 'userId', headerName: 'UserId', width: 110 },
        { field: 'title', headerName: 'Title', width: 800 },
        { field: 'completed', headerName: 'Completed', width: 100 }
      
      ];

       function DataTable() {
        const [people, setPeople] = useState([]); 
            
        useEffect(() => {
        async function fetchData(){                     
            const req= await axios.get("/todos");
    
            setPeople(req.data)
        }
    
        fetchData();
        }, [])
        return (
            <div style={{ height: 700, width: '100%' }}>
                    <DataGrid
                        rows={people}
                        columns={columns}
                         />
                </div>
               
        );}

        export default DataTable;
