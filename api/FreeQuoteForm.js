// api/freeQuoteForm.js
const nodemailer = require("nodemailer");

export default async function handler(req, res) {
    // Verifica que la solicitud sea de tipo POST
    if (req.method === "POST") {
        // Extrae los datos del cuerpo de la solicitud
        const { name, email, phone, message } = req.body; // Ajusta los campos según lo que envíes desde tu formulario

        // Configuración del transportador de Nodemailer
        const transporter = nodemailer.createTransport({
            service: "gmail", // Puedes cambiar a otro servicio si no es Gmail
            auth: {
                user: process.env.EMAIL_USER, // Correo electrónico desde el que se enviará
                pass: process.env.EMAIL_PASS, // Contraseña del correo (usa una contraseña de aplicaciones si es Gmail)
            },
        });

        // Configuración de los detalles del correo
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "destinatario@example.com", // Cambia al correo de destino deseado
            subject: "Nuevo Presupuesto Solicitado",
            text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`,
        };

        try {
            // Intentar enviar el correo
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: "Correo enviado correctamente." });
        } catch (error) {
            console.error(error); // Muestra cualquier error en la consola para ayudar a depurar
            res.status(500).json({ error: "Error al enviar el correo." });
        }
    } else {
        // Responde con un error si el método no es POST
        res.status(405).json({ error: "Método no permitido." });
    }
}
