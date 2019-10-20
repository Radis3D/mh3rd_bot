module.exports={
    name: "ping",
    aliases: ["p"],
    category: "info",
    description: "pinging",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`pinging....`)

        msg.edit(`pong\nLatency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}\nAPI latency ${Math.round(client.ping)}ms`)
   
    }
}