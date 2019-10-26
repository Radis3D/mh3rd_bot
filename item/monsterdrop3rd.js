const discord = require('discord.js');
// var client = new discord.Client();

module.exports = {
    rathianScaleP: function(message){
        const rathianScaleP_embed = {
            color: 0x00AE86,
            title: 'Hunt Rathian',
           // url: 'https://discord.js.org',
            author: {
                name: 'Rathian Scale+',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/1/18/MH4G-Scale_Icon_Green.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/1/18/MH4G-Scale_Icon_Green.png',
            },
            fields: [
                {
                    name: 'High Rank',
                    value: '**Carving :**\n***Body*** : 38%\n***Tail*** : 55%\n***Head*** : 20%\n***Shiny*** : 15%\n\n**Capture Reward** : 22%',
                    inline: true,
                },
                {
                    name: 'Low Rank',
                    value: 'No Data',
                    //value: '**Carving :**\n***Body*** : 38%\n***Tail*** : 55%\n***Head*** : 20%\n***Shiny*** : 15%\n\n**Capture Reward** : 22%',
                    inline: true,
                },
                                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            // image: {
            //     url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/1/12/DMG-GreatJaggi.png',
            // },
            // timestamp: new Date(),
            footer: {
                text: 'Gamefaqs',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        message.channel.send({embed:rathianScaleP_embed});
        console.log('responded')
    },

}