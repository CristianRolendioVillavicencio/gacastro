// api/quoteForm.js
const nodemailer = require("nodemailer");

export default async function handler(req, res) {
    // Verificar que la solicitud sea de tipo POST
    if (req.method === "POST") {
        // Extraer los datos enviados desde el formulario
        const { name, email, projectType, message } = req.body; // Ajusta los campos según los datos que envíes

        // Configurar el transportador de Nodemailer
        const transporter = nodemailer.createTransport({
            service: "gmail", // Puedes usar otro servicio si tu correo no es Gmail
            auth: {
                user: process.env.EMAIL_USER, // Variable de entorno para el usuario de correo
                pass: process.env.EMAIL_PASS, // Variable de entorno para la contraseña del correo
            },
        });

        // Configurar los detalles del correo
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "destinatario@example.com", // Cambia esto por el correo al cual deseas enviar los mensajes
            subject: "Nueva Solicitud de Cotización",
            text: `Nombre: ${name}\nEmail: ${email}\nTipo de Proyecto: ${projectType}\nMensaje: ${message}`,
        };

        try {
            // Intentar enviar el correo
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: "Correo enviado correctamente." });
        } catch (error) {
            console.error(error); // Muestra el error en consola para depuración
            res.status(500).json({ error: "Error al enviar el correo." });
        }
    } else {
        // Si el método no es POST, responder con error
        res.status(405).json({ error: "Método no permitido." });
    }
}
