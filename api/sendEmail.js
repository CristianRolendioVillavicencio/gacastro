// api/sendEmail.js
const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, address, message, subject } = req.body;

    // Configura tu transportador SMTP utilizando variables de entorno
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Utiliza la variable de entorno
        pass: process.env.EMAIL_PASS, // Utiliza la variable de entorno
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Puedes usar otra variable si envías a un correo distinto
      subject: `New Message from ${name}: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Address: ${address}
        Message: ${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to send email', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
