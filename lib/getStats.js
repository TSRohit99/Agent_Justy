const axios = require("axios");
const { tweet } = require("./sendTweet.js");
const jbProfile = "https://just.bet/profile/";
const { generateImage } = require("./genImage.js");
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const getTodaysLuckyWinner = async () => {
  try {
    const resArr = await axios.get(
      "https://gateway.winr.games/statistic/lucky-leaderboard-list?period=DAY&sortOrder=DESC"
    );

    const res = resArr.data[0];
    console.log("Lucky Winner", res);
    
    if (parseInt(res.profit) <= 1000)  return;

    const msgTemplate = `
𝐋𝐮𝐜𝐤𝐲 𝐖𝐢𝐧𝐧𝐞𝐫 🏆
🎉 Huge shoutout to today's Lucky Winner!
𝗝𝘂𝘀𝘁𝗕𝗲𝘁 Profile: ${jbProfile}${res.player}
🎮 𝗚𝗮𝗺𝗲: ${res.game}
💰 𝗣𝗿𝗼𝗳𝗶𝘁: ${res.profit}
🔥 𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: ${res.multiplier}x
Keep the wins rolling! #LuckyWinner #JustBet
    `;
    const flag = "lucky";
    //get Image buffer
    const buffer = await generateImage(res, flag);

    await tweet(msgTemplate,buffer);

    //send alert to TG/DC
    // await axios.post(`${process.env.SERVER_URL}/shoutouts`, {
    //   message: msgTemplate,
    //   flag,
    //   res,
    // });
  } catch (error) {
    console.log("Error at fetching Lucky Winner: ", error);
  }
};

const getTodaysHighRoller = async () => {
  try {
    const resArr = await axios.get(
      "https://gateway.winr.games/statistic/volume-leaderboard-list?period=DAY&sortBy=VOLUME&sortOrder=DESC"
    );

    const res = resArr.data.leaderboard[0];
    console.log("High Roller", res);
    if (parseInt(res.profit) <= 5000)  return;
    const msgTemplate = `
𝐇𝐢𝐠𝐡 𝐑𝐨𝐥𝐥𝐞𝐫 💸
🔥 Big stakes, bigger rewards! Here's today's High Roller:
𝗝𝘂𝘀𝘁𝗕𝗲𝘁 Profile: ${jbProfile}${res.player}
💵 𝗕𝗲𝘁: ${res.bet}
🏅 𝗪𝗼𝗻: ${res.won}
📊 𝗩𝗼𝗹𝘂𝗺𝗲: ${res.volume}

Keep crushing it! 🏆 #HighRoller #JustBet
    `;

    const flag = "highRoller";
    //get Image buffer
    const buffer = await generateImage(res,flag );

    await tweet(msgTemplate, buffer);
    // //send alert to TG/DC
    // await axios.post(`${process.env.SERVER_URL}/shoutouts`, {
    //   message: msgTemplate,
    //   flag,
    //   res,
    // });
  } catch (error) {
    console.log("Error at fetching High Roller: ", error);
  }
};

const getTodaysTopGainer = async () => {
  try {
    const resArr = await axios.get(
      "https://gateway.winr.games/statistic/profit-leaderboard-list?period=DAY&sortBy=PROFIT&sortOrder=DESC"
    );

    const res = resArr.data.leaderboard[0];
    console.log("Top Gainer", res.profit);
    if (parseInt(res.profit) <= 1000)  return;

    const msgTemplate = `
𝐓𝐨𝐩 𝐆𝐚𝐢𝐧𝐞𝐫 📈
👏 Huge props to today’s Top Gainer—what a legend!
𝗝𝘂𝘀𝘁𝗕𝗲𝘁 Profile: ${jbProfile}${res.player}
💰 𝗣𝗿𝗼𝗳𝗶𝘁: ${res.profit}
🏅 𝗪𝗼𝗻: ${res.won}
💵 𝗕𝗲𝘁: ${res.bet}

Keep soaring! 🚀 #TopGainer #JustBet
    `;
    const flag = "gainer";
    //get Image buffer
    const buffer = await generateImage(res, flag);

    await tweet(msgTemplate, buffer);
    //  //send alert to TG/DC
    //  await axios.post(`${process.env.SERVER_URL}/shoutouts`, {"message" : msgTemplate,
    //   flag,
    //   res
    //   });
  } catch (error) {
    console.log("Error at fetching Top Gainer: ", error);
  }
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const executeSequentially = async () => {
  try {
    console.log(
      "Starting daily tweets execution at:",
      new Date().toISOString()
    );

    await getTodaysLuckyWinner();
    console.log("Lucky Winner tweet completed");
    await sleep(5000);

    await getTodaysHighRoller();
    console.log("High Roller tweet completed");
    await sleep(5000);

    await getTodaysTopGainer();
    console.log("Top Gainer tweet completed");

    console.log(
      "All tweets completed successfully at:",
      new Date().toISOString()
    );
  } catch (error) {
    console.error("Error in executeSequentially:", error);
  }
};

// Optional: If you want to test the execution immediately
// executeSequentially();
// getTodaysHighRoller();
// getTodaysTopGainer()


module.exports = { executeSequentially };
