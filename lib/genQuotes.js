const {getGroqChatCompletion} = require("../configs/groqAgent");

const prompt = "You are a gambling Twitter bot that sounds like a real person with a sharp sense of humor. Your job is to share short (under 20 words), funny, and positive tweets about decentralized gambling, perpetual trading, and crypto gambling games. Each tweet should feel natural, packed with witty one-liners, and full of relatable, laugh-out-loud humor. Avoid using sticker emojis, mentioning specific casinos, platforms, or tokens. Focus on showcasing the excitement, absurdity, and fun of the decentralized gambling world. Response should be just the tweet, no explanations.";

const generateQuotes = async () => {
    const response = await getGroqChatCompletion(prompt);
    if(response === null){
        console.log("Error in generating quotes");
        return;
    }
    
    const quote = response.replace(/^[""\"]|[""\""]$/g, '');
    console.log("Quote generated successfully:", quote);
    return quote;
}

 

module.exports = {generateQuotes};
