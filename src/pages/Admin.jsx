import { Container, Text } from "@mantine/core"
import { FaqSimple } from "../Mantine_Comp/Admin/Admin"
import { NavbarSimpleColored } from "../Mantine_Comp/Navbar/Navbar"


export const Admin=()=>{
    return(<>
     <Container size="xl" display='flex' style={{
                           justifyContent:"space-between"
                       }}>
                           <NavbarSimpleColored/>
                           <FaqSimple/>

                           
       
                       </Container>

    </>)
}