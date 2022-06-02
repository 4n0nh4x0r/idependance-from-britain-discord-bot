module.exports = {
    name: "post_independance",
    async function(data) {
        var embed = {
            embeds: [{
                    description: `Sadly there is no country that declared independance from the british empire on this day`,
                    color: `#${(Math.floor(Math.random()*256)).toString(16)}${(Math.floor(Math.random()*256)).toString(16)}${(Math.floor(Math.random()*256)).toString(16)}`
            }]
        }

        embed.embeds[0].image = {
            url: this.depressionGifs[Math.floor(Math.random()*this.depressionGifs.length)],
        }

        client.channels.cache.get(config.channel).send(embed)
    },
    depressionGifs : [
        "https://cdn.discordapp.com/attachments/764260246058565632/981665702245191690/gayixiangs.gif",
        "https://cdn.discordapp.com/attachments/764260246058565632/981665701897068605/anime-depressed.gif",
        "https://cdn.discordapp.com/attachments/764260246058565632/981665701255331870/anime-sad.gif",
        "https://cdn.discordapp.com/attachments/764260246058565632/981665700756221993/waiting-cold.gif",
        "https://cdn.discordapp.com/attachments/764260246058565632/981665700361928774/twtjjk.gif",
        "https://cdn.discordapp.com/attachments/764260246058565632/981665699787337788/pokemon-pikachu_sad.gif"
    ]
}