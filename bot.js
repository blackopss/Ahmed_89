const Discord = require("discord.js");
const child_process = require("child_process");
const client = new Discord.Client({disableEveryone: true, autoReconnect:true});
const fs = require('fs');
const sWlc = JSON.parse(fs.readFileSync("./wlc.json", "utf8"));
const p = JSON.parse(fs.readFileSync(`./sp.json`, "utf8"));
const economy = require('quick.db');
const sql = require('sqlite')
const moment = require('moment')
var Canvas = require('canvas')
const userData = JSON.parse(fs.readFileSync('./userData.json', 'utf8'));
var jimp = require('jimp')
const adminprefix = ".";
const devs = ['431150885549113344' , '352139023348924418' , '' , ''];
client.login("NDI3NTE4Mzg4Nzk3OTY0Mjg4.Dc4Uzg.2wjlrbXyQ6-ivy2JYShGTlNtWHU");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.once('ready', ()  => {
    client.user.setActivity(`Coming Soon..`, {type: "LISTENING"});
   console.log('Gold-bot [Loading..]');
});
/////////// A D M I N - C O M M A N D S [PREFIX DOESN'T WORK HERE !!!!!!!!!!!!!!!!!!]/


client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
    if (message.content === (adminprefix + "Percie")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else     
    if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done :>`)
  return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
} else
    if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
        } else     
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
    if(message.content === adminprefix + "restart") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);
        console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(`⚠️ Bot restarting... ⚠️`);
        console.log("===============================================\n\n");
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`Bot Successfully Restarted`);
    }
  
  });
  
  client.on('message' , message => {
     if (message.content ==="..servers") {

if(!message.channel.guild) return;
  if(message.content < 1023) return
  const Embed11 = new Discord.RichEmbed()
.setAuthor(client.user.username,client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setDescription(`***مجموع السيرفرات ${client.guilds.size} \n \n${client.guilds.map(guilds => `- ${guilds.name}`).join('\n')}***`)
         message.channel.sendEmbed(Embed11)
    }
});
  
  /////////// A D M I N - C O M M A N D S [PREFIX DOESN'T WORK HERE !!!!!!!!!!!!!!!!!!]/

/////////// G U I L D - C O M M A N D S /////////////////////////////

client.on('guildMemberAdd', member => {
  if(!sWlc[member.guild.id]) sWlc[member.guild.id] = {
    channel: "welcome"
  }
  const channel = sWlc[member.guild.id].channel
    const sChannel = sWlc[member.guild.id].channel
    let welcomer = member.guild.channels.find('name', sChannel);
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':new_moon_with_face: | name : Welcome ',`${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡|Member',`${member.guild.memberCount}`)
          .addField('Server', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      welcomer.sendEmbed(embed);
                   
    });
/// Welcome with image 
client.on('guildMemberAdd', member => { 
if(!sWlc[member.guild.id]) sWlc[member.guild.id] = {
    channel: "welcome"
  }
  const channel = sWlc[member.guild.id].channel
    const sChannel = sWlc[member.guild.id].channel
    let welcomer = member.guild.channels.find('name', sChannel);
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;

    
    
var Canvas = require('canvas')
var jimp = require('jimp')

const w = ['./w1.jpg','./w2.jpg','./w3.jpg','./w4.jpg','./w6.jpg', ];

        let Image = Canvas.Image,
            canvas = new Canvas(401, 202),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 401, 202);

})

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                        //Avatar
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.drawImage(ava, 152, 27, 95, 95);
                        
                                                //wl
                        ctx.font = '20px Arial Bold';
                        ctx.fontSize = '25px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                      ctx.fillText("Number ➡|" + `${member.guild.memberCount}`, 80, 80)
                        ctx.fillText("Welcome To " + `${member.guild.name}` +  " Server" , 210, 154);
                        //ur name
                        ctx.font = '20px Arial';
                        ctx.fontSize = '28px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 213, 190);
                        
welcomer.sendFile(canvas.toBuffer())
welcomer.send(`Welcome To **${member.guild.name}**,${member}! You are The __${member.guild.memberCount}__ user!`)



})
})

});






let emoji = JSON.parse(fs.readFileSync(`./emoji.json`, `utf8`));
client.on('message', message => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;   
if(message.content.startsWith(prefix + "save")) {
let args = message.content.split(" ").slice(1)    
if (!args[0])return message.channel.send(`**${message.author.username}**| ضع الرابط رجاءا`);
if (!args[1])return message.channel.send(`**${message.author.username}**| ضع اسم الصورة رجاءا`);
if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`**${message.author.username}**|  انت لا تملك الصلاحيات لاستخدام هذا الامر`).then(msg => {msg.delete(5000)})    
if(!emoji[args[1]]) emoji[args[1]] = {
  png: args[0]
}

fs.writeFile("./emoji.json", JSON.stringify(emoji), (err) => {
if (err) console.error(err)
});
}
});
client.on('message', message => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return; 
let args = message.content.split(" ").slice(1)      
if(message.content.startsWith(prefix + `${emoji[args[0]]}`)) {
message.channel.send(`${emoji[args[0]].png}`)
}
});











var prefix = "."
client.on("message", function(message){
if (message.content.startsWith(prefix + "rank")) {
	if (!userData[message.author.id]) {
		userData[message.author.id] = {Money:0,Xp:0,Level:0}
	}
     var mentionned = message.mentions.users.first();

      var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
	fs.writeFile("./userData.json",JSON.stringify(userData), function(err){
		if (err) console.log(err);
	})
	var CulLevel = Math.floor(0.25 * Math.sqrt(userData[message.author.id].Xp +1));
	if (CulLevel > userData[message.author.id].Level) {userData[message.author.id].Level +=CulLevel}
	let pEmbed = new Discord.RichEmbed()
	.setColor("Random")
	.addField("***Name***:", message.author.tag)
	.addField("***Level***:", userData[message.author.id].Level)
	.addField("***Xp***:",Math.floor(userData[message.author.id].Xp))
	.addField("***credits***:",Math.floor(userData[x5bzm.id].money))
	message.channel.send(pEmbed);
}
if (!userData[message.author.id]) {
	userData[message.author.id] = {Money:0,Xp:0,Level:0,Like:0}
	}

	fs.writeFile("./userData.json",JSON.stringify(userData), function(err){
		if (err) console.log(err);
	})
userData[message.author.id].Xp+= 0.25;
userData[message.author.id].Money+= 0.25;

});

////////////LEVEL
 let points = JSON.parse(fs.readFileSync("./level.json", "utf8"));
 client.on("message", message => {
   if (!message.content.startsWith(prefix)) return;
   if (message.author.bot) return;

   if (!points[message.author.id]) points[message.author.id] = {
     points: 0,
     level: 0
   };
   let userData = points[message.author.id];
   userData.points++;
 
   let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
   if (curLevel > userData.level) {
     // Level up message
     userData.level = curLevel;
     message.channel.send(`**:up: | ${message.author.username} You leveled up to ${curLevel}**`);
   }
   if (message.content.startsWith(prefix + "level")) {
     message.channel.send(`**${message.author.username} You are level is ${userData.level}**`);
   }
   fs.writeFile("./level.json", JSON.stringify(points), (err) => {
     if (err) console.error(err)
   });
 
 });

////////////REP

