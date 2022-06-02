module.exports = {
    name: "post_independance",
    async function(data) {
        var embed = {
            embeds: [{
                    description: ``,
                    color: `#${(Math.floor(Math.random()*256)).toString(16)}${(Math.floor(Math.random()*256)).toString(16)}${(Math.floor(Math.random()*256)).toString(16)}`
            }]
        }

        switch(true){
            case (data.newName != data.oldName):
                embed.embeds[0].description = `Today **${data.newName}** formerly known as **${data.oldName}** celebrates independance from the british empire`
                break;
            case (data.newName == data.oldName):
                embed.embeds[0].description = `Today **${data.newName}** celebrates independance from the british empire`
                break;
        }

        embed.embeds[0].image = {
            url: this.celebrationGifs[Math.floor(Math.random()*this.celebrationGifs.length)],
        }

        client.channels.cache.get(config.channel).send(embed)
    },
    celebrationGifs : [
        "https://cdn.discordapp.com/attachments/764260246058565632/981663056448847882/jumping-yay.gif",
        "https://cdn.discordapp.com/attachments/764260246058565632/981663056801194015/ganon-ganondorf.gif",
        "https://cdn.discordapp.com/attachments/764260246058565632/981663057354821712/anime-anime-girl.gif",
        "https://cdn.discordapp.com/attachments/764260246058565632/981663057757491220/pokemon-pikachu.gif"
    ]
}