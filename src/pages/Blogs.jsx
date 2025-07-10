import Footer from "../components/Footer"
import Header from "../components/Header"

const Blogs = () => {
    return (
        <>
            <Header />
            <section className='text-secondary py-4'>
                <div className='container mx-auto'>
                    <div className='px-4 relative'>
                        <div className="h-screen flex justify-center items-center">
                            <p className="text-4xl capitalize text-[#27a776]">under development</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Blogs