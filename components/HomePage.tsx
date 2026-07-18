export default function HomePage() {
    return (
        <section
            id="home"
            className="min-h-screen bg-[#30050E] flex flex-col-reverse lg:flex-row items-center justify-center px-6 md:px-12 lg:px-24 py-20 scroll-mt-20 gap-12"
        >
            {/* Text */}
            <div className="w-full lg:w-2/3 text-center lg:text-left">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#F6F3E4] leading-none">
                    Namrata Dhebar
                </h1>

                <p className="mt-8 max-w-3xl mx-auto lg:mx-0 text-lg md:text-2xl lg:text-3xl leading-relaxed text-[#F6F3E4]">
                    I am a Computer Science student graduating in December 2026
                    with a passion for building thoughtful and impactful
                    software.
                </p>

                <p className="mt-8 max-w-3xl mx-auto lg:mx-0 text-lg md:text-2xl lg:text-3xl leading-relaxed text-[#F6F3E4]">
                    I enjoy problem-solving, learning new technologies, and
                    applying logical thinking to find meaningful solutions
                    through collaboration.
                </p>
            </div>

            {/* Profile Image */}
            <div className="w-full lg:w-1/3 flex justify-center">
                <img
                    src="resume_image.png"
                    alt="Namrata Dhebar"
                    className="w-64 h-64 md:w-80 md:h-80 lg:w-[42rem] lg:h-[42rem] rounded-full object-cover object-[50%_25%] border-4 border-[#F6F3E4]"
                />
            </div>
        </section>
    );
}