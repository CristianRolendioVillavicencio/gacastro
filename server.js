require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON y manejar CORS
app.use(express.json());
app.use(cors());

// Configuración del transporte de Nodemailer
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // Usar true para puertos seguros (465), false para otros
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
    const { name, email, phone, address, message, location, date, time, subject } = req.body;

    let emailContent = "";

    if (location && date && time) {
        emailContent = `Name: ${name}\nPhone: ${phone}\nLocation: ${location}\nDate: ${date}\nTime: ${time}\nMessage: ${message}`;
    } else if (address && email) {
        emailContent = `Full Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nMessage: ${message}`;
    } else {
        emailContent = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nMessage: ${message}`;
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: subject || "New Request",
        text: emailContent,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error("Error sending email:", error.message);
        if (error.response) {
            console.error("SMTP Response:", error.response);
        }
        res.status(500).json({ error: "Failed to send email", details: error.message });
    }
});

// Sirve archivos estáticos del frontend (por ejemplo, una app React)
app.use(express.static(path.join(__dirname, "build"))); // Asegúrate de que esta ruta esté correcta y que la carpeta 'build' exista y contenga los archivos del frontend

// Ruta para servir el frontend (React, Angular, etc.)
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html")); // Asegúrate de que 'index.html' esté en la carpeta 'build'
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
