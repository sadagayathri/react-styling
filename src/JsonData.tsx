import React from 'react'
import {useEffect} from "react"
import { DataGrid } from '@mui/x-data-grid'
import Checkbox from '@mui/material/Checkbox';
import DataTree from './DataTree';
import { useNavigate } from 'react-router-dom';
function JsonData(){
    const [posts,setPosts]=React.useState([])
    const navigation=useNavigate();
    useEffect(()=>{
        if(localStorage.getItem("name")){
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res=>res.json())
            .then(data=>setPosts([...data]))
        }
        else{
        navigation("/userdata")
        }
        
        
    },[])
   const departments= [
        {
          "department": "customer_service",
          "sub_departments": [
            "support",
            "customer_success"
          ]
        },
        {
          "department": "design",
          "sub_departments": [
            "graphic_design",
            "product_design",
            "web_design"
          ]
        },
        {
            "department": "technologies",
            "sub_departments": [
              "C++",
              "javascript",
              "react"
            ]
          }
      ]
    
    return (
        // <div>JsonData</div>
        <>{
            posts.map((a)=>{
                console.log(a)
            })
        }
        
        {
            departments.map((a)=>{
                return <DataTree department={a}></DataTree>
            })
        }
        
        <DataGrid 
        columns={[{ field: 'id' }, { field: 'title' },{ field: 'body' }]}
        rows={[...posts]}
        />
    
        

        </>
        
    
    )
}
export default JsonData