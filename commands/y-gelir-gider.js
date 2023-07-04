const { CommandInteraction,Client } = require("discord.js");
module.exports = {
    name:"gelir-gider",
    description: 'Gelir-gider sistemi komutlarını gösterir!',
    type:1,
    options:[],
/**
 * 
 * @param {Client} client 
 * @param {CommandInteraction} interaction 
 */
    run: async (client, interaction) => {
        interaction.reply({embeds:[
            {
                title: "Gelir-Gider-Sistemi Komut Menüsü",
                description: "Sistem Botun Gelir-Gider-Sistemi Komutları İşte Karşında!",
                color: 0x00ff00,
                fields:[
                    {name: "/gelir-ekle", value: "Kasaya Sebebiyle Birlikte Gelir Eklersin!", inline: true},
                    {name: "/gider-ekle", value: "Kasaya Sebebiyle Birlikte Gider Eklersin", inline: true},
                    {name: "/kasa", value: "Gelir Ve Giderleri Miktarlarıyla Gösterir", inline: true},
                    
                ],
                thumbnail: {url: client.user.avatarURL({dynamic:true})},
            }
        ]});
}
};