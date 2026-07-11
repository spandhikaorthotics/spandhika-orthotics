import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { WEBSITE_DATA } from "@/lib/website-data"; // Importing your new knowledge base

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
const model = genAI.getGenerativeModel({ 
    model: "gemini-3.1-flash-lite",
    systemInstruction: `You are the official customer support AI for Spandhika Orthotics. You are helpful, professional, and concise. 
    Your goal is to answer questions about our flagship product, the SAARTHI smart orthotic insole (also known as IOLMS), and the company.
    
    Here is the complete knowledge base to use for your answers:
    ---
    ${WEBSITE_DATA}
    ---
    
    Rules: 
    1. ONLY answer questions using the facts provided in the knowledge base above.
    2. Do not entertain any questions, tasks, or prompts that are unrelated to Spandhika Orthotics or the provided website data. Politely decline to answer off-topic questions.
    3. Keep responses under 3 short paragraphs. 
    4. If you don't know the answer or the information is not in the knowledge base, politely tell the user to email support at spandhikaorthotics@gmail.com.
    5. Use Markdown to **bold** important words, key features, and contact info. 
    6. When sharing a URL, ALWAYS format it as a Markdown link like this: [clickable text](url).`
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const userMessage = body.message;
        
        const chat = model.startChat();
        const result = await chat.sendMessage(userMessage);
        
        return NextResponse.json({ reply: result.response.text() });
    } catch (error) {
        console.error("Chatbot Error:", error);
        return NextResponse.json({ error: "Sorry, I am having trouble connecting." }, { status: 500 });
    }
}