const Discord = require('discord.js');

const bot = new Discord.Client();

const ytdl = require('ytdl-core');

const token = '';



bot.login(token);
bot.on('ready', () => {
  console.log("Conectado :)");
})

bot.on('message', msg =>{
  if(msg.author.bot) {
    return;
  }

  if(msg.content.toLowerCase().startsWith("?play")) {
    let voiceChanel = msg.guild.channels.cache.find( channel => channel.id === '725824344353144926' );

  if(voiceChanel == null) {
    console.log('canal nao encontrado');
  }else{
    console.log('canal encontrado')

    voiceChanel.join()
    .then(connection => {
      const stream = ytdl('',   // paste url here
      {filter: 'audioonly'});

      const DJ = connection.play(stream);

      DJ.on('end', end => {
        voiceChanel.leave();
      })

    })
  }
}


  if(msg.content.toLowerCase().startsWith("?leave")) {
    let voiceChanel = msg.guild.channels.cache.find( channel => channel.id === ' ' ); //paste voice channel id here

    if(voiceChanel == null) {
      console.log('canal nao encontrado');
    } else{
      console.log('canal encontrado')

      voiceChanel.leave();
    }
  }

})