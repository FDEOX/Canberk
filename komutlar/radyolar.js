const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');




exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setTitle(`RADYOLAR `)
        .setDescription(`
         🔰1.alem
         🔰2.cnnturk  
         🔰3.fenomen 
         🔰4.kral 
         🔰5.kralpop 
         🔰6.line 
         🔰7.metro 
         🔰8.radyod  
         🔰9.superfm 
         🔰10.slow 
         🔰11.JoyFm 
         🔰12.fenomenfm  
         🔰13.show 
         🔰14.taksimclup`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla radyoları görüntüledi!`, message.author.avatarURL)
    .setColor(`RANDOM`)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'radyolar',
  description: '',
  usage: 'radyolar'
};