import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiHackerrank } from "react-icons/si";


const SocialLinks = () => {
    return (
        <>
            <li className="social-links">
                <a href="https://github.com/kaushal-33/" className="fs-5 text-secondary d-inline-block" target="_blank">
                    <BsGithub />
                </a>
            </li>
            <li className="social-links">
                <a href="https://www.linkedin.com/in/kaushal-varma-83034b2b8" className="fs-4 text-secondary d-inline-block" target="_blank">
                    <BsLinkedin />
                </a>
            </li>
            <li className="social-links">
                <a href="https://www.hackerrank.com/profile/varmakaushal33" className="fs-4 text-secondary d-inline-block" target="_blank">
                   <SiHackerrank />
                </a>
            </li>
        </>

    )
}

export default SocialLinks