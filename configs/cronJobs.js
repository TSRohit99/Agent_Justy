const { postQuote } = require('../lib/quotesQueue');
const { executeSequentially } = require('../lib/getStats');

// // Immediately post a quote (e.g., for initialization or manual runs)
// (async () => {
//     console.log('Posting the first quote...');
//     await postQuote();
// })();

// Function to run the quote posting job
async function runPostQuoteJob() {
    console.log('Running scheduled tweet...');
    await postQuote();
}

// Function to run the daily stats job
async function runDailyStatsJob() {
    console.log('Starting scheduled job at:', new Date().toISOString());
    await executeSequentially();
}

module.exports = { runPostQuoteJob, runDailyStatsJob };
