// Privacy notice for the general contact form on m61.ai (English only).
import { company } from "./company";
import type { NoticeCopy } from "./ai2026summit";

const mail = `<a href="mailto:${company.email}">${company.email}</a>`;

export const contactNotice: NoticeCopy = {
  title: "Privacy notice — M61 agent thruster",
  description: "Privacy notice for the details you provide through the contact form on m61.ai.",
  slab: "Privacy notice",
  heading: "Processing of the details you send us through the contact form",
  effective: "Effective: 7 September 2026",
  backLink: "← Back to m61.ai",
  sections: [
    { title: "1. Data controller", blocks: [
      `<dl><dt>Name</dt><dd>${company.legalName}</dd><dt>Registered office</dt><dd>${company.address}, Hungary</dd><dt>Company registration no.</dt><dd>${company.regNo}</dd><dt>Tax number</dt><dd>${company.taxNo}</dd><dt>Contact</dt><dd>${mail}</dd></dl>`,
    ]},
    { title: "2. What does this notice cover?", blocks: [
      `<p>The contact form on <a href="/">m61.ai</a>, through which you can ask us about M61 agent thruster and our agentic AI services. Emails you send us directly are covered by the same rules.</p>`,
    ]},
    { title: "3. Data we process", blocks: [
      `<ul><li>your name,</li><li>your email address,</li><li>your company, if you give it,</li><li>the message you write, if any,</li><li>the fact and time of your consent.</li></ul>`,
      `<p>Filling in the form is voluntary. Without your name and email address we cannot reply to you.</p>`,
    ]},
    { title: "4. Purpose and legal basis", blocks: [
      `<p><b>Purpose:</b> answering your enquiry and, where you ask for one, preparing a proposal and holding the related correspondence.</p>`,
      `<p><b>Legal basis:</b> your consent (Article 6(1)(a) GDPR). You may withdraw your consent at any time by writing to ${mail}. Withdrawal does not affect the lawfulness of processing before the withdrawal.</p>`,
      `<p>We do not use your data for marketing and we do not add you to any newsletter.</p>`,
    ]},
    { title: "5. How long do we keep the data?", blocks: [
      `<p>We keep your details while your enquiry is open and delete them no later than 12 months after our last exchange, or earlier if you withdraw your consent. If the enquiry leads to a contract, the data becomes part of that business relationship and is kept under the rules that apply to it.</p>`,
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
      `<p>This site sets no cookies and does no visitor tracking. The typeface is served by Google Fonts, which receives your browser's IP address to deliver it.</p>`,
    ]},
  ],
};
