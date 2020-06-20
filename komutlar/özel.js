const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (message.author.id != "126769943130669058") return message.reply('Bunu Sadece Sahibim Kullanabilir');
      
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('Bu  komutu özel mesajlarda kullanamazsın.');
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild;
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('yazacağınız şeyi yazınız **dm [kullanıcı] [yazı]**.');
  if (message.mentions.users.size < 1) return message.reply('yazmak İstedğiniz Kişiyi Yazınızı **dm [kullanıcı] [yazı]**').catch(console.error);
  message.delete();
  message.reply('Kullanıcıya özel mesaj gönderildi. :white_check_mark: ')
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle(`**ÖZEL MESAJ :green_circle: **`)
  .setTimestamp()
  .setDescription(reason);
  return user.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dm'],
  permlevel: 4
};

exports.help = {
  name: 'dm',
  description: 'Özelden mesaj.',
  usage: 'mesajat'
};