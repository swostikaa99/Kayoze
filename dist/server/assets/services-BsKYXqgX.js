import { U as jsxRuntimeExports } from "./worker-entry-CwWnj1rk.js";
import { L as Link } from "./router-DRNjaQR8.js";
import { L as Layout } from "./Layout-_EoV1Diz.js";
import { P as PageHero } from "./PageHero-DTS3QPDZ.js";
import { F as FadeIn } from "./fade-in-CE_czYaH.js";
import { b as businessImg, a as bandiImg } from "./collection-bandi-rIvrEL_D.js";
import { j as jacketImg, s as shirtImg, o as overcoatImg, t as tuxedoImg } from "./collection-tuxedo-DPxK5Gx-.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const services = [{
  img: businessImg,
  t: "Bespoke Suits",
  d: "Two and three-piece suits cut to your exact measurements in Super 120s — 150s wools.",
  from: "From NPR 45,000"
}, {
  img: jacketImg,
  t: "Woolen Jackets",
  d: "Tweed, cashmere blend and herringbone sport coats designed for warmth and quiet sophistication.",
  from: "From NPR 32,000"
}, {
  img: bandiImg,
  t: "Bandi Coats",
  d: "Traditional Nepali Nehru jackets reimagined with contemporary tailoring and rich silks.",
  from: "From NPR 28,000"
}, {
  img: shirtImg,
  t: "Custom Shirts",
  d: "Two-fold Egyptian and Italian cottons, hand-finished collars, French cuffs and mother-of-pearl buttons.",
  from: "From NPR 8,500"
}, {
  img: overcoatImg,
  t: "Overcoats",
  d: "Camel hair, cashmere and pure wool overcoats tailored for travel, weather and presence.",
  from: "From NPR 65,000"
}, {
  img: tuxedoImg,
  t: "Formalwear & Tuxedos",
  d: "Black-tie tuxedos, dinner jackets and wedding suits — for occasions worth dressing for.",
  from: "From NPR 58,000"
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Our Expertise", title: "Bespoke Services", subtitle: "Six disciplines, one standard. Every garment is patterned individually — there are no house blocks at Kayoze." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-6 pb-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl space-y-24 lg:space-y-32", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: `grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? "lg:[&>img]:order-2" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, alt: s.t, width: 1024, height: 1280, loading: "lazy", className: "w-full aspect-[4/5] object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "eyebrow", children: [
            "0",
            i + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 text-4xl md:text-5xl font-display", children: s.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gold-divider w-24 mt-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-muted-foreground text-lg leading-relaxed", children: s.d }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground", children: "Investment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl gold-text mt-1", children: s.from })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground", children: "Lead Time" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl gold-text mt-1", children: "4 — 6 wks" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book", className: "btn-outline-gold mt-10", children: "Begin Commission" })
        ] })
      ] }) }, s.t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-32 max-w-5xl mx-auto border border-border p-12 lg:p-20 text-center relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[color:var(--color-gold)]/5 via-transparent to-[color:var(--color-gold)]/5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Ready to begin?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 text-4xl md:text-6xl font-display leading-tight", children: [
          "Craft your ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "gold-text not-italic", children: "legacy" }),
          " garment."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground max-w-xl mx-auto", children: "Whether for a wedding, business or heritage occasion — your journey starts with a personal consultation." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book", className: "btn-gold", children: "Book Consultation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "btn-outline-gold", children: "Contact Atelier" })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  ServicesPage as component
};
