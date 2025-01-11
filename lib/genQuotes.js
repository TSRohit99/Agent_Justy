const {getGroqChatCompletion} = require("../configs/groqAgent");

const prompt = "Generate 1 short, hyped-up tweet about winning in crypto gambling and Web3 gaming. Make it sound like a real person sharing their excitement - like 'Turned my lunch money into a lambo on JustBet, mom's finally proud of my gambling skills 😎' or 'Who needs sleep when your DeFi bets are printing harder than a casino vault 🎰'. Use conversational language, gambling/gaming slang, dont mention any other casinos except just.bet and have natural emotions. Include the thrill of big wins and the community vibes. Keep it authentic like something you'd actually see on crypto Twitter. Response should be just the tweet, no explanations.";

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
