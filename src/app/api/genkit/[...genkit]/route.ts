import { NextRequest, NextResponse } from "next/server";
import { googleAI } from "@genkit-ai/googleai";
import { genkit } from "genkit";

// Create a Genkit instance with Gemini plugin and model
const ai = genkit({
  plugins: [googleAI()],
  model: googleAI.model("gemini-2.0-pro"),
});

export async function POST(req: NextRequest) {
  try {
    const { flow, input } = await req.json();
    if (flow !== "sayHello" || !input) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
    // Generate a response using Gemini
    const { text } = await ai.generate(input);
    return NextResponse.json({ result: text });
  } catch (error) {
    return NextResponse.json({ error: "AI error: " + (error && typeof error === 'object' && 'message' in error ? (error as Error).message : String(error)) }, { status: 500 });
  }
}
