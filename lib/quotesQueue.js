const { generateQuotes } = require('./genQuotes');
const { rawTweet } = require('./sendTweet');

let quotesArray = []; // Temporary array to store quotes

let currentQuoteIndex = 0;

async function refreshQuotes() {
    try {
        quotesArray = await generateQuotes();
        currentQuoteIndex = 0;
        console.log("Fetched new quotes:", quotesArray.length);
    } catch (error) {
        console.error("Error refreshing quotes:", error);
    }
}

async function postQuote() {
    try {
        // If array is empty or we've used all quotes, get new ones
        if (quotesArray.length === 0 || currentQuoteIndex >= quotesArray.length) {
            await refreshQuotes();
        }

        // Post the current quote
        if (quotesArray.length > 0) {
            await rawTweet(quotesArray[currentQuoteIndex]);
            console.log(`Posted quote ${currentQuoteIndex + 1} of ${quotesArray.length}`);
            currentQuoteIndex++;
        }
    } catch (error) {
        console.error("Error in postQuote:", error);
    }
}

// Initialize quotes when starting
refreshQuotes();


// Optional: Start first post immediately
module.exports = { postQuote };