let rep = JSON.parse(fs.readFileSync("./rep.json", "utf8"));
client.on('message', message => { 
    if(!rep[message.author.id]) rep[message.author.id] = {
        reps: 'NOT YET',
        repo: 0,
    }
    if(message.content.startsWith(prefix + 'rep')) {
      if(!message.channel.guild) return;
                    moment.locale('ar');
        let ment = message.mentions.users.first();
       var getvalueof;
       if(ment) {
           getvalueof = ment;
    } else {
           getvalueof = message.author;
    }
    if(rep[message.author.id].reps != moment().format('L')) {
            rep[message.author.id].reps = moment().format('L');
            rep[getvalueof.id].repo += 1; // يضيف واحد كل مره يستخدم الامر
            message.channel.send(`** :white_check_mark: Successfly Added rep To ${getvalueof} **`)
        } else {
           message.channel.send(`** You Do it Befor \' Pls Try Agin After:`  + moment().endOf('day').fromNow().replace('in ', 'بعد ') + '**')
        }
       }
    fs.writeFile('./rep.json', JSON.stringify(rep), (err) => {
     if(err) throw err.message + ' '+err.file;
 })
});

////////////PROFILE

client.on("message",  message => {
     var mentionned = message.mentions.users.first();
      var z;
      if(mentionned){
          var z = mentionned;
      } else {
          var z = message.author;
          
      }
     let ment = message.mentions.users.first();
       var getvalueof;
       if(ment) {
           getvalueof = ment;
    } else {
           getvalueof = message.author;
    }
    if(message.author.bot) return;
    if(message.channel.type ==="dm") return;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    let msg = message.content.toUpperCase();
    if(!command.startsWith(prefix)) return;
    
    var jimp = require('jimp')
    const w = ['./profile.png',];
    if(command === prefix + 'profile') {
    let Canvas = require('canvas')
    let canvas = new Canvas(500, 500)

    let ctxx = canvas.getContext('3d')
    let Images = Canvas.Image
    fs.readFile(__dirname + '/1.png', function(err, picture) { 
      if (err) throw err
      var img = new Images
      img.onload = () => {
        ctx.drawImage(img, 5, 5, 500, 500) 
      }
      img.src = picture
    })
     
    let ctx = canvas.getContext('2d')
    let Image = Canvas.Image
    fs.readFile(__dirname + '/background.png', function(err, picture) { 
    if (err) throw err
    var img = new Image
    img.onload = () => {
    ctx.drawImage(img, 0, 0, 500, 500) 
      }
      img.src = picture
    })
   
                      let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
      
	                //XP
			ctx.font = '22px Cairo';
			ctx.fillStyle = '#f3f3f3';
			ctx.fillText(`Total XP : ${Math.floor(userData[z.id].Xp)}`,  110,467);
	                //MONEY
			ctx.font = '24px Cairo';
			ctx.fillStyle = '#f3f3f3';
			ctx.fillText(`Credits : ${Math.floor(userData[z.id].money)}`,  220,360);
                        //USERNAME
                   	ctx.font = '24px Arial';
			ctx.fillStyle = '#f3f3f3';
                        ctx.fillText(`${z.username}`, 215, 170)
                        //LEVEL
			ctx.font = '30px Cairo';
			ctx.textAlign = 'left';
			ctx.fillStyle = '#f3f3f3';
			ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
			ctx.fillText(`${userData[z.id].level}`, 90, 310);
		        //info Box :)
                        ctx.font = '25px Cairo';
                        ctx.textAlign = 'left';
			ctx.fillStyle = '#f3f3f3';
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
                        ctx.fillText(`${userData[z.id].text}`,265 , 270)
                        //LIKE
                        ctx.font = '25px Cairo';
                        ctx.textAlign = 'Center';
                        ctx.fillStyle = '##f3f3f3';
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
                        ctx.fillText(`Rep+${rep[message.author.id].repo}`, 80,395);
			//AVATAR
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.beginPath();
                        ctx.arc(98, 144, 84, 0, Math.PI*2, true); 
                        ctx.closePath();
                        ctx.clip();
                        ctx.drawImage(ava, 13, 60, 175, 175);

    setTimeout(function() {
      fs.readFile(__dirname + '/background.png', function(err, picture) {
        if (err) throw err
        var img = new Image
        img.onload = () => {
          ctx.drawImage(img, -1, -1, 0, 0)
        }
        img.src = picture
        let inventoryPicture = canvas.toDataURL()
        let data = inventoryPicture.replace(/^data:image\/\w+;base64,/, "")
        let buf = new Buffer(data, 'base64')
        fs.writeFile(`images.png`, buf)
        message.channel.send(`**:pencil: | Showing your Profile ${message.author.username}**`, {
          file: `images.png` // Or replace with FileOptions object
        })
      })
    }, 1000)

    function roundedImage(x, y, width, height, radius) {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    }

    function wrapText(context, text, x, y, maxWidth, lineHeight) {

      var words = text.split(' '),
        line = '',
        lineCount = 0,
        i,
        test,
        metrics;

      for (i = 0; i < words.length; i++) {
        test = words[i];
        metrics = context.measureText(test);
        while (metrics.width > maxWidth) {
          // Determine how much of the word will fit
          test = test.substring(0, test.length - 1);
          metrics = context.measureText(test);
        }
        if (words[i] != test) {
          words.splice(i + 1, 0, words[i].substr(test.length))
          words[i] = test;
        }

        test = line + words[i] + ' ';
        metrics = context.measureText(test);

        if (metrics.width > maxWidth && i > 0) {
          context.fillText(line, x, y);
          line = words[i] + ' ';
          y += lineHeight;
          lineCount++;
        } else {
          line = test;
        }
      }
      ctx.fillText(line, x, y);
    }
      })
      })
      }
      });




