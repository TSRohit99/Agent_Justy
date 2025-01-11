const cron = require('node-cron');
const { postQuote } = require('../lib/quotesQueue');
const { executeSequentially } = require('../lib/getStats');


// (async () => {
//     console.log('Posting the first quote immediately...');
//     await postQuote();
// })();

cron.schedule('0 */5 * * *', async () => {
    console.log('Running scheduled tweet...');
    await postQuote();
});

// Schedule the job to run at 3 PM UTC daily
cron.schedule('0 15 * * *', async () => {
  console.log('Starting scheduled job at:', new Date().toISOString());
  await executeSequentially();
}, {
  timezone: "UTC" // Explicitly set timezone to UTC
});


  module.exports = { startCronJobs: () => console.log("Cron jobs initialized.") };
