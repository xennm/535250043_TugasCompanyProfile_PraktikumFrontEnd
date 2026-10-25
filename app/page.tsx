import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
    const perfume = products[0];

    return (
        <main>
            {/* Hero */}
            <section className="home-hero">
                <div className="container hero-layout hero-layout-centered">
                    <div
                        className="hero-backdrop-word"
                        aria-hidden="true"
                    >
                        XENTRAL
                    </div>

                    <div className="hero-copy hero-copy-centered">
                        <p className="eyebrow">
                            THE ART OF PERSONAL FRAGRANCE
                        </p>

                        <h1 className="hero-brand-title">
                            XENTRAL
                        </h1>

                    </div>

                    <div className="hero-art hero-art-centered">
                        <div className="hero-glow" />

                        <Image
                            src={perfume.image}
                            alt={`XENTRAL ${perfume.name}`}
                            width={1024}
                            height={1536}
                            priority
                            sizes="(max-width: 600px) 75vw, 330px"
                            className="hero-product-image"
                        />
                    </div>

                    <div className="hero-bottomline">
                        <span>XNL / 01</span>

                        <Link
                            href="/shop"
                            className="hero-discover"
                        >
                            Discover
                        </Link>

                        <span>FRAGRANCE HOUSE</span>
                    </div>
                </div>
            </section>

            {/* Brand introduction */}
            <section className="intro-section container">
                <div className="intro-number">X / 001</div>

                <div className="intro-content">
                    <p className="eyebrow">
                        A PERSONAL SIGNATURE
                    </p>

                    <h2>
                        A fragrance that
                        <br />
                        speaks <em>without words.</em>
                    </h2>

                    <p>
                        XENTRAL is a concept fragrance house
                        built around individual expression,
                        understated design, and memorable scents.
                    </p>

                    <Link
                        href="/about"
                        className="text-link"
                    >
                        Our philosophy
                    </Link>
                </div>
            </section>

            {/* Featured fragrance */}
            <section className="section-block container">
                <div className="section-topline">
                    <SectionTitle
                        eyebrow="THE FIRST SIGNATURE"
                        title={
                            <>
                                Meet <em>Conquer.</em>
                            </>
                        }
                        description="A modern fragrance with a timeless silver finish."
                    />

                    <span className="section-counter">
                        01 / 01
                    </span>
                </div>

                <div className="featured-product-layout">
                    <div className="featured-visual">
                        <Image
                            src={perfume.image}
                            alt={`XENTRAL ${perfume.name} 50 ml`}
                            width={1024}
                            height={1536}
                            sizes="(max-width: 650px) 90vw, 45vw"
                        />
                    </div>

                    <div className="featured-copy">
                        <p className="eyebrow">
                            {perfume.code}
                        </p>

                        <h3>{perfume.name}</h3>

                        <p className="featured-family">
                            {perfume.family}
                        </p>

                        <p className="featured-description">
                            {perfume.description}
                        </p>

                        <div className="notes-list">
                            {perfume.notes.map((note) => (
                                <span key={note}>{note}</span>
                            ))}
                        </div>

                        <div className="featured-price">
                            <span>{perfume.price}</span>
                            <span>{perfume.size}</span>
                        </div>

                        <Link
                            href={`/shop/${perfume.slug}`}
                            className="button button-outline"
                        >
                            View details
                        </Link>
                    </div>
                </div>
            </section>

            {/* Closing */}
            <section className="closing-cta">
                <div className="container">
                    <p className="eyebrow">
                        XENTRAL FRAGRANCE HOUSE
                    </p>

                    <h2>
                        Find a scent.
                        <br />
                        Leave a <em>signature.</em>
                    </h2>

                    <Link
                        href="/catalog"
                        className="button button-light"
                    >
                        Explore catalog
                    </Link>
                </div>
            </section>
        </main>
    );
}
