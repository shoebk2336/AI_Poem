import { useState } from "react"
import { FeaturesCards } from "../poem_card/Cards"


export const Display_collection=()=>{

    const [Poem_collection,set_Poems]=useState([])
    const Poems=JSON.parse(localStorage.getItem("poems"))
    console.log(Poem_collection,'coll')
    useState(()=>{
        set_Poems(Poems)
    })
    return(<>
    <FeaturesCards Poems={Poem_collection}/>
    
    </>)
}