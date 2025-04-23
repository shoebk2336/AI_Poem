

import { Accordion, Box, Container, Text, Title } from '@mantine/core';
import classes from './Admin.module.css';
import { useEffect, useState } from 'react';

export function FaqSimple() {
  const [Poems_Coll, set_Poems] = useState([]);
  const Reg_users=JSON.parse(localStorage.getItem("Registration"))

  useEffect(() => {
    const storedPoems = JSON.parse(localStorage.getItem('poems')) || [];
    set_Poems(storedPoems);
  }, []);

  return (
    <Container size="sm" className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
        📝 All Poetic Creations
      </Title>

      {Poems_Coll.length > 0 ? (
        <Accordion variant="separated">
          {Poems_Coll.map((poem, index) => (
            <Accordion.Item className={classes.item} key={index} value={`poem-${index}`}>
              <Accordion.Control>Poem {index + 1}</Accordion.Control>
              <Accordion.Panel style={{whiteSpace:"pre-wrap"}}>{poem.Poem_Text}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      ) : (
        <p className="text-center text-gray-500">No poems available yet. Start writing your first one! ✨</p>
      )}
      <br/>
      <Box
      style={{border:"0px solid red", width:"100%"}}
      >
        <Title ta="center" className={classes.title}>
        📝 All Dear Poets
      </Title>
        {Reg_users?.map((user,index)=>
        <Box key={index} style={{border:"1px solid gray",padding:"10px",borderRadius:"10px",marginBottom:"10px"}}>
            <Title  ta='left' size="lg">Name:{user?.name}</Title>
            <Text ta='left'>Email:{user?.email}</Text>
        </Box>
        
    )}
      </Box>
    </Container>
  );
}
