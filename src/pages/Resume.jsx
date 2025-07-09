import { Badge } from "flowbite-react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Title from "../components/Title"

const Resume = () => {
    return (
        <>
            <Header />
            <section className='text-secondary py-4 resume-section'>
                <div className='container mx-auto'>
                    <div className='px-4 relative'>
                        <div className="glass p-5">
                            <h6 className='font-hero uppercase text-xl'>resume</h6>
                            <h3 className='text-3xl mb-5 capitalize font-secondary'>Know about me</h3>
                            <div className="flex flex-wrap">
                                <div className="lg:w-6/12">
                                    <div className="font-secondary">
                                        {/* bio */}
                                        <h6 className="text-center capitalize text-2xl font-bold">summary</h6>
                                        <div>
                                            <h5 className="text-[#27a776] font-bold ps-4 uppercase">
                                                Kaushal varma
                                            </h5>
                                            <div className="px-4 border-s border-[#7a7a7a] dot -mt-5 pt-9">
                                                <p>
                                                    I’M AN ASPIRING FULL-STACK DEVELOPER WITH A FRONTEND FOCUS. I LOVE BUILDING
                                                    CLEAN, RESPONSIVE INTERFACES USING HTML, CSS, JAVASCRIPT, REACT, TAILWIND, AND
                                                    REDUX TOOLKIT. WITH A BACKGROUND IN C++, I'M ALSO EXPLORING BACKEND
                                                    DEVELOPMENT TO BRING FULL PROJECTS TO LIFE. ALWAYS LEARNING, ALWAYS BUILDING.
                                                </p>
                                                <ul className="list-disc ps-4 mt-5">
                                                    <li>(+91) 8160149401</li>
                                                    <li>
                                                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" >varmakaushal33@gmail.com</a>
                                                    </li>
                                                    <li>Udhna, Surat, Gujarat-394210</li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* education history */}
                                        <h6 className="text-center capitalize text-2xl font-bold my-5">Education - Qualification</h6>
                                        <div>
                                            <h5 className="text-[#27a776] font-bold ps-4 uppercase">
                                                RED & WHITE SKILL EDUCATIONAL INSTITUTE
                                            </h5>
                                            <div className="px-4 border-s border-[#7a7a7a] dot -mt-5 pt-9 pb-2">
                                                <span className="font-mono capitalize inline-block py-1 px-3 rounded-xl text-gray-400 bg-[#272727] mb-3 italic">2024 - current</span>
                                                <p>
                                                    With advanced web development education modules, Red and White Multimedia Education is among the best web development training institutes in Surat.
                                                </p>
                                                <ul className="list-disc ps-4 mt-5">
                                                    <li>
                                                        <a href="https://rwskill.edu.in/" className="underline">https://rwskill.edu.in/</a>
                                                    </li>
                                                    <li>vesu, Surat, Gujarat</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="text-[#27a776] font-bold ps-4 uppercase">
                                                JEEVAN VIKAS HIGH SCHOOL (HSC / Intermediate)
                                            </h5>
                                            <div className="px-4 border-s border-[#7a7a7a] dot -mt-5 pt-9">
                                                <span className="font-mono capitalize inline-block py-1 px-3 rounded-xl text-gray-400 bg-[#272727] mb-3 italic">2019 - 2020</span>
                                                <p>
                                                    Our school takes great satisfaction in offering a nurturing, community setting where kids can grow and succeed. Our goal is to teach in our kids a passion for learning so they will aspire to learn on their own and reach their full potential.
                                                </p>
                                                <ul className="list-disc ps-4 mt-5">
                                                    <li>pandesara, Surat, Gujarat</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-6/12">
                                    <div className="font-secondary">
                                        <h6 className="text-center capitalize text-2xl font-bold">technical skills</h6>
                                        <div>
                                            <h5 className="text-[#27a776] font-bold ps-4 uppercase">
                                                front-end
                                            </h5>
                                            <div className="px-4 border-s border-[#7a7a7a] dot -mt-5 pt-9 pb-4">
                                                <ul className="list-disc ps-4">
                                                    <li className="uppercase">html5</li>
                                                    <li className="uppercase">css3</li>
                                                    <li className="uppercase">responsive design</li>
                                                    <li className="uppercase">jquery</li>
                                                    <li className="uppercase">bootstrap</li>
                                                    <li className="uppercase">react js</li>
                                                    <li className="uppercase">tailwind css</li>
                                                    <li className="uppercase">redux toolkit</li>
                                                </ul>
                                            </div>
                                            <h5 className="text-[#27a776] font-bold ps-4 uppercase">
                                                Programming Languages
                                            </h5>
                                            <div className="px-4 border-s border-[#7a7a7a] dot -mt-5 pt-9 pb-4">
                                                <ul className="list-disc ps-4">
                                                    <li className="uppercase">JAVASCRIPT</li>
                                                    <li className="uppercase">c++</li>
                                                </ul>
                                            </div>
                                            <h5 className="text-[#27a776] font-bold ps-4 uppercase">
                                                Version Control & Tools
                                            </h5>
                                            <div className="px-4 border-s border-[#7a7a7a] dot -mt-5 pt-9 pb-4">
                                                <ul className="list-disc ps-4">
                                                    <li className="uppercase">github</li>
                                                </ul>
                                            </div>
                                            <h5 className="text-[#27a776] font-bold ps-4 uppercase">
                                                dsa (basic)
                                            </h5>
                                            <div className="px-4 border-s border-[#7a7a7a] dot -mt-5 pt-9 pb-4">
                                                <ul className="list-disc ps-4">
                                                    <li className="uppercase">basic problem solving</li>
                                                    <li className="uppercase">basic linear data structure (singly linked list, stack, que)</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h6 className="text-center capitalize text-2xl font-bold mb-5">work - experience</h6>
                                        <div>
                                            <h5 className="text-[#27a776] font-bold ps-4 uppercase">
                                                fresher
                                            </h5>
                                            <div className="px-4 border-s border-[#7a7a7a] dot -mt-5 pt-9 pb-4">
                                                <p>complete fresher in the tech field.</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="text-[#27a776] font-bold ps-4 uppercase">
                                                RADHESHYAM ELECTRONICS
                                            </h5>
                                            <div className="px-4 border-s border-[#7a7a7a] dot -mt-5 pt-9 pb-4">
                                                <span className="font-mono capitalize inline-block py-1 px-3 rounded-xl text-gray-400 bg-[#272727] mb-3 italic">
                                                    2024 - current
                                                </span>
                                                <p>
                                                    My Own Business offers the following LED TV-related services:
                                                </p>
                                                <ul className="list-disc ps-4">
                                                    <li>Troubleshooting technical issues (as a Technician)</li>
                                                    <li>
                                                        promoting the sale of both new and reconditioned televisions
                                                        devoted to providing top-notch repairs and guaranteeing client satisfaction (as a Sales Representative).
                                                    </li>
                                                    <li>
                                                        delivering outstanding customer service
                                                    </li>
                                                    <li>
                                                        Pandesara, GIDC road, Surat, Gujarat-394221
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="text-[#27a776] font-bold ps-4 uppercase">
                                                ACHIEVER'S POINT (as a Manager's Assistant)
                                            </h5>
                                            <div className="px-4 border-s border-[#7a7a7a] dot -mt-5 pt-9">
                                                <span className="font-mono capitalize inline-block py-1 px-3 rounded-xl text-gray-400 bg-[#272727] mb-3 italic">
                                                    2020 - 2022
                                                </span>
                                                <p>
                                                    Achiever's Point is an educational institution that offers enhanced tuition and other study-related advice to students preparing for better careers in the classroom and beyond.
                                                </p>
                                            </div>
                                        </div>
                                        <h6 className="text-center capitalize text-2xl font-bold my-5">other</h6>
                                        <div>
                                            <h5 className="text-[#27a776] font-bold ps-4 uppercase">
                                                skills
                                            </h5>
                                            <div className="px-4 border-s border-[#7a7a7a] dot -mt-5 pt-9">
                                                <ul className="list-disc ps-4">
                                                    <li className="capitalize">problem solving</li>
                                                    <li className="capitalize">canva</li>
                                                    <li className="capitalize">accounting</li>
                                                    <li className="capitalize">MS office</li>
                                                    <li className="capitalize">Communication</li>
                                                    <li className="capitalize">Time Management</li>
                                                    <li className="capitalize">Teamwork</li>
                                                    <li className="capitalize">Stock Trading</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    )
}

export default Resume