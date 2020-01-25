const { Client, RichEmbed, Collection } = require('discord.js');
const { config } = require('dotenv');
const confprefix = require("./config.json");
global.prefix = confprefix;
const client = new Client({
    disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();

const cmdmon = require("./monster/dataMonster3rd.js")
const cmdmonlist = require("./monster/monsterlist3rd.js")
const cmdguildkey = require("./guild/guildkey3rd.js")
const cmddrinkquest = require("./guild/drinkquest.js")
const cmdhotquest = require("./guild/hotspringquest.js")
const cmdhelp3rd = require("./monster/help3rd.js")
const cmddropitem = require("./item/monsterdrop3rd.js")
const cmdvillagekey = require("./village/village3rdkey.js")
const cmdspecialquest = require("./guild/specialquest3rd.js")
//const cmddropitem = require("./item/allitem3rd.js")
global.cmdmon = cmdmon;
global.cmdmonlist = cmdmonlist;
global.cmdguildkey = cmdguildkey;
global.cmddrinkquest = cmddrinkquest;
global.cmdhotquest = cmdhotquest;
global.cmdhelp3rd = cmdhelp3rd;
global.cmddropitem = cmddropitem;
global.cmdvillagekey = cmdvillagekey;
global.cmdspecialquest = cmdspecialquest;

config({
   path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});

client.on("ready", () =>{
console.log(`i'm ready for service. I'm ${client.user.username}`);

    client.user.setPresence({
        status: "idle",
        game:{
            name: "on Radish Devp v1.2.0",
            type: "WATCHING"
        }
    });
});

client.on("message", async message =>{

    //const prefix = "";//"_";

    if (message.content.startsWith(prefix) || !message.author.bot){
    console.log(`${message.author.username} sent a message : ${message.content}`)}
    else if(!message.content.startsWith(prefix)) return;

    if(message.author.bot) return;
    if(!message.guild) return;
    if(!message.content.startsWith(prefix.prefix)) return;
    if(!message.member) message.member = await message.guild.fetchMember(member);
    
    const args = message.content.slice(prefix.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLocaleLowerCase();
    
    if(cmd.length === 0) return;

    let command = client.commands.get(cmd);// || client.commands.get(client.aliases.get(cmd));
    if(!command) command = client.commands.get(client.aliases.get(cmd));

    if(command) command.run(client, message, args);
    client.user.setStatus('idle', 'Made by Radish Devp')
});

// client.login(process.env.bot_toket);
client.login(process.env.BOT_TOKEN);
console.log(`prefix: `+prefix.prefix)

