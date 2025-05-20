const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Dummy ad generator route (mock data)
app.post('/generate-ads', (req, res) => {
  const { businessType, offer, targetAudience } = req.body;

  // Simple fake responses (you can customize these)
  const ads = [
    {
      headline: `Limited Time Offer on ${businessType}`,
      subheadline: `Don't miss out – ${offer} for ${targetAudience}`,
      cta: 'Shop Now'
    },
    {
      headline: `Exclusive ${offer} for ${targetAudience}`,
      subheadline: `Top-rated ${businessType} deal ends soon!`,
      cta: 'Grab the Deal'
    },
    {
      headline: `🔥 Hot Deal for ${targetAudience}`,
      subheadline: `${businessType} special: ${offer}`,
      cta: 'Get Yours Today'
    }
  ];

  res.status(200).json({ ads });
});

// Health check
app.get('/', (req, res) => {
  res.send('✅ FunnelIQ API (Mock Version) is running!');
});

// Start the server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`✅ Mock server running on http://localhost:${PORT}`);
});
