import type { ReactNode } from "react";

type SectionTitleProps = {
    eyebrow: string;
    title: ReactNode;
    description?: string;
};

export default function SectionTitle({
    eyebrow,
    title,
    description,
}: SectionTitleProps) {
    return (
        <div className="section-heading">
            <p className="eyebrow">
                <span className="eyebrow-line" />
                {eyebrow}
            </p>

            <h2>{title}</h2>

            {description && (
                <p className="section-description">{description}</p>
            )}
        </div>
    );
}
