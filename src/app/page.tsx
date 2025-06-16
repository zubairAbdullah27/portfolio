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
                title="Get in Touch"
            >

                <p className="text-gray-400 max-w-lg mb-6">
                    I'm actively seeking new opportunities — whether it's freelance work, long-term collaborations, or full-time remote roles. With a strong background in cross-platform development and a focus on performance and user experience, I'm excited to contribute to meaningful projects. If you’re building something and think I might be a good fit, feel free to reach out — I’d love to connect.
                </p>

                <div className="space-y-2 mb-8">
                    <p className="text-gray-300">
                        📧 <a href="mailto:zubaairkhhan@gmail.com" className="underline hover:text-white">Email</a>
                    </p>
                    <p className="text-gray-300">
                        💼 <a href="https://www.upwork.com/freelancers/~yourUpworkID" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Upwork</a>
                    </p>
                    <p className="text-gray-300">
                        🐙 <a href="https://github.com/zubairAbdullah27" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Github</a>
                    </p>
                    <p className="text-gray-300">
                        🔗 <a href="https://linkedin.com/in/zubair-abdullah-764376180" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">LinkedIn</a>
                    </p>
                </div>

                <a
                    href="/static/files/Zubair_Abdullah_Resume.pdf"
                    download
                    className="inline-block bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-300 transition"
                >
                    📄 Download Resume
                </a>
            </Section>
        </>
    );
}
