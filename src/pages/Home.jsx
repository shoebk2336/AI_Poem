import { Container } from "@mantine/core"
import { Main_Card } from "../Mantine_Comp/Main_card/Main_card"
import { NavbarSimpleColored } from "../Mantine_Comp/Navbar/Navbar"



export const Home=()=>{
    return(
        <>
        <Container size="xl" display='flex' style={{
            
            
        }}>
            <NavbarSimpleColored/>
            <Main_Card/>
        </Container>
        </>
    )
}