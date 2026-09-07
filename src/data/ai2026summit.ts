// Copy for m61.ai/ai2026summit (EN default) and /ai2026summit/hu/.
import { company } from "./company";

export type Lang = "hu" | "en";

export const routes: Record<Lang, { form: string; privacy: string }> = {
  en: { form: "/ai2026summit/", privacy: "/ai2026summit/privacy/" },
  hu: { form: "/ai2026summit/hu/", privacy: "/ai2026summit/hu/adatkezeles/" },
};

export const EVENT_NAME = "AI Summit 2026";
export const EVENT_CITY = "Budapest";
export const TALK_TITLE_HU = "Core banki hitelezés agentic alapokon";
export const TALK_TITLE_EN = "Core banking lending on agentic foundations";
const RETENTION_DAYS = 90;

const mail = `<a href="mailto:${company.email}">${company.email}</a>`;

export interface FormCopy {
  title: string;
  description: string;
  headlineBefore: string;   // text before the bold event name
  headlineAfter: string;    // text after it
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  consentText: string;
  privacyLinkText: string;
  submitLabel: string;
  pendingLabel: string;
  successText: string;
  errorText: string;
  footTitle: string;
  footSub: string;
  backLink: string;
  subject: string;
}

export interface NoticeCopy {
  title: string;
  description: string;
  slab: string;
  heading: string;
  effective: string;
  sections: { title: string; blocks: string[] }[];  // blocks are trusted HTML we author here
  backLink: string;
}

export const form: Record<Lang, FormCopy> = {
  hu: {
    title: `${EVENT_NAME} — M61 agent thruster`,
    description: `Kérd el a weCan Technology „${TALK_TITLE_HU}” előadását és a hozzá tartozó jegyzetet az ${EVENT_NAME} konferenciáról.`,
    headlineBefore: "Ha szeretnéd, hogy elküldjük neked az ",
    headlineAfter: " előadásunkat és a hozzá tartozó jegyzetet, add meg a neved és az e-mail-címed.",
    nameLabel: "Neved",
    namePlaceholder: "Hogy szólíthatunk?",
    emailLabel: "E-mail-címed",
    emailPlaceholder: "nev@pelda.hu",
    consentText: "Hozzájárulok, hogy a weCan Technology a nevemet és az e-mail-címemet az előadás és a jegyzet elküldése céljából kezelje.",
    privacyLinkText: "Adatkezelési tájékoztató",
    submitLabel: "Kérem az előadást és a jegyzetet",
    pendingLabel: "Küldés…",
    successText: "Köszönjük! Az előadást és a jegyzetet hamarosan elküldjük a megadott címre.",
    errorText: `Nem sikerült elküldeni. Próbáld újra, vagy írj a ${company.email} címre.`,
    footTitle: TALK_TITLE_HU,
    footSub: "a weCan Technology előadása · M61 agent thruster",
    backLink: "Mi az M61 agent thruster? →",
    subject: `[M61 · ${EVENT_NAME}] Előadás és jegyzet kérés – m61.ai/ai2026summit/hu`,
  },
  en: {
    title: `${EVENT_NAME} — M61 agent thruster`,
    description: `Request weCan Technology's ${EVENT_NAME} talk “${TALK_TITLE_EN}” and the accompanying notes.`,
    headlineBefore: "If you would like us to send you our ",
    headlineAfter: " talk and the accompanying notes, leave your name and email address.",
    nameLabel: "Your name",
    namePlaceholder: "How should we address you?",
    emailLabel: "Your email",
    emailPlaceholder: "name@example.com",
    consentText: "I agree that weCan Technology processes my name and email address in order to send me the talk and the notes.",
    privacyLinkText: "Privacy notice",
    submitLabel: "Send me the talk and the notes",
    pendingLabel: "Sending…",
    successText: "Thank you! We will send the talk and the notes to the address you gave shortly.",
    errorText: `Something went wrong. Please try again, or email ${company.email}.`,
    footTitle: TALK_TITLE_EN,
    footSub: "a talk by weCan Technology (held in Hungarian) · M61 agent thruster",
    backLink: "What is M61 agent thruster? →",
    subject: `[M61 · ${EVENT_NAME} · EN] Talk and notes request – m61.ai/ai2026summit`,
  },
};