client.on('message', message => {
if (message.author.bot) return null;
let sender = message.author;
let msg = message.content.toUpperCase();
if (!userData[sender.id]) userData[sender.id] = {}
if (!userData[sender.id].money) userData[sender.id].money = 200;
if (!userData[sender.id].lastDaily) userData[sender.id].lastDaily = 'Not Collected';
if (!userData[sender.id].messages) userData[sender.id].messages = 1;
if (!userData[sender.id].level) userData[sender.id].level = 1;
if (!userData[sender.id].like) userData[sender.id].like = 1;
if (!userData[sender.id].text) userData[sender.id].text = `${prefix}setinfo to set.`

if(message.content.startsWith(prefix + 'credit')) {
 var mentionned = message.mentions.users.first();
if (!userData[sender.id]) userData[sender.id] = {}
if (!userData[sender.id].money) userData[sender.id].money = 0;
fs.writeFile('./userData.json', JSON.stringify(userData), (err) => {
if (err) console.error(err);
})
        
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }

      var mando = message.mentions.users.id;
      if  (!userData[x5bzm.id]) userData[x5bzm.id] = {}
      if (!userData[x5bzm.id].money) userData[x5bzm.id].money = 0;
      message.channel.send("**:credit_card:  | **" + '`' + x5bzm.username + '`' + "** , your credit is :yen: **" + '`' + userData[x5bzm.id].money + '`' + "** credits!**")
}


let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(1);
if(message.content.startsWith(prefix + 'transfer')) {
          if (!args[0]) {
            message.channel.send(`**Ø§Ø°Ø§ ÙƒÙ†Øª ØªØ±ÙŠØ¯ Ø§Ù† ØªØ­ÙˆÙ„ Ø§Ù„Ù‰ Ø´Ø®Øµ Ø¹Ù† Ø·Ø±ÙŠÙ‚ Ø§Ù„Ø§Ù…Ø± Ø§Ù„ØªØ§Ù„ÙŠ: ${prefix}credits <Ø§Ù„Ø´Ø®Øµ> <Ø§Ù„Ù…Ø¨Ù„Øº>**`);
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**ÙŠØ¬Ø¨ Ø§Ù† ØªÙƒØªØ¨ Ø§Ù„Ù…Ø¨Ù„Øº : ${prefix}credits <Ø§Ù„Ø´Ø®Øµ> <Ø§Ù„Ù…Ø¨Ù„Øº>**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
            let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**ÙŠØ¬Ø¨ Ø§Ù† ØªÙƒØªØ¨ Ø§Ù„Ù…Ø¨Ù„Øº : ${prefix}credits <Ø§Ù„Ø´Ø®Øµ> <Ø§Ù„Ù…Ø¨Ù„Øº>**`);
            var mentionned = message.mentions.users.first();
if (!userData[sender.id]) userData[sender.id] = {}
if (!userData[sender.id].money) userData[sender.id].money = 200;
fs.writeFile('./userData.json', JSON.stringify(userData), (err) => {
if (err) console.error(err);
})
      var mando = message.mentions.users.id;
      if  (!userData[defineduser.id]) userData[defineduser.id] = {}
      if (!userData[defineduser.id].money) userData[defineduser.id].money = 200;
      userData[defineduser.id].money += (+args[0]);
      userData[sender.id].money += (-args[0]);
      let mariam = message.author.username
message.channel.send('`' + mentionned.username + '`' + '** Ø§Ù„Ù‰  **'+ '`' + mariam + '`' + '**  ØªÙ… ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ù…Ø¨Ù„Øº**'+ (args[0]) + '** :dollar: Ù…Ù† **')
}

if(message.content.startsWith(prefix + 'daily')) {
if (userData[sender.id].lastDaily != moment().format('2300000')) {
    userData[sender.id].lastDaily = moment().format('2300000')
    userData[sender.id].money += 200; 
    message.channel.send(`**${message.author.username} you collect your \`200\` :dollar: daily pounds**`)
} else {
    message.channel.send('**your next Daily :moneybag: : ' + moment().endOf('2300000').fromNow()  + '.**')
}
}
fs.writeFile('./userData.json', JSON.stringify(userData), (err) => {
if (err) console.error(err);
})

if(message.content.startsWith(prefix + 'setinfo')) {
if (!userData[message.author.id].text) userData[message.author.id].text = 'معلومات عني:';
var mard = userData[message.author.id].text
let args = message.content.split(' ').slice(1).join(' ');
if (!args) return message.channel.send('**عليك كتابه المعلومات بعد الامر التي تريد ان تغيره**')
userData[message.author.id].text = args ;
message.channel.send(':ballot_box_with_check:**تم تغير معلوماتك بنجاح**')
}
}
)

/////////// G U I L D - C O M M A N D S /////////////////////////////

//////////////////// M U S I C - C O M M A N D S ////////////////////
const { Client, Util } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const { PREFIX, GOOGLE_API_KEY } = require('./config2');
const youtube = new YouTube(GOOGLE_API_KEY);

const queue = new Map();



client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => console.log('Yo this ready!'));

// client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));

// client.on('reconnecting', () => console.log('I am reconnecting now!'));

client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(PREFIX)) return undefined;

	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(PREFIX.length)

	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('***يجب ان تكون في روم صوتي***');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send('***لا أستطيع أن أتكلم في هذه القناة الصوتية، تأكد من أن لدي الصلاحيات الازمة !***');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('***لا أستطيع أن أتكلم في هذه القناة الصوتية، تأكد من أن لدي الصلاحيات الازمة !***');
		}
		if (!permissions.has('EMBED_LINKS')) {
			return msg.channel.sendMessage("**لا يوجد لدي صلاحيات `EMBED LINKS`**")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return msg.channel.send(` **${playlist.title}** تم اضافة القائمه!`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**اختار رقم المقطع** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)
					.setFooter("")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('***لم يتم تحديد العدد لتشغيل الاغنيه.***');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send('***:X: لم أستطع الحصول على أية نتائج بحث.***');
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === `s`) {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing that I could skip for you.');
		serverQueue.connection.dispatcher.end('Skip command has been used!');
		return undefined;
	} else if (command === `stop`) {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing that I could stop for you.');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Stop command has been used!');
		return undefined;
	} else if (command === `vol`) {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		if (!args[1]) return msg.channel.send(`:loud_sound: Current volume is **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
	} else if (command === `np`) {
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`:notes: الان يتم تشغيل: **${serverQueue.songs[0].title}**`)
		return msg.channel.sendEmbed(embedNP);
	} else if (command === `queue`) {
		
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		let index = 0;
		const embedqu = new Discord.RichEmbed()
	.setDescription(`**Songs Queue**

${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}

**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
		}
		return msg.channel.send('There is nothing playing.');
	} else if (command === "resume") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
		}
		return msg.channel.send('لا يوجد شيء حالي في العمل.');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	
//	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`I could not join the voice channel: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`بدء تشغيل: **${song.title}**`);
}
  //////////////////// M U S I C - C O M M A N D S ////////////////////


///DANGER ZONE [PLEASE DON'T DO ANYTHING BAD HERE] //
/////////////////////////////////////////////////////
////////////////// C O M M A N D S //////////////////
const premium = ['352139023348924418', '431150885549113344', '', '']
client.on('message', message => {
if(message.channel.type === "dm") return;
if(message.author.bot) return;
if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "."
}
  if(!sWlc[message.guild.id]) sWlc[message.guild.id] = {
    channel: "welcome"
}
const prefix = p[message.guild.id].prefix
sql.open("./score.sqlite");
const channel = sWlc[message.guild.id].channel
///////////////////////////////////////////
if (message.content.startsWith(prefix + "setprefix")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newPrefix = message.content.split(' ').slice(1).join(" ")
    if(!newPrefix) return message.reply(`**${prefix}setprefix <prefix>**`)
    p[message.guild.id].prefix = newPrefix
    message.channel.send(`**${message.guild.name}'s prefix has been changed to ${newPrefix}**`);
}     
  if (message.content.startsWith(prefix + "setwelcomer")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newChannel = message.content.split(' ').slice(1).join(" ")
    if(!newChannel) return message.reply(`**${prefix}setwelcomer <channel name>**`)
    sWlc[message.guild.id].channel = newChannel
    message.channel.send(`**${message.guild.name}'s channel has been changed to ${newChannel}**`);
  }

    
if (!points[message.author.id]) points[message.author.id] = { // يقوم الكود تلقائياً في حال لم يجد نقاط العضو بإنشاء نقاط له ويتم إرسالها الملف المخصص
	points: 0,
  };
if (message.content.startsWith(prefix + 'سرعة')) { // $سرعة
	if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./type.json'); // في هذا السطر يقوم الكود بقراءة ملف الأسئلة
const item = type[Math.floor(Math.random() * type.length)]; // الأرراي المخصص للأسئلة
const filter = response => { // في هذا السطر يقوم بصنع فلتر للأجوبة
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانية لكتابة الكلمة**').then(msg => {
	let embed = new Discord.RichEmbed()
	.setColor('RANDOM')
	.setFooter("Games-Bot| .لرؤية مجموع نقاطك اكتب نقاطي |", 'https://cdn3.iconfinder.com/data/icons/forall/110/game-128.png')
	.setDescription(`**قم بكتابة : ${item.type}**`) // ${item.type} = السؤال
	
	msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
		message.channel.send(`${collected.first().author}  ✅**لقد ربحت نقطه*`);
		console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; // في هذا السطر يقوم الكود بسحب الأي دي الذي قام بالأجابة اولاً
            points[won.id].points++;
          })
          .catch(collected => { // في حال لم يقم أحد بالإجابة
            message.channel.send(`:x: **لم يقم أحد بكتابة الجملة بالوقت المناسب**`);
			console.log(`[Typing] Error: No one type the word.`);
          })
		})
	})
}
    
    
                if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};
    
    
    
