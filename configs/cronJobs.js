const { postGamblingQuote, postPerpsQuote, postLatestCtQuote } = require('../lib/quotesQueue');
const { executeSequentially } = require('../lib/getStats');

// // Immediately post a quote (e.g., for initialization or manual runs)
// (async () => {
//     console.log('Posting the first quote...');
//     await postQuote();
// })();

// Function to run the quote posting job
async function runPostGamblingQuote() {
    console.log('Running scheduled tweet...');
    await postGamblingQuote();
}
async function runPostPerpsQuote() {
    console.log('Running scheduled tweet...');
    await postPerpsQuote();
}
async function runPostLatestCtQuote() {
    console.log('Running scheduled tweet...');
    await postLatestCtQuote();
}

// Function to run the daily stats job
async function runDailyStatsJob() {
    console.log('Starting scheduled job at:', new Date().toISOString());
    await executeSequentially();
}

// runPostGamblingQuote();
// runPostPerpsQuote();
// runPostLatestCtQuote();

module.exports = { runPostGamblingQuote,runPostPerpsQuote,runPostLatestCtQuote, runDailyStatsJob };
