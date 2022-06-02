const Discord           = require("discord.js")
const {Intents}         = require("discord.js")
let IF = Intents.FLAGS
reqClient    = new Discord.Client({
    intents: [IF.GUILDS, IF.GUILD_MESSAGES, IF.GUILD_MEMBERS, IF.GUILD_BANS, IF.GUILD_EMOJIS_AND_STICKERS, IF.GUILD_INTEGRATIONS, IF.GUILD_WEBHOOKS, IF.GUILD_INVITES, IF.GUILD_VOICE_STATES, IF.GUILD_PRESENCES, IF.GUILD_MESSAGE_REACTIONS, IF.GUILD_MESSAGE_TYPING, ],
    partials: ["MESSAGE", "CHANNEL", "REACTION", "GUILD_MEMBER", "User"]
})

client              = reqClient
config              = require("./config/main.json")
readline            = require("readline")
MessageAttachment   = { XXXXXXXXXXXXXXXX, MessageAttachment } = require('discord.js')
sharedVars          = require("./config/sharedVars")
fs                  = require("fs")
crypto              = require("crypto")

// ------------------------------------ ------------------------------------ ------------------------------------ //
//  IMPORTANT, IF YOU EDIT THIS FILE, MAKE SURE THAT THE TOP.GG AUTOPOSTER IS ENABLED FOR THE PRODUCTION BRANCH   //
// ------------------------------------ ------------------------------------ ------------------------------------ //

varMessageActionRow  = Discord.MessageActionRow;
varMessageButton     = Discord.MessageButton;
varMessageEmbed      = Discord.MessageEmbed;
varMessageSelectMenu = Discord.MessageSelectMenu;
msgAttachement       = Discord.MessageAttachment

var { SlashCommandBuilder } = require("@discordjs/builders")
SCB = SlashCommandBuilder

schedule = require("node-schedule")



// const { AutoPoster } = require('topgg-autoposter')
// poster = AutoPoster('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc4NzQxMTQwNjAxMzcyNjc4MSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjQ0NjMyMzY1fQ.Efcej7UgLEqNG7BpNVELUsmakHZkIFQHBEDERObHmmA', client)
// poster.on('error', (err) => {})