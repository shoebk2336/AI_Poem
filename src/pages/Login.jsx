import { Text ,Container} from "@mantine/core"
import { AuthenticationTitle } from "../Mantine_Comp/Login/Login"
import { NavbarSimpleColored } from "../Mantine_Comp/Navbar/Navbar"


export const Login_logout=()=>{
    return(
        <>
        <Container size="xl" display='flex' style={{
                    justifyContent:"space-between"
                }}>
                    <NavbarSimpleColored/>
                    <AuthenticationTitle/>

                </Container>
        </>
    )
}