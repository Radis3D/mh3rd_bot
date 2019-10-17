const {prefix} = require('./config.json');
module.exports = (client, message) => {
    client.on('message', message => {
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        const args = message.content.slice(prefix.length).split(' ');
        const command = args.shift().toLowerCase();
        console.log(message.content);
        if (command === 'mh3rd') {
            if (!args.length) {
                 message.channel.send(`${message.author}, gunakan command \`${prefix}mh3rd <nama monster>\` untuk mendapatkan data monster`);
            } else if (args[0] === 'great'){
                if (args[1] === 'jaggi'){
                    // message.channel.send('bar');
                    const embed = new Discord.RichEmbed()
  .setTitle("Great Jaggi / ドスジャギィ (Dosujagyi)")
  .setAuthor("Great Jaggi", "https://vignette.wikia.nocookie.net/monsterhunter/images/8/8e/MHP3-Great_Jaggi_Icon.png/revision/latest/scale-to-width-down/62")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("*Element(s)*\nnone\n*Weakness*\n:elefire: fire")
  .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
  .setImage("http://i.imgur.com/yVpymuV.png")
  .setThumbnail("https://vignette.wikia.nocookie.net/monsterhunter/images/8/8e/MHP3-Great_Jaggi_Icon.png/revision/latest/scale-to-width-down/62")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("This is a field title, it can hold 256 characters",
    "This is a field value, it can hold 1024 characters.")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("Inline Field", "They can also be inline.", true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);
 
  message.channel.send({embed});
                } else {
                    message.channel.send(`${message.author}, ada 3 monster yang berawalan 'great'; \`great jaggi, great wrogi,\` dan \`great baggi\``);
                }
            }
        } else if (message.content === `${prefix}server`) {
                message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
            }
        //message.channel.send(`Command name: ${command}\nArguments: ${args[0]}\nArguments: ${args[1]}\nArg Length: ${args.length}`);    
        
    });
    
}