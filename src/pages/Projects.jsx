import ChromaGrid from "../components/chromaGrid/ChromaGrid"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Title from "../components/Title"

const Projects = () => {

    const projects = [
        {
            image: "projects-images/Admin-panel.png",
            title: "Admin Template",
            subtitle: "The responsive online application known as the VRISTO Admin template is constructed using HTML5, CSS that may be customised. It comes with an extremely configurable UI kit, components, widgets, modules, charts, and apps, allowing you to create effective online applications and interfaces.",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, #10B981, #000)",
            url: "https://kaushal-33.github.io/Admin-panel-web/"
        },
        {
            image: "projects-images/primera.png",
            title: "Business-Multipurpose",
            subtitle: "Primera is a straightforward, tidy, and professional HTML5 / CSS3 theme that works on desktops, tablets, and mobile phones. Pages, Fantastic Slideshows, and Colour Variations are included. A fully equipped and easily customisable design. This theme is appropriate for a variety of uses, including company, business, blog, portfolio, and much more. In just a few minutes, create an amazing website or blog!",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, #10B981, #000)",
            url: "https://kaushal-33.github.io/Primera/"
        },
        {
            image: "projects-images/homlisti.png",
            title: "Real-Estate Template",
            subtitle: "The greatest Real Estate HTML5 theme is Homlisti, which has a beautifully designed, tidy, modern, and elegant layout. It is ideal for exhibiting your classified advertising because of its numerous features. Homlisti is most suited for real estate websites, even though it can handle websites in other niches as well. This theme is excellent in every way, from its effortless customisation to its extensive customisation options.",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, #10B981, #000)",
            url: "https://kaushal-33.github.io/Homlisti-web-/",
            note: true,
        },
        {
            image: "projects-images/sandbox.png",
            title: "Multipurpose Template",
            subtitle: "With its many UI elements and features, attractive ready-made blocks and rich pages, and all the other components you need to create a distinctive and expert website, Sandbox is a stunning and faultless site template. You may use sandbox Tailwind landing pages for your Tailwind CSS app, business, startup, marketing, agency, portfolio, and more. Setting it up and deploying it is quite simple.",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, #10B981, #000)",
            url: "https://kaushal-33.github.io/Sandbox-multipurpose/",
            note: true,
        },
        {
            image: "projects-images/auto-zone.png",
            title: "AutoZone-cars",
            subtitle: "Welcome to AutoZone-cars, where your journey begins with the perfect ride. With years of experience in the car rental industry, we are dedicated to providing you with a seamless and enjoyable travel experience. Our diverse fleet of well-maintained vehicles caters to every need, from compact cars for city adventures to spacious SUVs for family road trips.",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, #10B981, #000)",
            url: "https://kaushal-33.github.io/AutoZone-cars/"
        },
        {
            image: "projects-images/figma-web.png",
            title: "Bakery Template",
            subtitle: "With its many UI elements and features, attractive ready-made blocks and rich pages, and all the other components you need to create a distinctive and expert website, BKR-bakery is a stunning and faultless site template.",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, #10B981, #000)",
            url: "https://kaushal-33.github.io/Figma-Website/"
        },
    ];

    return (
        <>
            <Header />
            <section className='bg-black text-secondary py-16'>
                <div className='container mx-auto'>
                    <div className="px-4 text-[#7a7a7a]">
                        <div>
                            <Title title={"projects"} />
                        </div>
                        <p className="mt-5 md:w-6/12 text-center mx-auto text-lg">
                            Greetings from my project portfolio! Here is a collection of some of the most significant and difficult projects I have ever had the honour of working on. Every project demonstrates my proficiency, inventiveness, and commitment to producing outstanding outcomes. These projects, which range from creative ideas to cooperative team efforts, demonstrate my dedication to excellence in a fullstack developer profession. View the specifics below to discover how I've used my knowledge and abilities to accomplish noteworthy results.
                        </p>
                        <div className="mt-16">
                            <ChromaGrid
                                items={projects}
                                radius={300}
                                damping={0.45}
                                fadeOut={0.6}
                                ease="power3.out"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Projects