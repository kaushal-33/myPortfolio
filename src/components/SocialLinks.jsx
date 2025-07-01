import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";


const SocialLinks = () => {
    return (
        <ul className="flex-wrap flex md:justify-end justify-center text-[#7a7a7a] gap-3 text-2xl social-links">
            <li>
                <a href="https://github.com/kaushal-33/" className="fs-5 text-secondary d-inline-block" target="_blank">
                    <BsGithub />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/kaushal-varma-83034b2b8" className="fs-4 text-secondary d-inline-block" target="_blank">
                    <BsLinkedin />
                </a>
            </li>
        </ul>

    )
}

export default SocialLinks