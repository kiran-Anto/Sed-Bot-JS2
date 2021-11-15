const Discord = require("discord.js")
const client = new Discord.Client({ intents: ["GUILDS","GUILD_MESSAGES"]})

client.on("ready", () => {
  console.log(`Logged in as $ 
  {client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === "pfft") {
    msg.reply("Dumbass, This is the actual usage of pfft :point_right: https://www.urbandictionary.com/define.php?term=pfft ")
  }
})

client.login(process.env.TOKEN)
