// command.js
const { MessageEmbed } = require("discord.js")

/* 
	command → obiekt komendy ( w tym: nazwa, aliases, opis, run )
	data → obiekt zawierający m.in (message, args, client)
 */
module.exports = async (
	command, data
) { 

	const output = await command.run(data)
	const channel = data.message
	
	const embed = new MessageEmbed()
		.setDescription(output.msg ? output.msg : "")
		// itd 

	return output.channel ? output.channel.send(embed) : message.channel.send(embed)
}

// plik komendy
module.exports = {

	name: "ping",
	
	run: async (data) => {
	
		return {
			
			msg: 'Pong!'
			
		}

	}

}
