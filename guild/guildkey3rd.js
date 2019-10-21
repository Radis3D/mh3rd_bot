const discord = require('discord.js');
// var client = new discord.Client();

module.exports = {
    //HR1
    hr1: function(message){
        const hr1_embed = {
            color: 0x8600AE,
            title: 'Guild Quest HR 1 (★★★)',
           // url: 'https://discord.js.org',
            author: {
                name: 'Guild Quest HR 1',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/0c/MHP3rd-Konaha.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/0c/MHP3rd-Konaha.png',
            },
            fields: [
                {
                    name: '7.  Sand Brute Barroth!',
                    value: 'Hunt the Barroth\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '11. Save our Boat',
                    value: 'Hunt Royal Ludroth\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '16. Qurupeco Bird Hunting!',
                    value: 'Hunt Qurupeco\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '17. My Lord\'s Errand',
                    value: 'Hunt Arzuros\n***Reqs : None***',
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
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        message.channel.send({embed:hr1_embed});
        console.log('responded')
    },

    hr2: function(message){
        const hr2_embed = {
            color: 0x8600AE,
            title: 'Guild Quest HR 2 (★★★★)',
           // url: 'https://discord.js.org',
            author: {
                name: 'Guild Quest HR 2',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/0c/MHP3rd-Konaha.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/0c/MHP3rd-Konaha.png',
            },
            fields: [
                {
                    name: '5.  Hungry Eyes',
                    value: 'Hunt Nargacuga\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '9.  Sand Table Manners',
                    value: 'Hunt Nibelsnarf\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '12. Reel in a Rathian',
                    value: 'Hunt Rathian\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '16. Ice Fanged Beast Barioth',
                    value: 'Hunt Barioth\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '22. The Volcano\'s Fury!',
                    value: 'Hunt Uragaan\n***Reqs : None***',
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
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        message.channel.send({embed:hr2_embed});
        console.log('responded')
    },

    hr3: function(message){
        const hr3_embed = {
            color: 0x8600AE,
            title: 'Guild Quest HR 3 (★★★★★)',
           // url: 'https://discord.js.org',
            author: {
                name: 'Guild Quest HR 3',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/0c/MHP3rd-Konaha.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/0c/MHP3rd-Konaha.png',
            },
            fields: [
                {
                    name: '3.  Hunt the Wvern on Desert',
                    value: 'Hunt Diablos\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '7. Duramboros Watershed',
                    value: 'Hunt Durmaboros\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '10. Hunt the King of the Skies!',
                    value: 'Hunt Rathalos\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '12. Tigrex Frozen Roar',
                    value: 'Hunt Tigrex\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '14. A Beast Lives in a Sea of Fire!',
                    value: 'Hunt Agnaktor\n***Reqs : None***',
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
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        message.channel.send({embed:hr3_embed});
        console.log('responded')
    },

    hr4: function(message){
        const hr4_embed = {
            color: 0x8600AE,
            title: 'Guild Quest HR 4 (★★★★★★)',
           // url: 'https://discord.js.org',
            author: {
                name: 'Guild Quest HR 4',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/1/13/MHP3rd-Sasayu.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/1/13/MHP3rd-Sasayu.png',
            },
            fields: [
                {
                    name: '5.  Hunt 2x Arzuros is Hard',
                    value: 'Hunt 2 Arzuros\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '9. Fight of Two Punishments!',
                    value: 'Hunt 2 Great Jaggi\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '10. Sand Brute Barroth!',
                    value: 'Hunt Barroth\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '20. Watery Poison',
                    value: 'Hunt Purple Ludroth\n***Reqs : Quest : Water Flow Island Storm***',
                    inline: true,
                },
                {
                    name: '22. Qurupeco Bird Hunting!',
                    value: 'Hunt Qurupeco\n***Reqs : None***',
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
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        message.channel.send({embed:hr4_embed});
        console.log('responded')
    },
}