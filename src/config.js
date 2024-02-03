require("dotenv").config();

module.exports = {
  token: process.env.TOKEN || '', 
  prefix: process.env.PREFIX || '.', 
  ownerID: process.env.OWNERID?.split(',') || ['',''], 
    SpotifyID: process.env.SPOTIFYID || '',
    SpotifySecret: process.env.SPOTIFYSECRET || '',
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
