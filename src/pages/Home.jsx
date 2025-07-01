import { useState } from "react";
import { Link } from "react-router-dom";
import ShinyText from "../components/glowingText/ShinyText ";
import ParticlesBackground from "../components/tsParticles/ParticlesBackground";
import SocialLinks from "../components/SocialLinks";
import { Drawer, DrawerHeader, DrawerItems, Button } from "flowbite-react";

const Home = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const handleDrawerClose = () => setIsDrawerOpen(false);

    return (
        <section className="hero-bg">
            <div className="z-10 relative">
                <ParticlesBackground />
            </div>
            <div className="container mx-auto">
                <div className="relative z-20">
                    <h5 className="uppercase font-hero md:text-end text-center text-[40px]">
                        <ShinyText text="kaushal varma" speed={3} />
                    </h5>
                    <p className="text-[#7a7a7a] font-secondary md:text-end text-center text-3xl mb-9">
                        I'm a passionate <span className="uppercase inline-block border-b border-[#27a776] pb-1 text-sm font-hero">
                            <ShinyText text="fullstack developer" speed={3} />
                        </span> from Surat
                    </p>
                    <ul className="text-[#7a7a7a] capitalize flex justify-end gap-14 font-semibold nav-link mb-7">
                        <li>
                            <Link>home</Link>
                        </li>
                        <li>
                            <Link>about</Link>
                        </li>
                        <li>
                            <Link>resume</Link>
                        </li>
                        <li>
                            <Link>projects</Link>
                        </li>
                        <li>
                            <Link>blogs</Link>
                        </li>
                        <li>
                            <Link>contact</Link>
                        </li>
                    </ul>
                    <SocialLinks />
                </div>
            </div>
            <div className="md:hidden">
                <Drawer open={isDrawerOpen} onClose={handleDrawerClose} position="top">
                    <DrawerHeader title="Navigation" />
                    <DrawerItems>
                        <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                            Supercharge your hiring by taking advantage of our&nbsp;
                            <a href="#" className="text-cyan-600 underline hover:no-underline dark:text-cyan-500">
                                limited-time sale
                            </a>
                            &nbsp;for Flowbite Docs + Job Board.
                        </p>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <a href="#" className="rounded-lg border bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
                                Learn more
                            </a>
                            <a href="#" className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-cyan-700">
                                Get access&nbsp;
                                <svg className="ms-2 h-3.5 w-3.5 rtl:rotate-180" viewBox="0 0 14 10" fill="none">
                                    <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </DrawerItems>
                </Drawer>
            </div>
        </section>
    );
};

export default Home;
