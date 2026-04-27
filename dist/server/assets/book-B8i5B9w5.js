import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-CwWnj1rk.js";
import { c as createLucideIcon, L as Layout } from "./Layout-_EoV1Diz.js";
import { P as PageHero } from "./PageHero-DTS3QPDZ.js";
import { t as toast } from "./router-DRNjaQR8.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$1);
const __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode);
const services = ["Bespoke Suit", "Three-Piece Suit", "Woolen Jacket", "Bandi Coat", "Custom Shirt", "Overcoat", "Tuxedo / Formalwear", "Other"];
function BookPage() {
  const [sending, setSending] = reactExports.useState(false);
  const [mode, setMode] = reactExports.useState("atelier");
  const onSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Consultation request received. Our concierge will confirm within 24 hours.");
      e.target.reset();
    }, 800);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Private Appointment", title: "Book a Consultation", subtitle: "A private, unhurried session with our master tailors — in person at our Kathmandu atelier or by video call from anywhere in the world." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl grid lg:grid-cols-3 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "lg:col-span-1 space-y-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl gold-text", children: "What to expect" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3 text-sm text-muted-foreground", children: ["60 — 90 minute private session", "Style and lifestyle consultation", "Cloth selection from our library", "30+ precise measurements", "Lead time: 4 — 6 weeks", "Worldwide delivery available"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "gold-text shrink-0 mt-0.5", size: 16 }),
            s
          ] }, s)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-[color:var(--color-gold)]/30 p-6 bg-card/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.7rem] uppercase tracking-[0.28em] gold-text", children: "Concierge" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Need help choosing? Speak with our atelier directly." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+9779702691187", className: "mt-3 block font-display text-xl", children: "+977 970 269 1187" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "lg:col-span-2 border border-border p-8 lg:p-12 bg-card/30 space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground", children: "Consultation Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 mt-3", children: [{
            id: "atelier",
            t: "At the Atelier",
            d: "Durbar Marg, Kathmandu"
          }, {
            id: "virtual",
            t: "Virtual",
            d: "Video consultation"
          }].map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setMode(o.id), className: `text-left p-5 border transition-all ${mode === o.id ? "border-[color:var(--color-gold)] bg-[color:var(--color-gold)]/8" : "border-border hover:border-[color:var(--color-gold)]/50"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg", children: o.t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: o.d })
          ] }, o.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", name: "name", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone / WhatsApp", name: "phone", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Country", name: "country" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Preferred date", name: "date", type: "date", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground", children: "Service of interest *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "service", required: true, className: "mt-2 w-full bg-transparent border-b border-border focus:border-[color:var(--color-gold)] py-3 text-foreground outline-none transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", className: "bg-background", children: "Select..." }),
              services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, className: "bg-background", children: s }, s))
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground", children: "Notes (optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "notes", rows: 4, className: "mt-2 w-full bg-transparent border-b border-border focus:border-[color:var(--color-gold)] py-3 text-foreground outline-none transition-colors resize-none", placeholder: "Occasion, style preferences, fabric ideas..." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: sending, className: "btn-gold w-full sm:w-auto disabled:opacity-60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 14 }),
          sending ? "Sending..." : "Request Appointment"
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
  BookPage as component
};
