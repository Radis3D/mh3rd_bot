const discord = require('discord.js');
// var client = new discord.Client();

module.exports = {
    specialquest: function(message){
        const specialquest_embed = {
            color: 0xfcba03,
            title: 'Special Quest',
           // url: 'https://discord.js.org',
            author: {
                name: 'Special Quest HR 6',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/1/13/MHP3rd-Sasayu.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/1/13/MHP3rd-Sasayu.png',
            },
            fields: [
                {
                    name: '35/39.  ???',
                    value: 'Hunt Black Diablos, Glacial Agnaktor, Brute Tigrex, and Zinogre\n***Unlock Quest: Clear all other Epic Hunts.***',
                    inline: false,
                },
                {
                    name: '36/39. Sitting Hellfire',
                    value: 'Slay Akantor\n***Unlock Quest: Selesaikan semua \'single hunt quest\' High Rank***',
                    inline: false,
                },
                {
                    name: '37/39. God of Avalanche',
                    value: 'Slay Ukanlos\n***Unlock Quest: Selesaikan semua \'single hunt quest\' High Rank***',
                    inline: false,
                },
                {
                    name: '38/39. ????',
                    value: 'Slay ALatreon\n***Unlock Quest: Selesaikan semua \'dual hunt quest\' High Rank***',
                    inline: false,
                },
                {
                    name: '39/39. Rumble in the Great Desert',
                    value: 'Slay a Jhen Mohran or repel it\n***Selesaikan semua 8★ Key Quest***',
                    inline: false,
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
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        message.channel.send({embed:specialquest_embed});
        console.log('responded')
    },
}