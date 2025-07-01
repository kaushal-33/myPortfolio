import { Drawer } from "flowbite-react";
import { Link } from "react-router-dom";
import ShinyText from "../components/glowingText/ShinyText ";
import { IoCloseOutline } from "react-icons/io5";

const MobileNavs = ({ isOpen, setIsOpen }) => {


    return (
        <Drawer open={isOpen} onClose={setIsOpen} position="top">
            <div>
                <div className="text-white flex justify-between items-center">
                    <Link className="font-hero capitalize">
                        <ShinyText text="kaushal varma" speed={3} />
                    </Link>
                    <button className="text-xl text-[#7a7a7a] pt-1" onClick={() => setIsOpen(false)}>
                        <IoCloseOutline />
                    </button>
                </div>
                <ul className="text-[#7a7a7a] capitalize font-semibold nav-link mt-5">
                    <li className="mb-3">
                        <Link to={"/"} onClick={() => setIsOpen(false)}>home</Link>
                    </li>
                    <li className="mb-3">
                        <Link onClick={() => setIsOpen(false)}>about</Link>
                    </li>
                    <li className="mb-3">
                        <Link onClick={() => setIsOpen(false)}>resume</Link>
                    </li>
                    <li className="mb-3">
                        <Link onClick={() => setIsOpen(false)}>projects</Link>
                    </li>
                    <li className="mb-3">
                        <Link onClick={() => setIsOpen(false)}>blogs</Link>
                    </li>
                    <li className="">
                        <Link onClick={() => setIsOpen(false)}>contact</Link>
                    </li>
                </ul>
            </div>
        </Drawer>
    )
}

export default MobileNavs