import { useMemo, useState } from "react";

function NavItem({ label, href, active, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={[
        "block",
        "px-6 py-3",                 // ⬆️ taller navbar buttons
        "!text-white",
        "text-sm font-semibold uppercase",
        "transition-colors duration-150",
        "hover:!text-white",
        "hover:bg-[#F6170F]",
        active ? "bg-[#F6170F]" : "",
      ].join(" ")}
    >
      {label}
    </a>
  );
}

export default function Navbar() {
  const nav = useMemo(
    () => [
      { label: "Home", href: "#home" },
      { label: "Notice", href: "#notice" },
      { label: "Events", href: "#events" },
      { label: "Contributions", href: "#contributions" },
      { label: "Government Schemes", href: "#schemes" },
      { label: "About Us", href: "#about" },
    ],
    []
  );

  const [active, setActive] = useState("Home");

  return (
    <header className="w-full">
      {/* FULL page width, no side gaps */}
      <div className="w-full px-0 pt-0">
        <div className="w-full overflow-hidden bg-white ring-1 ring-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.10)]">
          
          {/* Logos row (bigger + more height) */}
          <div className="bg-white px-10 py-6">
            <div className="flex items-center justify-between gap-8">
              <img src="/logos/nss_logo.png" className="h-20 w-auto object-contain" />
              <img src="/logos/mybharat-logo 1.png" className="h-16 w-auto object-contain" />
              <img src="/logos/yas-logo 1.png" className="h-16 w-auto object-contain" />
              <img src="/logos/viksit-bharat-logo 1.png" className="h-16 w-auto object-contain" />
              <img src="/logos/digital-india 1.png" className="h-15 w-auto object-contain" />
              <img src="/logos/bit_mesra.png" className="h-20 w-auto object-contain" />
            </div>
          </div>

          {/* Nav row (taller) */}
          <div className="relative bg-[#19366b]">
            <div className="absolute right-0 top-0 h-full w-[4px] bg-[#F6170F]" />
            <nav className="grid grid-cols-6 items-center text-center">
              {nav.map((item) => (
                <NavItem
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  active={active === item.label}
                  onClick={() => setActive(item.label)}
                />
              ))}
            </nav>
          </div>

        </div>
      </div>
    </header>
  );
}
