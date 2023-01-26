const { Configuration, OpenAIApi } = require('openai');
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generatePrompt = (person) => {
  return `Suggest 5 pickup lines for ${person}.`;
}

const generateLines = async (req, res) => {
  const { prompt } = req.body;
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(prompt),
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    console.log("Result - ", completion.data.choices[0].text);
    res.status(200).json({
      success: true,
      data: completion.data.choices[0].text,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

    res.status(400).json({
      success: false,
      error: 'The text could not be generated',
    });
  }
};



module.exports = { generateLines };
