import Footer from "../components/Footer"
import Header from "../components/Header"
import Title from "../components/Title"
import { FiMapPin } from "react-icons/fi"
import { MdOutlinePhone } from "react-icons/md";
import { BsEnvelopeAt } from "react-icons/bs";


const Contact = () => {
    return (
        <>
            <Header />
            <section className='bg-black text-secondary py-16'>
                <div className='container mx-auto'>
                    <div className="px-4">
                        <div>
                            <Title title={"Contact"} />
                        </div>
                        <p className="mt-5 mb-8 md:w-6/12 text-center mx-auto text-lg">
                            "Let's communicate! I would be delighted to hear from you if you have any questions, would want to collaborate on a project, or are just dropping by. Please use the email address or contact form provided below to get in touch with us. I look forward to speaking with you and finding out how we can collaborate to produce something truly spectacular."
                        </p>
                        <div className="flex flex-wrap">
                            {/* location */}
                            <div className="lg:w-4/12 w-full ">
                                <div className="flex items-center lg:justify-center gap-3 lg:mt-0 mb-4">
                                    <div className="w-[70px] h-[70px] rounded-full text-[#27a776] flex justify-center items-center text-2xl border-[#27a776] border-2">
                                        <FiMapPin />
                                    </div>
                                    <div>
                                        <h6 className="font-bold text-xl capitalize font-secondary">location</h6>
                                        <p>Udhna, Surat, Gujarat-394210</p>
                                    </div>
                                </div>
                            </div>
                            {/* contact */}
                            <div className="lg:w-4/12 w-full ">
                                <div className="flex items-center lg:justify-center gap-3 lg:mt-0 mb-4">
                                    <div className="w-[70px] h-[70px] rounded-full text-[#27a776] flex justify-center items-center text-2xl border-[#27a776] border-2">
                                        <MdOutlinePhone />
                                    </div>
                                    <div>
                                        <h6 className="font-bold text-xl capitalize font-secondary">Call</h6>
                                        <p>+91-8160149401</p>
                                    </div>
                                </div>
                            </div>
                            {/* email */}
                            <div className="lg:w-4/12 w-full ">
                                <div className="flex items-center lg:justify-center gap-3 lg:mt-0 mb-4">
                                    <div className="w-[70px] h-[70px] rounded-full text-[#27a776] flex justify-center items-center text-2xl border-[#27a776] border-2">
                                        <BsEnvelopeAt />
                                    </div>
                                    <div>
                                        <h6 className="font-bold text-xl capitalize font-secondary">Email</h6>
                                        <p>varmakaushal33@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <form action="#" className="">
                                <div className="flex flex-wrap gap-5 justify-center">
                                    <div className="md:w-5/12 w-full">
                                        <input type="text" placeholder="Name" className="p-3 rounded-md w-full bg-transparent border-[#7a7a7a] border focus:border-[#27a776]" />
                                    </div>
                                    <div className="md:w-5/12 w-full">
                                        <input type="text" placeholder="Email" className="p-3 rounded-md w-full bg-transparent border-[#7a7a7a] border focus:border-[#27a776]" />
                                    </div>
                                    <div className="md:w-10/12 w-full">
                                        <input type="text" placeholder="Subject" className="p-3 rounded-md w-full bg-transparent border-[#7a7a7a] border focus:border-[#27a776]" />
                                    </div>
                                    <div className="md:w-9/12 w-full">
                                        <textarea className="p-3 rounded-md w-full bg-transparent border-[#7a7a7a] border focus:border-[#27a776]" placeholder="Message" rows={5}></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact