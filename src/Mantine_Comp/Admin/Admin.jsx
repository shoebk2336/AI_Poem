// import { Accordion, Container, Title } from '@mantine/core';
// import classes from './Admin.module.css';
// import { useEffect, useState } from 'react';

// const placeholder =
//   'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

// export function FaqSimple() {
//     const [Poems_Coll,set_Poems]=useState([])

//     const Poems=JSON.parse(localStorage.getItem('poems'))
//     useEffect(()=>{
//         set_Poems(Poems)
//     },[])
//   return (
//     <Container size="sm" className={classes.wrapper}>
//       <Title ta="center" className={classes.title}>
//       📝 All Poetic Creations
//       </Title>
//         {Poems_Coll?.map((poem,index)=>
//                 <Accordion variant="separated" key={index}>
//                 <Accordion.Item className={classes.item} value="reset-password">
//                 <Accordion.Control>How can I reset my password?</Accordion.Control>
//                 <Accordion.Panel>{poem?.Poem_Text}</Accordion.Panel>
//                 </Accordion.Item>

//         )}
      

        
//       </Accordion>
//     </Container>
//   );
// }

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
