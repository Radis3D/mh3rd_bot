module.exports={
    name: "server",
    aliases: ["serv", "si"],
    category: "info",
    description: "server name and member",
    run: async (client, message, args) => {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`)
       }
}