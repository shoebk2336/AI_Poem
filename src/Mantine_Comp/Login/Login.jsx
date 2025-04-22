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
  const [is_reg,Set_reg]=useState(false) //to switch into registeration
  console.log(is_reg,Login_Data,'login data')

  const Handle_Change=(e)=>{
    
    const{name,value}=e.target
    setLogin_Data((data)=>({
      ...data,[name]:value
    }))

  }
  const Login_User=async()=>{

    const Fetch=await fetch('http://localhost:5000/api/items/login')
    const Data=await Fetch.json()
    console.log("Data",Data)




    console.log("login clicked")
    const Reg_users=JSON.parse(localStorage.getItem('Registration'))
    const {email,pass}=Login_Data


    for(let i=0;i<Data.length;i++){
      if(email==Data[i].email && pass==Data[i].pass){
      setTimeout(()=>{set_Loading(false)},3000)
      setTimeout(() => {
      set_Notify(true);
      setTimeout(() => {
      set_Notify(false); // Turns off after 2 seconds
      }, 2000);
    }, 3000);
    localStorage.setItem("user",JSON.stringify(Login_Data))
    
    setTimeout(()=>{navigate('/')},3500)
    return
        
      }
    }
    setTimeout(()=>{set_Loading(false)},2000)
    setTimeout(()=>{alert("Email OR Password is wrong")},2100)
     

  }

  const Register_User=async()=>{
    // console.log("register clicked")
    // const Registration_arr=JSON.parse(localStorage.getItem('Registration'))||[]
    // Registration_arr.push(Login_Data)
    // localStorage.setItem("Registration", JSON.stringify(Registration_arr))

     setTimeout(()=>{
      alert("Registration done Successfully ")
      set_Loading(false)

      setTimeout(()=>{
        Set_reg(false)
      },1000)

    },1500)

    //api call for login and register
    fetch("http://localhost:5000/api/items/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(Login_Data)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Saved item:", data);
        alert("✅ Login successful!");
        // You can redirect or save user info to localStorage here
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("❌ Login failed. Please check your credentials.");
      });
    

  
      }

  const Login_Register=()=>{
    set_Loading(true)
    console.log(Login_Data)
    {is_reg?
      Register_User():Login_User()  //login function call
    }
    
    
  }
  return (
    
    <Container size={620} my={40} style={{border:"0px solid red",width:"500px"}}>
      <Box style={{position:"absolute",right:20,top:0,width:"25%"}}>
      {Notify?<Demo/>:null}
      </Box>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>
      {!is_reg?<Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor
        onClick={()=>Set_reg(true)}
        size="sm" component="button">
          Create account
        </Anchor>
      </Text>:
      <Text c="dimmed" size="sm" ta="center" mt={5}>
      Welcome aboard! Already a member? {' '}
        <Anchor
        style={{border:"0px solid red"}}
        onClick={()=>Set_reg(false)}
        size="sm" component="button">
          Sign in here
        </Anchor>
      </Text>}

      <Paper withBorder shadow="md" p={30} mt={30} radius="md" ta="left">
      {is_reg?<TextInput 
        name="name"
        value={Login_Data.name}
        onChange={(e)=>Handle_Change(e)}
        label="Name" placeholder="AAFREEN AJAZ PATHAN" required />:null}
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
        onClick={Login_Register}
        fullWidth mt="xl">
          {is_reg?"Sign Up":"Sign In"}
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