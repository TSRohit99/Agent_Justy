const {generateGamblingQuote, generatePerpsQuote, generateLatestCtQuote } = require('./genQuotes');
const { rawTweet } = require('./sendTweet');


async function postGamblingQuote() {
    try {
           const quote = await generateGamblingQuote();
           await rawTweet(quote);
           console.log(`Posted quote!`);
        }
     catch (error) {
        console.error("Error in postQuote:", error);
    }
}
async function postPerpsQuote() {
    try {
           const quote = await generatePerpsQuote();
           await rawTweet(quote);
           console.log(`Posted quote!`);
        }
     catch (error) {
        console.error("Error in postQuote:", error);
    }
}
async function postLatestCtQuote() {
    try {
           const quote = await generateLatestCtQuote();
           await rawTweet(quote);
           console.log(`Posted quote!`);
        }
     catch (error) {
        console.error("Error in postQuote:", error);
    }
}


// Optional: Start first post immediately
module.exports = { postLatestCtQuote,postPerpsQuote,postGamblingQuote };