//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Discord = require('discord.js');
const db = require('quick.db')
module.exports.run = async (bot, message, args, member, client, level) => {
  const dogrulandi = bot.emojis.find(emoji => emoji.name === "tik");
  if (!message.member.hasPermission("ADMINISTRATOR"))
  if (!message.member.hasPermission("MANAGE_ROLES"))
  if (!message.member.roles.find('name', 'Commandment')) return message.channel.send('Bu komutu kullanabilmek için `Commandment` yetkisine sahip olmasınız.')
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!user) return message.reply("**Etiket Atmayı Unuttun Knk**");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  user.addRole('620893033604579338')
  user.removeRole('619620309099872296')
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   let Embed = new Discord.RichEmbed()
        .setDescription(`**ꕻ ${user}** **Hoşgeldin, Seninle Beraber** \`${message.guild.memberCount}\` **Üyeye Ulaştık.\nꕻ Sunucumuzun** \`Kurallarına\` **<#618817770221469707>** **Kanalından Bakabilirsin.**`)
        .setColor(0xff0000)
        message.react(dogrulandi)
     let modlog = message.guild.channels.find('name', '●│genel-chat');
  if (!modlog) return message.channel.send('');
    modlog.send(Embed);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["e", "Erkek", "ERKEK", "erkek"],
    permLevel: 0
}
exports.help = {
    name: 'erkek',
    description: 'erkek',
    usage: 'erkek'
}