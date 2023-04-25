import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaGlobe } from "@react-icons/all-files/fa/FaGlobe";

const Footer = () => {
  return (
      <footer className="w-full flex flex-col gap-10 sm:gap-5 sm:flex-row items-center justify-between p-4 md:p-10 lg:p-12 mb-16 mt-16 xl:mb-0">
        <div className="w-full flex justify-evenly items-center sm:flex-col sm:items-start sm:justify-center gap-2">

          <div className="text-sm text-center sm:text-left">
            <p>Copyright © 2023 - All rights reserved.</p>
            <p>Made by BCA Students{" "}
                
            </p>
            <p>Data provided by -{" "} 
                <a aria-label="tmdb" target="_blank" rel="noreferrer" className="hover:text-white underline"
                    href="https://www.themoviedb.org/">TMDB
                </a>
            </p>
          </div>
          
        </div>
      </footer>
  );
};
export default Footer;
