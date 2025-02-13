import { useEffect, useState } from "react"
import { FeaturesCards } from "../poem_card/Cards"


export const Display_collection=()=>{

    const [Poem_collection,set_Poems]=useState([])

    console.log(Poem_collection,'coll')

    useEffect(()=>{
        const Poems=JSON.parse(localStorage.getItem("poems"))
        console.log(Poems,'poems')
        const Loggedin_user=JSON.parse(localStorage.getItem("user"))
        console.log(Loggedin_user,'user')

        for(let i=0;i<Poems?.length;i++){
            if(Loggedin_user.email==Poems[i].User_Id){
                set_Poems(prev=>[...prev,Poems[i].Poem_Text])
            }
        }

        
    },[])
    return(<>
    <FeaturesCards Poems={Poem_collection}/>
    
    </>)
}