import { useEffect, useState } from "react"
import { FeaturesCards } from "../poem_card/Cards"


export const Display_collection=()=>{

    const [Poem_collection,set_Poems]=useState([])
    const [FetchData,setFetchData]=useState()

    console.log(Poem_collection,'coll')

    const GetData=async(callback)=>{
        const Fetch=await fetch("http://localhost:5000/api/items")
        const Data=await Fetch.json()
        setFetchData(Data)
        console.log(FetchData,'fetchdata')

        callback(Data)
        console.log('callback called')
        
    }

    const Filter_display_Data=(Data)=>{
        const Loggedin_user=JSON.parse(localStorage.getItem("user"))
        console.log(Loggedin_user,'user')

        for(let i=0;i<Data?.length;i++){
            if(Loggedin_user?.email==Data[i].User_Id){
                console.log('yes')
                set_Poems(prev=>[...prev,Data[i].Poem_Text])
            }
            else if (Loggedin_user?.email=="admin@gmail.com"){
                set_Poems(prev=>[...prev,Data[i].Poem_Text])
            }
        }



    }
   
    useEffect(()=>{
        console.log('useeffect')
        GetData(Filter_display_Data) 
        // const Poems=JSON.parse(localStorage.getItem("poems"))
        // console.log(Poems,'poems')
        

        
    },[])
    return(<>
    <FeaturesCards Poems={Poem_collection}/>
    
    </>)
}