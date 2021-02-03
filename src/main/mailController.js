const dotenv = require('dotenv').config();
const nodemailer = require("nodemailer");

async function main() {

  // Objeto transporter usado con mi cuenta gmail
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL, 
      pass: process.env.PASSWORD
    },
  });

  // Mandamos email de prueba con contenido simulado
  let info = await transporter.sendMail({
    from: 'LGTBClub', 
    to: "anogueras@correo.ugr.es", 
    subject: "Info LGTB del día", 
    text: "Definición de trans: no identificarse con el género asignado al nacer." 
  });

  console.log("Mensaje enviado: %s", info.messageId);

}

main().catch(console.error);
