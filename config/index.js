module.exports = {
  db: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
  sendgridKey: process.env.SENDGRID_API_KEY,
  facebookAuth: {
      clientID: process.env.FBCLIENT_ID,
      clientSecret: process.env.FBCLIENT_SECRET,
      callbackUrl: process.env.production ? 'https://edge-gym.herokuapp.com/auth/facebook/callback' 
                : 'http://localhost:4000/auth/facebook/callback'
  }
};
