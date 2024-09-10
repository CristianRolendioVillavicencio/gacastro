require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Configuración del transporte de Nodemailer
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
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

// Servir los archivos estáticos de React
app.use(express.static(path.join(__dirname, "build")));

// Ruta para la página principal, sirve el archivo index.html de React
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
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
        res.status(500).json({ error: "Failed to send email", details: error.message });
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
