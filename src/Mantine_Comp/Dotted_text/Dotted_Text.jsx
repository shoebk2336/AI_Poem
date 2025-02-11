import { TypingAnimation } from "@/components/ui/typing-animation";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Text } from "@mantine/core";
import { PulsatingButton } from "@/components/ui/pulsating-button";


export const Dotted_Text=(Poem)=>{
    console.log(Poem,'text')

    const Save_Poem=()=>{
        let poems = JSON.parse(localStorage.getItem("poems")) || [];
        poems.push(Poem.Poem_Text);
        localStorage.setItem("poems", JSON.stringify(poems));
    }

    return(
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      
        
      <TypingAnimation
      className='text-md p-5 pb-20 text-justify whitespace-pre-wrap italic'
      >{Poem.Poem_Text}</TypingAnimation>
        
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
      <PulsatingButton
      onClick={Save_Poem}
      pulseColor="#ba2a84"
      
      className='absolute right-20 bottom-10 w-60  bg-gradient-to-r from-[hsl(328,75%,45%)] to-[hsl(269,85%,41%)] 

      '
      >
        
        Save</PulsatingButton>

    </div>
    )
}