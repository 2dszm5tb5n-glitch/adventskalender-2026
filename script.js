
/* =========================================
   HEALTH & CARE ADVENTSKALENDER 2026
   WINTER WONDERLAND DELUXE
========================================= */

/*
   DEMO-VERSION:
   Alle Türchen können zum Testen geöffnet werden.

   Die Öffnungen werden nur im eigenen Browser
   gespeichert, nicht für das gesamte Team.
*/

// ALLE 24 TÜRCHEN

const tuerchen = [
  {
    tag: 1,
    person: "Luisa",
    text: "Manchmal braucht es nur ein kleines Lächeln, um einen ganzen Tag heller zu machen."
  },
  {
    tag: 2,
    person: "Susanne",
    special: true
  },
  {
    tag: 3,
    person: "Anaïs",
    text: "Die schönsten Geschenke kann man nicht einpacken: Zeit, Freude und gemeinsame Erinnerungen."
  },
  {
    tag: 4,
    person: "Mateo",
    special: true
  },
  {
    tag: 5,
    person: "Tommy",
    text: "Ein bisschen Weihnachtszauber steckt in jedem von uns."
  },
  {
    tag: 6,
    person: "Loris",
    text: "Frohen Samichlaustag! Heute darf es ruhig etwas mehr Schokolade sein."
  },
  {
    tag: 7,
    person: "Anaïs",
    special: true
  },
  {
    tag: 8,
    person: "Mateo",
    text: "Ein gutes Team ist wie eine Lichterkette: Gemeinsam leuchten wir heller."
  },
  {
    tag: 9,
    person: "Tommy",
    special: true
  },
  {
    tag: 10,
    person: "Loris",
    text: "Die kleinen Momente machen die Weihnachtszeit besonders."
  },
  {
    tag: 11,
    person: "Luisa",
    special: true
  },
  {
    tag: 12,
    person: "Susanne",
    text: "Ein herzliches Dankeschön kann manchmal das schönste Geschenk sein."
  },
  {
    tag: 13,
    person: "Mateo",
    text: "Nimm dir heute einen Moment nur für dich. Du hast ihn verdient."
  },
  {
    tag: 14,
    person: "Tommy",
    text: "Weihnachtsfreude wird noch schöner, wenn man sie miteinander teilt."
  },
  {
    tag: 15,
    person: "Loris",
    special: true
  },
  {
    tag: 16,
    person: "Luisa",
    text: "Du machst mit deiner Art einen Unterschied, auch an den Tagen, an denen du es nicht merkst."
  },
  {
    tag: 17,
    person: "Susanne",
    text: "Ein warmes Getränk, ein guter Gedanke und ein bisschen Ruhe – manchmal braucht es nicht mehr."
  },
  {
    tag: 18,
    person: "Anaïs",
    text: "Die Magie von Weihnachten liegt in den Menschen, mit denen wir sie teilen."
  },
  {
    tag: 19,
    person: "Tommy",
    text: "Manchmal sind die ungeplanten Momente die allerschönsten."
  },
  {
    tag: 20,
    person: "Loris",
    text: "Ein kleines bisschen Freundlichkeit kann ganz viel bewirken."
  },
  {
    tag: 21,
    person: "Luisa",
    text: "Die schönsten Erinnerungen entstehen oft aus den einfachsten Augenblicken."
  },
  {
    tag: 22,
    person: "Susanne",
    text: "Danke für all die kleinen und grossen Dinge, die unser Team besonders machen."
  },
  {
    tag: 23,
    person: "Anaïs",
    text: "Nur noch ein Türchen! Ich wünsche dir ganz viel Wärme, Freude und Weihnachtszauber."
  },
  {
    tag: 24,
    person: "Mateo",
    text: "Frohe Weihnachten! Danke für die gemeinsame Zeit und all die schönen Momente."
  }
];

// HTML-ELEMENTE

const kalender =
  document.getElementById("adventskalender");

const popup =
  document.getElementById("popup");

const popupInhalt =
  document.querySelector(".popup-inhalt");

const popupTitel =
  document.getElementById("popup-titel");

const popupDatum =
  document.getElementById("popup-datum");

const popupNachricht =
  document.getElementById("popup-nachricht");

const popupPerson =
  document.getElementById("popup-person");

const schliessen =
  document.getElementById("popup-schliessen");

const enthuellen =
  document.getElementById("enthuellen");

// LOKALE SPEICHERUNG

const speicherName =
  "health-care-advent-2026-final";

let geoeffneteTuerchen = [];

try {
  const gespeichert = JSON.parse(
    localStorage.getItem(speicherName) || "[]"
  );

  if (Array.isArray(gespeichert)) {
    geoeffneteTuerchen = gespeichert;
  }
} catch (fehler) {
  geoeffneteTuerchen = [];
}

let aktuellesTuerchen = null;

// KALENDER ERSTELLEN

