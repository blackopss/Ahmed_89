const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong bot ping => -20ms :muscle: ');
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
// playing
client.on('ready', () => {                           
client.user.setGame('Vape is a good teacher ☻');                                                                                                                                                                                                                                                                                                                                                                                                                             client.user.setGame(`-help | On 20 Servers`,'https://www.twitch.tv/v5bz');
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
