import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function NewsLetterArea() {
  const [isSending, setIsSending] = useState(false);
  const [phone, setPhone] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  // Mueve la definición de formatPhoneNumber antes de su uso
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
    e.preventDefault();
    setIsSending(true);

    // Enviar los datos al backend
    fetch('/api/sendEmail', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: e.target.email.value,
        phone,
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
        setIsSending(false);
      });
  };

  return (
    <>
      <section className="newsletter-area">
        <div className="container">
          <form onSubmit={handleSubmit}>
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
            <button type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Subscribe"}
            </button>
          </form>
        </div>
      </section>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover />
    </>
  );
}

export default NewsLetterArea;
