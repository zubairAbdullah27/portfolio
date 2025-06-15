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
        <main className="grid lg:grid-cols-[300px_1fr] xl:grid-cols-[340x_1fr] max-w-[1200px] w-full mx-auto min-h-screen">
            <aside className="h-full lg:min-h-screen flex flex-col px-6 lg:px-10 pt-8 lg:py-12 space-y-10 bg-black">
                <Navbar
                    sectionsTitles={sectionTitles}
                    active={activeSection}
                    setActive={setActive}
                />
            </aside>
            <section className="w-full min-h-screen px-6 lg:py-12">
                <div className="max-w-4xl mx-auto w-full">
                    {children}
                </div>
            </section>
        </main>

    );

}