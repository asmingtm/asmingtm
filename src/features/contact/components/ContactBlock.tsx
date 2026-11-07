import { MdMail } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ContactItem } from "./ContactItem";
import { SocialItem } from "./SocialItem";

export function ContactBlock() {
    return (
        <>
        <div className="contact-list">
            <ContactItem
                label="Email for any enquiry"
                IconComponent={MdMail}
                type="email"
                value="asmingtm.me@gmail.com"
            />
        </div>
        <div className="social-list">
            <SocialItem link="https://linkedin.com/in/asmingtm" IconComponent={FaLinkedin} />
            <SocialItem link="https://github.com/asmingtm" IconComponent={FaGithub} />
            <SocialItem link="https://x.com/knownasimpact" IconComponent={FaXTwitter} />
            <SocialItem link="https://instagram.com/asmingtm" IconComponent={FaInstagram} />
            <SocialItem link="https://youtube.com/@knownasimpact" IconComponent={FaYoutube} />
        </div>
        </>
    );
}