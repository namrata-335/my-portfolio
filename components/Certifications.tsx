export default function Certifications() {
    return (
        <section
            id="certifications"
            className="min-h-screen bg-[#30050E] flex items-center px-6 md:px-12 lg:px-24 py-20 scroll-mt-20"
        >
            <div className="w-full lg:w-2/3">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#F6F3E4] leading-none">
                    Certifications
                </h1>

                <p className="mt-8 max-w-5xl text-lg md:text-2xl lg:text-3xl leading-relaxed text-[#F6F3E4] break-words">
                    <span className="font-semibold">
                        AI Fundamentals (Google):
                    </span>{" "}
                    <a
                        href="https://coursera.org/share/68412ff189f4a66d2ae8cd99fe484898"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-[#5B1E2D]"
                    >
                        View Certificate
                    </a>
                </p>

                <p className="mt-8 max-w-5xl text-lg md:text-2xl lg:text-3xl leading-relaxed text-[#F6F3E4] break-words">
                    <span className="font-semibold">
                        SQL for Data Science (Coursera):
                    </span>{" "}
                    <a
                        href="https://coursera.org/share/ee1c2b9fef282311a1a546c807c96621"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-[#5B1E2D]"
                    >
                        View Certificate
                    </a>
                </p>
            </div>
        </section>
    );
}