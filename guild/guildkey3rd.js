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
                name: 'Guild Quest HR 1 (Total Quest 19)',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/0c/MHP3rd-Konaha.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/0c/MHP3rd-Konaha.png',
            },
            fields: [
                {
                    name: '7/19.  Sand Brute Barroth!',
                    value: 'Hunt the Barroth\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '11/19. Save our Boat',
                    value: 'Hunt the Royal Ludroth\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '16/19. Qurupeco Bird Hunting!',
                    value: 'Hunt the Qurupeco\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '17/19. My Lord\'s Errand',
                    value: 'Hunt the Arzuros\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '**URGENT!!** Poison Wyvern, Giginox!',
                    value: 'Hunt the Giginox\n***Reqs : Semua 3★ Key Quests***',
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
        message.channel.send({embed:hr1_embed});
        console.log('responded')
    },

    hr2: function(message){
        const hr2_embed = {
            color: 0x8600AE,
            title: 'Guild Quest HR 2 (★★★★)',
           // url: 'https://discord.js.org',
            author: {
                name: 'Guild Quest HR 2 (Total Quest 24)',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/0c/MHP3rd-Konaha.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/0c/MHP3rd-Konaha.png',
            },
            fields: [
                {
                    name: '5/24.  Hungry Eyes',
                    value: 'Hunt Nargacuga\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '9/24.  Sand Table Manners',
                    value: 'Hunt the Nibelsnarf\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '12/24. Reel in a Rathian',
                    value: 'Hunt the Rathian\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '16/24. Ice Fanged Beast Barioth',
                    value: 'Hunt the Barioth\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '22/24. The Volcano\'s Fury!',
                    value: 'Hunt the Uragaan\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '**URGENT!!** Hunt Before the Hunt!',
                    value: 'Hunt the Zinogre\n***Reqs : Semua 4★ Key Quests***',
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
        message.channel.send({embed:hr2_embed});
        console.log('responded')
    },

    hr3: function(message){
        const hr3_embed = {
            color: 0x8600AE,
            title: 'Guild Quest HR 3 (★★★★★)',
           // url: 'https://discord.js.org',
            author: {
                name: 'Guild Quest HR 3 (Total Quest 22)',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/0c/MHP3rd-Konaha.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/0c/MHP3rd-Konaha.png',
            },
            fields: [
                {
                    name: '3/22.  Hunt the Wvern on Desert',
                    value: 'Hunt the Diablos\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '7/22. Duramboros Watershed',
                    value: 'Hunt the Durmaboros\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '10/22. Hunt the King of the Skies!',
                    value: 'Hunt the Rathalos\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '12/22. Tigrex Frozen Roar',
                    value: 'Hunt the Tigrex\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '14/22. A Beast Lives in a Sea of Fire!',
                    value: 'Hunt the Agnaktor\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '**URGENT!!** The Festival of Fear',
                    value: 'Repel Jhen Mohran\n***Reqs : Semua 5★ Key Quests***',
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
        message.channel.send({embed:hr3_embed});
        console.log('responded')
    },

    hr4: function(message){
        const hr4_embed = {
            color: 0x8600AE,
            title: 'Guild Quest HR 4 (★★★★★★)',
           // url: 'https://discord.js.org',
            author: {
                name: 'Guild Quest HR 4 (Total Quest 23)',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/1/13/MHP3rd-Sasayu.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/1/13/MHP3rd-Sasayu.png',
            },
            fields: [
                {
                    name: '5/23.  Hunt 2x Arzuros is Hard',
                    value: 'Hunt 2 Arzuros\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '9/23. Fight of Two Punishments!',
                    value: 'Hunt 2 Great Jaggi\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '10/23. Sand Brute Barroth!',
                    value: 'Hunt the Barroth\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '20/23. Watery Poison',
                    value: 'Hunt the Purple Ludroth\n***Reqs : Water Flow Island Storm***',
                    inline: true,
                },
                {
                    name: '22/23. Qurupeco Bird Hunting!',
                    value: 'Hunt the Qurupeco\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '**URGENT!!** Narg at Night',
                    value: 'Hunt the Nargacuga\n***Reqs : Semua 6★ Key Quests ***',
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
        message.channel.send({embed:hr4_embed});
        console.log('responded')
    },

    hr5: function(message){
        const hr5_embed = {
            color: 0x8600AE,
            title: 'Guild Quest HR 5 (★★★★★★★)',
           // url: 'https://discord.js.org',
            author: {
                name: 'Guild Quest HR 5 (Total Quest 35)',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/1/13/MHP3rd-Sasayu.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/1/13/MHP3rd-Sasayu.png',
            },
            fields: [
                {
                    name: '7/35.  Sandwiched In Between',
                    value: 'Hunt 2 Niblesnarf\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '8/35. Tornado Fangs',
                    value: 'Hunt the Sand Barioth\n***Reqs : Fanged Wvern, Barioth***',
                    inline: true,
                },
                {
                    name: '10/35. In The Dark - A Fast Shadow ',
                    value: 'Hunt the Green Nargacuga\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '18/35. Ripped At The Seems',
                    value: 'Hunt the Baleful Giginox\n***Reqs : The Creeping Venom***',
                    inline: true,
                },
                {
                    name: '26/35. King Of The Sky, Rathalos!',
                    value: 'Hunt the Rathalos\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '27/35. Amids A Dark Crater!',
                    value: 'Hunt the Steel Uragaan\n***Reqs : The Volcanos\'s Fury!***',
                    inline: true,
                },
                {
                    name: '**URGENT!!** Pair of Thanderous Roars',
                    value: 'Hunt 2 Zinogre\n***Reqs : Semua 7★ Key Quests ***',
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

    hr6: function(message){
        const hr6_embed = {
            color: 0x8600AE,
            title: 'Guild Quest HR 6 (★★★★★★★★)',
           // url: 'https://discord.js.org',
            author: {
                name: 'Guild Quest HR 6 (Total Quest 38)',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/1/13/MHP3rd-Sasayu.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/1/13/MHP3rd-Sasayu.png',
            },
            fields: [
                {
                    name: '2/38.  Mountain Beast, I Moves!',
                    value: 'Hunt the Duromboros\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '8/38. Black Anger in the Night',
                    value: 'Hunt the Black Diablos\n***Reqs : Hunt the Horned Wyvern! ***',
                    inline: true,
                },
                {
                    name: '15/38. In The Dark - A Fast Shadow ',
                    value: 'Hunt the Rathalos and Rathian \n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '19/38. Ripped At The Seems',
                    value: 'Hunt the Deviljho\n***Reqs : None***',
                    inline: true,
                },
                {
                    name: '20/38. Ice Wedge',
                    value: 'Hunt the Glacial Agnaktor\n***Reqs : A Living Dragon in The Lava!***',
                    inline: true,
                },
                {
                    name: '24/38. Roar of the Black Tigrex',
                    value: 'Hunt the Black Tigrex\n***Reqs : The Roaring Tundra Roars***',
                    inline: true,
                },
                {
                    name: '**URGENT!!** Rumble in the Great Desert',
                    value: 'Slay a Jhen Mohran or repel it Jhen Mohran\n***Reqs : Semua 8★ Key Quests ***',
                    inline: false,
                },
                {
                    name: '**URGENT!!**The Dancing Storm!',
                    value: 'Slay the Amatsu Magatsuchi\n***Reqs : Selesaikan 8★ Quest Jhen Mohran***',
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
        message.channel.send({embed:hr6_embed});
        console.log('responded')
    },
}