require("dotenv").config();
const Discord = require("discord.js");
//const fs = require("fs");
const client = new Discord.Client();
global.clientz = client;
//const {prefix} = require('./events/config.json');
const prefix = '!';
/* fs.readdir('./monster/', (err, mondata) => {
    mondata.forEach(monsterdata => {
      const eventHandler = require(`./monster/${monsterdata}`)
      const eventName = monsterdata.split('.')[0]
      client.on(eventName, (...args) => eventHandler(client, ...args))
      console.log('load : '+monsterdata)
    })
  }); */
  
const cmdmon = require("./monster/dataMonster.js")
const cmdmonlist = require("./monster/monsterlist.js")
global.cmdmon = cmdmon;
global.cmdmonlist = cmdmonlist;
/* fs.readdir('./events/', (err, files) => {
    files.forEach(file => {
      const eventHandler = require(`./events/${file}`)
      const eventName = file.split('.')[0]
      clientz.on(eventName, (...args) => eventHandler(client, ...args))
    })
  }); */

clientz.on('ready', () => {
    console.log(`${clientz.user.tag} at your service!`)
    clientz.user.setStatus('idle', 'Made by Radish Devp')  // Can be 'available', 'idle', 'dnd', or 'invisible'
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
    console.log('msg \''+message.content+'\' was requested by \`'+message.author.tag+'\`');
    //console.log(prefix.length+' '+args)
    clientz.user.setStatus('online', 'Made by Radish Devp')
    if (command === 'mh3rd' || command === 'mhp3rd') {
        if (!args.length) {
             message.channel.send(`${message.author}, gunakan _command_ \`${prefix}mh3rd <nama monster>\` atau \`${prefix}mhp3rd <nama monster>\` untuk mendapatkan data monster`);
        } else if (args[0] === 'great' || args[0] === 'Great'){
           if (args[1] === 'jaggi' || args[1] === 'Jaggi'){
               cmdmon.greatjaggi(message);
            } else { 
                message.channel.send(`${message.author}, ada 3 monster yang berawalan 'great';\n\`great jaggi, great wrogi,\` dan \`great baggi\``);
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
        } else if (args[0] === 'jade' || args[0] === 'Jade' || args[0] === 'j.'|| args[0] === 'J.'){
            if (args[1] === 'barroth' || args[1] === 'Barroth'){
                cmdmon.jadebarroth(message);
            }
        } else if (args[0] === 'bulldrome' || args[0] === 'Bulldrome'){
            cmdmon.bulldrome(message);
        } else if (args[0] === 'nargacuga' || args[0] === 'Nargacuga' || args[0] === 'Narga' || args[0] === 'narga'){
            cmdmon.nargacuga(message);
        } else if (args[0] === 'deviljho' || args[0] === 'Deviljho'){
            cmdmon.deviljho(message);
        } else if (args[0] === 'diablos' || args[0] === 'Diablos'){
            cmdmon.diablos(message);
        } else if (args[0] === 'black' || args[0] === 'Black'){
			if (args[1] === 'diablos' || args[1] === 'Diablos'){
                cmdmon.blackdiablos(message);
            }
        } else if (args[0] === 'duramboros' || args[0] === 'Duramboros'){
            cmdmon.duramboros(message);
        } else if (args[0] === 'b.' || args[0] === 'B.'){
            if (args[1] === 'diablos' || args[1] === 'Diablos'){
                cmdmon.blackdiablos(message);
            } else if (args[1] === 'giginox' || args[1] === 'Giginox'){
                cmdmon.balefulgiginox(message);
            }
        } else if (args[0] === 'baleful' || args[0] === 'Baleful'){
			if (args[1] === 'giginox' || args[1] === 'Giginox'){
                cmdmon.balefulgiginox(message);
            }
        }
        else if (args[0] === 'monlist' || args[0] === 'Monlist'){
            cmdmonlist.monslist(message);
        }
    } else if (command === `server`) {
            message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
        }
        clientz.user.setStatus('idle', 'Made by Radish Devp')
});   

clientz.login(process.env.BOT_TOKEN);