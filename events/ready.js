module.exports = client => {
   client.once('ready', () => {
   console.log(`${client.user.tag} at your service!`)
  })
}