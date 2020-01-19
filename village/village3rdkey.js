const discord = require('discord.js');
// var client = new discord.Client();

module.exports = {
    //HR1
    v1: function(message){
        const v1_embed = {
            color: 0x8600AE,
            title: 'Village Quest Lv ★',
           // url: 'https://discord.js.org',
            author: {
                name: 'Village Quest Lv ★ (Total Quest 5)',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/e/e4/Yukumo-Chief.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/e/e4/Yukumo-Chief.png',
            },
            fields: [
                {
                    name: '3/5.  Jaggi Takedown',
                    value: 'Hunt 5 Jaggi\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '4/5. BUlly the Bullfango',
                    value: 'Slay 3 Bullfangos\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '5/5. Harbringer of Terror',
                    value: 'Deliver 5 Royal Honey \n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '**URGENT!!** Blue Bear: Arzuros!',
                    value: 'Hunt an Arzuros\n***Reqs : Semua Lv ★ Key Quests***',
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
        message.channel.send({embed:v1_embed});
        console.log('responded')
    },

    v2: function(message){
        const v2_embed = {
            color: 0x8600AE,
            title: 'Village Quest Lv ★★',
           // url: 'https://discord.js.org',
            author: {
                name: 'Village Quest Lv ★★ (Total Quest 17)',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/e/e4/Yukumo-Chief.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/e/e4/Yukumo-Chief.png',
            },
            fields: [
                {
                    name: '5/17.  Forest Murmur',
                    value: 'Hunt the Bulldrome\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '10/17.  Pain in the Plains',
                    value: 'Hunt a Great Jaggi\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '15/17. No Love for Ludroth',
                    value: 'Hunt 5 Ludroths\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '16/17. Poisonous',
                    value: 'Hunt 10 Wroggi\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '**URGENT!!** Dancing Qurupeco',
                    value: 'Hunt a Qurupeco\n***Reqs : Semua Lv ★★ Key Quests***',
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
        message.channel.send({embed:v2_embed});
        console.log('responded')
    },

    v3: function(message){
        const v3_embed = {
            color: 0x8600AE,
            title: 'Village Quest Lv ★★★',
           // url: 'https://discord.js.org',
            author: {
                name: 'Village Quest Lv ★★★ (Total Quest 19)',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/0c/MHP3rd-Konaha.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/0c/MHP3rd-Konaha.png',
            },
            fields: [
                {
                    name: '5/19.  Leading the Charge!',
                    value: 'Hunt the Barroth\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '9/19. Toxic Troublemaker',
                    value: 'Hunt the Great Wroggi\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '13/19. Current Events',
                    value: 'Hunt the Royal Ludroth\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '17/19. The Snowbound Slider',
                    value: 'Hunt the Lagombi\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '**URGENT!!** Dancing at Misty Peaks!?!',
                    value: 'Hunt the Rathian\n***Reqs : Semua Lv ★★★ Key Quests***',
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
        message.channel.send({embed:v3_embed});
        console.log('responded')
    },

    v4: function(message){
        const v4_embed = {
            color: 0x8600AE,
            title: 'Village Quest Lv ★★★★',
           // url: 'https://discord.js.org',
            author: {
                name: 'Village Quest Lv ★★★★ (Total Quest 17)',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/0c/MHP3rd-Konaha.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/0c/MHP3rd-Konaha.png',
            },
            fields: [
                {
                    name: '4/17. Sand Table Manners',
                    value: 'Hunt the Nibblesnarf\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '8/17. Sleep Traps',
                    value: 'Hunt Great Baggi\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '9/17. The Creeping Venom',
                    value: 'Hunt the Giginox\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '**URGENT!!** How at the Moon',
                    value: 'Hunt the Zinogre\n***Reqs : Semua Lv ★★★★ Key Quests ***',
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
        message.channel.send({embed:v4_embed});
        console.log('responded')
    },

    v5: function(message){
        const hr5_embed = {
            color: 0x8600AE,
            title: 'Village Quest Lv ★★★★★★',
           // url: 'https://discord.js.org',
            author: {
                name: 'Guild Quest HR 5 (Total Quest 17)',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/0c/MHP3rd-Konaha.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/0c/MHP3rd-Konaha.png',
            },
            fields: [
                {
                    name: '3/17.  Jumping At Shadows',
                    value: 'Hunt the Nargacuga\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '7/17. The Lost Expedition',
                    value: 'Hunt the Barioth\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '9/17. The Volcano\'s Fury!',
                    value: 'Hunt the Uragaan\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '10/17. In Need of a Hero',
                    value: 'Hunt the Rathalos\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '**URGENT!!** Hammer Time',
                    value: 'Hunt the Duramboros\n***Reqs : Semua Village Quest Lv ★★★★★ Key Quests ***',
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
        message.channel.send({embed:hr5_embed});
        console.log('responded')
    },

    v6: function(message){
        const v6_embed = {
            color: 0x8600AE,
            title: 'Village Quest Lv ★★★★★★',
           // url: 'https://discord.js.org',
            author: {
                name: 'Village Quest Lv ★★★★★★ (Total Quest 15)',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/0c/MHP3rd-Konaha.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/0c/MHP3rd-Konaha.png',
            },
            fields: [
                {
                    name: '2/15.  Horned Wyvern Hunt',
                    value: 'Hunt the Diablos\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '3/15. Tigrex Interception',
                    value: 'Hunt Tigrex\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '9/15. Leviathan in the Fire! ',
                    value: 'Hunt the Agnaktor\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '**URGENT!!** The Desert Feast!',
                    value: 'Slay a Jhen Mohran\n***Reqs : Village Quest Lv ★★★★★★ Key Quests ***',
                    inline: false,
                },
                {
                    name: '**SPECIAL!!**The Last Supper',
                    value: 'Hunt The Main Monster\n***Reqs : Selesaikan Semua Village Quest***',
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
        message.channel.send({embed:v6_embed});
        console.log('responded')
    },
}