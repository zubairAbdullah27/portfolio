"use client";

import { FC, useState } from "react";
import { Project } from "@/types";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export const ProjectModal: FC<ProjectModalProps> = ({ project, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % project.image.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? project.image.length - 1 : prev - 1
        );
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
            <div className="bg-[#0f172a] rounded-xl max-w-6xl w-full p-6 relative text-white overflow-y-auto max-h-[90vh]">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-4 text-white hover:text-red-400 text-xl"
                >
                    ✕
                </button>

                {/* Title */}
                <div className="flex items-center justify-between mb-2 py-2">
                    <div>
                        <h2 className="text-2xl font-bold text-teal-300">
                            {project.title}
                        </h2>
                        <p className="text-sm text-gray-400">{project.timeline}</p>
                    </div>
                    {/* Optional link button */}
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm"
                    >
                        ↗ View Project
                    </a>
                </div>

                {/* Multi-image Carousel with Mobile Device Look */}
                <div className="relative w-full overflow-hidden mb-6">
                    <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                        {project.image.map((img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="min-w-[220px] h-[460px] relative rounded-3xl overflow-hidden border-[10px] border-black shadow-lg"
                                style={{ aspectRatio: '9/19' }}
                            >
                                <Image
                                    src={img}
                                    alt={`${project.title} screenshot ${idx + 1}`}
                                    fill
                                    className="object-cover rounded-xl"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Description List */}
                <ul className="list-disc list-inside space-y-2 mb-6">
                    {project.info?.map((point, idx) => (
                        <li key={idx} className="text-gray-300">
                            {point}
                        </li>
                    ))}
                </ul>

                {/* Tech Stack */}
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
