import { Container, Text } from "@mantine/core"
import { NavbarSimpleColored } from "../Mantine_Comp/Navbar/Navbar"
import { Display_collection } from "../Mantine_Comp/Collection/Collection"



export const Collection=()=>{

    return(<>
    <Container size="xl" display='flex' style={{
                       justifyContent:"space-between"
                   }}>
                       <NavbarSimpleColored/>
                       <Display_collection/>
                       
   
                   </Container>
    </>)
}