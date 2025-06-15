import { FC, ReactNode } from "react";

type Props = {
    id: string;
    title: string;
    children: ReactNode;
    className?: string;
};

export const Section: FC<Props> = ({ id, title, children, className = "" }) => {
    return (
        <section id={id} className={`px-8 pb-10 scroll-mt-24 ${className}`}>
            <div className="max-w-4xl">
                <h2 className="text-xl font-medium text-gray-300 mb-2 block lg:hidden">
                    {title}
                </h2>
                {children}
            </div>
        </section>
    );
};
