import Link from "next/link";
import { fragranceFamilies, products } from "@/data/products";
import SectionTitle from "@/components/SectionTitle";

export default function CatalogPage() {
    const perfume = products[0];

    return (
        <main>
            <section className="page-hero container">
                <p className="breadcrumb">HOME / CATALOG</p>

                <SectionTitle
                    eyebrow="THE SCENT DIRECTORY"
                    title={
                        <>
                            Explore the
                            <br />
                            <em>world of scent.</em>
                        </>
                    }
                    description="Every fragrance has a different character. Begin with the scent family that feels closest to you."
                />
            </section>

            <section className="section-block container catalog-section">
                <div className="family-grid">
                    {fragranceFamilies.map((family, index) => (
                        <article className="family-card" key={family.name}>
                            <span className="family-number">
                                0{index + 1}
                            </span>

                            <div>
                                <p className="eyebrow">FRAGRANCE FAMILY</p>
                                <h2>{family.name}</h2>
                                <p className="family-description">
                                    {family.description}
                                </p>

                                {family.available ? (
                                    <Link
                                        href={`/shop/${perfume.slug}`}
                                        className="text-link"
                                    >
                                        Discover {perfume.name} <span>↗</span>
                                    </Link>
                                ) : (
                                    <span className="coming-soon">
                                        COMING SOON
                                    </span>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="catalog-note">
                <div className="container">
                    <p className="eyebrow">FIND YOUR SIGNATURE</p>

                    <h2>
                        Different notes.
                        <br />
                        <em>Different identities.</em>
                    </h2>
                </div>
            </section>
        </main>
    );
}
