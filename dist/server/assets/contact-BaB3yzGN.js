import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-CwWnj1rk.js";
import { c as createLucideIcon, L as Layout, M as MapPin, P as Phone, a as Mail } from "./Layout-_EoV1Diz.js";
import { P as PageHero } from "./PageHero-DTS3QPDZ.js";
import { t as toast } from "./router-DRNjaQR8.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
function ContactPage() {
  const [sending, setSending] = reactExports.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message received. Our atelier will respond within 24 hours.");
      e.target.reset();
    }, 800);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Get In Touch", title: "Visit the Atelier", subtitle: "Schedule a private appointment at our Durbar Marg atelier, or reach us virtually for international clientele." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl grid lg:grid-cols-5 gap-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-10", children: [
        [{
          Icon: MapPin,
          t: "Visit",
          l1: "Durbar Marg",
          l2: "Kathmandu, Nepal 44600"
        }, {
          Icon: Phone,
          t: "Call or WhatsApp",
          l1: "+977 970 269 1187",
          l2: "WhatsApp & Viber available"
        }, {
          Icon: Mail,
          t: "Write",
          l1: "atelier@kayoze.com",
          l2: "We respond within 24 hours"
        }, {
          Icon: Clock,
          t: "Atelier Hours",
          l1: "Mon — Sat · 10:00 — 19:00",
          l2: "Sunday by appointment"
        }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 shrink-0 grid place-items-center border border-[color:var(--color-gold)]/40 gold-text", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.Icon, { size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.7rem] uppercase tracking-[0.28em] gold-text", children: c.t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-foreground", children: c.l1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: c.l2 })
          ] })
        ] }, c.t)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl gold-text mb-4", children: "Find us Here" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video w-full border border-border grayscale hover:grayscale-0 transition-all duration-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26933.357710100663!2d85.31686!3d27.709763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198f4d1ac0ef%3A0xbc4ab09780de0d61!2sKAYOZE%20DURBARMARG!5e1!3m2!1sen!2snp!4v1777269727290!5m2!1sen!2snp", width: "100%", height: "100%", style: {
            border: 0
          }, allowFullScreen: true, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", title: "Kayoze Durbar Marg Location" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "lg:col-span-3 border border-border p-8 lg:p-12 bg-card/30 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Message Atelier" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 font-display text-3xl", children: "Send us a note" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", name: "name", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Country", name: "country" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", rows: 5, required: true, className: "mt-2 w-full bg-transparent border-b border-border focus:border-[color:var(--color-gold)] py-3 text-foreground outline-none transition-colors resize-none", placeholder: "Tell us about your commission..." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: sending, className: "btn-gold w-full sm:w-auto disabled:opacity-60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 14 }),
          sending ? "Sending..." : "Send Message"
        ] })
      ] })
    ] }) })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground", children: [
      label,
      required && " *"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, name, required, className: "mt-2 w-full bg-transparent border-b border-border focus:border-[color:var(--color-gold)] py-3 text-foreground outline-none transition-colors" })
  ] });
}
export {
  ContactPage as component
};
