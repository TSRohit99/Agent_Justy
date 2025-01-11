const {getGroqChatCompletion} = require("../configs/groqAgent");

const prompt = " Generate 1 short, hyped-up tweet about winning in crypto gambling, Web3 gaming, or perpetuals trading. Make it sound like a real person sharing their humor and excitement – for example, 'Turned my lunch money into a lambo, mom's finally proud of my gambling skills 😎' or 'Who needs sleep when your DeFi bets are printing harder than a casino vault 🎰'. Use conversational language with humor, gambling/gaming slang, and playful crypto Twitter trends or references (e.g., 'up only,' 'ngmi'). Avoid mentioning specific casinos, platforms, tokens, or hashtags. Highlight the thrill of big wins, the excitement of Web3 gambling and 1000x perpetual trading, and the camaraderie of the community. Keep it authentic and natural, like something you'd see trending on crypto Twitter. The response should be only the tweet, with no explanations.";

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
