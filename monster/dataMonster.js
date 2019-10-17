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
    console.log('responed')
},

//Agnaktor
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
    console.log('responed')
}

}
