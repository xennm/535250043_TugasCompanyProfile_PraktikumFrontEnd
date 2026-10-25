"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Catalog", href: "/catalog" },
    { label: "About", href: "/about" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    function isActive(href: string) {
        if (href === "/") {
            return pathname === "/";
        }

        return pathname === href || pathname.startsWith(`${href}/`);
    }

    return (
        <header className="site-header">
            <nav className="navbar container" aria-label="Main navigation">
                <Link
                    href="/"
                    className="brand"
                    onClick={() => setMenuOpen(false)}
                >
                    <Image
                        src="/images/X.png"
                        alt="XENTRAL XNL Logo"
                        width={44}
                        height={44}
                        className="brand-mark"
                    />
                    <span>XENTRAL</span>
                </Link>

                <div className="nav-right">
                    <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`nav-link ${
                                    isActive(link.href) ? "nav-link-active" : ""
                                }`}
                                aria-current={isActive(link.href) ? "page" : undefined}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <Link
                        href="/shop"
                        className="nav-cta"
                        onClick={() => setMenuOpen(false)}
                    >
                        Discover
                    </Link>

                    <button
                        type="button"
                        className="menu-toggle"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span />
                        <span />
                    </button>
                </div>
            </nav>
        </header>
    );
}
