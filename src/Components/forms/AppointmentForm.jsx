import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function FreeQuoteForm({ subject }) { // Recibe el subject como prop
  const [isSending, setIsSending] = useState(false);
  const [honeypot, setHoneypot] = useState(''); // Campo honeypot para protección contra bots
  const [phone, setPhone] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  // Mover la función formatPhoneNumber antes de su uso
  const formatPhoneNumber = (value) => {
    // Formato del número de teléfono como (XXX) XXX-XXXX
    const areaCode = value.substring(0, 3);
    const middle = value.substring(3, 6);
    const last = value.substring(6, 10);
    if (value.length > 6) {
      return `(${areaCode}) ${middle}-${last}`;
    } if (value.length > 3) {
      return `(${areaCode}) ${middle}`;
    } 
      return `(${areaCode}`;
    
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Remueve caracteres no numéricos
    if (value.length <= 10) {
      setPhone(formatPhoneNumber(value));
      setIsPhoneValid(value.length === 10);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita el envío predeterminado del formulario

    if (honeypot !== '') {
      // Si el honeypot está lleno, asumimos que es un bot y no enviamos el formulario
      toast.error("Error: Invalid submission.");
      return;
    }

    setIsSending(true); // Cambia el estado para indicar que se está enviando

    // Enviar los datos al backend de Node.js
    fetch('/api/sendEmail', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        phone,
        address: e.target.address.value,
        message: e.target.message.value,
        subject, // Sintaxis abreviada para subject
      }),
    })
      .then(response => {
        if (response.ok) {
          toast.success("Your message has been sent successfully!");
          e.target.reset(); // Limpia el formulario después de enviar
        } else {
          toast.error("There was an error sending your message. Please try again.");
        }
      })
      .catch(() => {
        toast.error("There was an error sending your message. Please try again.");
      })
      .finally(() => {
        setIsSending(false); // Cambia el estado para indicar que el envío ha terminado
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="sidebar-form" aria-label="Contact form">
        {/* Campo Honeypot oculto */}
        <input
          type="text"
          name="honeypot"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          style={{ display: 'none' }}
        />
        <input type="text" name="name" placeholder="Your Name*" required />
        <input type="email" name="email" placeholder="Your Email*" required />
        <input
          type="text"
          name="phone"
          placeholder="(475) 257-0243"
          value={phone}
          onChange={handlePhoneChange}
          required
        />
        {!isPhoneValid && <p style={{ color: "red" }}>Please enter a valid 10-digit phone number.</p>}
        <input type="text" name="address" placeholder="Address*" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn btn-two" disabled={isSending}>
          {isSending ? "Sending..." : "Submit Now"}
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover />
    </>
  );
}

export default FreeQuoteForm;
