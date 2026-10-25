import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

type ProductCardProps = {
    product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <article className="product-card">
            <Link
                href={`/shop/${product.slug}`}
                className="product-visual-link"
                aria-label={`View ${product.name}`}
            >
                <div className="product-visual">
                    <span className="product-tag">{product.tag}</span>

                    <Image
                        src={product.image}
                        alt={`XENTRAL ${product.name} perfume bottle`}
                        width={1024}
                        height={1536}
                        sizes="(max-width: 650px) 90vw, (max-width: 1000px) 45vw, 30vw"
                        className="product-image"
                    />

                    <span className="product-open">↗</span>
                </div>
            </Link>

            <div className="product-information">
                <div>
                    <p className="product-family">{product.family}</p>

                    <h3>
                        <Link href={`/shop/${product.slug}`}>
                            {product.name}
                        </Link>
                    </h3>
                </div>

                <p className="product-price">{product.price}</p>
            </div>

            <Link
                href={`/shop/${product.slug}`}
                className="product-detail-link"
            >
                Discover fragrance
            </Link>
        </article>
    );
}
