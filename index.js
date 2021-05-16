const discord = require ('discord.js');
const client = new discord.Client();
const { Database } = require("quickmongo")
const db = new Database("mongodb+srv://InzamamulQureshi:inzamamul786@beebot.2ed4i.mongodb.net/TutorialBot?retryWrites=true&w=majority")

client.on("ready", message => {
  console.log(`${client.user.username} is ready to rock!`)
})

client.on("message", message => {
  if(message.content.includes("-say")) {
    let ids = '690132996195745872,497453450930421770,693637046987784193,736573119866732605,628495538894929926,717757414295732258,495985498892926976,657612005406146565,488966853549621248'
    let bois = ids.split(",")
    if(!bois.includes(message.author.id)) {
      return;
    } else {
      let args = message.content.split(" ").slice(1).join(" ")
      message.delete()
      return message.channel.send(args).catch(console.log)
    }
  }
});

client.on("message", message => {
  if(message.content.startsWith("-spam")) {
    let args = message.content.split(" ").slice(1).join(" ")
    if(!args[0]) {
    let spem = db.fetch("spam_")
    let stats;
    if(spem === true) stats = "Enabled";
    if(spem === null) stats = "Disabled";
    return message.channel.send(`Currently spam is ${stats}`)
}
    if(args[0] == "e") {
      db.set("spam_", true)
      message.reply('Done :unamused:');
    } else if(args[0] == "d") {
      db.delete("spam_")
      message.reply("Done :smile:");
    }
  }
})

client.on("ready", message => {
  async   function check() {
     let spam = await db.fetch("spam_");
     
     if(!spam) {
       return;
     } else {
      client.channels.get("839013047607099393").send(",s")
      client.channels.get("839013047607099393").send(",f 1")
    }
  }
  
  setInterval(() => {
    check()
  }, 2500)
   
  function fish () {
client.channels.get("839012555543543822").send(",g")
};
setInterval(fish, 370000);

  function timeout() {}
  setInterval(timeout, 8640000);
});

client.on("message", message => {
    if(message.content.startsWith("Dream. Please type")) {
      message.channel.send("@everyone, here goes this gae bot agn")
      return db.delete("spam_")
    }
});
client.on("message", message => {
    if(message.content === "-restart") {
      process.exit().then(async m => {
       await message.channel.send("-spam e")
})
}
});


client.login("ODAwMzI1NDYxMjUwMDE1MjQy.YJDeZQ.tDAvxgWkqER-1UFYq6325lj7u_A");
