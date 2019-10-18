/* require('dotenv').config()
const fs = require('fs');
global.fs = fs;
const {token, prefix} = require('./events/config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
global.clientz = client; */

require("dotenv").config();
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
global.clientz = client;
const {prefix} = require('./events/config.json');

const cmdmon = require("./monster/dataMonster.js")
const cmdmonlist = require("./monster/monsterlist.js")
global.cmdmon = cmdmon;
fs.readdir('./monster/', (err, mondata) => {
    mondata.forEach(monsterdata => {
      const eventHandler = require(`./monster/${monsterdata}`)
      const eventName = monsterdata.split('.')[0]
      client.on(eventName, (...args) => eventHandler(client, ...args))
      console.log(monsterdata)
    })
  });

/* fs.readdir('./events/', (err, files) => {
    files.forEach(file => {
      const eventHandler = require(`./events/${file}`)
      const eventName = file.split('.')[0]
      clientz.on(eventName, (...args) => eventHandler(client, ...args))
    })
  }); */

clientz.on('ready', () => {
    console.log(`${clientz.user.tag} at your service!`)
    clientz.user.setStatus('dnd', 'Made by Radish Devp')  // Can be 'available', 'idle', 'dnd', or 'invisible'
    clientz.user.setPresence({
        game: {
            name: 'Radish Devp',
            type: 'WATCHING'
        }
    });
});   

clientz.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    console.log(message.content);
    if (command === 'mh3rd') {
        if (!args.length) {
             message.channel.send(`${message.author}, gunakan command \`${prefix}mh3rd <nama monster>\` untuk mendapatkan data monster`);
        } else if (args[0] === 'great' || args[0] === 'Great'){
            if (args[1] === 'jaggi' || args[1] === 'Jaggi'){
               cmdmon.greatjaggi(message);
            } else {
                message.channel.send(`${message.author}, ada 3 monster yang berawalan 'great'; \`great jaggi, great wrogi,\` dan \`great baggi\``);
            }
        } else if (args[0] === 'agnaktor' || args[0] === 'Agnaktor'){
            cmdmon.agnaktor(message);
        } else if (args[0] === 'glacial' || args[0] === 'Glacial'){
            if (args[1] === 'agnaktor' || args[1] === 'Agnaktor'){
            cmdmon.glacialagnaktor(message);
            }
        } else if (args[0] === 'g.' || args[0] === 'G.'){
            if (args[1] === 'jaggi' || args[1] === 'Jaggi'){
                cmdmon.greatjaggi(message);
             } if (args[1] === 'agnaktor' || args[1] === 'Agnaktor'){
                cmdmon.glacialagnaktor(message);
                }
        } else if (args[0] === 'akantor' || args[0] === 'Akantor'){
            cmdmon.akantor(message);
        } else if (args[0] === 'arzuros' || args[0] === 'Arzuros'){
            cmdmon.arzuros(message);
        } else if (args[0] === 'barioth' || args[0] === 'Barioth'){
            cmdmon.barioth(message);
        } else if (args[0] === 'sand' || args[0] === 'Sand' || args[0] === 's.'|| args[0] === 'S.'){
            if (args[1] === 'barioth' || args[1] === 'Barioth'){
                cmdmon.sandbarioth(message);
            }
        } else if (args[0] === 'barroth' || args[0] === 'Barroth'){
            cmdmon.barroth(message);
        }
        else if (args[0] === 'monlist' || args[0] === 'Monlist'){
            cmdmonlist.monslist(message);
        }
    } else if (message.content === `${prefix}server`) {
            message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
        }
    
});   

clientz.login(process.env.BOT_TOKEN);
