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
global.cmdmon = cmdmon;
global.cmdmonlist = cmdmonlist;

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
            name: "on Radish Devp",
            type: "WATCHING"
        }
    });
});

client.on("message", async message =>{

    //const prefix = "";//"_";

    console.log(`${message.author.username} sent a message : ${message.content}`)

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

//client.login(process.env.bot_toket);
client.login(process.env.BOT_TOKEN);
console.log(`prefix: `+prefix.prefix)

