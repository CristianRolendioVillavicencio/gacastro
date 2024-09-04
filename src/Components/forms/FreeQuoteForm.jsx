import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function FreeQuoteForm({ subject }) { // Recibe el subject como prop
  const [isSending, setIsSending] = useState(false);
  const [honeypot, setHoneypot] = useState(''); // Campo honeypot para protección contra bots

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita el envío predeterminado del formulario

    if (honeypot !== '') {
      // Si el honeypot está lleno, asumimos que es un bot y no enviamos el formulario
      toast.error("Error: Invalid submission.");
      return;
    }

    setIsSending(true); // Cambia el estado para indicar que se está enviando

    // Enviar los datos al backend de Node.js
    fetch('http://localhost:3000/send-email', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
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
          aria-hidden="true"
        />

        <div className="form-grp">
          <input id="name" type="text" name="name" placeholder="Your Name" aria-label="Enter your name" required />
        </div>
        <div className="form-grp">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email Address"
            aria-label="Enter your email address"
            required
          />
        </div>
        <div className="form-grp">
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            aria-label="Enter your phone number"
            required
          />
        </div>
        <div className="form-grp">
          <input
            id="address"
            type="text"
            name="address"
            placeholder="Your Address"
            aria-label="Enter your address"
            required
          />
        </div>
        <div className="form-grp">
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            aria-label="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-two" aria-label="Submit contact form" disabled={isSending}>
          {isSending ? "Sending..." : "Contact Us"}
        </button>
      </form>
      <ToastContainer />
    </>
  );
}

export default FreeQuoteForm;
