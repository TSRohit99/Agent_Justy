const {getGroqChatCompletion} = require("../configs/groqAgent");
const {stringToJsonObj} = require("./jsonObjConverter");

const prompt = "Generate 5 unique, hilariously funny, and engaging quotes that combine the world of on-chain gambling, online gaming, and the crypto market hype. Each quote should be packed with humor, relatable in a humanized tone, and creatively highlight the positive, exciting aspects of decentralized gambling and blockchain technology. Make them witty, lighthearted, and appealing to an audience who loves both gambling and crypto. The tone must be casual, fun, and enthusiastically supportive of crypto gaming. Output the response as a JSON array of strings without any additional explanation.";

const generateQuotes = async () => { 
    const response = await getGroqChatCompletion(prompt);
    console.log("res",response);
    if(response === null){
        console.log("Error in generating quotes");
        return;
    }
    const quotes = stringToJsonObj(response);
    return quotes; // array of strings

    }

 

module.exports = {generateQuotes};
