import { Box, Image } from '@mantine/core'
import Cert from '../assets/certi.png'


export const About=()=>{
    return(
        <>
        <Box style={{border:"0px solid red",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Image src={Cert} w='90%'/>   
        </Box>         
        </>
    )
}