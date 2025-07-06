import Aurora from "./aurora/Aurora"
import ShinyText from "./glowingText/ShinyText "
import SocialLinks from "./SocialLinks"

const Footer = () => {
    return (
        <footer className="relative overflow-x-hidden">
            <div className="container mx-auto">
                <div className="px-4 pb-8 text-[#7a7a7a] relative z-10">
                    <ul className="text-2xl flex justify-center gap-3 mb-3">
                        <SocialLinks />
                    </ul>
                    <div className="flex items-center justify-center">
                        <span>© Copyright</span>
                        <div className='logo'>
                            <img src='/logoSVG.svg' alt='MY LOGO' width={70} />
                        </div>
                        <span>All Rights Reserved</span>
                    </div>
                </div>
            </div>
            <div className="transform scale-y-[-1] absolute w-full bottom-0">
                <Aurora
                    colorStops={["#27a776", "#27a776", "#27a776"]}
                    blend={100}
                    amplitude={0.5}
                    speed={2}
                />
            </div>
        </footer>
    )
}

export default Footer