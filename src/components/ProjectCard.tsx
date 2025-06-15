import { Dispatch, FC, SetStateAction } from "react";
import { Project } from "@/types";

type Props = {
    project: Project;
    setSelectedProject: Dispatch<SetStateAction<Project | null>>
};

export const ProjectCard: FC<Props> = ({ project, setSelectedProject }) => {
    return (
        <div
            onClick={() => { setSelectedProject(project) }}
            className="flex flex-col my-2 md:flex-row items-start gap-6 hover:bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl p-6 transition-transform hover:scale-[1.01]">
            {/* Image */}
            <div className="w-full md:w-48 text-sm text-gray-400 font-mono">
                <p>{project.timeline}</p>
            </div>
            {/* Content */}
            <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-teal-300 flex items-center gap-1">
                        {project.title}
                        <span className="inline-block text-xs">↗</span>
                    </h3>
                </div>

                <p className="text-sm text-gray-300 mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="bg-[#334155] text-gray-300 text-xs px-2 py-1 rounded-md"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
