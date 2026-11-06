// Bloom — Week Project Settimana V
//
// Aggiungi qui il codice JavaScript se serve (es. modale, scroll handler).
// Per la Versione Base spesso non serve niente: tutto si fa in CSS.

//costanti giorno notte
const themeButton = document.querySelector("#themeButton");
const themeIcon = document.querySelector("#themeIcon");

//costanti/variabili scroll header
const header = document.querySelector("#site-header");
let ultimoScroll = window.scrollY;

//Bottone per cambiare tema da giorno a notte
themeButton.addEventListener("click", () => {
  const modalitàNotte = document.body.classList.toggle("notte");

  themeIcon.classList.toggle("fa-moon", !modalitàNotte);
  themeIcon.classList.toggle("fa-sun", modalitàNotte);

  themeButton.setAttribute(
    "aria-label",
    modalitàNotte ? "Attiva modalità giorno" : "Attiva modalità notte",
  );
});

//scroll header
window.addEventListener(
  "scroll",
  () => {
    const scrollAttuale = window.scrollY;
    const versoIlBasso = scrollAttuale > ultimoScroll;

    header.classList.toggle(
      "is-scrolling-down",
      versoIlBasso && scrollAttuale > 0,
    );

    ultimoScroll = scrollAttuale;
  },
  { passive: true },
);

//costanti i nostri servizi
const cardsServizi = document.querySelectorAll("#servizi .cards");
const movimentoRidotto = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

//i nostri servizi scroll

if ("IntersectionObserver" in window && !movimentoRidotto && cardsServizi.length) {
  document.body.classList.add("reveal-enabled");

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  cardsServizi.forEach((card) => observer.observe(card));
}
//costanti modulo
const preventivoDialog = document.querySelector("#preventivoDialog");
const apriPreventivo = document.querySelector("#apriPreventivo");
const chiudiPreventivo = document.querySelector("#chiudiPreventivo");
const formPreventivo = preventivoDialog.querySelector("form");
const pulsanteInvio = formPreventivo.querySelector(
  'button[type="submit"]'
);
//modulo
apriPreventivo.addEventListener("click", () => {
  preventivoDialog.showModal();
});

chiudiPreventivo.addEventListener("click", () => {
  preventivoDialog.close();
});

preventivoDialog.addEventListener("click", (event) => {
  if (event.target === preventivoDialog) {
    preventivoDialog.close();
  }
});

formPreventivo.addEventListener("submit", (event) => {
  event.preventDefault();

  pulsanteInvio.disabled = true;
  pulsanteInvio.textContent = "Grazie!";

  setTimeout(() => {
    preventivoDialog.close();
    formPreventivo.reset();
    pulsanteInvio.disabled = false;
    pulsanteInvio.textContent = "Invia richiesta";
  }, 2000);
});
