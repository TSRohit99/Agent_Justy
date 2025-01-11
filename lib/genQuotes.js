const {getGroqChatCompletion} = require("../configs/groqAgent");
const {stringToJsonObj} = require("./jsonObjConverter");

const prompt = "Generate 1 unique, hilariously funny, and engaging quote that combine the world of on-chain gambling, online gaming, and the crypto market hype. The quote should be packed with humor, relatable in a humanized tone, and creatively highlight the positive, exciting aspects of decentralized gambling and blockchain technology. Make them witty, lighthearted, and appealing to an audience who loves both gambling and crypto. The tone must be casual, fun, and enthusiastically supportive of crypto gaming. The response must be a string only, without any additional explanation just the quote.";

const generateQuotes = async () => { 
    const quote = await getGroqChatCompletion(prompt);
    console.log("res",response);
    if(response === null){
        console.log("Error in generating quotes");
        return;
    }

    return quote;

    }

 

module.exports = {generateQuotes};
