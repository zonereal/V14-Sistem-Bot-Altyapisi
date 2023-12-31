﻿const { CommandInteraction,Client } = require("discord.js");
module.exports = {
    name:"normal",
    description: 'Normal komut menüsünü açar!',
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
                title: "Normal Komut Menüsü",
                description: "Sistem Botun Normal Komutlarını İşte Karşında!",
                color: 0x00ff00,
                fields:[
                    {name: "/istatistik", value: "Botun Bilgilerini Gösterir!", inline: true},
                    {name: "/ping", value: "Botun Ping Durumunu Gösterir!", inline: true},
                    {name: "/davetet", value: "Botun Davet Bağlantılarını Gösterir!", inline: true},
                    {name: "/kurucu", value: "Sunucunun Kurucusunu Gösterir!", inline: true},
                    {name: "/sil", value: "Girilen Miktarda Mesaj Siler!", inline: true},
                   
                ],
                thumbnail: {url: client.user.avatarURL({dynamic:true})},
            }
        ]});
}
};