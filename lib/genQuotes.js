const {getGroqChatCompletion} = require("../configs/groqAgent");

const prompt = "Generate a short, funny, and positive gambling-related tweet that feels human and authentic. Use the latest crypto twitter, gambling slangs to make it relatable and engaging. Focus on humor, risk-taking, and luck in a witty way. Avoid emojis, hashtags, and promotional language. Make it sound like a casual thought from someone in the crypto-gambling space. Response should only be the tweet, no explanations.";

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