if (message.content === prefix + "server") {
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();

    const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
    const days = millis / 1000 / 60 / 60 / 24;
    var embed  = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField("**🆔 سيـرفر ايــدي**", "**"+message.guild.id+"**",true)
    .addField("**👑 سيــرفر اونـر**", "**"+message.guild.owner+"**" ,true)
    .addField("**✅ الشــات الاســاســي**" , "**"+message.guild.DefaultChannel+"**" ,true)
    .addField("**🌍 المـوقع**" , "**"+message.guild.region+"**",true)
    .addField('**💬 عدد الرومــات الكتابيــة**',`**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`,true)
    .addField("**📣 عدد الرومــات الصوتــية**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `,true)
    .addField("**🤔 عدد ايــام انشــاء السيــرفر**", ` ** [ ${days.toFixed(0)} ] ** Day ` ,true)
    .addField("**👔 الــرتــب**",`**[${message.guild.roles.size}]** Role `,true)
    .addField("**💠 مســتوى حمــاية الســيرفر**", ` ** [ ${verificationLevels[message.guild.verificationLevel]} ] ** `,true)
    
    .addField("👥عدد الاعضــاء",`**${message.guild.memberCount}**`)
    .setThumbnail(message.guild.iconURL)
    .setColor('RANDOM')
    message.channel.sendEmbed(embed)
}
if (message.content.startsWith(prefix + 'ping')) {
message.channel.sendMessage("**Pinging...**").then((message)=> {

message.edit(`**Time Taken :ping_pong:** \`${Date.now() - message.createdTimestamp} ms\`` + `\n **Discord API :heartpulse:** \`${client.pings[1]} ms\``);

})
}

 



  
    if (message.content === prefix + 'help') {
        let embed = new Discord.RichEmbed()
.setThumbnail("https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/world-circle-blue-128.png")    
     .addField("**:globe_with_meridians: الأوامر العامه**","** **")
      .addField("**.date :timer:**","**لـ  وقت و تاريخ**") 
.addField("**.ping :stopwatch:**","***لـ سرعة إتصالك**")
     .addField("**.draw :frame_photo: :**","***يكرر الكلام في صوره**")
.addField("**.idimg :id: **","**يعرض حقك اي دي بصوره**") 
     .addField("**.id :chart_with_downwards_trend:**","**يظهر لك اي دي حقك**")
     .addField("**.avatar :camping:**","**لـ صور الشخص المختار**")
     .addField("**.roll :1234:**","**لـ القرعه من 1 - الى العدد الذي تختاره**")
     .addField("**.server :recycle:**","**لـ معلومات السيرفر**")
     .addField("**.icon :frame_photo: **","**لـ يظهر لك صوره السيرفر**")
     .addField("**.animal :unicorn: **","**لـ صور حيوانات كيوت**")
     
.setColor('RANDOM')
message.author.sendEmbed(embed);
 
}
///if (message.content === prefix + 'help') {
   /// let embed = new Discord.RichEmbed()
//.setThumbnail("https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/music-128.png")    
 //.addField("**:musical_note:  اوامر الميوزك**","** **")
 //.addField("**.play :musical_note: **","**لـ تشغيل لاغنيه**")
// .addField("**.vol :musical_note:**","**لرفع صوت لاغنيه**")
// .addField("**.stop :musical_note:**","**لـ اطفاء لاغنيه**")
// .addField("**.search :musical_note:**","**لـ عرض قائمه لاغاني**")
// .addField("**.skip :musical_note:**","**لـ نخطي لاغنيه**")
// .setFooter("** ?نبرى ذمتنا ?: في أي أستعمال خاطئ للهذا الكوماند**")
//.setColor('RANDOM')
//message.author.sendEmbed(embed);
//}
if (message.content === prefix + 'help') {
    let embed = new Discord.RichEmbed()
.setThumbnail("https://cdn2.iconfinder.com/data/icons/clean-and-simple/153/Settings-128.png")    
 .addField("**:radioactive: أوامر الأداره**","** **")
 .addField("الترحيب", "**`.setwelcomer اسم الروم حق الترحيب*")
 .addField("**.v2min **","**عمل روم لمده دقيقتين**") 
 .addField("**.setprefix  **","**لو تبي تغير البرفكس في سيرفرك **") 
 .addField("**.mute :mute: **","**اعطاء العضو ميوت كتابي**")  
 .addField("**.umute :loud_sound:  **","**فك الميوت عن العضو**")  
 .addField("**.bc  :mega:**","**لـ البرودكاست**") 
 .addField("**.clear :octagonal_sign:**","**لـ مسح الشات**")
 .addField("**.mutechannel :no_entry: **","**قفل الشات**")
 .addField("**.unmutechannel :on: : **","**فتح الشات**")	 
 .addField("**.colors create :cyclone:**","** لـ اضافة 200 لون**")
 .addField("**.kick  :outbox_tray:**","**لـ طرد الأعضاء**")
 .addField("**.ban  :no_entry:**","**لـ حظر الأعضاء**")
.setColor('RANDOM')
message.author.sendEmbed(embed);
}
if (message.content === prefix + 'help') {
    let embed = new Discord.RichEmbed()
.setThumbnail("https://cdn3.iconfinder.com/data/icons/forall/110/game-128.png")    
 .addField("** :video_game: أوامر الالعاب**","** **")
 .addField("**.كت تويت :video_game: **","**لـ لعبه كت تويت**")
 .addField("**.لوخيروك  :video_game: **","**لـ لعبه ولو خيروك**")
 .addField("**.صراحه :video_game: **","**لـ لعبه صراحه**")
 .addField("**.مريم :video_game:  **","**لـ لعبه مريم**")
 .addField("**.هل تعلم:video_game:  **","**لـ لعبه هل تعلم**")
 .addField("**.حكم:video_game:  **","**لـ يعطيك حكم لازم تعمله **")
.setColor('RANDOM')
message.author.sendEmbed(embed);
}
if (message.content === prefix + 'help') {
    let embed = new Discord.RichEmbed()
.setThumbnail("https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/support-128.png") 
.addField("**:diamond_shape_with_a_dot_inside: Support ™ **","** **")
.addField("**موقع البوت **","**http://bytetechproject.rf.gd/**")
.addField("**موقع دعوة البوت**","**http://bytetechproject.rf.gd/invite**")
.addField("**لو تبي ترسل لنا رساله **","**.contact <رسالتك>**")
  .addField("** مبرمجين البوت :wrench: **","** GoldBot+™ » <@431150885549113344> <@352139023348924418>  **")
 .addField("** شكرا خاص يلي ساعدونا:wrench: **","** ByteTech™ » <@171259176029257728> <@343383616895713290>**")
  .setColor('RANDOM')
message.author.sendEmbed(embed);
}



  if (message.content.startsWith(prefix + "report")) {
        let args = message.content.split(" ").slice(1).join(' ');
        if (!args[1])
     return message.channel.send(`**${prefix}report <message>**`);
      const embed = new Discord.RichEmbed()
      .addField('**Server**', message.guild.name)
      .addField('Channel Name', message.channel.name)
      .addField('**Sender**', message.author.tag)
      .addField('Report', args)
      .setColor('RANDOM')
      .setThumbnail("https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678136-shield-warning-256.png")
      .setFooter(message.author.username, message.author.avatarURL)
     .setTimestamp()
      client.channels.get('441264563812433924').send(embed);
      message.channel.send('**``The report have been sent to us!``**').then((message)=> {
          message.delete(50000)
      })
  }

       if (message.content.startsWith(prefix + "contact")) {
        let args = message.content.split(" ").slice(1).join(' ');
         if(!args) return message.channel.send(`**${prefix}contact <message>**`)
        let embedcontact = new Discord.RichEmbed()
        .addField('**Guild**', message.guild.name)
        .addField('**Sender**', message.author.tag)
        .addField('Contact Message', args)
        .setColor('RANDOM')
        .setThumbnail("https://cdn2.iconfinder.com/data/icons/basic-flat-icon-set/128/letter-256.png")
        .setFooter(message.author.username, message.author.avatarURL)
       .setTimestamp()
        client.channels.get("441264563812433922").send(embedcontact);
         message.channel.send('``Your contact message has been sent to us!``').then((message)=> {
          message.delete(50000)
      })
       }
  
  
   if (message.content === prefix + "date") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');  
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }


            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 

                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "『التاريخ  والوقت』")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                .addField('الامارات',
                "『"+ hours + ":" + minutes +":"+ seconds + "』")
                 .addField('مكه المكرمه',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』") 
                .addField('مصر',
                "『"+ hours3 + ":" + minutes +":"+ seconds  + "』") 
                
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")

                 message.channel.sendEmbed(Date15);
   }
    if(message.content === prefix + "icon"){
        const embed = new Discord.RichEmbed()
    .setTitle(`${message.guild.name}'s icon`)
  .setColor(0x164fe3)
  .setImage(message.guild.iconURL)
 message.channel.send({embed});
    }
    if (message.content.startsWith(prefix + "avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
 if(message.content.startsWith(prefix + 'v2min')) {
    let args = message.content.split(" ").slice(1);
      var nam = args.join(' ');
     if(!message.member.hasPermission('MANAGE_CHANNELS')) return    message.channel.send('**⚠ | `[MANAGE CHANNELS]` لا يوجد لديك صلاحية**').then(msg => msg.delete(6000))
     if (!nam) return message.reply(`** ${prefix}v2min <أسم الروم>**`).then(msg => msg.delete(10000))
     message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 120000)) // كل 60 تساوي دقيقة عدل عليها الوق�� لي تبيه 
     message.channel.send(`:ballot_box_with_check: TemporarySound : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> :stopwatch:  انتهى وقت الروم الصوتي`), 120000))  // 120000 دقيقتان
   
    }




    if(message.content.startsWith('!sound')) {
    let args = message.content.split(' ').slice(1);
    let ar = args.join(' ');

    message.channel.send(ar,{tts:true});
}

        if (message.content.startsWith(prefix + "clear")) {
          if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **لا يوجد لديك صلاحية لمسح الشات**');
          var msg;
          msg = parseInt();
          
          message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
          message.channel.sendMessage("", {embed: {
          title: "Whoaaaaaaaa!",
          color: 0x06DF00,
          description: "Messages have gone to :wastebasket:",
          footer: {
          text: "This message will be deleted in 3 seconds!"
          }
          }}).then(msg => {msg.delete(3000)});}

            if(message.content.startsWith(prefix + 'animal')) {
                var cats = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
                   var cat = new Discord.RichEmbed()
          .setImage(cats[Math.floor(Math.random() * cats.length)])
          message.channel.sendEmbed(cat);
              }


