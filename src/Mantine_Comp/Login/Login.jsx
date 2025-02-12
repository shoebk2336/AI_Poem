import {
  Anchor,
  Box,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import classes from './Login.module.css'
import { useState } from 'react';
import { Demo } from '../Notification/Notification';
import { AnimatedCircularProgressBarDemo } from '../Progress_bar/Progress';
import { useNavigate } from 'react-router-dom';


export function AuthenticationTitle() {
  const navigate=useNavigate()
  const [Login_Data,setLogin_Data]=useState({})
  const[Notify,set_Notify]=useState(false)
  const [Loading,set_Loading]=useState(false)
  // console.log(Login_Data,'login data')

  const Handle_Change=(e)=>{
    
    const{name,value}=e.target
    setLogin_Data((data)=>({
      ...data,[name]:value
    }))

  }

  const Signin=()=>{
    set_Loading(true)
    console.log(Login_Data)
    localStorage.setItem("user", JSON.stringify(Login_Data));
    setTimeout(()=>{set_Loading(false)},3000)
    setTimeout(() => {
      set_Notify(true);
      setTimeout(() => {
        set_Notify(false); // Turns off after 2 seconds
      }, 2000);
    }, 3000);
    
    setTimeout(()=>{navigate('/')},3500)
  }
  return (
    
    <Container size={620} my={40} style={{border:"0px solid red",width:"500px"}}>
      <Box style={{position:"absolute",right:20,top:0,width:"25%"}}>
      {Notify?<Demo/>:null}
      </Box>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>
      {/* <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor size="sm" component="button">
          Create account
        </Anchor>
      </Text> */}

      <Paper withBorder shadow="md" p={30} mt={30} radius="md" ta="left">
      <TextInput 
        name="name"
        value={Login_Data.name}
        onChange={(e)=>Handle_Change(e)}
        label="Name" placeholder="AAFREEN AJAZ PATHAN" required />
        <TextInput 
        name="email"
        value={Login_Data.email}
        onChange={(e)=>Handle_Change(e)}
        label="Email" placeholder="you@pulse.dev" required mt={"5px"} />
        <PasswordInput 
        name="pass"
        value={Login_Data.pass}
        onChange={(e)=>Handle_Change(e)}
        label="Password" placeholder="Your password" required mt="md" />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button
        disabled={Loading}
        onClick={Signin}
        fullWidth mt="xl">
          Sign in
        </Button>
        {Loading?<Box style={{border:"0px solid red",display:"flex",justifyContent:"center",margin:"auto",aspectRatio:1,
          width:"20%"
        }}>
        <AnimatedCircularProgressBarDemo/>
        </Box>:null}
      </Paper>
    </Container>
  );
}