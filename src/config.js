require("dotenv").config();

module.exports = {
  token: process.env.TOKEN || '', 
  prefix: process.env.PREFIX || '.', 
  ownerID: process.env.OWNERID?.split(',') || ['748505124543922219',''], 
    SpotifyID: process.env.SPOTIFYID || 'db562a90c37e447e90ec7a2791169ccd',
    SpotifySecret: process.env.SPOTIFYSECRET || '025b688074514291aa58f07bbf6e8ad3',
  mongourl: process.env.MONGO_URI || '', 
  embedColor: process.env.COlOR || '#DDBD86', // 
  logs: process.env.LOGS || '', 
  links: {
    support: process.env.SUPPORT || '',
    invite: process.env.INVITE || '',
    vote: process.env.VOTE || '',
    bg: process.env.BG || ''
  },

  nodes: [
    {
          url: process.env.NODE_URL || 'lava.link:80',
      name: process.env.NODE_NAME || 'Name',
          auth: process.env.NODE_AUTH || 'CodersPlanet',
      secure: parseBoolean(process.env.NODE_SECURE || 'false'),
    },
  ],
};

function parseBoolean(value){
    if (typeof(value) === 'string'){
        value = value.trim().toLowerCase();
    }
    switch(value){
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