var times = {
    "1⃣": "m",
    "2⃣": "h",
    "3⃣": "d"
}
var times_ms = {
    "m": 1000 * 60,
    "h": 1000 * 60 * 60,
    "d": 1000 * 60 * 60 * 24
}
var times_name = {
    "m": "الدقائق",
    "h": "الساعات",
    "d": "الأيام"
}
var attentions = {};
    if( message.content.startsWith( prefix + 'ذكرني' ) ){
        if( attentions[ message.member ] ) {
            message.channel.send( message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then( (m) =>{
                m.react('1⃣').then( r1 => {
                    m.react('2⃣').then( r2 => {
                        setTimeout(function ( ){
                            m.edit( message.member +', ** يوجد تذكير مضاف بالفعل, هل تريد حذفه ؟ ** \n**:one: نعم** \n **:two: لا** ' );
                            m.awaitReactions((reaction, user) => user.id == message.author.id, {time: 60000, maxEmojis: 1})
                            .then(result => {
                                var reaction = result.firstKey();
                                if( reaction == "1⃣" || reaction == "2⃣" ){
                                    if( reaction == "1⃣" ){
                                        clearTimeout(attentions[message.member]['timer']);
                                        attentions[message.member] = undefined;
                                        m.edit(message.member + '**:white_check_mark: تم حذف التذكير, يمكنك الآن أضافة واحد**');
                                    } else if( reaction == "2⃣" ){
                                        m.edit(message.member + '** لن يتم حذف التذكير **')
                                    }
                                    m.clearReactions();
                                }
                            });
                        },1000);
                    });
                });
            });
           
        } else {
            attentions[message.member] = { };
            message.channel.send( message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then( (m) =>{
                m.edit( message.member + ', **:writing_hand: ماذا تريد ان يكون عنوان التذكير **' )
                m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                    m1 = m1.first();
                    attentions[message.member]['title'] = m1.content;
                    m1.delete();
                    m.edit(message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then( (m) =>{
                        m.edit( message.member + ', **:writing_hand: ماذا تريد ان يكون وصف التذكير **' )
                        m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                            m2 = m2.first();
                            attentions[message.member]['desc'] = m2.content;
                            m2.delete()
                            m.edit(message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then( ()=>{
                                m.react('1⃣').then( r1 => {
                                    m.react('2⃣').then( r2 => {
                                        m.react('3⃣').then( r2 => {
                                            setTimeout(function ( ){
                                                m.edit(message.member + ', **:writing_hand: حدد موعد التذكير التقريبي**\n **:one: بعد دقائق ** \n **:two: بعد ساعات ** \n **:three: بعد أيام**');
                                                m.awaitReactions((reaction, user) => user.id == message.author.id, {time: 60000, maxEmojis: 1})
                                                    .then(result => {
                                                        var reaction = result.firstKey();
                                                        if( reaction == "1⃣" || reaction == "2⃣" || reaction == "3⃣" ){
                                                            attentions[message.member]['time'] = times_ms[times[reaction]];
                                                            m.edit(message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then ( ( ) =>{
                                                            m.clearReactions().then( () =>{
                                                                m.edit(message.member + ', **:timer: اذكر عدد '+times_name[times[reaction]]+'**' )
                                                                    m.channel.awaitMessages( m3 => m3.author == message.author && !isNaN(m3.content),{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                                                        m3 = m3.first();
                                                                        attentions[message.member]['time_num'] = m3.content;
                                                                        m3.delete();
                                                                        attentions[message.member]['timer'] = setTimeout(function( ){
                                                                            message.member.send('** '+message.member+' تذكير !! **')
                                                                            var embed = new Discord.RichEmbed( );
                                                                            embed.setTitle( attentions[message.member]['title'] );
                                                                            embed.setDescription( attentions[message.member]['desc'] );
                                                                            embed.setTimestamp();
                                                                            message.member.send({embed});
                                                                            message.member.send('** '+message.member+' تذكير !! **')
                                                                        }, attentions[message.member]['time_num'] * attentions[message.member]['time'] );
                                                                       
                                                                        message.reply('** :white_check_mark: تم أضافة التذكير, سيتم تذكيرك لاحقاً **');
                                                                        m.delete();
                                                                        message.delete();
                                                                    }).catch(function(){ m.delete( ); attentions[message.member] = undefined; } );
                                                                });
                                                            });
                                                        }
                                                    });
                                            },1000);
                                        });
                                    });
                                });
                            }).catch(function() { m.delete();attentions[message.member] = undefined;  });
                        }).catch(function() { m.delete(); attentions[message.member] = undefined;  });
                    });
                   
                }).catch(function( ) {m.delete(); attentions[message.member] = undefined; });
            });
        }
    }
    
    
    
const dateFormat = require('dateformat');
 
 

   if (message.content.startsWith(prefix + "id")) {
 
if(!message.channel.guild) return;
        var args = message.content.split(" ").slice(1);
      let user = message.mentions.users.first();
       var h = message.mentions.users.first();
          var h;
            if(h){
                var h = h;
            } else {
                var h = message.author;
               
            }
              var z = message.mentions.members.first();
          var z;
            if(z){
                var z = z;
            } else {
                var z = message.member;
            }
             moment.locale('ar-ly');
 
 
 
 
 
 
 
 
 
 
 
const w = ['./id.png'];
var Canvas = require('canvas')
var jimp = require('jimp')
 
// ctrl + s
 
        let Image = Canvas.Image,
            canvas = new Canvas(1024, 576),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        fs.readFile(`./id.png`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 1024, 576);
 
})
   var mentionned = message.mentions.users.first();
 
    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;
         
      }
 
 
                let url = h.displayAvatarURL.endsWith(".webp") ? h.displayAvatarURL.slice(20, 20) + ".png" : h.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
 
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.drawImage(ava, 45, 49, 259, 259);
                                              var time2;
      if(mentionned){
          var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
      } else {
          var time2 = `${dateFormat(message.member.joinedAt)}`;
         
      }  
                           var status;
    if (h.presence.status === 'online') {
        status = 'متصل';
    } else if (h.presence.status === 'dnd') {
        status = 'مشغول';
    } else if (h.presence.status === 'idle') {
        status = 'خامل';
    } else if (h.presence.status === 'offline') {
        status = 'غير متصل';
    }
                        ctx.font = '55px Arial Bold';
                        ctx.fontSize = '55px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(status, 540, 293);
                       
   
                       
                        ctx.font = '45px Arial Bold';
                        ctx.fontSize = '45px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(`${h.username}`, 636, 160);
 
                        ctx.font = '50px Arial Bold';
                        ctx.fontSize = '50px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(moment(z.joinedAt).startOf(' ').fromNow(), 270, 499);
                       
                        ctx.font = '50px Arial Bold';
                        ctx.fontSize = '50px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(moment(h.createdAt).fromNow(), 760, 499);
                        var time2;
      if(mentionned){
          var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
      } else {
          var time2 = `${dateFormat(message.member.joinedAt)}`;
         
      }
