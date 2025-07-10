import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShinyText from "../components/glowingText/ShinyText ";
import ParticlesBackground from "../components/tsParticles/ParticlesBackground";
import SocialLinks from "../components/SocialLinks";
import { HiOutlineBarsArrowUp } from "react-icons/hi2";
import MobileNavs from "../components/MobileNavs";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Home = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,  // animation duration
            once: true,      // animation only once
            offset: 120,     // trigger point
        });
    }, []);


    return (
        <section className="hero-bg">
            <div className="z-10 relative">
                <ParticlesBackground />
            </div>
            <div className="container mx-auto">
                <div className="relative z-20 xl:pe-4">
                    <h5 className="uppercase font-hero md:text-end text-center text-[40px]" data-aos="fade-down">
                        <ShinyText text="kaushal varma" speed={3} />
                    </h5>
                    <div className="text-[#7a7a7a] font-secondary md:text-end text-center text-3xl mb-9"> 
                        I'm a passionate <span className="uppercase inline-block border-b border-[#27a776] pb-1 text-sm font-hero" data-aos="fade-down">
                            <ShinyText text="fullstack developer" speed={3} />
                        </span> from Surat
                    </div>
                    <ul className="text-[#7a7a7a] capitalize  md:flex hidden justify-end gap-14 font-semibold nav-link mb-7">
                        <li>
                            <Link to={"/about"}>about</Link>
                        </li>
                        <li>
                            <Link to={"/resume"}>resume</Link>
                        </li>
                        <li>
                            <Link to={"/projects"}>projects</Link>
                        </li>
                        <li>
                            <Link to={"/blogs"}>blogs</Link>
                        </li>
                        <li>
                            <Link to={"/contact"}>contact</Link>
                        </li>
                    </ul>
                    {/* mobile navs toggle button */}
                    <div className="flex justify-center md:hidden mb-7">
                        <button className="bg-[#27a776] w-[50px] h-[50px] rounded-full flex items-center justify-center text-white text-2xl" onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                            <HiOutlineBarsArrowUp />
                        </button>
                    </div>
                    <ul className="flex-wrap flex md:justify-end justify-center text-[#7a7a7a] gap-3 text-2xl social-links" data-aos="fade-up">
                        <SocialLinks />
                    </ul>
                </div>
            </div>
            {/* mobile navs */}
            <div className="md:hidden relative z-20">
                <MobileNavs isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
            </div>
        </section>
    );
};

export default Home;
