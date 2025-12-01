const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
  try {
    const code = req.body.code || req.body.prompt;

    if (!code) {
      return res.status(400).send("Code is required");
    }

    const response = await aiService(code);
    res.send(response);

  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
