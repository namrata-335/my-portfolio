"use client";

import { useState } from "react";
import Image from "next/image";

type ProjectCardProps = {
    title: string;
    shortDescription: string;
    longDescription: string;
    skills: string[];
    image: string;
    screenshots: string[];
};

export default function ProjectCard({
    title,
    shortDescription,
    longDescription,
    skills,
    image,
    screenshots,
}: ProjectCardProps) {
    const [expanded, setExpanded] = useState(false);
    const [imageOpen, setImageOpen] = useState(false);
    const [modalImage, setModalImage] = useState(image);

    return (
        <div className="w-full max-w-3xl min-h-[420px] rounded-3xl bg-[#F6F3E4] p-6 md:p-8">

            <div className="flex flex-col md:flex-row justify-between gap-8">

                {/* Left Side */}
                <div className="flex-1">

                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#30050E]">
                        {title}
                    </h3>

                    <p className="mt-4 text-base md:text-lg text-[#30050E]">
                        {shortDescription}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="rounded-full bg-[#1E100F] px-3 md:px-4 py-2 text-xs md:text-sm text-[#F6F3E4]"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                </div>

                {/* Right Side */}
                <div className="flex justify-center md:justify-end">
                    <button
                        onClick={() => {
                            setModalImage(image);
                            setImageOpen(true);
                        }}
                    >
                        <Image
                            src={image}
                            alt={title}
                            width={208}
                            height={208}
                            className="h-56 w-56 md:h-52 md:w-52 rounded-2xl object-cover"
                        />
                    </button>
                </div>

            </div>

            <button
                className="mt-6 text-base md:text-lg font-semibold text-[#30050E]"
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? "Show Less ▲" : "Read More ▼"}
            </button>

            {expanded && (
                <div className="mt-8 border-t pt-6">

                    <h4 className="text-lg md:text-xl font-semibold text-[#30050E]">
                        About this project
                    </h4>

                    <p className="mt-4 whitespace-pre-line text-sm md:text-base leading-relaxed text-[#30050E]">
                        {longDescription}
                    </p>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {screenshots.map((shot, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setModalImage(shot);
                                    setImageOpen(true);
                                }}
                            >
                                <Image
                                    src={shot}
                                    alt={`${title} screenshot ${index + 1}`}
                                    width={400}
                                    height={300}
                                    className="h-48 md:h-52 w-full rounded-xl object-cover"
                                />
                            </button>
                        ))}
                    </div>

                </div>
            )}

            {imageOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    onClick={() => setImageOpen(false)}
                >
                    <Image
                        src={image}
                        alt={title}
                        width={208}
                        height={208}
                        className="w-full max-w-[208px] h-auto aspect-square rounded-2xl object-cover"
                    />
                </div>
            )}

        </div>
    );
}