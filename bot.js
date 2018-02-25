const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
	
});    

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

 
client.on('message', message => {
if (message.content.startsWith("!help")) {
     message.reply("✅**that's your request**")

     const embed = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle("**Help Menu**")
         .setDescription(`**
** ** ------------------------------Help In Enlgish----------------------------------** **
** **-! **Is Prefix Of Our Bot, If you Want to Use Command Please Start with ''!'' ** 
** **!id** To See Your information playing,role  etc....... ** 
** **!server**  To Our Server Information **
** **!servericon** To See Our Server Icon! **
** **!ping** To See Your Ping**
** **!anime'** To See Anime Pictures! **
==================================Administator=========================================** **
** **!kick ** To Kick **
** **!ban** To Ban **
** **!mute** To Mute **
** **!bc** To BroadCast In Dm's **
** **!roles** To See Your Server Roles **
** **!inviter** To Send Everyone in Dm's Your Server Invite **
** ***And Also If Someone Share A Server "Auto Mute" *** **
** **More Abilities Coming Soon... ** **
** ** --------------------------Help In Arabic / بالعربية -----------------------------** **
** **!id ** معلومات حساب **
** **!server** معلومات سيرفر **
** **!servericon**صورة سيرفر **
** **!ping** تشوف سرعة اتصال **
** **!anime** تشوف صور انمي **
** **=================================اوامر لادارة=======================================** **
** **!kick** تطرد شخص **
** **!ban** حظر شخص **
** **!roles** علشان تشوف رتب حق سيرفرك **
** **!inviter** علشان ترسل لكل اعضاء سيرفر رابط سيرفر **
** **!bc** علشان ترسل في خاص لكل اعضاء سيرفر **
** **!mute** علشان تسوي ميوت لشخص **
** **و اذا شخص نشر سيرفره راح يبلع ميوت** **
** ** وبعض خاصيات قادمة ....** **
** ** ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^** **
**`)
     message.channel.sendEmbed(embed);
 }
});




client.on('message', message => {
	const prefix = "!";

if (message.content.startsWith(prefix + "roles")) {
                if (!message.channel.guild) return message.reply('** This command only for servers **');
if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('*** You Dont Have Permission to do that ***');		
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
	message.channel.sendMessage('**Done**')
    }
});



client.on("message", (message) => {
if (message.content.startsWith("f!textadd")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('**Done**')

}
});


var prefix = "!";
var cats = ["https://i.imgur.com/3Vzhklz.jpg","https://i.imgur.com/4eU1h2n.jpg","https://imgur.com/yxZ83xN.jpg","https://i.imgur.com/8P33xQ0.jpg","https://i.imgur.com/l3mTCDO.jpg","https://i.imgur.com/gjsO5tE.jpg","https://i.imgur.com/IGZAy0o.jpg","https://i.imgur.com/nBAq0ds.jpg","https://imgur.com/gemJMuU.jpg","https://i.imgur.com/1XjTm39.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
		 const prefix = "!";
		 
    if(message.content.startsWith(prefix + 'anime')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});


client.on('message', message => {
            const prefix = "!";
 
         if (message.content === prefix + "time") {
             if (!message.channel.guild) return message.reply('** This command only for servers **');  
 var currentTime = new Date(),
             hours = currentTime.getHours() + 0 ,
             minutes = currentTime.getMinutes(),
             seconds = currentTime.getSeconds();
 
             if (minutes < 10) {
                 minutes = '0' + minutes;
             }
             var suffix = 'صباحاَ';
             if (hours >= 12) {
                 suffix = 'مساء';
                 hours = hours - 9;
             }
             if (hours == 0) {
                 hours = 12;
             }
 
                 var Date15= new Discord.RichEmbed()
                 .setTitle("**Time - الساعة**")
                 .setColor('RANDOM')
                 .setTimestamp()
                 .setDescription( "『"+ " " + hours + ":" + minutes + " " + "』")
                  message.channel.sendEmbed(Date15);
         }
  
  
});


client.on('message', function(message) {
    if (!message.member.hasPermissions(['ADMINISTRATOR'])){
            let command = message.content.split(" ")[0];
        if(message.content.includes('discord.gg')){
        message.reply (' ')
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(message.guild.roles.find('name', 'Muted')); 
    const embed500 = new Discord.RichEmbed()
      .setTitle(":x: | تمت معاقبتك")
            .addField(`** لقد قمت بمخالفة قوانين السيرفر من خلال نشر سيرفرات اخرى  **` , `**ملاحظة  : إن كآن هذآ الميوت عن طريق الخطأ تكلم مع الادآرة**`)
      .addField(`by`,`@387700438239281153`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL) 
        .setFooter(`${message.guild.name} Server`)
     message.channel.send(embed500) 
    
        
    }
    }
})


client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('!ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
         message.channel.send({embed:embed});
                        }

					
					
});



var prefix = "!"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1)

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**لا يمكنك,ليس لديك خاصية الحظر**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});



var prefix = "!"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**ليس لديك برمشن الطرد**");
  let user = message.mentions.users.first();

  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});


client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "!mute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** I Need Permissions => 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** There's No Role Called  'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** You Have To Mention Firstً**').catch(console.error);
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Use:', 'mute/unmute')
    .addField('Unmuted :', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('By:', `${message.author.username}#${message.author.discriminator}`)
   
   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** I Need Permission => Manage Roles **').catch(console.error);
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
return message.reply("**:white_check_mark: ..Muted ;To Unmute Just Repeat The Same Command**").catch(console.error);
} else {
    message.guild.member(user).removeRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. Muted**").catch(console.error);
});
  }

};

});



