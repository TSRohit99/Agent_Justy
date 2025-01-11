const express = require('express'); 
const { startCronJobs } = require('./configs/cronJobs');


const app = express();

// Initialize cron jobs
startCronJobs();

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
