import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-CwWnj1rk.js";
import { L as Link } from "./router-DRNjaQR8.js";
import { c as createLucideIcon, L as Layout, X } from "./Layout-_EoV1Diz.js";
import { P as PageHero } from "./PageHero-DTS3QPDZ.js";
import { F as FadeIn } from "./fade-in-CE_czYaH.js";
import { b as businessImg, a as bandiImg } from "./collection-bandi-rIvrEL_D.js";
import { j as jacketImg, s as shirtImg, o as overcoatImg, t as tuxedoImg } from "./collection-tuxedo-DPxK5Gx-.js";
import { t as threepieceImg } from "./collection-threepiece-B5QofLxQ.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$1);
const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode);
const items = [{
  img: businessImg,
  title: "Navy Double-Breasted",
  cat: "Suits"
}, {
  img: threepieceImg,
  title: "Charcoal Three-Piece",
  cat: "Suits"
}, {
  img: jacketImg,
  title: "Herringbone Sport Coat",
  cat: "Jackets"
}, {
  img: bandiImg,
  title: "Burgundy Bandi",
  cat: "Heritage"
}, {
  img: shirtImg,
  title: "French Cuff Shirt",
  cat: "Shirts"
}, {
  img: overcoatImg,
  title: "Camel Cashmere Overcoat",
  cat: "Overcoats"
}, {
  img: tuxedoImg,
  title: "Black Peak Tuxedo",
  cat: "Formal"
}, {
  img: businessImg,
  title: "Midnight Business Suit",
  cat: "Suits"
}, {
  img: jacketImg,
  title: "Tweed Hunting Jacket",
  cat: "Jackets"
}];
const cats = ["All", "Suits", "Jackets", "Heritage", "Shirts", "Overcoats", "Formal"];
function CollectionsPage() {
  const [active, setActive] = reactExports.useState("All");
  const [selectedIndex, setSelectedIndex] = reactExports.useState(null);
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);
  const selectedItem = selectedIndex !== null ? filtered[selectedIndex] : null;
  reactExports.useEffect(() => {
    if (selectedIndex === null) return;
    if (selectedIndex >= filtered.length) {
      setSelectedIndex(filtered.length ? 0 : null);
    }
  }, [filtered, selectedIndex]);
  reactExports.useEffect(() => {
    if (selectedIndex === null) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => {
          if (prev === null) return null;
          return (prev - 1 + filtered.length) % filtered.length;
        });
      }
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => {
          if (prev === null) return null;
          return (prev + 1) % filtered.length;
        });
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedIndex, filtered.length]);
  const showPrev = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + filtered.length) % filtered.length;
    });
  };
  const showNext = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % filtered.length;
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Our Work", title: "The Gallery", subtitle: "A selection of recent commissions from our atelier — each piece patterned, cut and finished entirely by hand." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-3 mb-16 pb-10 border-b border-border", children: cats.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive(c), className: `px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.28em] border transition-all ${active === c ? "bg-[color:var(--color-gold)] text-[color:var(--color-ink)] border-[color:var(--color-gold)]" : "border-border text-muted-foreground hover:text-[color:var(--color-gold)] hover:border-[color:var(--color-gold)]"}`, children: c }, c)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10", children: filtered.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setSelectedIndex(i), className: "relative overflow-hidden aspect-[3/4] w-full text-left cursor-zoom-in", "aria-label": `Open ${item.title} image`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.img, alt: item.title, width: 1024, height: 1280, loading: "lazy", className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-5 flex justify-between items-baseline", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.65rem] uppercase tracking-[0.28em] gold-text", children: item.cat })
        ] })
      ] }) }, i)) }),
      selectedItem && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[90] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4", onClick: () => setSelectedIndex(null), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setSelectedIndex(null), className: "absolute top-4 right-4 text-white/85 hover:text-white transition-colors", "aria-label": "Close gallery", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 28 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: (e) => {
          e.stopPropagation();
          showPrev();
        }, className: "absolute left-4 md:left-8 text-white/85 hover:text-white transition-colors", "aria-label": "Previous image", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 34 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-5xl", onClick: (e) => e.stopPropagation(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: selectedItem.img, alt: selectedItem.title, className: "w-full max-h-[82vh] object-contain" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex justify-between items-baseline text-white/90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl", children: selectedItem.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.24em] text-[color:var(--color-gold)]", children: selectedItem.cat })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: (e) => {
          e.stopPropagation();
          showNext();
        }, className: "absolute right-4 md:right-8 text-white/85 hover:text-white transition-colors", "aria-label": "Next image", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 34 }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-24 text-center border-t border-border pt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl md:text-4xl", children: "Inspired by what you see?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Begin your own commission with a private consultation." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book", className: "btn-gold mt-8", children: "Book Consultation" })
      ] }) })
    ] }) })
  ] });
}
export {
  CollectionsPage as component
};
