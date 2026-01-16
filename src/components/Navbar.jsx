import { useMemo } from "react";
import { NavLink } from "react-router-dom";

function NavItem({ label, to }) {
  // Hash / anchor links
  if (to.startsWith("#")) {
    return (
      <a
        href={to}
        className={[
          "block",
          "px-4 py-3 sm:px-6",
          "text-white",
          "text-xs sm:text-sm font-semibold uppercase",
          "transition-colors duration-150",
          "hover:text-white",
          "hover:bg-[#F6170F]",
        ].join(" ")}
      >
        {label}
      </a>
    );
  }

  // Route links
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "block",
          "px-4 py-3 sm:px-6",
          "text-white",
          "text-xs sm:text-sm font-semibold uppercase",
          "transition-colors duration-150",
          "hover:text-white",
          "hover:bg-[#F6170F]",
          isActive ? "bg-[#F6170F]" : "",
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  );
}

export default function Navbar() {
  const nav = useMemo(
    () => [
      { label: "Home", to: "/" },
      { label: "Notice", to: "/" },
      { label: "Events", to: "#events" },
      { label: "Contributions", to: "#contributions" },
      { label: "Government Schemes", to: "/schemes" },
      { label: "About Us", to: "/about" },
    ],
    []
  );

  return (
    <header className="w-full">
      <div className="w-full px-0 pt-0">
        <div className="w-full overflow-hidden bg-white ring-1 ring-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.10)]">

          {/* Logos row */}
          <div className="bg-white px-6 sm:px-10 py-6">
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-6">
              <img src="/logos/nss_logo.png" className="h-16 sm:h-20 w-auto object-contain" />
              <img src="/logos/mybharat-logo 1.png" className="h-14 sm:h-16 w-auto object-contain" />
              <img src="/logos/yas-logo 1.png" className="h-14 sm:h-16 w-auto object-contain" />
              <img src="/logos/viksit-bharat-logo 1.png" className="h-14 sm:h-16 w-auto object-contain" />
              <img src="/logos/digital-india 1.png" className="h-13 sm:h-15 w-auto object-contain" />
              <img src="/logos/bit_mesra.png" className="h-16 sm:h-20 w-auto object-contain" />
            </div>
          </div>

          {/* Nav row */}
          <div className="relative bg-[#19366b]">
            <div className="absolute right-0 top-0 h-full w-[4px] bg-[#F6170F]" />

            <nav className="grid grid-cols-3 sm:grid-cols-6 items-center text-center">
              {nav.map((item) => (
                <NavItem
                  key={item.label}
                  label={item.label}
                  to={item.to}
                />
              ))}
            </nav>
          </div>

        </div>
      </div>
    </header>
  );
}
