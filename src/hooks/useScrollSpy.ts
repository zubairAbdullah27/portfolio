import { useEffect } from "react";

type Props = {
  sectionTitles: string[];
  active: string;
  setActive: (val: string) => void;
  offset?: number;
};

export const useScrollSpy = ({ sectionTitles, active, setActive, offset = 100 }: Props) => {
  useEffect(() => {
    const handleScroll = () => {
      let closestSection: string | null = null;
      let smallestDistance = Infinity;

      for (const id of sectionTitles) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - offset);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestSection = id;
        }
      }

      if (closestSection && closestSection !== active) {
        setActive(closestSection);
      }
    };

    handleScroll(); // Run on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionTitles, active, setActive, offset]);

  return active;
};
