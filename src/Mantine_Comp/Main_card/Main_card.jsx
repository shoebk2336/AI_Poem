import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { Container, Grid, Input, Select, Text } from "@mantine/core";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ShinyButton } from "@/components/ui/shiny-button"
import { Generate_Fun } from "../../Backend/Open_AI";
import { Dotted_Text } from "../Dotted_text/Dotted_Text";

 


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
            data:["Happy","Sad","Romatc","Mysterious","Nostalgic",
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
    console.log(value)

    const Capture_Data=(value,name)=>{
        setValue((prevData)=>({
            ...prevData,[name]:value
        }))
        console.log(name,value)

    }

    const Generate_btn=async()=>{
        const Result=await Generate_Fun(value)
        set_Poem(Result)
    }
    return(<>
    <Container size='sm'
    style={{border:"0px solid red"}}
    >
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
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
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
                 className='w-80 m-auto  flex justify-center items-center bg-red'>
                    Generate</ShinyButton>
            
    </NeonGradientCard>
    <br/>
    <br/>
    {/* {Processed_Poem?
    <Dotted_Text Poem_Text={Processed_Poem}/>:null} */}
     <Dotted_Text Poem_Text={Processed_Poem}/>
    </Container>
    </>)
}                                                                                                                                                                                                                                                                                                                                                       