import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { Box, Container, Grid, Input, Select, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ShinyButton } from "@/components/ui/shiny-button"
import { Generate_Fun } from "../../Backend/Open_AI";
import { Dotted_Text } from "../Dotted_text/Dotted_Text";
import { AnimatedCircularProgressBarDemo } from "../Progress_bar/Progress";
import { Demo } from "../Notification/Notification";
import { Poem_Avatar } from "../Avatar/Avatar";
import doll from '../../assets/doll.png'
import tree from '../../assets/tree.png'

 


export const Main_Card=()=>{


    const Input_Data=[
        {
            Name:"Theme",
            Heading:"Select Theme",
            placeholder:"e.g. Love,Nature etc.",
            data:["Love","Nature","Friendship","Family",
                "Life","Death","Hope","Dreams","War","Peace",
                "Time","Season","Animals","Travel","Art","Music",
                "History","Fantasy","Science"],
            xs:6,

        },
        {
            Name:"Emotions",
            Heading:"Select Emotions/Mood",
            placeholder:"e.g. Happy,Sad,Romantic etc.",
            data:["Happy","Sad","Romantic","Mysterious","Nostalgic",
                "Calm","Angry","Hopeful","Inspiring","Humorous"
            ],
            xs:6,

        },
        {
            Name:"Style",
            Heading:"Select Style",
            placeholder:"e.g. Rhyming,Haiku,Free Verse etc.",
            data:["Rhyming Poem","Free verse","Haiku","Sonnet",
                "Limerick","Acrostic","Ballad","Ode","Elegy"
            ],
            xs:6,

        },
        {
            Name:"Length",
            Heading:"Select Length",
            placeholder:"e.g. Short,Medium,Long etc.",
            data:["Short (4-6 Lines)","Medium (8-12 Lines)","Long (14+ Lines)"],
            xs:6,

        },
        {
            Name:"Audience",
            Heading:"Targeted Audience",
            placeholder:"e.g. Loved One,Friends,Child etc.",
            data:["Myself","Loved one","Friend","Child","Teacher",
                    "Parent","Special Occasion","Public Reading","Gift"
                ],
            xs:6,

        },
        {
            Name:"Language",
            Heading:"Poem Language",
            placeholder:"e.g. English,Hindi,Urdu etc.",
            data:["English","Hindi","Urdu"],
            xs:6,

        },
        
    ]
    const [value, setValue] = useState({});
    const [Processed_Poem,set_Poem]=useState("")
    const [Loading,setLoading]=useState(false)
    const [user_name,set_userName]=useState()//using to show on dashboard
    const [Id,set_Id]=useState() //using to link poem with users
    console.log(Id,'idd')

    const Capture_Data=(value,name)=>{
        setValue((prevData)=>({
            ...prevData,[name]:value
        }))
        console.log(name,value)

    }

    const Generate_btn=async()=>{
        window.scrollTo(0, document.body.scrollHeight / 2.5);
        set_Poem("")
        setLoading(true)
        const Result=await Generate_Fun(value,Id)
        setLoading(false)
        set_Poem(Result)
        
    }
    useEffect(()=>{
        const user_name=JSON.parse(localStorage.getItem("user"))
        const Reg_users=JSON.parse(localStorage.getItem('Registration'))

        for(let i=0;i<Reg_users?.length;i++){
            if(user_name?.email==Reg_users[i].email){
                set_userName(Reg_users[i].name)
                set_Id(user_name.email)
            }
        }

    })
    return(<>
    <Container size='sm'
    style={{overflow:"",border:"0px solid red",position:"relative",marginLeft:"20px"}}
    >
        <Box style={{border:"0px solid red",position:"relative",display:"flex",
            justifyContent:"center",alignItems:"center"
        }}>    
        <AnimatedGradientText>
        🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ba2a84] via-[#9c40ff] to-[#6b10bd] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent
            
            `,
          )}
        >
          Create Your Perfect Poem
        </span>
      </AnimatedGradientText>
      {user_name?
        <Box style={{position:"absolute",right:-120,top:"-13%",display:"flex",
            alignItems:"center",gap:10,justifyContent:"center",border:"0px solid red"
        }}>
            <Poem_Avatar/>
            <Text
            c='#7518be'
            fw={600}
            style={{fontStyle:"italic"}}
            >{user_name}</Text>
        </Box>:null}
      </Box>

    <NeonGradientCard className=" text-left mt-5 h-[450px]">
      {/* <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
        Neon Gradient Card
      </span> */}
      <Grid>
                <Grid.Col>
                    <Text
                    fw={600}
                    fs=""
                    
                    >What title would you like for your Poem</Text>
                    <Input
                    mt="0.5rem"
                        name='Title'
                        placeholder="Whisper of the Forest"
                        // value={value}
                        onChange={(e)=>Capture_Data(e.target.value,e.target.name)}
                        // rightSection={value !== '' ? <Input.ClearButton onClick={() => setValue('')} /> : undefined}
                        rightSectionPointerEvents="auto"
                        size="sm"
                    />
                </Grid.Col>
                

                {Input_Data?.map((data,index)=>
                <Grid.Col key={index} span={6}>
                    <Text
                    fw={600}
                    fs=""
                    >
                        {data.Heading}
                    </Text>
                    <Select
                    name={data?.Name}
                    mt='0.5rem'
                    placeholder={data.placeholder}
                    data={data.data}
                    onChange={(name)=>Capture_Data(name,data.Name)}
                    />
                </Grid.Col>
                
                )}
               </Grid>
           
            <br/>
            <ShinyButton
            
            
            onClick={Generate_btn}
            className=' w-80 m-auto  flex justify-center items-center
                  
                 
                 '>
                    Generate</ShinyButton>
                   
            
    </NeonGradientCard>
    {Loading?
    <Box style={{display:"flex",justifyContent:"center",marginTop:50}}>
    <AnimatedCircularProgressBarDemo/>
    </Box>:null}
    <br/>
    <br/>
    {Processed_Poem?
    <Dotted_Text Poem_Text={Processed_Poem } User_Id={Id}/>:null}
     <img src={doll} alt="doll" style={{position:"absolute",
        width:"350px",height:"600px",right:"-260px",top:-25,transform:"rotate(-00deg)"
    }}/>
    </Container>
   
    </>)
}                                                                                                                                                                                                                                                                                                                                                       