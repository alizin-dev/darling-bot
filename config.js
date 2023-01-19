/////// NAOOOO MUDE NADA Q EU FALEI Q DA ERROS, CASO DA ERROO, NÃO VENHAM NO MY. ESSES ERROS É DO USUÁRIO, E NÃO MY.

const fs = require("fs")
const chalk = require("chalk")

//===================================== 
//-------------------------------------
global.alizin𝐎dev =  "."//<--PREFIXO <PODE MUDAR!!!
//-------------------------------------//-------------------------------------
global.conectando = "conectando chef" //// <PODE MUDAR!!!
//-------------------------------------//-------------------------------------
//-------------------------------------//-------------------------------------
global.conectado = "CONECTADO MY RLK" //// <PODE MUDAR!!!
//-------------------------------------//-------------------------------------
//-------------------------------------//-------------------------------------
global.log0 = "https://telegra.ph/file/891dd12dfb6515ebc79d2.jpg"  //< AKI
//FOTO DO BOT/MENU <PODE MUDAR!!!
//-------------------------------------//-------------------------------------
//-------------------------------------//-------------------------------------
global.numerodonoa = ["5521989701174"]//<AKI
/// NÚMERO DO " DONO ".... ( MUDEEE ) !!!
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`ATUALIZACAO NO:'${__filename}'`))
	delete require.cache[file]
	require(file)
})
