export default function HomePage() {
    return (
        <section id="home" className="min-h-screen bg-[#30050E] flex items-center">
            <div className="w-2/3 ml-30">
                <h1 className="text-8xl font-serif text-[#F6F3E4] leading-none">
                    Namrata Dhebar
                </h1>


                <p className="mt-10 max-w-3xl text-3xl leading-9 text-[#F6F3E4]">
I am a Computer Science student graduating in December 2026 with a passion for building thoughtful and impactful software.                </p>

                <p className="mt-10 max-w-3xl text-3xl leading-9 text-[#F6F3E4]">
                    I enjoy problem-solving, learning new technologies  and applying logical thinking to find meaningful solutions through collaboration.
                </p>
            </div>

            {/* Image goes here */}
            <div className="w-1/2 flex justify-center">
                <img    

                    src="resume_image.png"
                    alt="Namrata Dhebar"
                    className="w-170 h-170 rounded-full object-cover object-[50%_25%] border-4 border-[#F6F3E4]"                />
            </div>
            
        </section>
    );
}