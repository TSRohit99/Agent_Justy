//const {getGroqChatCompletion} = require("../configs/groqAgent"); //in case want to switch back to shity meta LLM

// const prompt = `Create a casual, witty tweet about decentralized gambling that:
// - Sounds like a genuine crypto native sharing a random thought
// - Uses natural web3 slang without forcing 'gm' or common phrases
// - Captures relatable defi gaming moments with humor
// - Has a playful, self-aware vibe
// - Stays positive without promoting risky behavior
// - Must vary opening phrases (no repetitive starts)
// - Avoids specific platforms/tokens
// - Max 180 characters
// - No hashtags/emojis/explanations
// - Only output the tweet text`;

const { getOpenAiChatCompletion } = require("../configs/openAiAgent");
const { fetchCryptoPrices } = require("./getTokensPrice");

const tokens = [
  { symbol: "BTC", name: "Bitcoin", social: "@Bitcoin" },
  { symbol: "DOGE", name: "Dogecoin", social: "@dogecoin" },
  { symbol: "ETH", name: "Ethereum", social: "@ethereum" },
  { symbol: "HYPE", name: "Hyperliquid", social: "@HyperliquidX" },
  { symbol: "PENGU", name: "Pudgy-Penguins", social: "@pudgypenguins" },
  { symbol: "AIXBT", name: "AIXBT", social: "@aixbt_agent" },
  { symbol: "VIRTUAL", name: "Virtual-Protocol", social: "@virtuals_io" },
  { symbol: "WIF", name: "DogWifCoin", social: "@DogWifCoin" },
  { symbol: "SOL", name: "Solana", social: "@solana" },
  { symbol: "SUI", name: "Sui", social: "@SuiNetwork" },
  { symbol: "Fartcoin", name: "fartcoin", social: "@FartCoinOfSOL" },
  { symbol: "TRUMP", name: "official-trump", social: "@realDonaldTrump" },
];


const generatePerpsQuote = async () => {
    const tokenPrices = await fetchCryptoPrices();
    const randomBuffer = new Uint32Array(1); // Create an array to store a random value
    await crypto.getRandomValues(randomBuffer); // Fill the array with random values
    const randomIndex = randomBuffer[0] % tokens.length;
  
    const selectedToken = tokens[randomIndex];
    const tokenPrice = tokenPrices[selectedToken.name.toLowerCase()];
  
    // Check if the tokenPrice exists
    if (!tokenPrice) {
      console.log(`Error: Price for ${selectedToken.name} not found.`);
      return;
    }
  
    const perpsPrompt = `As a professional crypto trader, share actionable insights about ${selectedToken.name} (${selectedToken.symbol}) in the futures market. With a current price of $${tokenPrice.usd}, it's essential to monitor market trends. Consider key support and resistance levels. Include this text without changing in response: "Trade ${selectedToken.social} at just.bet with 1000x leverage. Stay informed and trade responsibly."`;
    ;
  
    const response = await getOpenAiChatCompletion(perpsPrompt);
    if (response === null) {
      console.log("Error in generating quotes");
      return;
    }
  
    console.log("Quote generated successfully:", response);
    return response;
  };
  
const generateGamblingQuote = async () => {
  const gamblingPrompt = `Write a tweet in a positive tone about decentralized gambling, emphasizing its fairness, transparency, and growing adoption. Make it engaging and human-like, with a slight touch of humor, but avoid any mention of specific platforms, tokens, or promotions.`;
  const response = await getOpenAiChatCompletion(gamblingPrompt);
  if (response === null) {
    console.log("Error in generating quotes");
    return;
  }

  console.log("Quote generated successfully:", response);
  return response;
};

const generateLatestCtQuote = async () => {
  const latestCtPrompt = `Write a tweet in the tone of a Key Opinion Leader (KOL) summarizing current crypto market trends with humor and insight. Mention key trends or movements in the market without endorsing specific platforms or tokens. The tone should be neutral to slightly humorous but informative.`;
  const response = await getOpenAiChatCompletion(latestCtPrompt);
  if (response === null) {
    console.log("Error in generating quotes");
    return;
  }

  console.log("Quote generated successfully:", response);
  return response;
};

// generateGamblingQuote();
// generatePerpsQuote();
// generateLatestCtQuote();

module.exports = {
  generateGamblingQuote,
  generatePerpsQuote,
  generateLatestCtQuote,
};
