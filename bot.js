const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'm7md') {
    	message.reply('**M7MD XD IS DA BEST YEAH YEAH YEAH YEAH ♥ **');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

client.on('message', message => {
	const prefix = "!";

if (message.content.startsWith(prefix + "roles")) {
                if (!message.channel.guild) return message.reply('** This command only for servers **');    
                        if(!message.channel.guild) return message.reply('**This Command is Only For Servers**');
            var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
            const embed = new Discord.RichEmbed()
            .setColor('#2800ff')
               .addField(`${message.guild.name}`,`**Roles :white_check_mark:**`)
             .addField(':arrow_down: Number Roles. :heavy_check_mark:',`** ${message.guild.roles.size}**`)
             .addField(':arrow_down: Name Roles. :heavy_check_mark:',`**${roles}**`)
            message.channel.sendEmbed(embed);
        }
    });

client.on('message', message => {
	const prefix = "!";

if(message.content == prefix + 'server') {
        var servername = message.guild.name
        var اونر = message.guild.owner
        var اعضاء = message.guild.memberCount
        var ايدي = message.guild.id
        var بلدالسيرفر = message.guild.region
        var الرومات = message.guild.channels.size
        var الرتب = message.guild.roles
        var عمل = message.guild.createdAt
        var الروم = message.guild.defaultChannel
        var afk = message.guild.afkChannel
        var ownerid = message.guild.ownerID
        var server = new Discord.RichEmbed()
        .setThumbnail(message.guild.iconURL)
        .addField(' **Server Name** ', servername)
        .addField(' **Server Id** ' , [ايدي])
        .addField(' **Server Members** ', اعضاء)
        .addField(' **Server Rooms** ', الرومات)
        .addField(' **Afk Room** ', afk)
        .addField(' **Welcome Room** ', الروم)
        .addField(' **Server Owner** ', اونر)
        .addField(' **Owner ID** ', ownerid)
        .addField(' **Server Region** ', بلدالسيرفر)
        .addField(' **The opening date of the server** ', عمل)
        .setColor('RANDOM')

        message.channel.sendEmbed(server)
    }
});

client.on('message', message => {
	const prefix = "!";
	
if(message.content == prefix + 'stats') {
if (!message.channel.guild) return message.reply('** This command only for servers **');    
message.channel.send({
embed: new Discord.RichEmbed()
.addField('Uptime', timeCon(process.uptime()), true)
.addField('RAM Usage', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
.addField('Guild Count', client.guilds.size, true)
.addField("**Servers:**" , client.guilds.size)
.addField("**Users:**", client.users.size)
.addField("**channels:**", client.channels.size)
})
}
});

function timeCon(time) {
let days = Math.floor(time % 31536000 / 86400)
let hours = Math.floor(time % 31536000 % 86400 / 3600)
let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
days = days > 9 ? days : '0' + days
hours = hours > 9 ? hours : '0' + hours
minutes = minutes > 9 ? minutes : '0' + minutes
seconds = seconds > 9 ? seconds : '0' + seconds
return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}

client.on('message', message => {
       const prefix = "!";
	
if (message.content.startsWith(prefix + "inviter")) {
if(!message.channel.guild) return;

        message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(`  في الخاص ${message.guild.name}تم ارسالك رابط سيرفر `)
   .setFooter("اسم السيرفر","رابط صوره السيرفر")
      message.channel.sendEmbed(embed).then(message => {message.delete(3000)})
              const EmbedMalek = new Discord.RichEmbed()
        .setColor("000000")
        .setDescription(`هذا الرابط لخمسه مستخدمين فقط لمده اربعه وعشرين ساعه${message.guild.name} رابط سيرفر  `)
        .setFooter("اسم السيرفر","رابط صوره السيرفر")
      message.author.sendEmbed(EmbedMalek)
    }
});


client.on('message', message => {
	const prefix = "!";

if (message.content.startsWith(prefix + "servericon")) {
if (!message.channel.guild) return message.reply('** This command only for servers **');
        var mentionned = message.mentions.users.first();
        var server;
        if (mentionned) {
            var server = mentionned;
        }
        else {
            var server = message.author;

        }

      const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setImage(`${message.guild.iconURL}`)
                      .setFooter(message.author.username, message.author.avatarURL)
                              message.channel.sendEmbed(embed);

};
})

client.on('message', message => {
	const prefix = "!";
	
let embed = new Discord.RichEmbed()
let args = message.content.split(' ').slice(1).join(' ');
if(!message.channel.guild) return;
if (message.content.startsWith(prefix + "bc")) {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('*** You Dont Have Permission to do that ***');
         message.react("✔️")
let embed = new Discord.RichEmbed()
          .setColor("#FF00FF")
          .setThumbnail(message.author.avatarURL)   
          .addField('Done By:', "<@" + message.author.id + ">")

           message.channel.sendEmbed(embed);
            message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
          .addField('*❁Server name *', `*** ⇝ ${message.guild.name}***`)               
          .addField(`❁message`, args)
          .setColor('#B40486')
          .addField('*❁Name of sender*', `*** ⇝ ${message.author.username}#${message.author.discriminator}***`)
         m.send(``,{embed: bc});
        });
        
    }
    
});

client.on("message", msg => {
	const prefix = "!";
	
if(msg.content.startsWith (prefix + "id")) {
if(!msg.channel.guild) return msg.reply('**:x: Sorry This Command is Only For Servers **');         
      const embed = new Discord.RichEmbed();
  embed.addField(":cloud_tornado:  Name", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
          .addField(":id:  ID", `**[ ${msg.author.id} ]**`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':spy:  Online', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
          .addField(':satellite_orbital:   Playing', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
          .addField(':military_medal:  Role', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
          .addField(':robot:  Bot', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
      msg.channel.send({embed: embed})
  }
});

client.on('message', message => {
        const prefix = "!";

if (message.content.startsWith(prefix + 'clear')) {
if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`You Don't Have [*MANAGE_MESSAGES*] Permission `).catch(console.error);
  message.delete()
if(!message.channel.guild) return;
let args = message.content.split(" ").slice(1);

const messagecount = parseInt(args.join(' '));

message.channel.fetchMessages({

  limit: messagecount

}).then(messages => message.channel.bulkDelete(messages));
};

});



client.on("message", (message) => {
    if (message.content.startsWith('f!delet')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});



client.on("message", (message) => {
if (message.content.startsWith("f!textadd")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});

