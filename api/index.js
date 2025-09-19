// This file is only used for Vercel deployment
// It ensures that the API routes are properly configured

module.exports = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'AlphaQ Projects API is running correctly on Vercel',
    time: new Date().toISOString()
  });
};