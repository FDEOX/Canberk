const Discord = require('discord.js');
exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('BLACK')
.setTitle('Bot Bilgi')
.setTimestamp()
.addField('Kuruluş Yılı', '2020')
.addField('Bot Sahibi', ' <@259650615137796096>')
.addField('davet linki için', '!davet')
.setFooter('Schutzstaffel - Bot - Bilgi Komutu', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};
exports.help = {
  name: 'bilgi',
  description: '.',
  usage: 'bilgi'
};