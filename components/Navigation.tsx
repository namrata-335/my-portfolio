export default function Navigation(){
    return(

         <nav className="fixed top-0 left-0 z-50 w-full bg-[#F6F3E4]/90 backdrop-blur">

            <div className="mx-auto flex items-center justify-between px-6 py-5">

                <h1 className="font-serif text-3xl text-[#30050E]">
                    ND
                </h1>

                <div className="flex gap-10 text-lg text-[#30050E]">

                    <a href="#home" className="hover:text-gray-300">
                        Home
                    </a>

                    <a href="#about" className="hover:text-gray-300">
                        About
                    </a>

                    <a href="#projects" className="hover:text-gray-300">
                        Projects
                    </a>

                     <a href="#certifications" className="hover:text-gray-300">
                        Certifications
                    </a>

                    <a href="#resume" className="hover:text-gray-300">
                        Resume
                    </a>


                     <a href="#contact" className="hover:text-gray-300">
                        Contact
                    </a>

                </div>

            </div>
         </nav>

    );
}