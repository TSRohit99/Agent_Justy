const {getGroqChatCompletion} = require("../configs/groqAgent");

const prompt = `Create a casual, witty tweet about decentralized gambling that:
- Sounds like a genuine crypto native sharing a random thought
- Uses natural web3 slang without forcing 'gm' or common phrases
- Captures relatable defi gaming moments with humor
- Has a playful, self-aware vibe
- Stays positive without promoting risky behavior
- Must vary opening phrases (no repetitive starts)
- Avoids specific platforms/tokens
- Max 180 characters
- No hashtags/emojis/explanations
- Only output the tweet text`;

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

generateQuotes();

 

module.exports = {generateQuotes};
