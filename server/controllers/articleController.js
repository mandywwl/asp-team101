const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.getRecommendedArticles = async (req, res) => {
  try {
    console.log('Fetching article recommendations');

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{
        role: "user",
        content: "Generate 5 recommendations for existing mental health related articles from the internet. For each article, provide a title, a brief summary, and a real URL. Format the response as JSON."
      }],
      max_tokens: 500,
    });

    const recommendations = JSON.parse(completion.choices[0].message.content);

    console.log('Processed recommendations:', recommendations);
    res.json(recommendations);
  } catch (error) {
    console.error('Error getting article recommendations:', error);
    res.status(500).json({ message: 'Error fetching article recommendations' });
  }
};