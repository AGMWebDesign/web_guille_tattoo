const translations = {
  en: {
    subtitle: "Custom tattoos in Gold Coast, Australia.",
    "services-title": "Services",

    "realism-title": "Realism",
    "realism-desc": "Hyper-detailed tattoos that capture life with stunning precision. Perfect for portraits, animals and nature-inspired pieces.",

    "fine-title": "Fine Line",
    "fine-desc": "Minimalist and clean linework using ultra-thin needles. Ideal for delicate designs, flowers, symbols and small tattoos.",

    "lettering-title": "Lettering",
    "lettering-desc": "Custom typography and quotes that speak for you. From elegant scripts to bold statements, each word tells your story.",

    "discover-title": "Discover more on my social media",
    "discover-subtitle": "Explore more tattoo designs and behind-the-scenes content.",

    "about-title": "About Me",
    "about-text": `
      <p>
        I’m Guille, a tattoo artist based in Gold Coast with over 2 years of experience.<br>
        I specialize in detailed realism, clean fine lines, and bold lettering.<br>
        My goal is to turn your story into a piece of art that lives on your skin forever.
      </p>
    `,
    "contact-title": "Contact & Booking",

    "form-name": "Name",
    "form-email": "Email",
    "form-message": "Message or reservation request",
    "form-button": "Send",

    "legal-title": "Legal Notice",
    "legal-text": `
      <p>&copy; 2025 Guille Tattoo. All rights reserved.</p>
      <p>We may use cookies to improve user experience. By continuing, you agree to our cookie usage.</p>
    `,
    "cookie-text": "We use cookies to enhance your experience. By continuing, you accept them.",
    "cookie-accept": "Accept"
  },
  es: {
    subtitle: "Tatuajes personalizados en Gold Coast, Australia.",
    "services-title": "Servicios",

    "realism-title": "Realismo",
    "realism-desc": "Tatuajes hiperrealistas que capturan la vida con una precisión asombrosa. Perfectos para retratos, animales y elementos naturales.",

    "fine-title": "Línea Fina",
    "fine-desc": "Diseños minimalistas y limpios con agujas ultra finas. Ideales para flores, símbolos y tatuajes pequeños.",

    "lettering-title": "Lettering",
    "lettering-desc": "Tipografía personalizada y frases que hablan por ti. Desde letras elegantes hasta declaraciones audaces.",

    "discover-title": "Descubre más en mis redes sociales",
    "discover-subtitle": "Explora más diseños y contenido detrás de cámaras.",

    "about-title": "Sobre mí",
    "about-text": `
      <p>
        Soy Guille, tatuador en Gold Coast con más de 2 años de experiencia.<br>
        Me especializo en realismo detallado, líneas finas limpias y lettering potente.<br>
        Mi objetivo es convertir tu historia en una obra de arte que viva en tu piel para siempre.
      </p>
    `,
    "contact-title": "Contacto y Reservas",

    "form-name": "Nombre",
    "form-email": "Correo electrónico",
    "form-message": "Mensaje o solicitud de reserva",
    "form-button": "Enviar",

    "legal-title": "Aviso legal",
    "legal-text": `
      <p>&copy; 2025 Guille Tattoo. Todos los derechos reservados.</p>
      <p>Podemos utilizar cookies para mejorar tu experiencia. Al continuar, aceptas su uso.</p>
    `,
    "cookie-text": "Usamos cookies para mejorar tu experiencia. Al continuar, las aceptas.",
    "cookie-accept": "Aceptar"
  }
};

function setLanguage(lang) {
  // Texto interno
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Placeholders
  document.querySelectorAll("[data-placeholder]").forEach(el => {
    const key = el.getAttribute("data-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

