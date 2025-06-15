import { Dispatch, SetStateAction, useEffect } from "react";

type Props = {
    sectionTitles: string[];
    active: string;
    setActive: Dispatch<SetStateAction<string>>;
    offset?: number;
};

export const useScrollSpy = ({
    sectionTitles,
    active,
    setActive,
    offset = 80, // increase for sticky nav compensation
}: Props) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visibleSections.length > 0) {
                    const topSection = visibleSections[0].target.id;
                    if (topSection !== active) {
                        setActive(topSection);
                    }
                }
            },
            {
                rootMargin: `-${offset}px 0px -60% 0px`,
                threshold: [0.2, 0.4, 0.6, 0.8],
            }
        );

        sectionTitles.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sectionTitles, offset, active, setActive]);

    return active;
};
