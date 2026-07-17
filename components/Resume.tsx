    export default function Resume(){

        return(

           <section
            id="resume"
            className="scroll-mt-63 bg-[#30050E] px-24 py-20"
        >
            <div className="w-2/3">
                    <h1 className="mb-15 text-8xl font-serif text-[#F6F3E4] leading-none">
                        Resume
  
                    </h1>
            </div>

                <div className="mt-12 flex gap-6">

                    {/* View Resume */}
                    <a
                        href="/Namrata_Dhebar_Resume.pdf"
                        target="_blank"
                        className="rounded-full bg-[#F6F3E4] px-8 py-4 text-lg font-semibold text-[#30050E] transition hover:opacity-90"
                    >
                        View Resume
                    </a>

                    {/* Download Resume */}
                    <a
                        href="/Namrata_Dhebar_Resume.pdf"
                        download
                        className="rounded-full border-2 border-[#F6F3E4] px-8 py-4 text-lg font-semibold text-[#F6F3E4] transition hover:bg-[#F6F3E4] hover:text-[#30050E]"
                    >
                        Download PDF
                    </a>

                </div>

            </section>

        );
    }