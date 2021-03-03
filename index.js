const express = require("express")
const app = express ()

app.get("/", (req, res) => {
  res.send("hello!  um, youre not supposed to be here... so please exit this. if you are on my team thingy, then you can stay lol.")
})

app.listen(3000, () => {
  console.log("Project is ready!")
})

let Discord = require("discord.js");
let client = new Discord.Client();

client.on("ready", () => {
  client.user.setPresence({
    activity: { name: "x!help | Alpha Ver 1.13" },
    status: "idle"
  });
});

client.on("guildMemberAdd", member => {
  if (member.guild.id === "780191967438307350") {
    client.channels.cache
      .get("792268369859706891")
      .send(
        `Welcome ${member}! Make sure to read #rules and get self assignable roles in #self-roles.`
      );
  }
});

client.on("message", message => {
  if (message.content === "x!test text") {
    message.channel.send(
      "Yup, Text is working. Other text commands not working? DM ModMail!"
    );
  }
  if (message.content === "x!test embed") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Yup, **EMBED** is working!")
      .setDescription(
        "Embed is working. Other embed commands not working? DM ModMail!"
      )
      .setColor("gray")
      .setFooter("Need Help? DM ModMail!");
    message.channel.send(embed);
  }
  if (message.content.startsWith("x!kill")) {
    let victim = message.mentions.users.first();
    if (!victim) message.reply("Mention someone to kill.");
    else {
      message.channel.send(`${victim} Died`);
    }
  }
   if (message.content === "x!update") {
    message.channel.send(
      "Update 1.13: Added this command, added a log, updated status type; Coming Soon: x!update >update number< (cant release yet due to so minimal... commands within updates & just updates overall. Again, DM ModMail if you have any questions or suggestions. Also, if you find a bug in the bot, feel free to DM ModMail to report it. You can even get a special **BUG HUNTER** role ;)"
    );
});

client.login(process.env.key);
