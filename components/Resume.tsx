export default function Resume() {
    return (
        <section
            id="resume"
            className="bg-[#30050E] px-6 md:px-12 lg:px-24 py-20 scroll-mt-20"
        >
            <div className="w-full lg:w-2/3">
                <h1 className="mb-12 text-5xl md:text-7xl lg:text-8xl font-serif text-[#F6F3E4] leading-none">
                    Resume
                </h1>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-6">

                {/* View Resume */}
                <a
                    href="/Namrata_Dhebar_Resume.pdf"
                    target="_blank"
                    className="w-full sm:w-auto rounded-full bg-[#F6F3E4] px-8 py-4 text-center text-lg font-semibold text-[#30050E] transition hover:opacity-90"
                >
                    View Resume
                </a>

                {/* Download Resume */}
                <a
                    href="/Namrata_Dhebar_Resume.pdf"
                    download
                    className="w-full sm:w-auto rounded-full border-2 border-[#F6F3E4] px-8 py-4 text-center text-lg font-semibold text-[#F6F3E4] transition hover:bg-[#F6F3E4] hover:text-[#30050E]"
                >
                    Download PDF
                </a>

            </div>
        </section>
    );
}