import { TypingAnimation } from "@/components/ui/typing-animation";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Text } from "@mantine/core";


export const Dotted_Text=(Poem)=>{
    console.log(Poem,'text')

    return(
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      
        {/* <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
      {Poem.Poem_Text}
      </p> */}
      <TypingAnimation
      className='text-lg p-5 text-justify whitespace-pre-wrap italic'
      >{Poem.Poem_Text}</TypingAnimation>
        
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
    )
}