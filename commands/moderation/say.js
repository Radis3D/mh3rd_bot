module.exports={
    name: "say",
    aliases: ["bc","broadcast"],
    category: "moderation",
    description: "say something",
    run: async (client, message, args) => {
        if(message.deletable) message.delete;
        if(args.length < 1) 
            return message.reply('kosong?').then(m => m.delete(5000));

        const rolecolor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" :message.guild.me.displayHexColor;
        if (args[0].toLowerCase() === "embed"){
            const embed = new RichEmbed()
                .setColor(rolecolor)
                .setDescription(args.slice(1).join(" "));

            message.channel.send(embed);
        } else {
            message.channel.send(args.join(" "));
        }

        if(args[0].toLowerCase() === "halo"){
            message.channel.send(`hallo, too`);
        }

        console.log(args)
    }
}