message.channel.sendFile(canvas.toBuffer())
 
            // when someone calls this command, it also adds 1 earlier at the same, but since this is fetching the previous value, we need to add 1 to the answer, even thought it will be updated
            // seconds after this.
        })
    })
   
   }
   
   

   if (message.content === (prefix + "roll")) {
  message.channel.sendMessage(Math.floor(Math.random() * 100));
    }

   
       if(message.content == (prefix + "top")){
message.guild.fetchInvites().then(i =>{
var invites = [];

i.forEach(inv =>{
    var [invs,i]=[{},null];
    
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
 
});
  message.channel.send(invites.join(`\n`)+'\n\n**By:** '+message.author);
  
});

    }
    
    
    
    

   
   





    let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

if(command == "draw") {
    var Canvas = require('canvas')
  , Image = new Canvas.Image
  , canvas = new Canvas(450, 170)
  , ctx = canvas.getContext('2d');
  ctx.font = '30px Impact';
  let args = message.content.split(" ").slice(1);
  
Image.src = canvas.toBuffer();

    console.log(Image);
ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
ctx.fillText(args.join("  "),110, 70);


ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();

message.channel.sendFile(canvas.toBuffer());
}



    

         if (message.content === prefix + "servers") {
              const Embed11 = new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setDescription(`***مجموع السيرفرات ${client.guilds.size} \n \n${client.guilds.map(guilds => `- ${guilds.name}`).join('\n')}***`)
                     message.channel.sendEmbed(Embed11)
                }
                if(message.content === prefix + "invite") {
                    let embed = new Discord.RichEmbed ()
                    embed.setTitle("**:arrow_right: Invite GoldBot+!**")
                    .setURL("http://bytetechproject.rf.gd/invite");
                   message.channel.sendEmbed(embed);
                  }
                  if (message.content === prefix + "support") {
                  message.channel.send("**سيرفر الدعم \n https://discord.gg/4rXs6hy**");
               }
               
               if (message.content ===  prefix + 'colors create'){
              if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
              message.channel.send("**:white_check_mark: | يتم عمل الالوان**");
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < 141; x++){
            message.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
    
    if (message.content === prefix + ('members')) {
      if (!devs.includes(message.author.id)) return;
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(message.guild.iconURL)
    .addField("👥عدد الاعضــاء سيرفر:",`**${message.guild.memberCount}**`)
    .addField("** :calendar: عدد لأعضاء سيرفرات الى بوت فيها:**", client.users.size)
    message.channel.sendEmbed(embed)
    

  }
    
    
    
    if (message.content === prefix + "mutechannel") {
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠ | لا يوجد لديك صلاحية**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات :white_check_mark: ")
           });
             }
