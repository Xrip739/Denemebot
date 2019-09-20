const Discord = require('discord.js');

exports.run = (client, message, args) => {
 let guild = message.guild;

    guild.fetchBans()
        .then(bans => message.channel.send(`Sunucunuzda **${bans.size}** banlanmış üye bulunmakta.`))
        .catch(console.error);

}

exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: "bansayısı",
    description: "Sunucudan banlanan kişilerin sayısını gösterir",
    usage: "bansayısı"
  };