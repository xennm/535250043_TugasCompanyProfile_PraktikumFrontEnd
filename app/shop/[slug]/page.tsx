import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

type ProductPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({
    params,
}: ProductPageProps): Promise<Metadata> {
    const { slug } = await params;
    const product = products.find((item) => item.slug === slug);

    if (!product) {
        return {
            title: "Fragrance Not Found | XENTRAL",
        };
    }

    return {
        title: `${product.name} | XENTRAL`,
        description: product.description,
    };
}

export default async function ProductDetailPage({
    params,
}: ProductPageProps) {
    const { slug } = await params;
    const product = products.find((item) => item.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <main>
            <section className="container detail-page">
                <p className="breadcrumb">
                    <Link href="/">HOME</Link>
                    {" / "}
                    <Link href="/shop">SHOP</Link>
                    {" / "}
                    {product.name.toUpperCase()}
                </p>

                <div className="detail-layout">
                    <div className="detail-visual">
                        <Image
                            src={product.image}
                            alt={`XENTRAL ${product.name} perfume`}
                            width={1024}
                            height={1536}
                            priority
                            sizes="(max-width: 650px) 90vw, 45vw"
                            className="detail-product-image"
                        />

                        <p className="detail-image-caption">
                            XENTRAL · {product.code}
                        </p>
                    </div>

                    <div className="detail-information">
                        <p className="eyebrow">{product.tag}</p>

                        <h1>{product.name}</h1>

                        <p className="detail-family">{product.family}</p>

                        <p className="detail-description">
                            {product.description}
                        </p>

                        <div className="detail-price">
                            <span>{product.price}</span>
                            <span>
                                {product.concentration} · {product.size}
                            </span>
                        </div>

                        <div className="note-block">
                            <p className="eyebrow">FRAGRANCE NOTES</p>

                            <div className="note-list">
                                {product.notes.map((note) => (
                                    <span key={note}>{note}</span>
                                ))}
                            </div>
                        </div>

                        <Link
                            href="/shop"
                            className="button button-outline detail-button"
                        >
                            Back to collection <span>↗</span>
                        </Link>

                        <p className="prototype-note">
                            Concept product for a student project.
                            Product pricing and fragrance notes are
                            illustrative and can be revised.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
