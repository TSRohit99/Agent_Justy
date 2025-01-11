const { twitterClient} = require("../configs/twitterClient.js");
const {v1Client} = require("../configs/v1TwitterClient.js");

const uploadMedia = async (imageBuffer) => {
    try {
      // Convert buffer to base64 string and specify the media_data parameter
      const media_data = imageBuffer.toString('base64');
      
      const media = await v1Client.post('media/upload', {
        media_data: media_data
      });
      
    //   console.log("Media upload response:", media);
      return media.media_id_string;
    } catch (error) {
      console.error("Error uploading media: ", error);
      if (error.message) console.error("Error message:", error.message);
      if (error.response) console.error("Error response:", error.response.toJSON());
      return null;
    }
  };
  
  const tweet = async (status, buffer) => {
    try {
      const mediaId = await uploadMedia(buffer);
      
      if (!mediaId) {
        console.error("Failed to upload media");
        return;
      }
  
      const result = await twitterClient.v2.tweet({
          text: status,
          media: { media_ids: [mediaId] }
        });
  
    //   console.log("Tweet sent successfully:", result);
      return result;
    } catch (error) {
      console.error("Error sending tweet:", error);
      throw error;
    }
  };
  
  const rawTweet = async (status) => {
    try {
      // Add more specific error logging
      const result = await twitterClient.v2.tweet({
        text: status
      });
      console.log("Raw tweet response:", result);
      return result;
    } catch (error) {
      console.error("Error sending rawTweet:", {
        message: error.message,
        code: error.code,
        data: error.data
      });
      throw error; // Re-throw to handle it in the calling function
    }
  };

  
  module.exports = { tweet, rawTweet };