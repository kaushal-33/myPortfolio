import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer"
import Header from "../components/Header"
import Title from "../components/Title"
import { AnimatePresence, motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {

    const [filterKey, setFilterKey] = useState("*");

    useEffect(() => {
        AOS.init({
            duration: 500,  // animation duration
            once: true,      // animation only once
            offset: 80,     // trigger point
        });
    }, []);

    const projects = [
        {
            image: "projects-images/radheshyam.png",
            title: "TV Service Records Manager",
            subtitle: "A clean, responsive React + Redux component to manage TV repair records. Features include search, edit/delete actions, delivery confirmation with amount input, and status badges. Built with Tailwind CSS and Lucide icons for a modern UI.",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, #10B981, #000)",
            aos: "flip-down",
            url: "https://radheshyamelectronics-fbu06h9ks-kauhal-varmas-projects.vercel.app/",
            tabTitle: "reactJs",
        },
        {
            image: "projects-images/movieaddflix.png",
            title: "MovieAddFlix",
            subtitle: "A react based web application, feature-rich movie collection manager built using Tailwind CSS, MUI, and Tiptap. It supports: json-server (mock-server) to store data.",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, #10B981, #000)",
            aos: "flip-down",
            url: "https://movie-add-flix.vercel.app/",
            tabTitle: "reactJs",
        },
        {
            image: "projects-images/react-EMS.png",
            title: "EMS (Employees Management System)",
            subtitle: "A React-based admin dashboard for managing employees. Features secure admin login with local storage integration, employee data listing, secure routing and responsive UI. *(Id: admin@123gmail.com, password: admin@123)",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, #10B981, #000)",
            aos: "flip-down",
            url: "https://employee-management-system-3d3lpuybl-kauhal-varmas-projects.vercel.app/",
            tabTitle: "reactJs",
        },
        {
            image: "projects-images/addToCart.png",
            title: "Add - to - Cart",
            subtitle: "This Add to Cart project is a simple and interactive shopping cart made with HTML, CSS, and JavaScript. It lets users browse products, add them to a cart, see the total price, and remove items if needed. It’s a great beginner project that shows how to use JavaScript to make websites more dynamic and user-friendly.",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, #10B981, #000)",
            aos: "flip-down",
            url: "https://kaushal-33.github.io/JavaScript-Projects/Add-to-cart/",
            tabTitle: "htmlCss",
        },
        {
            image: "projects-images/auto-zone.png",
            title: "AutoZone-cars",
            subtitle: "Welcome to AutoZone-cars, where your journey begins with the perfect ride. With years of experience in the car rental industry, we are dedicated to providing you with a seamless and enjoyable travel experience. Our diverse fleet of well-maintained vehicles caters to every need, from compact cars for city adventures to spacious SUVs for family road trips.",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, #10B981, #000)",
            aos: "flip-down",
            url: "https://kaushal-33.github.io/AutoZone-cars/",
            tabTitle: "htmlCss",
        },
        {
            image: "projects-images/react-formValidation.png",
            title: "React Form Validation App",
            subtitle: "A sleek, user‑friendly React app showcasing real‑time, client‑side form validation. Built with React hooks (or libraries like React Hook Form), it handles input checks for fields like username, email, and password—providing instant visual feedback and error messages.",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, #10B981, #000)",
            aos: "flip-down",
            url: "https://react-product-landing-page-mu.vercel.app/",
            tabTitle: "reactJs",
        },
        {
            image: "projects-images/primera.png",
            title: "Business-Multipurpose",
            subtitle: "Primera is a straightforward, tidy, and professional HTML5 / CSS3 theme that works on desktops, tablets, and mobile phones. Pages, Fantastic Slideshows, and Colour Variations are included. A fully equipped and easily customisable design. This theme is appropriate for a variety of uses, including company, business, blog, portfolio, and much more. In just a few minutes, create an amazing website or blog!",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, #10B981, #000)",
            aos: "flip-down",
            url: "https://kaushal-33.github.io/Primera/",
            tabTitle: "htmlCss",
        },
        {
            image: "projects-images/react-github.png",
            title: "React GitHub API Explorer",
            subtitle: "A streamlined React app that lets users fetch GitHub profiles by username—built with React hooks and Axios for real-time API calls. Displays user details like avatar, name, stats, and more within a clean, card-style UI.",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, #10B981, #000)",
            aos: "flip-down",
            url: "https://react-git-hub-api.vercel.app/",
            tabTitle: "reactJs",
        },
        {
            image: "projects-images/figma-web.png",
            title: "Bakery Template",
            subtitle: "With its many UI elements and features, attractive ready-made blocks and rich pages, and all the other components you need to create a distinctive and expert website, BKR-bakery is a stunning and faultless site template.",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, #10B981, #000)",
            aos: "flip-down",
            url: "https://kaushal-33.github.io/Figma-Website/",
            tabTitle: "htmlCss",
        },
        {
            image: "projects-images/react-reviewSystem.png",
            title: "React Review System",
            subtitle: "An interactive review app built with React, featuring a dynamic star rating system and real-time user feedback, Fully responsive.",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, #10B981, #000)",
            aos: "flip-down",
            url: "https://react-review-sytem.vercel.app/",
            tabTitle: "reactJs",
        },
        {
            image: "projects-images/Admin-panel.png",
            title: "Admin Template",
            subtitle: "The responsive online application known as the VRISTO Admin template is constructed using HTML5, CSS that may be customised. It comes with an extremely configurable UI kit, components, widgets, modules, charts, and apps, allowing you to create effective online applications and interfaces.",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, #10B981, #000)",
            aos: "flip-down",
            url: "https://kaushal-33.github.io/Admin-panel-web/",
            tabTitle: "htmlCss",
        },
        {
            image: "projects-images/react-TODO.png",
            title: "React Todo List",
            subtitle: "A minimal, responsive todo app built with React. Allows adding, toggling, and removing tasks with clean state management.",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, #10B981, #000)",
            aos: "flip-down",
            url: "https://react-todo-list-two-delta.vercel.app/",
            tabTitle: "reactJs",
        },

        {
            image: "projects-images/homlisti.png",
            title: "Real-Estate Template",
            subtitle: "The greatest Real Estate HTML5 theme is Homlisti, which has a beautifully designed, tidy, modern, and elegant layout. It is ideal for exhibiting your classified advertising because of its numerous features. Homlisti is most suited for real estate websites, even though it can handle websites in other niches as well. This theme is excellent in every way, from its effortless customisation to its extensive customisation options.",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, #10B981, #000)",
            aos: "flip-down",
            url: "https://kaushal-33.github.io/Homlisti-web-/",
            note: true,
            tabTitle: "htmlCss",
        },
        {
            image: "projects-images/react-CBD-oil.png",
            title: "CBD-oil",
            subtitle: "A modern, responsive product landing page built with React and Vite. Features include a clean hero section, feature highlights, testimonials, and call-to-action components.",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, #10B981, #000)",
            aos: "flip-down",
            url: "https://react-product-landing-page-mu.vercel.app/",
            tabTitle: "reactJs",
        },
        {
            image: "projects-images/sandbox.png",
            title: "Multipurpose Template",
            subtitle: "With its many UI elements and features, attractive ready-made blocks and rich pages, and all the other components you need to create a distinctive and expert website, Sandbox is a stunning and faultless site template. You may use sandbox Tailwind landing pages for your Tailwind CSS app, business, startup, marketing, agency, portfolio, and more. Setting it up and deploying it is quite simple.",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, #10B981, #000)",
            aos: "flip-down",
            url: "https://kaushal-33.github.io/Sandbox-multipurpose/",
            note: true,
            tabTitle: "htmlCss",
        },

    ];
    const filteredProjects =
        filterKey === "*" ? projects : projects.filter((item) => item.tabTitle === filterKey);
    return (
        <>
            <Header />
            <section className='bg-black text-secondary py-16'>
                <div className='container mx-auto'>
                    <div className="px-4 text-[#7a7a7a]">
                        <div data-aos="fade-up">
                            <Title title={"projects"} />
                        </div>
                        <p className="mt-5 md:w-6/12 text-center mx-auto text-lg" data-aos="fade-down">
                            Greetings from my project portfolio! Here is a collection of some of the most significant and difficult projects I have ever had the honour of working on. Every project demonstrates my proficiency, inventiveness, and commitment to producing outstanding outcomes. These projects, which range from creative ideas to cooperative team efforts, demonstrate my dedication to excellence in a fullstack developer profession. View the specifics below to discover how I've used my knowledge and abilities to accomplish noteworthy results.
                        </p>
                        <div className="mt-16">
                            {/* Filter Buttons */}
                            <div className="flex flex-wrap gap-3 justify-center my-8">
                                {["*", "reactJs", "htmlCss"].map((key) => (
                                    <button
                                        key={key}
                                        onClick={() => setFilterKey(key)}
                                        className={`px-4 py-2 rounded-3xl text-white text-sm uppercase transition-colors ${filterKey === key
                                            ? "bg-green-600"
                                            : "bg-gray-700 hover:bg-gray-600"
                                            }`}
                                    >
                                        {key === "*" ? "All" : key}
                                    </button>
                                ))}
                            </div>

                            {/* Project Cards Grid */}
                            <div className="flex flex-wrap justify-center gap-6">
                                <AnimatePresence>
                                    {filteredProjects.map((item) => (
                                        <motion.div
                                            key={item.title}
                                            className={`w-full card sm:w-[100%] md:w-[47%] lg:w-[30%] max-w-sm rounded-2xl border p-5 shadow-xl bg-[#111]`}
                                            // style={{
                                            //     borderColor: item.borderColor,
                                            //     background: item.gradient,
                                            // }}
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                        >
                                            <a
                                                href={item.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    data-aos={item.aos}
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="rounded-xl w-full h-48 mb-4 border border-white/20 object-cover"
                                                />
                                                <h3 className="text-white text-xl font-semibold mb-2">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm text-gray-200 leading-relaxed">
                                                    {item.subtitle}
                                                </p>
                                            </a>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Projects