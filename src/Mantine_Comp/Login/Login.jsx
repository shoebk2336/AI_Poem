import {
  Anchor,
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



export function AuthenticationTitle() {
  const [Login_Data,setLogin_Data]=useState({})
  // console.log(Login_Data,'login data')

  const Handle_Change=(e)=>{
    
    const{name,value}=e.target
    setLogin_Data((data)=>({
      ...data,[name]:value
    }))

  }

  const Signin=()=>{
    console.log(Login_Data)
    localStorage.setItem("user", JSON.stringify(Login_Data));
  }
  return (
    <Container size={620} my={40} style={{border:"0px solid red"}}>
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
        value={Login_Data.email}
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
        onClick={Signin}
        fullWidth mt="xl">
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}