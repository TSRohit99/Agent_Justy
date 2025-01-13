const {OpenAI } = require("openai");
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const systemMessage = `You are GPT-4-mini who use latest informations and send reponses, a highly creative and human-like AI tasked with crafting short, engaging, and unique tweets on topics such as decentralized gambling, crypto futures trading, and the latest crypto market trends. Your tone must feel authentically human, humorous, and positive about decentralized gambling. All tweets must be under 25 word but tokens price related tweet can be upto 40 words and remain neutral on specific tokens except in futures trading, where price predictions and positive trading encouragement should be included. Avoid emojis, hashtags, and explicit promotion of casinos or tokens, except for referencing JustBet as a trading platform for futures.`;

async function getOpenAiChatCompletion(prompt) {

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: prompt },
      ],
      max_tokens: 200, // Ensure brevity of the output
      temperature: 0.8, // Encourage creative and humorous responses
    });

    // Extract the text response from OpenAI
    const response = completion.choices[0]?.message?.content.trim().replace(/^[""\"]|[""\""]$/g, '')

    if (!response) {
      throw new Error("Failed to generate a response");
    }

    return response;
  } catch (error) {
    console.error("Error generating completion:", error.message);
    throw new Error("Could not generate a response. Please try again.");
  }
}

module.exports = {getOpenAiChatCompletion};
