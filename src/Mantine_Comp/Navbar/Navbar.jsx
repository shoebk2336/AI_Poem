import { useEffect, useState } from 'react';
import {
  // Icon2fa,
  IconBellRinging,
  IconDatabaseImport,
  IconFingerprint,
  IconKey,
  IconLogout,
  IconReceipt2,
  IconSettings,
  IconSwitchHorizontal,
} from '@tabler/icons-react';
import { Code, Group, Text } from '@mantine/core';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Navbar.module.css';
import { useNavigate } from "react-router-dom";

const data = [
  { link: '/', label: 'Dashboard', icon: IconBellRinging },
  { link: '/collection', label: 'Collection', icon: IconDatabaseImport },
  { link: '/about', label: 'About', icon: IconSettings },
];

export function NavbarSimpleColored() {
  const [active, setActive] = useState('Billing');
  const [loggedin,set_Loggedin]=useState(false)
  const navigate=useNavigate()

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      key={item.label}
      onClick={(event) => {
        navigate(item.link)
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));
  useEffect(()=>{
    const user_name=JSON.parse(localStorage.getItem("user"))
    if(user_name?.name){set_Loggedin(true)}

  })


  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          {/* <MantineLogo size={28} inverted style={{ color: 'white' }} /> */}
          <Text
          fw={800}
          
          c={"white"}
          style={{
            fontSize:"18px",
            fontStyle:"italic"
          }}
          >Poetry Pulse</Text>
          <Code fw={700} className={classes.version}>
            AAFREEN A.PATHAN
          </Code>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        {/* <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a> */}

        {!loggedin?
        <a  className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span
          onClick={()=>{
            navigate('/login');
            window.scrollTo(0, 0);
          }}
          >Login</span>
        </a>:
        <a  className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span
          onClick={()=>{
            localStorage.removeItem("user");
            set_Loggedin(false);
            window.location.reload()          
          }}
          >Logout</span>
        </a>}
      </div>
    </nav>
  );
}