import React from 'react'
import {useEffect} from "react"
import { DataGrid } from '@mui/x-data-grid'
function JsonData(){
    const [posts,setPosts]=React.useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>setPosts([...data]))
    },[])
    return (
        // <div>JsonData</div>
        <>{
            posts.map((a)=>{
                console.log(a)
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