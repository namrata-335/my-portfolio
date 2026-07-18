export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen bg-[#30050E] flex items-center px-6 md:px-12 lg:px-24 py-20 scroll-mt-20"
        >
            <div className="w-full lg:w-2/3">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#F6F3E4] leading-none">
                    Contact
                </h1>

                <p className="mt-8 max-w-5xl text-lg md:text-2xl lg:text-3xl leading-relaxed text-[#F6F3E4]">
                    <span className="font-semibold">Email:</span>{" "}
                    namrata030305@gmail.com
                </p>

                <p className="mt-8 max-w-5xl text-lg md:text-2xl lg:text-3xl leading-relaxed text-[#F6F3E4] break-words">
                    <span className="font-semibold">GitHub:</span>{" "}
                    <a
                        href="https://github.com/namrata-335"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-[#5B1E2D]"
                    >
                        github.com/namrata-335
                    </a>
                </p>

                <p className="mt-8 max-w-5xl text-lg md:text-2xl lg:text-3xl leading-relaxed text-[#F6F3E4] break-words">
                    <span className="font-semibold">LinkedIn:</span>{" "}
                    <a
                        href="https://www.linkedin.com/in/namrata-dhebar-16a19228a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-[#5B1E2D]"
                    >
                        linkedin.com/in/namrata-dhebar-16a19228a
                    </a>
                </p>
            </div>
        </section>
    );
}