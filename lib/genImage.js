const { createCanvas, loadImage } = require("canvas");

// Dimensions of the canvas
const canvasWidth = 1200;
const canvasHeight = 675;

// Create a canvas and get the context
const canvas = createCanvas(canvasWidth, canvasHeight);
const ctx = canvas.getContext("2d");

const formatValue = (value) => {
  return parseFloat(value).toFixed(2);
}

const formatAddr = (addr) => {
  return addr.slice(0,3) + "..." + addr.slice(-3);
}

// Function to generate the image
async function generateImage(values, flag) {
  try {
    // Load the background image
    const baseImage = await loadImage('./lib/baseImage.png'); // Replace with the path to your image
    ctx.drawImage(baseImage, 0, 0, canvasWidth, canvasHeight);

    // Set text styles
    ctx.fillStyle = "#FFFFFF";

    // Draw the Multiplier, Wager, and Player
    ctx.font = "bold 39px Arial";

    if (flag === "lucky") {
      ctx.fillText("Multiplier", 320, 500); // Multiplier position
      ctx.fillText("Level", 558, 500); // Wager position
      ctx.font = " bold 31px Arial";
      ctx.fillText("x" + values.multiplier, 378, 545); // Multiplier position
      ctx.fillText(values.level, 600, 545); // Wager position
      // Draw the game name in the gray area
      ctx.font = "bold 30px Arial";
      ctx.fillText(values.game, 795, 110);

      ctx.font = "bold 145px Arial";
      ctx.fillStyle = "#FFFFFF";

    // Draw the dollar value
     ctx.fillText(formatValue(values.profit), 470, 355);

    } else if (flag === "gainer") {
      ctx.fillText("Profit", 320, 500); 
      ctx.fillText("Bet", 558, 500);
      ctx.font = " 31px Arial";
      ctx.fillText("$"+formatValue(values.profit), 320, 545); 
      ctx.fillText(values.bet, 558, 545); 

      ctx.font = "bold 145px Arial";
      ctx.fillStyle = "#FFFFFF";

    // Draw the dollar value
    ctx.fillText(formatValue(values.won), 470, 355);

    } else if (flag === "highRoller") {
      ctx.fillText("Won", 320, 500); 
      ctx.fillText("Bet", 558, 500); 
      ctx.font = " 29px Arial";
      ctx.fillText("$"+formatValue(values.won), 320, 545); 
      ctx.fillText(values.bet, 558, 545); 

      ctx.font = "bold 145px Arial";
      ctx.fillStyle = "#FFFFFF";

    // Draw the dollar value
    ctx.fillText(formatValue(values.volume), 470, 355);
    }

    ctx.font = "bold 38px Arial";
    ctx.fillText("Player", 740, 500);
    ctx.font = " 29px Arial";
    ctx.fillText(formatAddr(values.player), 745, 545);

    // Save the generated image
    const buffer = canvas.toBuffer("image/png");

    // fs.writeFileSync("./output.png", buffer, (err) => {
    //   if (err) {
    //     console.error("Error saving the image:", err);
    //   } else {
    //     console.log("Image saved as ./output.png");
    //   }
    // });

    return buffer;
  } catch (err) {
    console.error("Error generating image:", err);
  }
}

// generateImage({multiplier: 2.5, level: 3, game: "Crash", profit: 1000, player:"0xjsjhdfjhdsjhdgdsgs"}, "lucky");
// generateImage({won: 1000, bet: 1000, volume: 1000, player:"0xjsjhdfjhdsjhdgdsgs"}, "highRoller");
// generateImage({profit: 1000,won: 1000, bet: 1000, player:"0xjsjhdfjhdsjhdgdsgs"}, "gainer");

module.exports = { generateImage };