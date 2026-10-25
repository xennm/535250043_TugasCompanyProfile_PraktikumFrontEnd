import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "XENTRAL — Fragrance House",
        template: "%s | XENTRAL",
    },
    description:
        "XENTRAL is a concept fragrance house exploring scent, identity, and personal expression.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
