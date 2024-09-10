// api/AppointmentForm.js
const nodemailer = require("nodemailer");

export default async function handler(req, res) {
    // Verificar si la solicitud es de tipo POST
    if (req.method === "POST") {
        // Extraer los datos del cuerpo de la solicitud
        const { name, email, date, message } = req.body; // Ajusta los campos según tu formulario

        // Configurar el transportador de Nodemailer con tu cuenta de correo
        const transporter = nodemailer.createTransport({
            service: "gmail", // Puedes usar otro servicio si no es Gmail
            auth: {
                user: process.env.EMAIL_USER, // Tu correo electrónico
                pass: process.env.EMAIL_PASS, // Tu contraseña del correo (usa una contraseña de aplicaciones si es Gmail)
            },
        });

        // Configurar los detalles del correo a enviar
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "destinatario@example.com", // Cambia esto al correo al que deseas enviar los mensajes
            subject: "Nueva Cita Agendada",
            text: `Nombre: ${name}\nEmail: ${email}\nFecha de la Cita: ${date}\nMensaje: ${message}`,
        };

        // Intentar enviar el correo
        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: "Correo enviado correctamente." });
        } catch (error) {
            console.error(error); // Muestra cualquier error en la consola para depuración
            res.status(500).json({ error: "Error al enviar el correo." });
        }
    } else {
        // Si no es una solicitud POST, responder con un error
        res.status(405).json({ error: "Método no permitido." });
    }
}
