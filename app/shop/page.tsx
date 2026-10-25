import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";

export default function ShopPage() {
    return (
        <main>
            <section className="page-hero container">
                <p className="breadcrumb">HOME / SHOP</p>

                <SectionTitle
                    eyebrow="THE XENTRAL COLLECTION"
                    title={
                        <>
                            Discover your
                            <br />
                            <em>signature scent.</em>
                        </>
                    }
                    description="Explore the first fragrance concept from XENTRAL."
                />

                <div className="shop-meta">
                    <span>THE COLLECTION</span>
                    <span>{products.length} FRAGRANCE</span>
                </div>
            </section>

            <section className="section-block container shop-section">
                <div className="product-grid">
                    {products.map((product) => (
                        <ProductCard key={product.slug} product={product} />
                    ))}
                </div>

                <p className="coming-note">
                    MORE FRAGRANCES ARE IN DEVELOPMENT.
                </p>
            </section>
        </main>
    );
}
