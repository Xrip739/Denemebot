const Discord = require('discord.js');
const db = require('quick.db')
module.exports.run = async (bot, message, args, member, client, level) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
  if (!message.member.hasPermission("MANAGE_ROLES"))
  if (!message.member.roles.find('name', 'Commandment')) return       message.delete()
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!user) return message.reply("**Etiket Atmayı Unuttun Knk**");
  user.addRole('618817738663788557')
      message.delete()
       .then(message => message.delete(3000));
   let banEmbed = new Discord.RichEmbed()
        .setDescription(`**${user} Adlı Kullanıcıya, <@&618817738663788557> Rolü Verildi.**`)
        .setColor(0x0000ff)

     let modlog = message.guild.channels.find('name', 'ꕻ│rol-log');
  if (!modlog) return message.channel.send('');

    modlog.send(banEmbed);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}
exports.help = {
    name: 'ressam',
    description: 'ressam',
    usage: 'ressam'
}