function kalenderErstellen() {

  kalender.innerHTML = "";

  const farben = ["rot", "gruen", "weiss"];

  tuerchen.forEach((eintrag, index) => {

    const geschenk =
      document.createElement("button");

    geschenk.type = "button";

    const farbe = farben[index % 3];

    geschenk.className =
      "geschenk " + farbe;

    geschenk.style.setProperty(
      "--verzoegerung",
      -(eintrag.tag % 7) * 0.5 + "s"
    );

    const istOffen =
      geoeffneteTuerchen.includes(eintrag.tag);

    if (istOffen) {
      geschenk.classList.add("geoeffnet");
    }

    // Keine Special-Kennzeichnung von aussen!
    geschenk.innerHTML = `
      <span class="schleife">
        <span class="schleife-knoten"></span>
      </span>

      <span class="geschenk-nummer">
        ${eintrag.tag}
      </span>

      <span class="geschenk-person">
        ${eintrag.person}
      </span>
    `;

    geschenk.setAttribute(
      "aria-label",
      `Türchen ${eintrag.tag}, ${eintrag.person}`
    );

    geschenk.addEventListener("click", () => {
      tuerchenAnzeigen(eintrag);
    });

    kalender.appendChild(geschenk);
  });
}

// INHALT EINES TÜRCHENS

function inhaltAnzeigen(eintrag) {

  popupInhalt.classList.toggle(
    "special",
    Boolean(eintrag.special)
  );

  if (eintrag.special) {

    popupTitel.textContent =
      `Überraschung, ${eintrag.person}! 🎁`;

    popupNachricht.textContent =
      `Heute ist dein Special Day!\n\n` +
      `Du darfst deine persönliche Special Box öffnen.\n\n` +
      `Such die Blechdose mit deinem Namen ` +
      `und lass dich überraschen! ✨`;

    popupPerson.textContent =
      "Ein kleiner Wohlfühlmoment für dich.";

  } else {

    popupTitel.textContent =
      `Türchen ${eintrag.tag}`;

    popupNachricht.textContent =
      eintrag.text;

    popupPerson.textContent =
      `Vorbereitet von ${eintrag.person}`;
  }
}

// POPUP ÖFFNEN

function tuerchenAnzeigen(eintrag) {

  aktuellesTuerchen = eintrag;

  popupDatum.textContent =
    `${eintrag.tag}. Dezember 2026`;

  const bereitsOffen =
    geoeffneteTuerchen.includes(eintrag.tag);

  if (bereitsOffen) {

    inhaltAnzeigen(eintrag);

    enthuellen.hidden = true;
    enthuellen.style.display = "none";

  } else {

    popupInhalt.classList.remove("special");

    popupTitel.textContent =
      `Türchen ${eintrag.tag}`;

    popupNachricht.textContent =
      `Dieses Türchen gehört ${eintrag.person}.\n\n` +
      `Bist du bereit für deine Überraschung?`;

    popupPerson.textContent =
      "Health & Care Adventskalender 2026";

    enthuellen.hidden = false;
    enthuellen.style.display = "inline-block";
  }

  popup.classList.remove("versteckt");
  schliessen.focus();
}

// TÜRCHEN ENTHÜLLEN

enthuellen.addEventListener("click", () => {

  if (!aktuellesTuerchen) {
    return;
  }

  const tag = aktuellesTuerchen.tag;

  if (!geoeffneteTuerchen.includes(tag)) {

    geoeffneteTuerchen.push(tag);

    try {
      localStorage.setItem(
        speicherName,
        JSON.stringify(geoeffneteTuerchen)
      );
    } catch (fehler) {
      console.warn(
        "Lokale Speicherung nicht möglich.",
        fehler
      );
    }
  }

  inhaltAnzeigen(aktuellesTuerchen);

  enthuellen.hidden = true;
  enthuellen.style.display = "none";

  kalenderErstellen();
});

// POPUP SCHLIESSEN

function popupSchliessen() {
  popup.classList.add("versteckt");
  aktuellesTuerchen = null;
}

schliessen.addEventListener(
  "click",
  popupSchliessen
);

popup.addEventListener("click", (event) => {
  if (event.target === popup) {
    popupSchliessen();
  }
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    !popup.classList.contains("versteckt")
  ) {
    popupSchliessen();
  }
});

// ANIMIERTER SCHNEEFALL

const schneeContainer =
  document.getElementById("schneefall");

const anzahlSchneeflocken = 180;

for (let i = 0; i < anzahlSchneeflocken; i++) {

  const flocke =
    document.createElement("span");

  flocke.classList.add("schneeflocke");

  const groesse =
    Math.random() * 5 + 2;

  flocke.style.width =
    groesse + "px";

  flocke.style.height =
    groesse + "px";

  flocke.style.left =
    Math.random() * 100 + "%";

  flocke.style.opacity =
    Math.random() * 0.6 + 0.3;

  flocke.style.animationDuration =
    (Math.random() * 12 + 8) + "s";

  flocke.style.animationDelay =
    -(Math.random() * 20) + "s";

  flocke.style.setProperty(
    "--wind",
    (Math.random() * 160 - 80) + "px"
  );

  schneeContainer.appendChild(flocke);
}

// START

kalenderErstellen();
