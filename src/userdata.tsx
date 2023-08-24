import React from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Userdata = () => {
    const [name,setName]=React.useState("")
  const [phonenumber,setPhonenumber]=React.useState("")
  const [email,setEmail]=React.useState("")
  const Navigate = useNavigate();
  
  function save(){
    
    window.localStorage.setItem("name",name)
    window.localStorage.setItem("phonenumber",phonenumber)
    window.localStorage.setItem("email",email)
    if(localStorage.getItem("name"))
    Navigate('/jsondata');
  }


  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
  <Grid item xs={12}>
    <Item><TextField id="outlined-basic" label="Name" variant="outlined"  onChange={(event)=>{setName(event.target.value)}} /></Item>
    <Item><TextField id="outlined-basic" label="PhoneNumber" variant="outlined"  onChange={(event)=>{setPhonenumber(event.target.value)}} /></Item>
    <Item><TextField id="outlined-basic" label="Email" variant="outlined"  onChange={(event)=>{setEmail(event.target.value)}} /></Item>
  </Grid>
  <Grid item xs={12}>
    <Item><button onClick={save}>Save</button></Item>
  </Grid>
 
</Grid>
</Box>

   </>
  )
};

export default Userdata;