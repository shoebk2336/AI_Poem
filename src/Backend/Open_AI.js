// const { GoogleGenerativeAI } = require("@google/generative-ai");
import { GoogleGenerativeAI } from "@google/generative-ai";


export const Generate_Fun=async(data)=>{
    console.log(data,'Data')
    const {Title,Theme,Style,Length,Language,Emotions,Audience}=data

    const genAI = new GoogleGenerativeAI("AIzaSyA-Sz5v1wmTBpBJFXKkmNOuR22jpxSR0Nw");
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `Generate a poem based on the following details. 
- **Title:** ${Title}  
- **Theme:** ${Theme}  
- **Style:** ${Style}  
- **Length:** ${Length}  
- **Language:** ${Language}  
- **Emotions:** ${Emotions}  
- **Audience:** ${Audience}  

Stick to these details strictly. Do not ask questions or mention this prompt in the output. Only deliver the poem.`;

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    return(result?.response?.text())

}

