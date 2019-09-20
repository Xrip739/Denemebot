const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix

module.exports.run = async (bot, message, args, member, client, level) => {
  if (!message.member.hasPermission("MANAGE_NICKNAMES")) 
  if (!message.member.hasPermission("ADMINISTRATOR")) 
  if (!message.member.roles.find('name', 'Commandment')) return (message => message.delete(3000));
  let isim = args.slice(1).join(' ');
  let kullanici = message.mentions.users.first();
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!kullanici) return message.reply(`**s!nick @Kullanıcı <Yeni Nick>**`)
       .then(message => message.delete(3000));
  if(!isim) return message.reply(`**s!nick @Kullanıcı <Yeni Nick>**`)
       .then(message => message.delete(3000));
  if(isim.length > 32) return message.reply(`**32 Karakteri Geçemezsin !**`)
       .then(message => message.delete(3000));
  message.guild.members.get(kullanici.id).setNickname(`ꕻ ${isim}`)
      message.delete()
       .then(message => message.delete(3000));
   let banEmbed = new Discord.RichEmbed()
        .setDescription(`**${user} Adlı Kullanıcının Nicki, \`${isim}\` Olarak Değiştirildi**`)
        .setColor(0x000000)

     let modlog = message.guild.channels.find('name', 'ꕻ│isim-log');
  if (!modlog) return message.channel.send('');

    modlog.send(banEmbed);

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["n", "nick", "isim"],
    permLevel: 0
}

exports.help = {
    name: 'isim',
    description: 'Belirttiğiniz kullanıcının kullanıcı adını değiştirir.',
    usage: 'isim @kullanıcı <kullanıcı adı>'
}