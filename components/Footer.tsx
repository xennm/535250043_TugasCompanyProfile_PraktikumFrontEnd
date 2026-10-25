import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-main">
                    <div className="footer-brand">
                        <Link href="/" className="brand">
                            <Image
                                src="/images/X.png"
                                alt="XENTRAL XNL Logo"
                                width={44}
                                height={44}
                                className="brand-mark"
                            />
                            <span>XENTRAL</span>
                        </Link>

                        <p>
                            Fragrance is personal.
                            Make it unmistakably yours.
                        </p>
                    </div>

                    <div className="footer-column">
                        <p className="footer-heading">Explore</p>
                        <Link href="/shop">Shop all</Link>
                        <Link href="/catalog">Scent catalog</Link>
                        <Link href="/about">Our story</Link>
                    </div>

                    <div className="footer-column">
                        <p className="footer-heading">XENTRAL</p>
                        <Link href="/about">Our philosophy</Link>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 XENTRAL.</p>
                    <p>MORE THAN A SCENT. IT&apos;S A STATEMENT.</p>
                </div>
            </div>
        </footer>
    );
}
