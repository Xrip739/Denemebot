const Discord = require('discord.js')

exports.run = (client, message, args) => {
    if (!message.member.hasPermissions("MANAGE_GUILD")) return message.channel.send(":no_entry: Bu komutu kullanabilmek için `Sunucuyu yönet` yetkisine sahip olmanız gerek")
    let isim = args[0];
    let guild = message.guild;
    if (!isim) return message.channel.send("Yeni ismin ne olacağını belirlemedin")
    guild.setName(`${isim}`)
        .then(g => message.channel.send(`Sunucunun ismi ${isim} olarak değiştirildi.`))
        .catch(console.error);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'sunucuismideğiş',
    description: 'Sunucunun ismini değişir',
    usage: 'sunucuismideğiş [isim]'
};