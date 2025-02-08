const path = require("path");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const sendAlert = async (message) => {    
    try {
           await axios.post(
             `${process.env.SERVER_URL}/post`,
             {
               message: message,
             },
             {
               headers: {
                 "x-api-key": process.env.API_KEY, // Add your API key here
               },
             }
           );
        console.log(`Alert Sent!`);
    } catch (error) {
        console.error("Error in Alert Sent:", error);
    }
}

module.exports = { sendAlert };