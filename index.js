const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "USER", "REACTION"]});
const enmap = require('enmap');
const {prefix} = require('./config.json');
//!            HASSAN II#0002 https://www.youtube.com/channel/UCGPCTBMHr3-cBqyN242nWgA
const settings = new enmap({
    name: "settings",
    autoFetch: true,
    cloneLevel: "deep",
    fetchAll: true
});
//!            HASSAN II#0002 https://www.youtube.com/channel/UCGPCTBMHr3-cBqyN242nWgA
client.on('ready', () => {
    console.log('بوتك جاهز')
});
//!            HASSAN II#0002 https://www.youtube.com/channel/UCGPCTBMHr3-cBqyN242nWgA
client.on('message', async message => {
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command == "تسطيب-تكت") {
        // ticket-setup #channel https://www.youtube.com/channel/UCGPCTBMHr3-cBqyN242nWgA

        let channel = message.mentions.channels.first();
        if(!channel) return message.reply("استعمل: `!تسطيب-تكت #القناة`");

        let sent = await channel.send(new Discord.MessageEmbed()
            .setTitle("Ticket System By !            HASSAN II#0002")
            .setDescription("رياكت لفتح تكت!")
            .setFooter("Ticket System By !            HASSAN II#0002")
            .setColor("00ff00")
        );
//!            HASSAN II#0002 https://www.youtube.com/channel/UCGPCTBMHr3-cBqyN242nWgA
        sent.react('🎫');
        settings.set(`${message.guild.id}-ticket`, sent.id);

        message.channel.send(" ✅ تم تسطيب التكت بنجاح !")
    }
//!            HASSAN II#0002 https://www.youtube.com/channel/UCGPCTBMHr3-cBqyN242nWgA
    if(command == "مسح") {
        if(!message.channel.name.includes("ticket-")) return message.channel.send("لايمكنك استخدام هذا الامر هنا⚠️ !")
        message.channel.delete();
    }
});
//!            HASSAN II#0002 https://www.youtube.com/channel/UCGPCTBMHr3-cBqyN242nWgA
client.on('messageReactionAdd', async (reaction, user) => {
    if(user.partial) await user.fetch();
    if(reaction.partial) await reaction.fetch();
    if(reaction.message.partial) await reaction.message.fetch();
//!            HASSAN II#0002 https://www.youtube.com/channel/UCGPCTBMHr3-cBqyN242nWgA
    if(user.bot) return;

    let ticketid = await settings.get(`${reaction.message.guild.id}-ticket`);
//!            HASSAN II#0002 https://www.youtube.com/channel/UCGPCTBMHr3-cBqyN242nWgA
    if(!ticketid) return;

    if(reaction.message.id == ticketid && reaction.emoji.name == '🎫') {
        reaction.users.remove(user);

        reaction.message.guild.channels.create(`ticket-${user.username}`, {
            permissionOverwrites: [
                {
                    id: user.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                },
                {
                    id: reaction.message.guild.roles.everyone,
                    deny: ["VIEW_CHANNEL"]
                }
            ],
            type: 'text'
        }).then(async channel => {
            channel.send(`<@${user.id}>`, new Discord.MessageEmbed().setTitle("مرحبا بك في مركز المساعدة!").setDescription("سوف ياتي احد السيبورتر لمساعدتك عم قريب").setColor("00ff00"))
        })
    }
});
//!            HASSAN II#0002
client.login(process.env.token);
//!            HASSAN II#0002//!            HASSAN II#0002
//!            HASSAN II#0002https://www.youtube.com/channel/UCGPCTBMHr3-cBqyN242nWgA
//!            HASSAN II#0002 https://www.youtube.com/channel/UCGPCTBMHr3-cBqyN242nWgA
//!            HASSAN II#0002 https://www.youtube.com/channel/UCGPCTBMHr3-cBqyN242nWgA
//!            HASSAN II#0002 https://www.youtube.com/channel/UCGPCTBMHr3-cBqyN242nWgA
//!            HASSAN II#0002//!            HASSAN II#0002usjt