"use client";

import { FC, ReactNode, useState } from "react";
import { Navbar } from "@/components";
import { useScrollSpy } from "@/hooks";


type Props = {
    children: ReactNode
}

export const AppShell: FC<Props> = ({ children }) => {
    const sectionTitles = ['about', 'projects', 'contact'];
    const [active, setActive] = useState("about");

    const activeSection = useScrollSpy({
        active,
        setActive,
        sectionTitles,
    });

    return (
        <main className="grid lg:grid-cols-[300px_1fr] max-w-[1200px] w-full mx-auto min-h-screen">
            <aside className="h-full lg:h-screen lg:sticky top-0 flex flex-col px-6 lg:px-10 pt-8 lg:py-12 space-y-10 bg-black">
                <Navbar
                    sectionsTitles={sectionTitles}
                    active={activeSection}
                    setActive={setActive}
                />
            </aside>
            <section className="scroll-mt-24 min-h-screen py-20 w-full px-4  sm:px-5 md:px-6 lg:py-12">
                <div className="w-full max-w-[100%] sm:max-w-[640px] md:max-w-[768px] lg:max-w-4xl mx-auto">
                    {children}
                </div>
            </section>
        </main>
    );

}