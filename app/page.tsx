  import Image from "next/image";

import HomePage from "../components/HomePage";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact"
import Certifications from "../components/Certifications"
import Resume from "../components/Resume"
import Navigation from "../components/Navigation"

export default function Home() {  
  return (
    
                <> 
                <Navigation/>
                
                <HomePage/>
   
                <About/> 

                <Projects/>

                <Certifications/>

                <Resume/>

                <Contact/>

                </>
                          

   
   
  );
}
