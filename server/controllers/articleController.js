const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.getRecommendedArticles = async (req, res) => {
  if (!process.env.OPENAI_API_KEY) {
    console.error('OPENAI_API_KEY is not set');
    return res.status(500).json({ message: 'Server configuration error' });
  }

  try {
    console.log('Fetching article recommendations');

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{
        role: "user",
        content: "Generate 5 recommendations for existing mental health related articles from the internet. For each article, provide a title, a brief summary, and an existing URL. Format the response as a JSON array without any markdown formatting."
      }],
      max_tokens: 500,
    });

    console.log('Raw OpenAI API response:', completion.choices[0].message.content);

    // Remove any potential markdown formatting
    let cleanedContent = completion.choices[0].message.content.replace(/```json\n?|\n?```/g, '').trim();

    let recommendations;
    try {
      recommendations = JSON.parse(cleanedContent);
      
      if (!Array.isArray(recommendations) || recommendations.length !== 5) {
        throw new Error('Unexpected response format');
      }

      recommendations.forEach(article => {
        if (!article.title || !article.summary || !article.url) {
          throw new Error('Missing required fields in article');
        }
      });

    } catch (parseError) {
      console.error('Error parsing or validating OpenAI response:', parseError);
      console.log('Cleaned content:', cleanedContent);
      return res.status(500).json({ message: 'Error processing recommendations' });
    }

    console.log('Processed recommendations:', recommendations);
    res.json(recommendations);
  } catch (error) {
    console.error('Detailed error:', error);
    console.error('Error stack:', error.stack);
    if (error.response) {
      console.error('OpenAI API error response:', error.response.data);
    }
    res.status(500).json({ message: 'Error fetching article recommendations', error: error.message });
  }
};