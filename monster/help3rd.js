const discord = require('discord.js');
// var client = new discord.Client();

module.exports = {
    //Great Jaggi
    help: function(message){
        const help_embed = {
            color: 0x34e5eb,
            title: 'Help Command untuk Monster Hunter Portable 3rd BOT',
           // url: 'https://discord.js.org',
            author: {
                name: 'HElP COMMAND!',
                //icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/8/8e/MHP3-Great_Jaggi_Icon.png/revision/latest/scale-to-width-down/62',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            // thumbnail: {
            //     url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/8/8e/MHP3-Great_Jaggi_Icon.png',
            // },
            fields: [
                {
                    name: 'data',
                    value: `Cara    : \`${prefix.prefix}mh3rd data <nama monster>\`\nContoh  : \`${prefix.prefix}mh3rd data agnaktor\`\nFungsi : untuk mengetahui data monster\nAlias   : d`,
                    inline: false,
                },
                {
                    name: 'drinkquest',
                    value: `Cara    : \`${prefix.prefix}mh3rd drinkquest\`\nContoh  : \`${prefix.prefix}mh3rd drinkquest\`\nFungsi : untuk mengetahui list _drink quest_\nAlias   : dq, drink`,
                    inline: false,
                },
                {
                    name: 'hotspringquest',
                    value: `Cara    : \`${prefix.prefix}mh3rd hotspringquest\`\nContoh  : \`${prefix.prefix}mh3rd hotspringquest\`\nFungsi : untuk mengetahui list _hot spring quest_\nAlias   : hsq, spring, hotspring`,
                    inline: false,
                },
                {
                    name: 'monster list',
                    value: `Cara    : \`${prefix.prefix}mh3rd monster list\`\nContoh  : \`${prefix.prefix}mh3rd monster list\`\nFungsi : untuk mengetahui list _great monster_\nAlias   : monslist, monlist`,
                    inline: false,
                },
                {
                    name: 'keyquest',
                    value: `Cara    : \`${prefix.prefix}mh3rd keyquest <hr>\`\nContoh  : \`${prefix.prefix}mh3rd keyquest hr1\`\nFungsi : untuk mengetahui list _key quest guild_ hr1-h6\nAlias   : kq, keyguild, kg`,
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
            // footer: {
            //     text: 'Monster Hunter Fandom',
            //     icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/a/a3/Logo-MHP3.png',
            // },
        };
        message.channel.send({embed:help_embed});
        console.log('responded');
    },
}