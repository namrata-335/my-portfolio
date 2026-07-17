"use client";

import { useState } from "react";

import Image from "next/image"

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
        <div className="max-w-3xl min-h-[420px] rounded-3xl bg-[#F6F3E4] p-8">

            {/* To make the cards the same size */}
        {/* <div className="max-w-3xl h-[520px] rounded-3xl bg-[#F6F3E4] p-8">

    </div> */}

            <div className="flex justify-between gap-10">

    {/* Left Side */}
    <div className="flex-1">

        <h3 className="text-4xl font-serif text-[#30050E]">
            {title}
        </h3>

        <p className="mt-5 text-lg text-[#30050E]">
            {shortDescription}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
                <span
                    key={skill} 
                    className="rounded-full bg-[#1E100F] px-4 py-2 text-sm text-[#F6F3E4]"
                >
                    {skill}
                </span>
            ))}
        </div>

    </div>

    {/* Right Side */}
    <div className="flex-shrink-0">

    <button onClick={() => setImageOpen(true)}>
        <Image
            src={image}
            alt={title}
            width={208}
            height={208}
            className="h-52 w-52 rounded-2xl object-cover"
        />
     </button>

    </div>

</div>

            {/* Expand Button */}
            <button
                className="mt-6 font-semibold text-[#30050E]"
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? "Show Less ▲" : "Read More ▼"}
            </button>

            {/* Expanded Content */}
            {expanded && (
                <div className="mt-8 border-t pt-6">

                    <h4 className="text-xl font-semibold text-[#30050E]">
                        About this project
                    </h4>

                    <p className="mt-4 whitespace-pre-line text-[#30050E]">
                        {longDescription}
                    </p>

                    {/* Additional Images */}
                    <div className="mt-6 grid grid-cols-2 gap-4">
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
                                className="h-48 w-full rounded-xl object-cover"
                            />
                        </button>
                    ))}

                    </div>
                </div>
            )}

            {imageOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
                    onClick={() => setImageOpen(false)}
                >
                    <Image
                        src={modalImage}
                        alt={title}
                        width={1000}
                        height={800}
                        className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain"
                    />
                </div>
            )}

        </div>
    );
}