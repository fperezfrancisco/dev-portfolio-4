"use client";
import { Menu, X } from "lucide-react";
import React from "react";

const MainHeader = () => {
  const navItems = [
    { title: "About Me", href: "#about" },
    { title: "Experience", href: "#experience" },
    { title: "Recent Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  const [visible, setVisible] = React.useState(true);
  const lastY = React.useRef(
    typeof window !== "undefined" ? window.scrollY : 0
  );
  // default to true on the server to match server-rendered HTML.
  // we'll sync with the real scroll position in an effect after mount.
  const [atTop, setAtTop] = React.useState(true);
  const inactivityTimer = React.useRef(null);
  const hoverRef = React.useRef(false);

  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  React.useEffect(() => {
    const threshold = 200;

    const clearInactivity = () => {
      if (inactivityTimer.current) {
        clearTimeout(inactivityTimer.current);
        inactivityTimer.current = null;
      }
    };

    const startInactivity = () => {
      clearInactivity();
      inactivityTimer.current = setTimeout(() => {
        // hide after 3s of pause, unless we're at the top or the user is hovering
        if (!hoverRef.current && window.scrollY > threshold) setVisible(false);
      }, 3000);
    };

    const onScroll = () => {
      const y = window.scrollY;

      // update whether we're exactly at the top
      setAtTop(y === 0);

      if (y <= threshold) {
        // always show near the top
        setVisible(true);
        clearInactivity();
      } else {
        if (y > lastY.current) {
          // scrolling down -> hide (unless user is hovering the header)
          if (!hoverRef.current) {
            setVisible(false);
            clearInactivity();
          }
        } else if (y < lastY.current) {
          // scrolling up -> show and start inactivity timer
          setVisible(true);
          startInactivity();
        }
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // run once on mount to sync client state with current scroll position
    // (keeps the initial client render identical to server-rendered HTML,
    // avoiding hydration mismatches)
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInactivity();
    };
  }, []);

  // watch viewport width for the 800px breakpoint
  /*
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 799px)");
    const handler = (e) => setIsNarrow(e.matches);
    // set initial
    setIsNarrow(mq.matches);
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);*/

  // lock body scrolling when sidebar is open
  React.useEffect(() => {
    if (typeof document === "undefined") return;
    const prev = document.body.style.overflow;
    if (sidebarOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = prev || "";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [sidebarOpen]);

  // build tailwind classes for background & backdrop filter
  const mobileBgClasses =
    !atTop && !sidebarOpen
      ? "bg-[#121212] backdrop-blur-[6px] backdrop-saturate-[120%]"
      : "bg-transparent";
  const desktopBgClasses =
    visible && !atTop
      ? "min-[800px]:bg-[#121212] min-[800px]:backdrop-blur-[6px] min-[800px]:backdrop-saturate-[120%]"
      : "min-[800px]:bg-transparent";

  const headerClasses = `fixed h-20 w-full px-4 md:px-8 py-4 z-40 flex items-center justify-between transition-transform transition-opacity duration-[280ms] ease-in-out ${
    visible
      ? "translate-y-0 opacity-100 min-[800px]:translate-y-0"
      : "translate-y-0 min-[800px]:translate-y-[-100%] min-[800px]:opacity-0"
  } ${mobileBgClasses} ${desktopBgClasses}`;

  return (
    <header
      className={headerClasses}
      onMouseEnter={() => {
        hoverRef.current = true;
        setVisible(true);
        if (inactivityTimer.current) {
          clearTimeout(inactivityTimer.current);
          inactivityTimer.current = null;
        }
      }}
      onMouseLeave={() => {
        hoverRef.current = false;
        // restart inactivity timer when mouse leaves (if we're past threshold)
        if (window.scrollY > 200) {
          inactivityTimer.current = setTimeout(() => setVisible(false), 3000);
        }
      }}
    >
      <span className="px-3 py-1 font-extrabold text-lg border-4 border-[var(--accent)] text-[var(--accent)] rounded-sm cursor-pointer hover:text-white hover:border-white transition-colors duration-300 ease-out">
        <a href="#/">F</a>
      </span>

      {/* Narrow: show menu open button */}

      <button
        aria-label="Open menu"
        onClick={() => setSidebarOpen(true)}
        className={`p-2 block min-[800px]:hidden ${
          sidebarOpen ? "hidden" : "block min[800px]:hidden"
        }`}
        style={{
          color: "var(--accent)",
          marginLeft: "auto",
          zIndex: 60,
          background: "transparent",
          border: "none",
        }}
      >
        <Menu className="size-6 hover:text-white" />
      </button>

      {/* Desktop / wide nav */}

      <nav className="hidden min-[800px]:block">
        <ul>
          {navItems.map((item) => (
            <li key={item.href} className="inline-block ml-6 cursor-pointer">
              <a
                href={item.href}
                className="text-sm font-medium text-[var(--text-light)] hover:text-[var(--accent)] transition hover:underline underline-offset-12 decoration-2 underline-color-[var(--accent)] cursor-pointer"
              >
                {item.title}
              </a>
            </li>
          ))}
          <li className="inline-block ml-12 cursor-pointer px-4 py-1 border-2 border-[var(--accent)] text-[var(--accent)] hover:text-white rounded-sm hover:border-white transition-colors duration-300 ease-out">
            <a href="#" className="text-sm font-medium cursor-pointer">
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Narrow / mobile header: show menu icon */}

      <>
        <div
          className="fixed block min-[800px]:hidden inset-0 w-screen h-screen"
          aria-hidden={!sidebarOpen}
          onClick={() => setSidebarOpen(false)}
          style={{
            background: "rgba(0,0,0,0.5)",
            zIndex: 48,
            opacity: sidebarOpen ? 1 : 0,
            transition: "opacity 300ms ease",
            pointerEvents: sidebarOpen ? "auto" : "none",
            willChange: "opacity",
          }}
        />

        <aside
          role="dialog"
          aria-label="Main menu"
          aria-hidden={!sidebarOpen}
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            height: "100vh",
            minHeight: "800px",
            width: 320,

            background: "#121212",
            zIndex: 50,
            display: "flex",
            flexDirection: "column",
            transform: sidebarOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 400ms cubic-bezier(.2,.9,.2,1)",
            boxShadow: sidebarOpen ? "-20px 0 60px rgba(0,0,0,0.6)" : "none",
            willChange: "transform",
          }}
          className="p-4 py-8 block min-[800px]:hidden"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <button
              aria-label="Close menu"
              onClick={() => setSidebarOpen(false)}
              style={{ color: "var(--accent)" }}
            >
              <X className="size-6 hover:text-white" />
            </button>
          </div>

          <nav
            style={{
              marginTop: 24,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
            className="px-2 mt-6 flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className="text-base font-medium hover:text-[var(--accent)] transition hover:underline underline-offset-8 decoration-2 underline-color-[var(--accent)]    "
              >
                {item.title}
              </a>
            ))}

            <button
              onClick={() => setSidebarOpen(false)}
              className="px-4 py-2 border-2 border-[var(--accent)] text-[var(--accent)] rounded-sm"
              style={{ marginTop: 12, background: "transparent" }}
            >
              Resume
            </button>
          </nav>
        </aside>
      </>
    </header>
  );
};

export default MainHeader;
