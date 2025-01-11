const { generateQuotes } = require('./genQuotes');
const { rawTweet } = require('./sendTweet');


async function postQuote() {
    try {
           const quote = await generateQuotes();
           await rawTweet(quote);
           console.log(`Posted quote!`);
        }
     catch (error) {
        console.error("Error in postQuote:", error);
    }
}


// Optional: Start first post immediately
module.exports = { postQuote };