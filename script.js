document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.getElementById("hero-text");
  const toggle = document.getElementById("lang-toggle");
  let currentLang = "en";

  // Scroll para desvanecer hero
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const fadeStart = 0;
    const fadeUntil = 300;

    const opacity = 1 - Math.min(Math.max((scrollY - fadeStart) / (fadeUntil - fadeStart), 0), 1);
    const translateY = Math.min(scrollY / 4, 80); // bajada suave del texto

    heroText.style.opacity = opacity;
    heroText.style.transform = `translateY(${translateY}px)`;
  });

  // Cambiar idioma
  toggle.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "es" : "en";
    toggle.textContent = currentLang === "en" ? "ES" : "EN";
    setLanguage(currentLang);
  });

  // Cargar idioma inicial
  setLanguage(currentLang);


  //Banner de cookies
  const cookieBanner = document.getElementById("cookie-banner");
  const cookieButton = document.getElementById("cookie-accept");

  if (!localStorage.getItem("cookiesAccepted")) {
    cookieBanner.style.display = "flex";
  }

  cookieButton.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.style.display = "none";
  });  

  // Carrusel
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    const images = carousel.querySelectorAll("img");
    let current = 0;

    setInterval(() => {
      images[current].classList.remove("active");
      current = (current + 1) % images.length;
      images[current].classList.add("active");
    }, 3000); // cambia cada 3 segundos
  });
});
