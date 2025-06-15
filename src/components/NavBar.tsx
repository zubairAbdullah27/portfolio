import { Dispatch, FC, SetStateAction } from "react";

interface Props {
    sectionsTitles: string[];
    active: string;
    setActive: Dispatch<SetStateAction<string>>;
}

export const Navbar: FC<Props> = ({ sectionsTitles, active, setActive }) => {
    return (
        <div className="w-full lg:w-[280px] xl:w-[280px] flex flex-col space-y-10">
            <div className="space-y-1 text-center lg:text-left">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-300">Zubair Abdullah</h1>
                <p className="text-base font-medium text-gray-300">Software Engineer</p>
                <p className="text-sm text-gray-400">
                    Full-stack dev focused on cross-platform apps and clean UIs, from front-end to cloud.
                </p>
            </div>
            <nav className="hidden lg:flex flex-col space-y-4 text-sm uppercase tracking-wider">
                {sectionsTitles.map((title) => (
                    <a
                        key={title}
                        href={`#${title}`}
                        onClick={() => setActive(title)}
                        className={`group relative transition-all duration-300 font-mono ${active === title
                            ? "text-white pl-20"
                            : "text-gray-500 pl-10 hover:text-white hover:pl-16"
                            }`}
                    >
                        <span
                            className={`absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-white transition-all duration-300 ${active === title
                                ? "w-18 opacity-100"
                                : "w-8 opacity-50 group-hover:w-14 group-hover:opacity-100"
                                }`}
                        />
                        {title}
                    </a>
                ))}
            </nav>
        </div>
    );
};
