// src/app/api/chat/route.js
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const body = await req.json();
    const { message, type = "text" } = body;

    if (type === "image") {
      const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: message,
        n: 1,
        size: "1024x1024",
      });

      return new Response(
        JSON.stringify({
          type: "image",
          message: message,
          imageUrl: response.data[0].url,
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Regular text chat
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are XWizard AI, an AI assistant specializing in blockchain, cryptocurrency, and XRP technology. Be concise and helpful.",
        },
        { role: "user", content: message },
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    return new Response(
      JSON.stringify({
        type: "text",
        message: completion.choices[0].message.content,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("OpenAI API error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to get response from AI",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
