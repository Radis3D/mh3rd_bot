 const discord = require('discord.js');
// var client = new discord.Client();

module.exports = {
    //Great Jaggi
    greatjaggi: function(message){
        const greatjaggi_embed = {
            color: 0x00AE86,
            title: 'Great Jaggi / ドスジャギィ (Dosujagyi)',
           // url: 'https://discord.js.org',
            author: {
                name: 'Great Jaggi',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/8/8e/MHP3-Great_Jaggi_Icon.png/revision/latest/scale-to-width-down/62',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/8/8e/MHP3-Great_Jaggi_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: 'None',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: 'None',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '<:elefire:633851902622302230> Fire',
                    inline: true,
                },
                {
                    name: 'Traps',
                    value: '<:pitfaltrap:634038423442685963> : ★★★\n<:shocktrap:634038493395288065> : ★★★\n<:flashbomb:634045675235049477> : ★★★',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            image: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/1/12/DMG-GreatJaggi.png',
            },
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        message.channel.send({embed:greatjaggi_embed});
        console.log('responded')
    },

    //Agnaktor
    agnaktor: function(message){
        const attachment = new discord.Attachment('./img/DMG-Agnaktor.png')
        const agnaktor_embed = {
            color: 0x00AE86,
            title: 'Agnaktor / アグナコトル (Agunakotoru)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Agnaktor',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/6/64/MHP3-Agnaktor_Icon.png/revision/latest/scale-to-width-down/62',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/6/64/MHP3-Agnaktor_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: '<:elefire:633851902622302230> Fire',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: '<:elefire:633851902622302230> Fireblight',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '<:elewater:633851902659919883> Water\n<:eleice:633851903033212928> Ice\n<:eledragon:633851902911840257> Dragon',
                    inline: true,
                },
                {
                    name: 'Traps',
                    value: '<:shocktrap:634038493395288065> : ★★☆\n<:flashbomb:634045675235049477> : ★★☆\n<:sonicbomb:634045648810934292> : ★★☆',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            image: {
                url: 'attachment://DMG-Agnaktor.png',
            },        
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        message.channel.send({files: [attachment], embed:agnaktor_embed});
        console.log('responded')
    },

    //Glacial Agnaktor
    glacialagnaktor: function(message){
    const attachment = new discord.Attachment('./img/DMG-G.agnaktor.png')
    const glacialagnaktorr_embed = {
        color: 0x00AE86,
        title: 'Glacial Agnaktor / アグナコトル亜種 (Agunakotoru Ashu)',
        //url: 'https://discord.js.org',
        author: {
            name: 'Glacial Agnaktor',
            icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/1/18/MHP3-Glacial_Agnaktor_Icon.png',
            //url: 'https://discord.js.org',
        },
        //description: 'Some description here',
        thumbnail: {
            url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/1/18/MHP3-Glacial_Agnaktor_Icon.png',
        },
        fields: [
            {
                name: 'Element(s)',
                value: '<:elewater:633851902659919883> Water\n<:eleice:633851903033212928> Ice',
                inline: true,
            },
            {
                name: 'Ailment(s)',
                value: '<:elewater:633851902659919883> Waterblight\n<:eleice:633851903033212928> Iceblight',
                inline: true,
            },
            {
                name: 'Weakness',
                value: '<:elefire:633851902622302230> Fire\n<:eledragon:633851902911840257> Dragon',
                inline: true,
            },
            {
                name: 'Traps',
                value: '<:shocktrap:634038493395288065> : ★★☆\n<:flashbomb:634045675235049477> : ★★☆\n<:sonicbomb:634045648810934292> : ★★☆',
                inline: true,
            },
            /* {
                name: 'Inline field title',
                value: 'Some value here',
                inline: true,
            }, */
        ],
        image: {
            url: 'attachment://DMG-G.agnaktor.png',
        },        
        // timestamp: new Date(),
        footer: {
            text: 'Monster Hunter Fandom',
            icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
        },
    };
    message.channel.send({files: [attachment], embed:glacialagnaktorr_embed});
    // message.channel.send({embed:glacialagnaktorr_embed});
    console.log('responded')
    },

    akantor: function(message){
    //const attachment = new discord.Attachment('./img/DMG-Agnaktor.png')
    const akantor_embed = {
        color: 0x00AE86,
        title: 'Akantor / アカムトルム (Akamutorumu)',
        //url: 'https://discord.js.org',
        author: {
            name: 'Akantor',
            icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/3/3e/MHP3-Akantor_Icon.png',
            //url: 'https://discord.js.org',
        },
        //description: 'Some description here',
        thumbnail: {
            url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/3/3e/MHP3-Akantor_Icon.png',
        },
        fields: [
            {
                name: 'Element(s)',
                value: '<:elefire:633851902622302230> Fire\n<:eledragon:633851902911840257> Dragon',
                inline: true,
            },
            {
                name: 'Ailment(s)',
                value: '<:defdown:634321613722091540> Defense down\n<:elefire:633851902622302230> Fireblight',
                inline: true,
            },
            {
                name: 'Weakness',
                value: '<:eledragon:633851902911840257> Dragon\n<:elethunder:634322078354636800> Thunder (enrage)',
                inline: true,
            },
            {
                name: 'Traps',
                value: '<:flashbomb:634045675235049477> : ★★☆',
                inline: true,
            },
            /* {
                name: 'Inline field title',
                value: 'Some value here',
                inline: true,
            }, */
        ],
        image: {
            //url: 'attachment://DMG-Agnaktor.png',
        },        
        // timestamp: new Date(),
        footer: {
            text: 'Monster Hunter Fandom',
            icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
        },
    };
    //message.channel.send({files: [attachment], embed:agnaktor_embed});
    message.channel.send({embed:akantor_embed});
    console.log('responded')
    },

    
    arzuros: function(message){
        //const attachment = new discord.Attachment('./img/DMG-Agnaktor.png')
        const arzuros_embed = {
            color: 0x00AE86,
            title: 'Arzuros / アオアシラ (Aoashira)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Arzuros',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/5/52/MHP3-Arzuros_Icon.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/5/52/MHP3-Arzuros_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: 'None',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: 'None',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '<:elefire:633851902622302230> Fire\n<:eleice:633851903033212928> Ice',
                    inline: true,
                },
                {
                    name: 'Traps',
                    value: '<:shocktrap:634038493395288065> : ★★★\n<:pitfaltrap:634038423442685963> : ★★★\n<:flashbomb:634045675235049477> : ★★☆\n<:dungbomb:634343475109822485> : ★★☆',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            image: {
                //url: 'attachment://DMG-Agnaktor.png',
            },        
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        //message.channel.send({files: [attachment], embed:agnaktor_embed});
        message.channel.send({embed:arzuros_embed});
        console.log('responded')
    },

    barioth: function(message){
        //const attachment = new discord.Attachment('./img/DMG-Agnaktor.png')
        const barioth_embed = {
            color: 0x00AE86,
            title: 'Barioth / ベリオロス (Beriorosu)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Barioth',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/08/MHP3-Barioth_Icon.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/08/MHP3-Barioth_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: '<:eleice:633851903033212928> Ice',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: '<:snowsalju:634705578223992833> Snowman\n<:eleice:633851903033212928> Iceblight',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '<:elethunder:634322078354636800> Thunder\n<:elefire:633851902622302230> Fire ',
                    inline: true,
                },
                {
                    name: 'Traps',
                    value: '<:shocktrap:634038493395288065> : ★★☆\n<:flashbomb:634045675235049477> : ★★☆\n<:pitfaltrap:634038423442685963> : ★★☆\n<:dungbomb:634343475109822485> : ★★☆',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            image: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/8/8a/DMG-Barioth.png',
            },        
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        //message.channel.send({files: [attachment], embed:agnaktor_embed});
        message.channel.send({embed:barioth_embed});
        console.log('responded')
    },

    sandbarioth: function(message){
        //const attachment = new discord.Attachment('./img/DMG-Agnaktor.png')
        const sandbarioth_embed = {
            color: 0x00AE86,
            title: 'Sand Barioth / ベリオロス亜種 (Beriorosu Ashu)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Sand Barioth',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/2/26/MHP3-Sand_Barioth_Icon.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/2/26/MHP3-Sand_Barioth_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: 'None',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: 'None',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '<:elethunder:634322078354636800> Thunder\n<:eleice:633851903033212928> Ice',
                    inline: true,
                },
                {
                    name: 'Traps',
                    value: '<:shocktrap:634038493395288065> : ★★☆\n<:flashbomb:634045675235049477> : ★★☆\n<:pitfaltrap:634038423442685963> : ★★☆\n<:dungbomb:634343475109822485> : ★★☆',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            image: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/8/8a/DMG-Barioth.png',
            },        
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        //message.channel.send({files: [attachment], embed:agnaktor_embed});
        message.channel.send({embed:sandbarioth_embed});
        console.log('responded')
    },

    barroth: function(message){
        //const attachment = new discord.Attachment('./img/DMG-Agnaktor.png')
        const barroth_embed = {
            color: 0x00AE86,
            title: 'Barroth / ボルボロス (Boruborosu)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Barroth',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/1/11/MHP3-Barroth_Icon.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/1/11/MHP3-Barroth_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: 'None',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: '<:elewater:633851902659919883> Waterblight\n <:mudman:634713411313205254> Muddy',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '(<:elewater:633851902659919883> Water )\n<:elefire:633851902622302230> Fire\n<:eleice:633851903033212928> Ice\n*() ketika berlumpur*',
                    inline: true,
                },
                {
                    name: 'Traps',
                    value: '<:shocktrap:634038493395288065> : ★★☆\n<:flashbomb:634045675235049477> : ★★☆\n<:pitfaltrap:634038423442685963> : ★★☆\n<:dungbomb:634343475109822485> : ★★☆',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            image: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/3/38/DMG-Barroth.png/',
            },        
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        //message.channel.send({files: [attachment], embed:agnaktor_embed});
        message.channel.send({embed:barroth_embed});
        console.log('responded')
    },
    
    jadebarroth: function(message){
        //const attachment = new discord.Attachment('./img/DMG-Agnaktor.png')
        const jadebarroth_embed = {
            color: 0x00AE86,
            title: 'Jade Barroth / ボルボロス亜種 (Boruborosu Ashu)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Jade Barroth',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/9/91/MHP3-Jade_Barroth_Icon.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/9/91/MHP3-Jade_Barroth_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: '<:eleice:633851903033212928> Ice',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: '<:eleice:633851903033212928> Iceblight\n<:snowsalju:634705578223992833> Snowman',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '(<:elefire:633851902622302230> Fire )\n<:elethunder:634322078354636800> Thunder\n*() ketika bersalju*',
                    inline: true,
                },
                {
                    name: 'Traps',
                    value: '<:shocktrap:634038493395288065> : ★★☆\n<:flashbomb:634045675235049477> : ★★☆\n<:pitfaltrap:634038423442685963> : ★★☆\n<:dungbomb:634343475109822485> : ★★☆',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            image: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/3/38/DMG-Barroth.png/',
            },        
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        //message.channel.send({files: [attachment], embed:agnaktor_embed});
        message.channel.send({embed:jadebarroth_embed});
        console.log('responded')
    },

    bulldrome: function(message){
        //const attachment = new discord.Attachment('./img/DMG-Agnaktor.png')
        const bulldrome_embed = {
            color: 0x00AE86,
            title: 'Bulldrome / ドスファンゴ (Dosufango)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Bulldrome',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/4/49/MHP3-Bulldrome_Icon.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/4/49/MHP3-Bulldrome_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: 'None',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: 'None',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '<:elethunder:634322078354636800> Thunder',
                    inline: true,
                },
                {
                    name: 'Traps',
                    value: '<:shocktrap:634038493395288065> : ★★☆\n<:flashbomb:634045675235049477> : ★★☆\n<:pitfaltrap:634038423442685963> : ★★☆\n<:dungbomb:634343475109822485> : ★★☆',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            // image: {
            //     url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/3/38/DMG-Barroth.png/',
            // },        
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        //message.channel.send({files: [attachment], embed:agnaktor_embed});
        message.channel.send({embed:bulldrome_embed});
        console.log('responded')
    },

    nargacuga: function(message){
        //const attachment = new discord.Attachment('./img/DMG-Agnaktor.png')
        const nargacuga_embed = {
            color: 0x00AE86,
            title: 'Nargacuga / ナルガクルガ (Narugakuruga)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Nargacuga',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/1/1e/MHP3-Nargacuga_Icon.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/1/1e/MHP3-Nargacuga_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: 'None',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: 'None',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '<:elethunder:634322078354636800> Thunder\n<:elefire:633851902622302230> Fire',
                    inline: true,
                },
                {
                    name: 'Traps',
                    value: '<:shocktrap:634038493395288065> : ★★☆\n<:flashbomb:634045675235049477> : ★★☆\n<:pitfaltrap:634038423442685963> : ★★☆',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            // image: {
            //     url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/3/38/DMG-Barroth.png/',
            // },        
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        //message.channel.send({files: [attachment], embed:agnaktor_embed});
        message.channel.send({embed:nargacuga_embed});
        console.log('responded')
    },

    deviljho: function(message){
        //const attachment = new discord.Attachment('./img/DMG-Agnaktor.png')
        const deviljho_embed = {
            color: 0x00AE86,
            title: 'Deviljho / イビルジョー (Ibirujo)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Deviljho',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/9/9d/MHP3-Deviljho_Icon.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/9/9d/MHP3-Deviljho_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: '<:eledragon:633851902911840257> Dragon',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: '<:defdown:634321613722091540> Defense Down\n<:eledragon:633851902911840257> Dragonblight\n<:elefire:633851902622302230> Firebligth (di lava)\n<:eleice:633851903033212928> Iceblight (di es)\n<:elewater:633851902659919883> Waterblight (di perairan)',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '<:elethunder:634322078354636800> Thunder\n<:eledragon:633851902911840257> Dragon',
                    inline: true,
                },
                {
                    name: 'Traps',
                    value: '<:shocktrap:634038493395288065> : ★★☆\n<:flashbomb:634045675235049477> : ★★☆\n<:pitfaltrap:634038423442685963> : ★★☆',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            // image: {
            //     url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/3/38/DMG-Barroth.png/',
            // },        
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        //message.channel.send({files: [attachment], embed:agnaktor_embed});
        message.channel.send({embed:deviljho_embed});
        console.log('responded')
    },

    diablos: function(message){
        //const attachment = new discord.Attachment('./img/DMG-Agnaktor.png')
        const diablos_embed = {
            color: 0x00AE86,
            title: 'Diablos / ディアブロス (Diaburosu)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Diablos',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/0b/MHP3-Diablos_Icon.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/0b/MHP3-Diablos_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: 'None',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: 'None',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '<:eleice:633851903033212928> Ice',
                    inline: true,
                },
                {
                    name: 'Traps',
                    value: '<:shocktrap:634038493395288065> : ★★☆\n<:flashbomb:634045675235049477> : ★★☆\n<:pitfaltrap:634038423442685963> : ★★★ \n<:dungbomb:634343475109822485> : ★★☆\n <:sonicbomb:634045648810934292> : ★★★ ',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            image: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/c/c1/DMG-Diablos.png',
            },        
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        //message.channel.send({files: [attachment], embed:agnaktor_embed});
        message.channel.send({embed:diablos_embed});
        console.log('responded')
    },

    blackdiablos: function(message){
        //const attachment = new discord.Attachment('./img/DMG-Agnaktor.png')
        const blackdiablos_embed = {
            color: 0x00AE86,
            title: 'Black Diablos / ディアブロス亜種 (Diaburosu Ashu)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Black Diablos',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/e/e9/MHP3-Black_Diablos_Icon.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/e/e9/MHP3-Black_Diablos_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: 'None',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: 'None',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '<:eleice:633851903033212928> Ice',
                    inline: true,
                },
                {
                    name: 'Traps',
                    value: '<:shocktrap:634038493395288065> : ★★☆\n<:pitfaltrap:634038423442685963> : ★★★ \n<:flashbomb:634045675235049477> : ★★☆\n<:dungbomb:634343475109822485> : ★★☆\n<:sonicbomb:634045648810934292> : ★★★',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            image: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/c/c1/DMG-Diablos.png',
            },        
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        //message.channel.send({files: [attachment], embed:agnaktor_embed});
        message.channel.send({embed:blackdiablos_embed});
        console.log('responded')
    },

    duramboros: function(message){
        //const attachment = new discord.Attachment('./img/DMG-Agnaktor.png')
        const duramboros_embed = {
            color: 0x00AE86,
            title: 'Duramboros / ドボルベルク (Doboruberuku)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Duramboros',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/6/6a/MHP3-Duramboros_Icon.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/6/6a/MHP3-Duramboros_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: 'None',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: '<:stun:634925756765437952> Stun',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '<:elefire:633851902622302230> Fire',
                    inline: true,
                },
                {
                    name: 'Traps',
                    value: '<:shocktrap:634038493395288065> : ★★☆\n<:flashbomb:634045675235049477> : ★☆\n<:pitfaltrap:634038423442685963> : ★★★ \n<:dungbomb:634343475109822485> : ★☆☆',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            /* image: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/c/c1/DMG-Diablos.png',
            },         */
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        //message.channel.send({files: [attachment], embed:agnaktor_embed});
        message.channel.send({embed:duramboros_embed});
        console.log('responded')
    },

    tigrex: function(message){
        //const attachment = new discord.Attachment('./img/DMG-Agnaktor.png')
        const tigrex_embed = {
            color: 0x00AE86,
            title: 'Tigrex / ティガレックス (Tigarekkusu)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Tigrex',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/5/5a/MHP3-Tigrex_Icon.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/5/5a/MHP3-Tigrex_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: 'None',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: '<:snowsalju:634705578223992833> Snowman (di salju)\n<:eleice:633851903033212928> Iceblight (di es)\n<:elewater:633851902659919883> Waterblight (di perairan)',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '<:elethunder:634322078354636800> Thunder\n<:eledragon:633851902911840257> Dragon',
                    inline: true,
                },
                {
                    name: 'Traps',
                    //value: '<:shocktrap:634038493395288065> : ★★☆\n<:flashbomb:634045675235049477> : ★☆\n<:pitfaltrap:634038423442685963> : ★★★ \n<:dungbomb:634343475109822485> : ★☆☆',
                    value: 'no data',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            /* image: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/c/c1/DMG-Diablos.png',
            },         */
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        //message.channel.send({files: [attachment], embed:agnaktor_embed});
        message.channel.send({embed:tigrex_embed});
        console.log('responded')
    },

    giginox: function(message){
        //const attachment = new discord.Attachment('./img/DMG-Agnaktor.png')
        const giginox_embed = {
            color: 0x00AE86,
            title: 'Giginox / ギギネブラ (Giginebura)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Giginox',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/3/32/MHP3-Gigginox_Icon.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/3/32/MHP3-Gigginox_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: 'None',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: '<:poison:635011341630963712> Poison',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '<:elefire:633851902622302230> Fire',
                    inline: true,
                },
                {
                    name: 'Traps',
                    value: '<:pitfaltrap:634038423442685963> : ★★☆\n<:shocktrap:634038493395288065> : ★★☆\n<:dungbomb:634343475109822485> : ★★★',
                    //value: '',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            image: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/08/DMG-Gigginox.png',
            },        
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        //message.channel.send({files: [attachment], embed:agnaktor_embed});
        message.channel.send({embed:giginox_embed});
        console.log('responded')
    },

    balefulgiginox: function(message){
        //const attachment = new discord.Attachment('./img/DMG-Agnaktor.png')
        const balefulgiginox_embed = {
            color: 0x00AE86,
            title: 'Baleful Giginox / ギギネブラ亜種 (Giginebura ashu)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Baleful Giginox',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/c/c3/MHP3-Baleful_Gigginox_Icon.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/c/c3/MHP3-Baleful_Gigginox_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: '<:elethunder:634322078354636800> Thunder',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: '<:elethunder:634322078354636800> Thunderblight\n<:paralyze:635013149598154752> Paralyze',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '<:elewater:633851902659919883> Water',
                    inline: true,
                },
                {
                    name: 'Traps',
                    value: '<:pitfaltrap:634038423442685963> : ★★☆\n<:shocktrap:634038493395288065> : ★★☆\n<:dungbomb:634343475109822485> : ★★★',
                    //value: '',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            image: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/08/DMG-Gigginox.png',
            },        
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        //message.channel.send({files: [attachment], embed:agnaktor_embed});
        message.channel.send({embed:balefulgiginox_embed});
        console.log('responded')
    },

    greatbaggi: function(message){
        const greatbaggi_embed = {
            color: 0x00AE86,
            title: 'Great Baggi / ドスバギィ (Dosubagii)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Great Baggi',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/c/c4/MHP3-Great_Baggi_Icon.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/c/c4/MHP3-Great_Baggi_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: 'None',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: '<:sleep:635048249388040192> Sleep',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '<:elefire:633851902622302230> Fire',
                    inline: true,
                },
                {
                    name: 'Traps',
                    value: '<:pitfaltrap:634038423442685963> : ★★☆\n<:shocktrap:634038493395288065> : ★★☆\n<:flashbomb:634045675235049477> : ★★☆\n<:dungbomb:634343475109822485> : ★☆☆',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            image: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/5/5d/DMG-GreatBaggi.png',
            },
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        message.channel.send({embed:greatbaggi_embed});
        console.log('responded')
    },

    greatwroggi: function(message){
        const greatwroggi_embed = {
            color: 0x00AE86,
            title: 'Great Wroggi / ドスフロギィ (Dosufurogi)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Great Wroggi',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/3/36/MHP3-Great_Wroggi_Icon.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/3/36/MHP3-Great_Wroggi_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: 'None',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: '<:poison:635011341630963712> Poison',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '<:eleice:633851903033212928> Ice',
                    inline: true,
                },
                {
                    name: 'Traps',
                    value: '<:pitfaltrap:634038423442685963> : ★★☆\n<:shocktrap:634038493395288065> : ★★☆\n<:flashbomb:634045675235049477> : ★★☆\n<:dungbomb:634343475109822485> : ★☆☆',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            /* image: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/5/5d/DMG-GreatBaggi.png',
            }, */
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        message.channel.send({embed:greatwroggi_embed});
        console.log('responded')
    },

    lagombi: function(message){
        //const attachment = new discord.Attachment('./img/DMG-Agnaktor.png')
        const lagombi_embed = {
            color: 0x00AE86,
            title: 'Lagombi / ウルクスス (Urukususu)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Lagombi',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/02/MHP3-Lagombi_Icon.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/02/MHP3-Lagombi_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: '<:eleice:633851903033212928> Ice',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: '<:eleice:633851903033212928> Iceblight',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '<:elefire:633851902622302230> Fire\n<:elethunder:634322078354636800> Thunder',
                    inline: true,
                },
                {
                    name: 'Traps',
                    //value: '<:shocktrap:634038493395288065> : ★★☆\n<:flashbomb:634045675235049477> : ★★☆\n<:pitfaltrap:634038423442685963> : ★★☆\n<:dungbomb:634343475109822485> : ★★☆',
                    value: 'no data',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            // image: {
            //     url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/3/38/DMG-Barroth.png/',
            // },        
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        //message.channel.send({files: [attachment], embed:agnaktor_embed});
        message.channel.send({embed:lagombi_embed});
        console.log('responded')
    },

    greennargacuga: function(message){
        //const attachment = new discord.Attachment('./img/DMG-Agnaktor.png')
        const greennargacuga_embed = {
            color: 0x00AE86,
            title: 'Nargacuga / ナルガクルガ (Narugakuruga)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Nargacuga',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/2/25/MHP3-Green_Nargacuga_Icon.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/2/25/MHP3-Green_Nargacuga_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: 'None',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: '<:stun:634925756765437952> Stun',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '<:elethunder:634322078354636800> Thunder\n<:elefire:633851902622302230> Fire',
                    inline: true,
                },
                {
                    name: 'Traps',
                    // value: '<:shocktrap:634038493395288065> : ★★☆\n<:flashbomb:634045675235049477> : ★★☆\n<:pitfaltrap:634038423442685963> : ★★☆',
                    value:'no data',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            // image: {
            //     url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/3/38/DMG-Barroth.png/',
            // },        
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        //message.channel.send({files: [attachment], embed:agnaktor_embed});
        message.channel.send({embed:greennargacuga_embed});
        console.log('responded')
    },

    niblesnarf: function(message){
        //const attachment = new discord.Attachment('./img/DMG-Agnaktor.png')
        const niblesnarf_embed = {
            color: 0x00AE86,
            title: 'Nibelsnarf / ハプルボッカ (Hapurubokka)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Nibelsnarf',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/1/16/MHP3-Nibelsnarf_Icon.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/1/16/MHP3-Nibelsnarf_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: 'None',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: '<:elewater:633851902659919883> Waterblight',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '<:eleice:633851903033212928> Ice\n<:elethunder:634322078354636800> Thunder',
                    inline: true,
                },
                {
                    name: 'Traps',
                    //value: '<:shocktrap:634038493395288065> : ★★☆\n<:flashbomb:634045675235049477> : ★★☆\n<:pitfaltrap:634038423442685963> : ★★☆\n<:dungbomb:634343475109822485> : ★★☆',
                    value: 'no data',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            // image: {
            //     url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/3/38/DMG-Barroth.png/',
            // },        
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        //message.channel.send({files: [attachment], embed:agnaktor_embed});
        message.channel.send({embed:niblesnarf_embed});
        console.log('responded')
    },

    qurupeco: function(message){
        //const attachment = new discord.Attachment('./img/DMG-Agnaktor.png')
        const qurupeco_embed = {
            color: 0x00AE86,
            title: 'Qurupeco / クルペッコ (Kurupekko)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Qurupeco',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a7/MHP3-Qurupeco_Icon.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a7/MHP3-Qurupeco_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: '<:elefire:633851902622302230> Fire',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: '<:elefire:633851902622302230> Fireblight\n<:defdown:634321613722091540> Defense Down',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '<:eleice:633851903033212928> Ice',
                    inline: true,
                },
                {
                    name: 'Traps',
                    value: '<:pitfaltrap:634038423442685963> : ★★★\n<:shocktrap:634038493395288065> : ★★★\n<:flashbomb:634045675235049477> : ★★☆\n<:sonicbomb:634045648810934292> : ★★☆\n<:dungbomb:634343475109822485> : ★★☆',
                    //value: 'no data',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            image: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/e/e1/DMG-Qurupeco.png',
            },        
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        //message.channel.send({files: [attachment], embed:agnaktor_embed});
        message.channel.send({embed:qurupeco_embed});
        console.log('responded')
    },
    
    crimsonqurupeco: function(message){
        //const attachment = new discord.Attachment('./img/DMG-Agnaktor.png')
        const qurupeco_embed = {
            color: 0x00AE86,
            title: 'Crimson Qurupeco / クルペッコ亜種 (Kurupekko Ashu)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Crimson Qurupeco',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/8/8b/MHP3-Crimson_Qurupeco_Icon.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/8/8b/MHP3-Crimson_Qurupeco_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: '<:elethunder:634322078354636800> Thunder',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: '<:elethunder:634322078354636800> Thunderblight\n<:stun:634925756765437952> Stun',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '<:eleice:633851903033212928> Ice',
                    inline: true,
                },
                {
                    name: 'Traps',
                    value: '<:pitfaltrap:634038423442685963> : ★★★\n<:shocktrap:634038493395288065> : ★★★\n<:flashbomb:634045675235049477> : ★★☆\n<:sonicbomb:634045648810934292> : ★★☆\n<:dungbomb:634343475109822485> : ★★☆',
                    //value: 'no data',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            image: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/e/e1/DMG-Qurupeco.png',
            },        
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        //message.channel.send({files: [attachment], embed:agnaktor_embed});
        message.channel.send({embed:crimsonqurupeco_embed});
        console.log('responded')
    },

    rathalos: function(message){
        //const attachment = new discord.Attachment('./img/DMG-Agnaktor.png')
        const rathalos_embed = {
            color: 0x00AE86,
            title: 'Rathalos / リオレウス (Rioreusu)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Rathalos',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/7/70/MHP3-Rathalos_Icon.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/7/70/MHP3-Rathalos_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: '<:elefire:633851902622302230> Fire',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: '<:elefire:633851902622302230> Fireblight\n<:stun:634925756765437952> Stun\n<:poison:635011341630963712> Poison',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '<:elethunder:634322078354636800> Thunder\n<:eledragon:633851902911840257> Dragon',
                    inline: true,
                },
                {
                    name: 'Traps',
                    value: '<:pitfaltrap:634038423442685963> : ★★★\n<:shocktrap:634038493395288065> : ★★★\n<:flashbomb:634045675235049477> : ★★★\n<:dungbomb:634343475109822485> : ★★★',
                    //value: 'no data',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            image: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/e/e4/DMG-Rathalos.png',
            },        
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        //message.channel.send({files: [attachment], embed:agnaktor_embed});
        message.channel.send({embed:rathalos_embed});
        console.log('responded')
    },

    silverrathalos: function(message){
        //const attachment = new discord.Attachment('./img/DMG-Agnaktor.png')
        const silverrathalos_embed = {
            color: 0x00AE86,
            title: 'Silver Rathalos / リオレウス希少種 (Rioreusu Kishou Shu)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Silver Rathalos',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/1/1b/MHP3-Silver_Rathalos_Icon.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/1/1b/MHP3-Silver_Rathalos_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: '<:elefire:633851902622302230> Fire',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: '<:elefire:633851902622302230> Fireblight\n<:stun:634925756765437952> Stun\n<:poison:635011341630963712> Poison',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '<:elethunder:634322078354636800> Thunder\n<:elewater:633851902659919883> Water',
                    inline: true,
                },
                {
                    name: 'Traps',
                    value: '<:pitfaltrap:634038423442685963> : ★★★\n<:shocktrap:634038493395288065> : ★★★\n<:flashbomb:634045675235049477> : ★★★\n<:dungbomb:634343475109822485> : ★★★',
                    //value: 'no data',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            image: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/e/e4/DMG-Rathalos.png',
            },        
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        //message.channel.send({files: [attachment], embed:agnaktor_embed});
        message.channel.send({embed:silverrathalos_embed});
        console.log('responded')
    },

    rathian: function(message){
        //const attachment = new discord.Attachment('./img/DMG-Agnaktor.png')
        const rathian_embed = {
            color: 0x00AE86,
            title: 'Rathian / リオレイア (Rioreia)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Rathian',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/1/14/MHP3-Rathian_Icon.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/1/14/MHP3-Rathian_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: '<:elefire:633851902622302230> Fire',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: '<:elefire:633851902622302230> Fireblight\n<:poison:635011341630963712> Poison',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '<:elethunder:634322078354636800> Thunder\n<:eledragon:633851902911840257> Dragon',
                    inline: true,
                },
                {
                    name: 'Traps',
                    value: '<:pitfaltrap:634038423442685963> : ★★★\n<:shocktrap:634038493395288065> : ★★★\n<:flashbomb:634045675235049477> : ★★★\n<:dungbomb:634343475109822485> : ★★★',
                    //value: 'no data',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            image: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/e/e4/DMG-Rathalos.png',
            },        
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        //message.channel.send({files: [attachment], embed:agnaktor_embed});
        message.channel.send({embed:silverrathalos_embed});
        console.log('responded')
    },

    goldenrathian: function(message){
        //const attachment = new discord.Attachment('./img/DMG-Agnaktor.png')
        const goldenrathian_embed = {
            color: 0x00AE86,
            title: 'Golden Rathian / リオレイア希少種 (Rioreia Kishou Shu)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Golden Rathian',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/2/28/MHP3-Gold_Rathian_Icon.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/2/28/MHP3-Gold_Rathian_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: '<:elefire:633851902622302230> Fire',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: '<:elefire:633851902622302230> Fireblight\n<:poison:635011341630963712> Poison',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '<:elethunder:634322078354636800> Thunder\n<:elewater:633851902659919883> Water',
                    inline: true,
                },
                {
                    name: 'Traps',
                    value: '<:pitfaltrap:634038423442685963> : ★★★\n<:shocktrap:634038493395288065> : ★★★\n<:flashbomb:634045675235049477> : ★★★\n<:dungbomb:634343475109822485> : ★★★',
                    //value: 'no data',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            image: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/e/e4/DMG-Rathalos.png',
            },        
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        //message.channel.send({files: [attachment], embed:agnaktor_embed});
        message.channel.send({embed:goldenrathian_embed});
        console.log('responded')
    },

    royalludroth: function(message){
        //const attachment = new discord.Attachment('./img/DMG-Agnaktor.png')
        const royalludroth_embed = {
            color: 0x00AE86,
            title: 'Royal Ludroth / ロアルドロス (Roarudorosu)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Royal Ludroth',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/4/48/MHP3-Royal_Ludroth_Icon.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/4/48/MHP3-Royal_Ludroth_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: '<:elewater:633851902659919883> Water',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: '<:elewater:633851902659919883> Waterblight',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '<:elefire:633851902622302230> Fire\n<:elethunder:634322078354636800> Thunder',
                    inline: true,
                },
                {
                    name: 'Traps',
                    value: '<:pitfaltrap:634038423442685963> : ★★☆\n<:shocktrap:634038493395288065> : ★★☆\n<:flashbomb:634045675235049477> : ★★☆\n<:dungbomb:634343475109822485> : ★★☆',
                    //value: 'no data',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            image: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/9/9b/DMG-RoyalLudroth.png',
            },        
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        //message.channel.send({files: [attachment], embed:agnaktor_embed});
        message.channel.send({embed:royalludroth_embed});
        console.log('responded')
    },

    purpleludroth: function(message){
        //const attachment = new discord.Attachment('./img/DMG-Agnaktor.png')
        const purpleludroth_embed = {
            color: 0x00AE86,
            title: 'Purple Ludroth / ロアルドロス (Roarudorosu)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Purple Ludroth',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/9/9f/MHP3-Purple_Ludroth_Icon.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/9/9f/MHP3-Purple_Ludroth_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: 'None',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: '<:poison:635011341630963712> Poison',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '<:elefire:633851902622302230> Fire\n<:elethunder:634322078354636800> Thunder',
                    inline: true,
                },
                {
                    name: 'Traps',
                    value: '<:pitfaltrap:634038423442685963> : ★★☆\n<:shocktrap:634038493395288065> : ★★☆\n<:flashbomb:634045675235049477> : ★★☆\n<:dungbomb:634343475109822485> : ★★☆',
                    //value: 'no data',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            image: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/9/9b/DMG-RoyalLudroth.png',
            },        
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        //message.channel.send({files: [attachment], embed:agnaktor_embed});
        message.channel.send({embed:purpleludroth_embed});
        console.log('responded')
    },

    brutetigrex: function(message){
        //const attachment = new discord.Attachment('./img/DMG-Agnaktor.png')
        const brutetigrex_embed = {
            color: 0x00AE86,
            title: 'Brute Tigrex / ティガレックス亜種 (Tigarekkusu Ashu)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Brute Tigrex',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/e/ec/MHP3-Brute_Tigrex_Icon.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/e/ec/MHP3-Brute_Tigrex_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: 'None',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: '<:elefire:633851902622302230> Fireblight (di lava)\n<:elewater:633851902659919883> Waterblight (di perairan)',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '<:elewater:633851902659919883> Water',
                    inline: true,
                },
                {
                    name: 'Traps',
                    //value: '<:shocktrap:634038493395288065> : ★★☆\n<:flashbomb:634045675235049477> : ★☆\n<:pitfaltrap:634038423442685963> : ★★★ \n<:dungbomb:634343475109822485> : ★☆☆',
                    value: 'no data',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            /* image: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/c/c1/DMG-Diablos.png',
            },         */
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        //message.channel.send({files: [attachment], embed:agnaktor_embed});
        message.channel.send({embed:brutetigrex_embed});
        console.log('responded')
    },

    ukanlos: function(message){
        //const attachment = new discord.Attachment('./img/DMG-Agnaktor.png')
        const ukanlos_embed = {
            color: 0x00AE86,
            title: 'Ukanlos / ウカムルバス (Ukamurubasu)',
            //url: 'https://discord.js.org',
            author: {
                name: 'Ukanlos',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/b/b5/MHP3-Ukanlos_Icon.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/b/b5/MHP3-Ukanlos_Icon.png',
            },
            fields: [
                {
                    name: 'Element(s)',
                    value: '<:eleice:633851903033212928> Ice',
                    inline: true,
                },
                {
                    name: 'Ailment(s)',
                    value: '<:eleice:633851903033212928> Iceblight\n<:snowsalju:634705578223992833> Snowman',
                    inline: true,
                },
                {
                    name: 'Weakness',
                    value: '<:elefire:633851902622302230> Fire\n<:elethunder:634322078354636800> Thunder',
                    inline: true,
                },
                {
                    name: 'Traps',
                    //value: '<:pitfaltrap:634038423442685963> : ★★☆\n<:shocktrap:634038493395288065> : ★★☆\n<:flashbomb:634045675235049477> : ★★☆\n<:dungbomb:634343475109822485> : ★★☆',
                   value: 'no data',
                    inline: true,
                },
                /* {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true,
                }, */
            ],
            // image: {
            //     url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/9/9b/DMG-RoyalLudroth.png',
            // },        
            // timestamp: new Date(),
            footer: {
                text: 'Monster Hunter Fandom',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            },
        };
        //message.channel.send({files: [attachment], embed:agnaktor_embed});
        message.channel.send({embed:ukanlos_embed});
        console.log('responded')
    },

}
// clientz.user.setStatus('idle', 'Made by Radish Devp')
