import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

const values = [
    {
        number: "01",
        title: "Individuality",
        description:
            "Fragrance is personal. We celebrate the details that make every individual different.",
    },
    {
        number: "02",
        title: "Intention",
        description:
            "Every scent begins with a mood, a memory, or a feeling worth expressing.",
    },
    {
        number: "03",
        title: "Expression",
        description:
            "A fragrance can speak quietly and still leave a lasting impression.",
    },
];

export default function AboutPage() {
    return (
        <main>
            {/* ABOUT HERO */}
            <section className="about-hero">
                <div className="container about-hero-content">
                    <p className="eyebrow">
                        <span className="eyebrow-line" />
                        THE STORY BEHIND THE SCENT
                    </p>

                    <h1>
                        Beyond the
                        <br />
                        <em>first impression.</em>
                    </h1>

                    <p className="about-hero-description">
                        XENTRAL is a fragrance brand concept
                        exploring scent, identity, and personal
                        expression through a modern visual identity.
                    </p>

                    <span className="about-hero-index">
                        XENTRAL / OUR STORY
                    </span>
                </div>
            </section>

            {/* FOUNDER */}
            <section className="founder-section">
                <div className="container founder-layout">
                    <div className="founder-label">
                        <p className="eyebrow">
                            THE PERSON BEHIND XENTRAL
                        </p>

                        <p className="founder-number">
                            FOUNDER / 01
                        </p>
                    </div>

                    <div className="founder-content">
                        <p className="founder-role">
                            FOUNDER
                        </p>

                        <h2>Nicholas Tannaydi</h2>

                        <p>
                            XENTRAL is a fictional fragrance
                            house concept created by Nicholas
                            Tannaydi as part of a university
                            practical project.
                        </p>

                        <p>
                            The project explores brand identity,
                            product presentation, and the digital
                            experience of a modern fragrance
                            house.
                        </p>
                    </div>
                </div>
            </section>

            {/* BRAND STATEMENT */}
            <section className="about-statement">
                <div className="container">
                    <p className="statement-mark">“</p>

                    <blockquote>
                        A fragrance is invisible,
                        <br />
                        but never insignificant.
                    </blockquote>

                    <p className="eyebrow">
                        THE XENTRAL POINT OF VIEW
                    </p>
                </div>
            </section>

            {/* OUR STORY */}
            <section className="section-block container">
                <div className="story-layout">
                    <div>
                        <p className="eyebrow">THE IDEA</p>
                        <p className="story-index">
                            X / EST. 2026
                        </p>
                    </div>

                    <div>
                        <h2>
                            Identity, told
                            <br />
                            through <em>scent.</em>
                        </h2>

                        <p className="story-copy">
                            XENTRAL was imagined as a modern
                            fragrance house for people who see
                            scent as an extension of themselves.
                        </p>

                        <p className="story-copy">
                            Our visual identity uses charcoal,
                            silver, and clean typography to create
                            an atmosphere that feels quiet,
                            confident, and timeless.
                        </p>
                    </div>
                </div>
            </section>

            {/* BRAND VALUES */}
            <section className="values-section">
                <div className="container">
                    <SectionTitle
                        eyebrow="WHAT WE STAND FOR"
                        title={
                            <>
                                One brand.
                                <br />
                                <em>Three principles.</em>
                            </>
                        }
                    />

                    <div className="values-grid">
                        {values.map((value) => (
                            <article
                                className="value-card"
                                key={value.number}
                            >
                                <span>{value.number}</span>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CLOSING CTA */}
            <section className="closing-cta">
                <div className="container">
                    <p className="eyebrow">
                        THE SIGNATURE COLLECTION
                    </p>

                    <h2>
                        Meet your
                        <br />
                        <em>next signature.</em>
                    </h2>

                    <Link
                        href="/shop"
                        className="button button-light"
                    >
                        Explore Conquer
                    </Link>
                </div>
            </section>
        </main>
    );
}
