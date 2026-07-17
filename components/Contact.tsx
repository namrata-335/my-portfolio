
export default function About(){
    return(

         <section id="contact" className="min-h-screen bg-[#30050E] flex items-center">
            <div className="w-2/3 ml-30">
                <h1 className="text-8xl font-serif text-[#F6F3E4] leading-none">
                    Contact
                </h1>


                <p className="mt-10 max-w-lg text-3xl leading-9 text-[#F6F3E4]">
                    Email: namrata030305@gmail.com            
                </p>

                <p className="mt-10 max-w-3xl text-3xl leading-9 text-[#F6F3E4]">
               
                    Github: {" "}
                     <a href="https://github.com/namrata-335"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-[#5B1E2D]"
                                >
                                https://github.com/namrata-335   
                            </a>
                         
                </p>

                <p className="mt-10 max-w-3xl text-3xl leading-9 text-[#F6F3E4]">
               
                    LinkedIn: {" "}
                     <a href="https://www.linkedin.com/in/namrata-dhebar-16a19228a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bxbe%2FjaD4SxqnCukEGPOhQg%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-[#5B1E2D]"
                                >
                                https://www.linkedin.com/in/namrata-dhebar
                            </a>
                         
                </p>
            </div>

           
        </section>
    );
}