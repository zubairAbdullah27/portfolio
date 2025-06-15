import { Dispatch, FC, SetStateAction } from "react";
import { Project } from "@/types";

type Props = {
    project: Project;
    setSelectedProject: Dispatch<SetStateAction<Project | null>>;
};

export const ProjectCard: FC<Props> = ({ project, setSelectedProject }) => {
    return (
        <div
            onClick={() => setSelectedProject(project)}
            className="flex flex-col md:flex-row items-start gap-6 mb-10 rounded-xl py-4 md:hover:pl-4 hover:bg-gradient-to-br from-[#0f172a] to-[#1e293b] transition-transform hover:scale-[1.01] cursor-pointer"
        >
            {/* Thumbnail + Timeline */}
            <div className="w-full md:w-48 flex flex-col justify-between min-h-[160px]">
                <img
                    src={project.thumbnail}
                    alt={`${project.title} thumbnail`}
                    className="rounded-md w-full object-cover aspect-video"
                />
                <p className="text-sm text-gray-400 font-mono mt-2">{project.timeline}</p>
            </div>

            {/* Content */}
            <div className="flex-1">
                <h3 className="text-lg font-semibold text-teal-300 flex items-center gap-1 mb-2">
                    {project.title}
                    <span className="inline-block text-xs">↗</span>
                </h3>

                <p className="text-sm text-gray-300 mb-4">{project.description}</p>

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
