"use client"
import { Section, ProjectCard, ProjectModal } from "@/components";
import { projectsData } from "@/static/projects";
import { Project, } from "@/types";
import { useState } from "react";

export default function Home() {

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <>
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}

            <Section
                id="about"
                title="About"
            >
                <p className="text-gray-400 text-lg leading-relaxed">
                    I'm a full-stack developer with a focus on building intuitive, high-performance mobile and web applications. Over the past few years, I’ve delivered a range of impactful products — from business utilities like invoicing apps and offline billbooks, to real-time platforms for food delivery, charity discovery, and AI-powered assistants.
                    I specialize in React Native and Firebase for cross-platform development, and I frequently integrate technologies like Node.js, Stripe, Realm, and machine learning APIs to bring complex ideas to life. Whether it's crafting sleek UI with Figma, implementing scalable backends, or optimizing performance for real-world use, I enjoy working across the stack to turn concepts into polished, user-friendly solutions.
                </p>
            </Section>
            <Section
                id="projects"
                title="Projects"
            >
                {
                    projectsData.map((item, index) => (
                        <ProjectCard
                            project={item}
                            key={index}
                            setSelectedProject={setSelectedProject}
                        />
                    ))
                }
            </Section>
            <Section
                id="contact"
                title="Contact"
            >
                <>
                </>
            </Section>
        </>
    );
}
