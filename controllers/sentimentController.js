const pd = require("paralleldots");
const config = require("../config/config");

pd.apiKey = config.api_key;

exports.getKeywords = async (req, res, next) => {
  try {
    const { text } = req.body;
    const result = JSON.parse(await pd.keywords(text));
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

exports.sentimentComments = async (req, res, next) => {
  try {
    const { comment } = req.body;
    const result = JSON.parse(await pd.sentiment(comment));
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

exports.facialEmotion = (req, res, next) => {
  const {fileUrl} = req.body;
  pd.facialEmotion(fileUrl, (type = "url"))
    .then(response => {
      res.status(200).json(JSON.parse(response))
    })
    .catch(error => {
      console.log(error);
    });
};