//KING BOT
if (message.content === prefix + "unmutechannel") {
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠ | لا يوجد لديك صلاحية**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true
           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }
    

    if(message.content.startsWith(prefix + 'لو خيروك')) {
        var viper = ["https://f.top4top.net/p_682it2tg6.png%22","https://e.top4top.net/p_682a1cus5.png%22","https://d.top4top.net/p_682pycol4.png%22","https://c.top4top.net/p_682vqehy3.png%22","https://b.top4top.net/p_682mlf9d2.png%22","https://a.top4top.net/p_6827dule1.png%22","https://b.top4top.net/p_682g1meb10.png%22","https://a.top4top.net/p_682jgp4v9.png%22","https://f.top4top.net/p_682d4joq8.png%22","https://e.top4top.net/p_6828o0e47.png%22","https://d.top4top.net/p_6824x7sy6.png%22","https://c.top4top.net/p_682gzo2l5.png%22","https://b.top4top.net/p_68295qg04.png%22","https://a.top4top.net/p_682zrz6h3.png%22","https://f.top4top.net/p_6828vkzc2.png%22","https://e.top4top.net/p_682i8tb11.png",]
         var lo = new Discord.RichEmbed()
.setImage(viper[Math.floor(Math.random() * viper.length)])
message.channel.sendEmbed(lo);
    }
    
   
    
 if (message.content.startsWith(prefix + 'حكم')) {
    const scc = [
        '*** منشن الجميع وقل انا اكرهكم. ***',
     '*** اتصل على امك و قول لها انك تحبها :heart:. ***',
        '***     تصل على الوالده  و تقول لها  احب وحده.***',
        '*** تتصل على شرطي تقول له عندكم مطافي.***',
        '*** صور اي شيء يطلبه منك الاعبين.***',
        '*** اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص. ***',
        '*** اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك.***',
        '*** اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف.***',
        '***  تروح عند شخص تقول له احبك. ***',
        '***روح عند اي احد بالخاص و قول له انك تحبه و الخ.***',
        '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه. ***',
        '*** روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 ر��ائل. ***',
        '*** اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك. ***',
        '*** ذي المرة لك لا تعيدها.***',
        '*** ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام.***',
        '*** اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل..... ***',
        '*** تكلم باللهجة السودانية الين يجي دورك مرة ثانية.***',
        '***سو مشهد تمثيلي عن مصرية بتولد.***',
        '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية. ***',
        '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية.***',
        '*** سامحتك خلاص مافيه عقاب لك :slight_smile:. ***',
        '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه.***',
        '*** تتصل على الوالده  و تقول لها خطفت شخص. ***',
        '*** روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك.  ***'
     ]
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة حكم ..")
  .setColor('RANDOM')
  .setDescription(`${scc[Math.floor(Math.random() * scc.length)]}`)
   message.channel.sendEmbed(mariam);
   message.react(":thinking:")
  }
        
        
 if (message.content.startsWith(prefix + 'مريم')) {
    const zead = [
        '*** انا اسمي مريم ***',
        '*** مرحباَ ماهو اسمك ؟ ***',
        `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
        '*** هل تود مساعدتي ؟ ***',
        '*** لماذا هل انت قاسي القلب ؟ ***',
        '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
        '*** ابتعد عني قليل انني متعبة ***',
        '*** هل انت ن��دم على ماقلت ؟ ***',
        '*** ابتعد عني قليل انني متعبة ***',
        '*** هل انت نادم على ماقلت ؟ ***',
        '*** هل تود مساعدتي ؟ ***',
        '*** واو اشكرك انك شخصاَ رائع ! ***',
        '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
        '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
        '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
        '*** هيا اذاَ ***',
        '*** اود ان اسئلك سؤال ونحن في الطريق ***',
        '*** هل تراني فتاة لطيفة ام مخيفة ***',
        '*** اشكرك !  ***',
        '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
        '*** هل انت جاهز ؟ ***',
        '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
        '*** هل تود ان تراهم الان ***',
     '*** انا لست الحوت الازرق كما يدعون ***',
        '*** انا لست كاذبة صدقني***',
        '*** لماذا ارى في عينيك الخوف ؟ ***',
        '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
        '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
        '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
        '*** لماذا لم تدخل الغرفة ؟ ***',
        '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
        '*** لن تخرج حتى اعود لك بعد قليل ***',
        '*** المفتاح معك ! اكتب .مريم  ***',
        '*** مفتاح احمر , هل حصلت عليه ؟ ***',
        '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
        '*** مفتاح اسود . هل حصلت عليه ؟ ***',
        '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
        '*** لقد عادت من جديد الى المنزل ***',
        '*** لا تصدر اي صوت ! ***',
        '*** مريم : لقد عدت ***',
        '*** مريم : يا ايها المخادع اين انت ***',
        '*** مريم : اعلم انك هنا في المنزل ***',
        '*** مريم : ماذا تريد ان تسمع ***',
        '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
        '*** احد ما خرج من المنزل ***',
        '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدني في نشر البوت وادخل هذا السيرفر  ***'
     ]
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة مريم ..")
  .setColor('RANDOM')
  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
   message.react("👻")
  }

               
        if (message.content.startsWith(prefix + 'صراحه')) {
            const Sra7a = [
                'صراحه  |  صوتك حلوة؟',
                'صراحه  |  التقيت الناس مع وجوهين؟',
                'صراحه  |  شيء وكنت تحقق اللسان؟',
                'صراحه  |  أنا شخص ضعيف عندما؟',
                'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
                'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
                'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
                'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
                'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
                'صراحه  |  أشجع شيء حلو في حياتك؟',
                'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
                'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
                'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
                'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
                'صراحه  |  نظرة و يفسد الصداقة؟',
                'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
                'صراحه  |  شخص معك بالحلوه والمُره؟',
                'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
                'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
                'صراحه  |  وش تتمنى الناس تعرف عليك؟',
                'صراحه  |  ابيع المجرة عشان؟',
                'صراحه  |  أحيانا احس ان الناس ، كمل؟',
                'صراحه  |  مع مين ودك تنام اليوم؟',
                'صراحه  |  صدفة العمر الحلوة هي اني؟',
                'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
                'صراحه  |  صفة تحبها في نفسك؟',
                'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
                'صراحه  |  تصلي صلواتك الخمس كلها؟',
                'صراحه  |  ‏تجامل أحد على راحتك؟',
                'صراحه  |  اشجع شيء سويتة بحياتك؟',
                'صراحه  |  وش ناوي تسوي اليوم؟',
                'صراحه  |  وش شعورك لما تشوف المطر؟',
                'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
                'صراحه  |  ما اكثر شي ندمن عليه؟',
                'صراحه  |  اي الدول تتمنى ان تزورها؟',
                'صراحه  |  متى اخر مره بكيت؟',
                'صراحه  |  تقيم حظك ؟ من عشره؟',
                'صراحه  |  هل تعتقد ان حظك سيئ؟',
                'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
                'صراحه  |  كلمة تود سماعها كل يوم؟',
                'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
                'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
                'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
                'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
                '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
                'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
                '‏صراحه | هل تحب عائلتك ام تكرههم؟',
                '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
                '‏صراحه  |  هل خجلت من نفسك من قبل؟',
                '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
                '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
                '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
                 '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
                '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
                '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
                'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
                '‏صراحه  |  ما هو عمرك الحقيقي؟',
                '‏صراحه  |  ما اكثر شي ندمن عليه؟',
                'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
           ]
          var embed = new Discord.RichEmbed()
          .setTitle("لعبة صراحة ..")
          .setColor('RANDOM')
          .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
          .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                          .setTimestamp()
        
           message.channel.sendEmbed(embed);
           message.react("🤔")
         }



  
  
  sql.open("./score.sqlite");
  sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    } else {
      let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
      if (curLevel > row.level) {
        row.level = curLevel;
        sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
var Canvas = require('canvas')
var jimp = require('jimp')

const w = ['./gg.png'];

        let Image = Canvas.Image,
            canvas = new Canvas(250, 250),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 5, 5, 250, 250);

})

                let url = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(5, -20) + ".png" : message.author.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                        //Avatar
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.drawImage(ava, 152, 27, 95, 95);
                        
                                                //wl
                        ctx.font = '20px Arial';
                        ctx.fontSize = '25px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText("LEVEL UP!", 210, 154);
                        //ur name
                        ctx.font = '20px Arial Bold';
                        ctx.fontSize = '28px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(`LVL ${curLevel}`, 213, 190);
message.channel.send(`**:up: ${message.author.username} | leveled up!**`)
message.channel.sendFile(canvas.toBuffer())
})
})
        
      };
      sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    });
  });

  if (message.content.startsWith(prefix + "level")) {
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) return message.reply("Your current level is 0");
      message.reply(`Your current level is ${row.level}`);
    });
  } 
         if (message.content.startsWith(prefix + "كت تويت")) {
            const cuttweet = [
                'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
                'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
                'كت تويت | الحرية لـ ... ؟',
                'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
                'كت تويت ‏| كلمة للصُداع؟',
                'كت تويت ‏| ما الشيء الذي يُفارقك؟',
                'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
                'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
                'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
                'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
                '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
                'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
                '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
                '‏كت تويت | وش يفسد الصداقة؟',
                '‏كت تويت | شخص لاترفض له طلبا ؟',
                '‏كت تويت | كم مره خسرت شخص تحبه؟.',
                '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
                '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
                '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
                '‏كت تويت |أقوى كذبة مشت عليك ؟',
                '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
                'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
                '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
                '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
                '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
                '‏كت تويت | مطلبك الوحيد الحين ؟',
                '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
           ]
          var embed = new Discord.RichEmbed()
          .setColor('RANDOM')
           .setThumbnail(message.author.avatarURL) 
         .addField('لعبه كت تويت' ,
          `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
          message.channel.sendEmbed(embed);
            }




                    if(message.content.startsWith(prefix + 'هل تعلم')) {
                        var memes =["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
                         var embed = new Discord.RichEmbed()
                    .setImage(memes[Math.floor(Math.random() * memes.length)])
                    message.channel.sendEmbed(embed);
                    }
  

  

                        if (message.content.startsWith(prefix + "ban")) {
                        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply('**⚠ | `[BAN_MEMBERS]` لا يوجد لديك صلاحية**');
                        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**لا توجد لدي صلاحيات**")
                        let user = message.mentions.users.first();
                        let reason = message.content.split(" ").slice(2).join(" ");
                      if (message.mentions.users.size < 1) return message.reply(`**${prefix}ban <user> <reason>**`);
                        if (!message.guild.member(user)
                      .kickable) return message.reply("**can't ban this user!**");
                        message.guild.member(user).ban();
                    
                        const banembed = new Discord.RichEmbed()
                        .setAuthor(user.username, user.displayAvatarURL)
                        .setColor("RANDOM")
                        .setTimestamp()
                        .addField("**The member that got banned:**",  '**[ ' + `${user.tag}` + ' ]**')
                        .addField("**Reason**", '**[ ' + `${reason}` + ' ]**')
                        .setFooter(`By: ${message.author.tag}`)
                        message.channel.send({
                          embed : banembed
                        })
                      }
                      
                      if (message.content.startsWith(prefix + "kick")) {
                        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply('**⚠ | `[BAN_MEMBERS]` لا يوجد لديك صلاحية**');
                        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return;
                        let user = message.mentions.users.first();
                        let reason = message.content.split(" ").slice(2).join(" ");
                      if (message.mentions.users.size < 1) return message.reply(`**${prefix}kick <user> <reason>**`);
                        if (!message.guild.member(user)
                      .kickable) return message.reply("**can't kick this user!**");
                      
                        message.guild.member(user).kick();
                      
                        const banembed = new Discord.RichEmbed()
                        .setAuthor(user.username, user.displayAvatarURL)
                        .setColor("RANDOM")
                        .setTimestamp()
                        .addField("**The member that got kicked:**",  '**[ ' + `${user.tag}` + ' ]**')
                        .addField("**Reason**", '**[ ' + `${reason}` + ' ]**')
                        .setFooter(`By: ${message.author.tag}`)
                        message.channel.send({
                          embed : banembed
                        })
                      }
  
if(message.content.startsWith(prefix+"fortnite")) {
const Fortnite = require('fortnite');
const ft = new Fortnite('1010ab16-8f67-414a-a0b5-13d9e8b93954');
//!testing
let args = message.content.split(" ").slice(1)
if(!args[0]) return message.channel.send(`**${prefix}fortnite <username> <platform (pc, xbnl, psn)>**`);
let username = args[0];
let platform = args[1] || "pc";
let data = ft.getInfo(username, platform).then(data => {

let stats = data.lifetimeStats;
let kills = stats.find(s => s.stat == "kills");
let wins = stats.find(s => s.stat == "wins");
let kd = stats.find(s => s.stat == "kd");
let mplay = stats.find(s => s.stat == "matchesPlayed");
let tplay = stats.find(s => s.stat == "timePlayed");
let score = stats.find(s => s.stat == "score");
let top25s = stats.find(s => s.stat == "top25s");
let url = `https://fortnitetracker.com/profile/${data.platform}/${data.username}`
let embed = new Discord.RichEmbed ()
.setAuthor(data.username)
.setColor("#ff6a00")
.addField("Kills", kills.value, true)
.addField("Wins", wins.value, true)
.addField("K/D", kd.value, true)
.addField("Matches Played", mplay.value, true)
.addField("Time Played", tplay.value, true)
.addField("Score", score.value, true)
.addField("Top 25s", top25s.value, true)
.addField("More Info", url, true)
message.channel.send(embed);

}).catch(e => {
console.log(e);
message.channel.send("** Didn't find that username! **")
});

}


    
           if (message.content.startsWith(prefix+"id")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
    .setColor("RANDOM")
        .setThumbnail(message.author.avatarURL)
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)
      .addField(': تاريخ دخولك للديسكورد', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
    .addField(': تاريخ دخولك لسيرفرنا', `${moment(h.joinedAt).format('YYYY/M/D HH:mm')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
    .setFooter(`${message.author.username}`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
    message.channel.send(id)
}  






  
if (message.content === prefix + "config") {
    embed = new Discord.RichEmbed()
    .setTitle(`${message.guild.name}'s Config`)
    .addField("Prefix", "``" + `${prefix}` + "``")
   .addField("Welcome Channel", "``" + `${channel}` + "``")
    message.channel.send(embed);
}
                      fs.writeFile("./sp.json", JSON.stringify(p), (err) => {
                        if(err) console.error(err)
                    })
                      fs.writeFile("./wlc.json", JSON.stringify(sWlc), (err) => {
                        if(err) console.error(err)
                    })
//////////////////////////////////////////
//IF U WANT TO ADD A CODE , REMOVE THE CLIENT.ON FROM IT + REMOVE THE )}; IN THE END FROM IT AND ADD IT ABOVE!//
});
////////////////////////////////////////////////
