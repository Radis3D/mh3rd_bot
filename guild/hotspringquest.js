const discord = require('discord.js');
// var client = new discord.Client();

module.exports = {
    hotspringquest: function(message){
        const hotspringquest_embed = {
            color: 0xfcba03,
            title: 'Hot Spring Quest',
           // url: 'https://discord.js.org',
            author: {
                name: 'Hot Spring Quest (Total Quest 7)',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/1/11/MHP3-Bandai-san.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/1/11/MHP3-Bandai-san.png',
            },
            fields: [
                {
                    name: '1/7.  Hotwater Steamed Bullfango',
                    value: 'Slay Bullfango\n***Unlock Quest: None***\n***Status Unlock: +10 Health***',
                    inline: false,
                },
                {
                    name: '2/7. Hot Spring Reinforcements!',
                    value: 'Hunt the Great Jaggi\n***Unlock Quest: Selesaikan Urgent Village 1★***\n***Status Unlock: +10 Health***',
                    inline: false,
                },
                {
                    name: '3/7. In the Name of Hot Water',
                    value: 'Hunt Royal Ludroth\n***Unlock Quest: Selesaikan Urgent Village 2★***\n***Status Unlock: +25 Stamina***',
                    inline: false,
                },
                {
                    name: '4/7. Hidden Permafrost',
                    value: 'Hunt 2 Great Baggi\n***Unlock Quest: Selesaikan Urgent Village 3★***\n***Status Unlock: +10 Health***',
                    inline: false,
                },
                {
                    name: '5/7. Steam and Clouds',
                    value: 'Hunt the Main Monster (Great Wroggi and Volvidon)\n***Unlock Quest: Selesaikan Urgent Village 4★***\n***Status Unlock: +10 Health***',
                    inline: false,
                },
                {
                    name: '6/7. Beneatn the Burning Sand',
                    value: 'Hunt the Nibelsnarf\n***Unlock Quest: Selesaikan Urgent Village 5★***\n***Status Unlock: +25 Stamina***',
                    inline: false,
                },
                {
                    name: '7/7. Monsters in the Secret Spring',
                    value: 'Hunt the Main Monster (Arzuros, Rathian and Zinogre)\n***Unlock Quest: Selesaikan Urgent Village 6★***\n***Status Unlock: +10 Health***',
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
        message.channel.send({embed:hotspringquest_embed});
        console.log('responded')
    },
}
