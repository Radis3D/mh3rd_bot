 const discord = require('discord.js');
// var client = new discord.Client();


module.exports = {
    //Great Jaggi
    greatjaggi: function(message){
        const greatjaggi_embed = {
            color: 0x00AE86,
            title: 'Great Jaggi / ドスジャギィ (Dosujagyi)',
            url: 'https://discord.js.org',
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
}
