require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware para parsear JSON y manejar CORS
app.use(express.json());
app.use(cors());

// Configuración del transporte de Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true para 465, false para otros puertos
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verificar conexión SMTP
transporter.verify((error) => {
  if (error) {
    console.log("Error connecting to the SMTP server:", error);
  } else {
    console.log("SMTP server is ready to send emails.");
  }
});

// Ruta para recibir datos del formulario y enviar el correo
app.post("/send-email", async (req, res) => {
  // Extrae los campos del cuerpo de la solicitud
  const {
    name,
    email,
    phone,
    address,
    message,
    location,
    date,
    time,
    subject,
  } = req.body;

  // Determina el contenido del mensaje según los campos recibidos
  let emailContent = "";

  if (location && date && time) {
    // Configuración para el AppointmentForm
    emailContent = `Name: ${name}\nPhone: ${phone}\nLocation: ${location}\nDate: ${date}\nTime: ${time}\nMessage: ${message}`;
  } else if (address && email) {
    // Configuración para el NewsLetterArea
    emailContent = `Full Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nMessage: ${message}`;
  } else {
    // Configuración para el FreeQuoteForm
    emailContent = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nMessage: ${message}`;
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Cambia esto si deseas enviar a otro correo
    subject: subject || "New Request", // Usa el subject recibido o un valor por defecto
    text: emailContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
