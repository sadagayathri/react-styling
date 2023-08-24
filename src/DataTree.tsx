import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import {useEffect} from "react"

export default function DataTree(props) {
    console.log(props)
  const [checked, setChecked] = React.useState([false, false]);

  useEffect(()=>{
    console.log(props.department)
   const temp:boolean[] = props.department?.sub_departments.map(()=>{
    return false
   })
   console.log(temp)
   setChecked([...temp])
  },[props.department])



  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    let temp:boolean[]
     if(event.target.checked){
         temp=checked.map(()=>{
             return true
         })
     }
     else{
        temp=checked.map(()=>{
            return false
         }) 
    }
     setChecked([...temp])
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>,i:number) => {
    const temp:boolean[]=[...checked]
    temp[i]=event.target.checked;
    setChecked([...temp])
  };

  
  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
        {
            checked.map((a,i)=>{
                return (
                    <FormControlLabel
                        label={props.department.sub_departments[i]}
                        control={<Checkbox checked={checked[i]} onChange={(event)=>{handleChange2(event,i)}} />}
                     />
                )
            })
        }
           
      {/* <FormControlLabel
        label="Child 1"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Child 2"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      /> */}
    </Box>
  );

  return (
    <div>
        
      <FormControlLabel
        label={props.department.department}
        control={
          <Checkbox
            indeterminate={checked.some((a)=>a===true)&& !checked.every((a)=>a===true)}
            checked={checked.every((a)=>a===true)}
            onChange={handleChange1}
          />
        }
      />
      {children}
    </div>
  );
}