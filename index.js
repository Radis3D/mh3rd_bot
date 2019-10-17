const fs = require('fs');
// const {token} = require('./events/config.json');
const {token, prefix} = require('./events/config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
global.clientz = client;
//client.commands = new Discord.Collection();

/* fs.readdir('./monster/', (err, mondata) => {
    mondata.forEach(monsterdata => {
      const eventHandler = require(`./monster/${monsterdata}`)
      const eventName = monsterdata.split('.')[0]
      client.on(eventName, (...args) => eventHandler(client, ...args))
      console.log(monsterdata)
    })
  }); */
const cmdmon = require("./monster/dataMonster.js")
// fs.readdir('./events/', (err, files) => {
//     files.forEach(file => {
//       const eventHandler = require(`./events/${file}`)
//       const eventName = file.split('.')[0]
//       client.on(eventName, (...args) => eventHandler(client, ...args))
//     })
//   });

client.once('ready', () => {
    console.log(`${client.user.tag} at your service!`)
   })

  client.on('message', message => {
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
        }
    } else if (message.content === `${prefix}server`) {
            message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
        }
    
});

clientz.login('NjMzOTQxMTM2ODgwNDM1MjAx.Xaf0hw.gzezVcTNuqHGOLGO6b0fxnPFVaI');