export const notice: Record<Lang, NoticeCopy> = {
  hu: {
    title: "Adatkezelési tájékoztató — M61 agent thruster",
    description: `Adatkezelési tájékoztató az ${EVENT_NAME} előadás és jegyzet kéréséhez megadott név és e-mail-cím kezeléséről.`,
    slab: "Adatkezelési tájékoztató",
    heading: `Az ${EVENT_NAME} előadás és jegyzet kéréséhez megadott adatok kezelése`,
    effective: "Hatályos: 2026. szeptember 7.",
    backLink: "← Vissza az űrlaphoz",
    sections: [
      { title: "1. Az adatkezelő", blocks: [
        `<dl><dt>Név</dt><dd>${company.legalName}</dd><dt>Székhely</dt><dd>${company.address}</dd><dt>Cégjegyzékszám</dt><dd>${company.regNo}</dd><dt>Adószám</dt><dd>${company.taxNo}</dd><dt>Kapcsolat</dt><dd>${mail}</dd></dl>`,
      ]},
      { title: "2. Mire vonatkozik ez a tájékoztató?", blocks: [
        `<p>Az <a href="${routes.hu.form}">m61.ai/ai2026summit/hu</a> oldalon (és annak angol változatán) található űrlapra, amelyen az ${EVENT_NAME} (${EVENT_CITY}) konferencián tartott „${TALK_TITLE_HU}” előadásunk anyagát és a hozzá tartozó jegyzetet kérheted el.</p>`,
      ]},
      { title: "3. Kezelt adatok", blocks: [
        `<ul><li>neved,</li><li>e-mail-címed,</li><li>a hozzájárulásod megadásának ténye és időpontja.</li></ul>`,
        `<p>Az űrlap kitöltése önkéntes. Ha nem adod meg az adatokat, az anyagokat nem tudjuk elküldeni.</p>`,
      ]},
      { title: "4. Az adatkezelés célja és jogalapja", blocks: [
        `<p><b>Cél:</b> az előadás és a jegyzet megküldése a megadott e-mail-címre, valamint az ezzel kapcsolatos esetleges egyeztetés.</p>`,
        `<p><b>Jogalap:</b> a hozzájárulásod (GDPR 6. cikk (1) bekezdés a) pont). A hozzájárulást bármikor visszavonhatod a ${mail} címre küldött üzenettel. A visszavonás nem érinti a visszavonás előtti adatkezelés jogszerűségét.</p>`,
        `<p>Az adataidat nem használjuk marketingcélra, és hírlevélre nem iratkoztatunk fel.</p>`,
      ]},
      { title: "5. Meddig kezeljük az adatokat?", blocks: [
        `<p>Az adataidat az anyagok elküldését követő ${RETENTION_DAYS} napon belül töröljük, vagy hamarabb, ha a hozzájárulásodat visszavonod.</p>`,
      ]},
      { title: "6. Adatfeldolgozók, adattovábbítás", blocks: [
        `<p>Az űrlap beküldését a <b>Formspree, Inc.</b> (USA) űrlapszolgáltatása dolgozza fel és továbbítja e-mailben az adatkezelőnek. A Formspree adatfeldolgozóként, az utasításaink szerint kezeli az adatokat. Mivel a szolgáltató az Európai Unión kívül működik, az adattovábbítás a GDPR V. fejezete szerinti garanciák mellett történik.</p>`,
        `<p>Az e-mailes kapcsolattartáshoz az adatkezelő saját levelezőrendszerét használjuk.</p>`,
        `<p>Az adatokat más harmadik félnek nem adjuk át, kivéve ha erre jogszabály kötelez.</p>`,
      ]},
      { title: "7. Jogaid", blocks: [
        `<p>Az adatkezeléssel kapcsolatban kérheted:</p>`,
        `<ul><li>a tájékoztatást és a hozzáférést a kezelt adataidhoz,</li><li>az adataid helyesbítését,</li><li>az adataid törlését,</li><li>az adatkezelés korlátozását,</li><li>az adataid hordozható formában történő kiadását,</li><li>a hozzájárulásod visszavonását.</li></ul>`,
        `<p>Kérésedet a ${mail} címre küldheted. Legfeljebb egy hónapon belül válaszolunk.</p>`,
      ]},
      { title: "8. Jogorvoslat", blocks: [
        `<p>Ha úgy ítéled meg, hogy az adatkezelés sérti a jogaidat, panaszt tehetsz a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH, 1055 Budapest, Falk Miksa utca 9–11.; <a href="https://naih.hu" target="_blank" rel="noreferrer">naih.hu</a>), vagy bírósághoz fordulhatsz.</p>`,
      ]},
      { title: "9. Sütik", blocks: [
        `<p>Az oldal nem használ sütiket és nem végez látogatáskövetést. A betűtípust a Google Fonts szolgáltatja, amely a betöltéshez a böngésződ IP-címét kapja meg.</p>`,
      ]},
    ],
  },
  en: {
    title: "Privacy notice — M61 agent thruster",
    description: `Privacy notice for the name and email address you provide to request the ${EVENT_NAME} talk and notes.`,
    slab: "Privacy notice",
    heading: `Processing of the data you provide to request the ${EVENT_NAME} talk and notes`,
    effective: "Effective: 7 September 2026",
    backLink: "← Back to the form",
    sections: [
      { title: "1. Data controller", blocks: [
        `<dl><dt>Name</dt><dd>${company.legalName}</dd><dt>Registered office</dt><dd>${company.address}, Hungary</dd><dt>Company registration no.</dt><dd>${company.regNo}</dd><dt>Tax number</dt><dd>${company.taxNo}</dd><dt>Contact</dt><dd>${mail}</dd></dl>`,
      ]},
      { title: "2. What does this notice cover?", blocks: [
        `<p>The form at <a href="${routes.en.form}">m61.ai/ai2026summit</a> (and its Hungarian version), where you can request the material of our talk “${TALK_TITLE_EN}” (“${TALK_TITLE_HU}”) given at ${EVENT_NAME} in ${EVENT_CITY}, together with the accompanying notes.</p>`,
      ]},
      { title: "3. Data we process", blocks: [
        `<ul><li>your name,</li><li>your email address,</li><li>the fact and time of your consent.</li></ul>`,
        `<p>Filling in the form is voluntary. Without these details we cannot send you the material.</p>`,
      ]},
      { title: "4. Purpose and legal basis", blocks: [
        `<p><b>Purpose:</b> sending the talk and the notes to the email address you provide, and any related correspondence.</p>`,
        `<p><b>Legal basis:</b> your consent (Article 6(1)(a) GDPR). You may withdraw your consent at any time by writing to ${mail}. Withdrawal does not affect the lawfulness of processing before the withdrawal.</p>`,
        `<p>We do not use your data for marketing and we do not add you to any newsletter.</p>`,
      ]},
      { title: "5. How long do we keep the data?", blocks: [
        `<p>We delete your data within ${RETENTION_DAYS} days after sending you the material, or earlier if you withdraw your consent.</p>`,
      ]},
      { title: "6. Processors and transfers", blocks: [
        `<p>Form submissions are processed by the form service of <b>Formspree, Inc.</b> (USA) and forwarded to the controller by email. Formspree acts as a processor on our instructions. As the provider operates outside the European Union, the transfer takes place subject to the safeguards of Chapter V GDPR.</p>`,
        `<p>For email correspondence we use the controller's own mail system.</p>`,
        `<p>We do not share your data with any other third party unless required by law.</p>`,
      ]},
      { title: "7. Your rights", blocks: [
        `<p>Regarding this processing you may request:</p>`,
        `<ul><li>information about, and access to, the data we hold about you,</li><li>rectification of your data,</li><li>erasure of your data,</li><li>restriction of processing,</li><li>a copy of your data in a portable format,</li><li>withdrawal of your consent.</li></ul>`,
        `<p>Send your request to ${mail}. We respond within one month at the latest.</p>`,
      ]},
      { title: "8. Complaints", blocks: [
        `<p>If you believe this processing infringes your rights, you may lodge a complaint with the Hungarian National Authority for Data Protection and Freedom of Information (NAIH, 1055 Budapest, Falk Miksa utca 9–11., Hungary; <a href="https://naih.hu" target="_blank" rel="noreferrer">naih.hu</a>), with the supervisory authority of your own EU member state, or seek a judicial remedy.</p>`,
      ]},
      { title: "9. Cookies", blocks: [
        `<p>This page sets no cookies and does no visitor tracking. The typeface is served by Google Fonts, which receives your browser's IP address to deliver it.</p>`,
      ]},
    ],
  },
};
