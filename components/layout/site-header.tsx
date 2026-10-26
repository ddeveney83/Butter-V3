"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { services } from "@/content/services";
import { primaryNavigation, findRoute } from "@/content/routes";
import { Wordmark, ActionLink } from "@/components/ui/primitives";

export function SiteHeader() {
  const pathname = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const submenu = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    function dismiss(event: PointerEvent) {
      if (!submenu.current?.contains(event.target as Node) && submenu.current)
        submenu.current.open = false;
    }
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, []);
  const [open, setOpen] = useState(false);
  function closeMenu() {
    dialog.current?.close();
  }
  function restoreScroll() {
    document.body.style.overflow = "";
    setOpen(false);
  }
  function openMenu() {
    dialog.current?.showModal();
    document.body.style.overflow = "hidden";
    setOpen(true);
  }
  function links(close = false) {
    return primaryNavigation.map((path) => {
      const link = (
        <Link
          href={path}
          onClick={() => {
            if (close) closeMenu();
            if (submenu.current) submenu.current.open = false;
          }}
          aria-current={
            pathname === path || pathname.startsWith(path + "/")
              ? "page"
              : undefined
          }
        >
          {findRoute(path)!.title}
        </Link>
      );
      if (path !== "/services") return <span key={path}>{link}</span>;
      const children = services.map((service) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          onClick={() => {
            if (close) closeMenu();
            if (submenu.current) submenu.current.open = false;
          }}
          aria-current={
            pathname === `/services/${service.slug}` ? "page" : undefined
          }
        >
          {service.title}
        </Link>
      ));
      return close ? (
        <div key={path} className="mobile-services-group">
          {link}
          <div
            className="mobile-service-links"
            aria-label="Individual services"
          >
            {children}
          </div>
        </div>
      ) : (
        <div key={path} className="nav-services">
          {link}
          <details
            ref={submenu}
            className="services-disclosure"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node))
                event.currentTarget.open = false;
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                event.preventDefault();
                event.stopPropagation();
                event.currentTarget.open = false;
                event.currentTarget.querySelector("summary")?.focus();
              }
            }}
          >
            <summary aria-label="Show individual services">
              <ChevronDown aria-hidden="true" size={15} />
            </summary>
            <div className="services-submenu">
              <p className="eyebrow">Explore our services</p>
              {children}
            </div>
          </details>
        </div>
      );
    });
  }

  return (
    <header className="site-header shell">
      <div className="header-row">
        <Wordmark />
        <nav className="desktop-nav" aria-label="Primary">
          {links()}
        </nav>
        <div className="desktop-contact">
          <ActionLink href="/contact" variant="pill">
            Let’s talk
          </ActionLink>
        </div>
        <button
          type="button"
          className="menu-button"
          onClick={openMenu}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Menu aria-hidden="true" />
        </button>
      </div>
      <dialog
        ref={dialog}
        id="mobile-menu"
        className="mobile-menu"
        aria-label="Site navigation"
        onClose={restoreScroll}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls =
            dialog.current?.querySelectorAll<HTMLElement>("button, a[href]");
          if (!controls?.length) return;
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }}
      >
        <button
          type="button"
          className="menu-close"
          onClick={closeMenu}
          aria-label="Close menu"
          autoFocus
        >
          <X aria-hidden="true" />
        </button>
        <p className="eyebrow">Explore Butter</p>
        <nav aria-label="Mobile">
          {links(true)}
          <Link href="/contact" onClick={closeMenu}>
            Let’s talk ↗
          </Link>
        </nav>
      </dialog>
    </header>
  );
}
