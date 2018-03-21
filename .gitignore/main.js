
const RhythmBot = require('./src/ndmbot.js');
const logger = require('./src/logger.js');

const bot = new NDMbot({
    command: {
        symbol: '-' // command symbol trigger
    },
    discord: {
        token: '<NDI1Nzk3ODE1Mzc0MTg0NDU4.DZND6A.81NfAx53NQt9NEVyW_rNJ3Ccm4s>'//,
        // manage: {
        //     channels: [ 
        //         // Example text channel manager, limits media channel to 5 posts, limit should probably be less than 100 to avoid bugs
        //         { name: 'media', limit: 5 }  
        //     ]
        // }
    }
});

bot.connect()
    .then(() => { 
        logger.log('Listening');
        bot.listen();
    })
    .catch(err => {
        logger.error(err);
    });
