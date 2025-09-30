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
  const [atTop, setAtTop] = React.useState(
    typeof window !== "undefined" ? window.scrollY === 0 : true
  );
  const inactivityTimer = React.useRef(null);
  const hoverRef = React.useRef(false);
  const [isNarrow, setIsNarrow] = React.useState(
    typeof window !== "undefined" ? window.innerWidth < 800 : false
  );
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
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInactivity();
    };
  }, []);

  // watch viewport width for the 800px breakpoint
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
  }, []);

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

  return (
    <header
      className="fixed h-20 w-full px-4 md:px-8 py-4 z-40  flex items-center justify-between"
      style={{
        transform: isNarrow
          ? "translateY(0)"
          : visible
          ? "translateY(0)"
          : "translateY(-100%)",
        opacity: isNarrow ? 1 : visible ? 1 : 0,
        transition: "transform 280ms ease, opacity 280ms ease",
        background: (
          isNarrow ? !atTop && sidebarOpen === false : visible && !atTop
        )
          ? "#121212"
          : "transparent",
        backdropFilter: (isNarrow ? !atTop : visible && !atTop)
          ? "saturate(120%) blur(6px)"
          : "none",
      }}
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
      <span className="px-3 py-1 font-extrabold text-lg border-4 border-[var(--accent)] text-[var(--accent)] rounded-sm">
        F
      </span>

      {/* Narrow: show menu open button */}
      {isNarrow && !sidebarOpen && (
        <button
          aria-label="Open menu"
          onClick={() => setSidebarOpen(true)}
          className="p-2"
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
      )}

      {/* Desktop / wide nav */}
      {!isNarrow && (
        <nav>
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
            <li className="inline-block ml-12 cursor-pointer px-4 py-1 border-2 border-[var(--accent)] text-[var(--accent)] hover:text-white rounded-sm hover:bg-[var(--accent)] transition">
              <a
                href="#"
                className="text-sm font-medium transition cursor-pointer"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      )}

      {/* Narrow / mobile header: show menu icon */}
      {isNarrow && (
        <>
          <div
            aria-hidden={!sidebarOpen}
            onClick={() => setSidebarOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
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
            className="p-4 py-8"
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
      )}
    </header>
  );
};

export default MainHeader;
