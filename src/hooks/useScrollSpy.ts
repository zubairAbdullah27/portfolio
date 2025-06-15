import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
    sectionTitles: string[],
    active: string
    setActive: Dispatch<SetStateAction<string>>
    offset?: number
}

export const useScrollSpy = ({ sectionTitles, active, setActive, offset = 100, }: Props) => {

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { rootMargin: `-${offset}px 0px -60% 0px`, threshold: 0.1 }
        );

        sectionTitles.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sectionTitles, offset]);

    return active;
};
