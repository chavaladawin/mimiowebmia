import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { nombre, email, empresa, situacion } = req.body;

  // Configuración de tu email de IONOS
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, // ejemplo: "smtp.ionos.es"
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: `"Web Contacto" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "Consulta desde web - Nuovo Finance",
    text: `Nombre: ${nombre}\nEmail: ${email}\nEmpresa: ${empresa}\n\nSituación:\n${situacion}`
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email enviado correctamente" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al enviar el email" });
  }
}
