// require("../../requires")

const { PartialGroupDMChannel } = require("discord.js");
const { scheduleJob } = require("node-schedule");
const sharedVars = require("../../config/sharedVars");

// Here you can add functions that will be run at each startup of the bot

module.exports = {
    name:"Startup_function",
    async function(msg, args){
        setTimeout(async () => {

            console.log("-------------------------------- Startup Function ------------------------------");
            scheduleJob("10 8 * * *", () => {
                var date = new Date()
                var data = sharedVars[date.getMonth()][date.getDate()]
                // var data = sharedVars[11][30]
                if(data != undefined){
                    commands.get("post_independance").function(data)
                }else{
                    commands.get("post_sad").function()
                }
            })
            console.log("--------------------------------------------------------------------------------");
        }, 500);
    }
}