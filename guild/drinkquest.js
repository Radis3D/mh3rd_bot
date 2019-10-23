const discord = require('discord.js');
// var client = new discord.Client();

module.exports = {
    drinkquest: function(message){
        const drinkquest_embed = {
            color: 0xfcba03,
            title: 'Drink Quest',
           // url: 'https://discord.js.org',
            author: {
                name: 'Drink Quest (Total Quest 20)',
                icon_url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/e/e8/MHP3-Drink-ya.png',
                //url: 'https://discord.js.org',
            },
            //description: 'Some description here',
            thumbnail: {
                url: 'https://vignette.wikia.nocookie.net/monsterhunter/images/e/e8/MHP3-Drink-ya.png',
            },
            fields: [
                {
                    name: '1/20.  Heavy thunder, agile lightning!',
                    value: 'Hunt the main monster (Hunt Duramboros  and Zinogre)\n***Unlock Quest: Clear all Village urgents and at least 60 Village quests.***\n***Drink Unlock: Miracle Milk (Felyne Dismantle Upgrade)***',
                    inline: false,
                },
                {
                    name: '2/20. ???',
                    value: 'Hunt the main monster (Hunt Brute Tigrex and Deviljho)\n***Unlock Quest: Complete 3 HR 6 warning quests.***\n***Drink Unlock: Miracle Macchiato (Felyne Dismantle Upgrade)***',
                    inline: false,
                },
                {
                    name: '3/20. Bird Wyverns in a Cage',
                    value: 'Hunt the main monster (Hunt Great Jaggi, Great Wroggi, and Great Baggi)\n***Unlock Quest: Clear 30 different Village Quests.***\n***Drink Unlock: Lucky Yogurt (Felyne Lucky Cat Upgrade)***',
                    inline: false,
                },
                {
                    name: '4/20. Dragons on the Sand, run!',
                    value: 'Hunt Tigrex and Sand Barioth\n***Unlock Quest: Must be HR6 and clear 3 Marathon quests.***\n***Drink Unlock: Lucky Lassi (Felyne Lucky Cat Upgrade)***',
                    inline: false,
                },
                {
                    name: '5/20. ???',
                    value: 'Deliver 8 Golden Fish\n***Unlock Quest: Fish 15 times.***\n***Drink Unlock: Celebri-tea (Crazy Lucky Cat)***',
                    inline: false,
                },
                {
                    name: '6/20. Out Picking Bamboo Shoots!',
                    value: 'Deliver 15 Bamboo shoots\n***Unlock Quest: Obtain 1000 Yukumo points or more in a single quest.***\n***Drink Unlock: Hako Beer (Felyne Supercat, Escape, and Lander)***',
                    inline: false,
                },
                {
                    name: '7/20. New Eggs?',
                    value: 'Deliver 3 Herbivore Eggs\n***Unlock Quest: Combine 20 different items.***\n***Drink Unlock: Wine Sample (Felyne Frugality, Gathering, and Vine Climber)***',
                    inline: false,
                },
                {
                    name: '8/20. Through the Poison Mist!',
                    value: 'Slay 15 Wroggi\n***Unlock Quest: Hunt a Great Jaggi.***\n***Drink Unlock: Bokobo Cola (Felyne Attack Upgrade)***',
                    inline: false,
                },
                {
                    name: '9/20. Terrible Poison, Frozen Snow',
                    value: 'Hunt the main monster (Hunt Gigginox and Barioth)\n***Unlock Quest: Hunt Royal Ludroth, Gigginox and Barioth at least 3 times.***\n***Drink Unlock: Boko Scotch (Felyne Attack Upgrade)***',
                    inline: false,
                },
                {
                    name: '10/20. Dancing Fire and Lightning!',
                    value: 'Hunt Zinogre and Rathalos\n***Unlock Quest: Hunt Barroth, Rathalos and Zinogre at least 3 times.***\n***Drink Unlock: Liferoot Juice (Felyne Attack Upgrade)***',
                    inline: false,
                },
                {
                    name: '11/20. Not Your Average Monsters',
                    value: 'Hunt the main monster (Hunt Green Nargacuga and Steel Uragaan)\n***Unlock Quest: Hunt all monster subspecies.***\n***Drink Unlock: Sni-Punch (Felyne Attack Upgrade)***',
                    inline: false,
                },
                {
                    name: '12/20. Formidable Females',
                    value: ' 10 Ludroth\n***Unlock Quest: Create at least 3 rarity 1-3 armor pieces.***\n***Drink Unlock: Hard Brown Rice (Felyne Defense Upgrade)***',
                    inline: false,
                },
                {
                    name: '13/20. That Water, It\'s Poisonous',
                    value: 'Hunt Purple Ludroth\n***Unlock Quest: Create at least 10 rarity 4-7 armor pieces.***\n***Hard Brown Rice (Felyne Defense Upgrade)***',
                    inline: false,
                },
                {
                    name: '14/20. The Couyards of Boars',
                    value: 'Hunt 2 Bulldrome\n***Unlock Quest: Capture at least 15 monsters.***\n***Hard Tea (Felyne Defense Upgrade)***',
                    inline: false,
                },
                {
                    name: '15/20. ???',
                    value: 'Hunt Jade Barroth and Glacial Agnaktor\n***Unlock Quest: Capture all monster subspecies.***\n***Drink Unlock: Hard Tea (Felyne Defense Upgrade) ***',
                    inline: false,
                },
                {
                    name: '16/20. Arzuros Challenge!',
                    value: 'Hunt Arzuros\n***Unlock Quest: Hunt 1 Arzuros***\n***Drink Unlock: Hot Red Bean Soup (Fire Resist Up)***',
                    inline: false,
                },
                {
                    name: '17/20. Hunting in the Mud',
                    value: 'Hunt Barroth\n***Unlock Quest: Hunt 2 Qurupeco.***\n***Drink Unlock: Natural Mountain Stream Water (Water Resist Up)***',
                    inline: false,
                },
                {
                    name: '18/20. Boar and a White Rabbit ',
                    value: 'Hunt Lagombi and Bulldrome\n***Unlock Quest: Hunt 2 Royal Ludroth***\n***Drink Unlock: Thunder Cider (Thunder Resist Up)***',
                    inline: false,
                },
                {
                    name: '19/20. Torrent of Murderous Black',
                    value: 'Hunt 3 Nargacuga consecutively\n***Unlock Quest: Hunt 2 Rathalos.***\n***Drink Unlock: Frozen Milk (Ice Resist Up)***',
                    inline: false,
                },
                {
                    name: '20/20. Continuous Agnaktor Attack!',
                    value: 'Hunt 3 Agnaktor consecutively\n***Unlock Quest: Slay the Jhen Mohran.***\n***Drink Unlock: Dragon Tea of Destruction (Dragon Resist Up)***',
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
        message.channel.send({embed:drinkquest_embed});
        console.log('responded')
    },
}