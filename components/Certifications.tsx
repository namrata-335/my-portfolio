
export default function About(){
    return(

         <section id="certifications" className="min-h-screen bg-[#30050E] flex items-center">
            <div className="w-2/3 ml-30">
                <h1 className="text-8xl font-serif text-[#F6F3E4] leading-none">
                    Certifications
                </h1>


        
                <p className="mt-10 max-w-lg text-3xl leading-9 text-[#F6F3E4]">
               
                    AI Fundamentals (Google): {" "}
                     <a href="https://coursera.org/share/68412ff189f4a66d2ae8cd99fe484898"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-[#5B1E2D]"
                                >
                                https://coursera.org/share/68412ff189f4a66d2ae8cd99fe484898  
                            </a>
                         
                </p>

                <p className="mt-10 max-w-lg text-3xl leading-9 text-[#F6F3E4]">
               
                    SQL for Data Science (Coursera): {" "}
                     <a href="https://coursera.org/share/ee1c2b9fef282311a1a546c807c96621"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-[#5B1E2D]"
                                >
                                https://coursera.org/share/ee1c2b9fef282311a1a546c807c96621
                            </a>
                         
                </p>
            </div>

           
        </section>
    );
}