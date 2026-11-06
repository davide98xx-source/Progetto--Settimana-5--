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
