export type Product = {
    slug: string;
    name: string;
    code: string;
    price: string;
    size: string;
    concentration: string;
    family: string;
    notes: string[];
    description: string;
    image: string;
    tag: string;
};

export const products: Product[] = [
    {
        slug: "conquer",
        name: "Conquer",
        code: "XNL-01",
        price: "Rp 950.000",
        size: "50 ML",
        concentration: "EXTRAIT DE PARFUM",
        family: "Fresh & Musk",
        notes: ["Bergamot", "White Musk", "Vetiver"],
        description:
            "A clean and understated fragrance with a quiet sense of elegance. Fresh citrus opens into soft white musk, followed by a smooth woody finish.",
        image: "/images/xentral-Conquer.png",
        tag: "SIGNATURE SAMPLE",
    },
];

export const fragranceFamilies = [
    {
        name: "Fresh & Musk",
        description:
            "Clean, airy notes with a soft and intimate finish.",
        available: true,
    },
    {
        name: "Woody & Amber",
        description:
            "Warm woods, deep resins, and a rich character.",
        available: false,
    },
    {
        name: "Floral",
        description:
            "Expressive petals with a refined modern character.",
        available: false,
    },
    {
        name: "Oriental",
        description:
            "Spices and warm accords with an enveloping finish.",
        available: false,
    },
];
