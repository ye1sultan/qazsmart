import { faInstagram, faTelegram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer id="contact" className="bg-neutral">
            <div className="footer p-10 text-neutral-content container mx-auto justify-between">
                <div className="md:max-w-lg md:min-w-[33.33%]">
                    <span className="footer-title text-xl">We</span>
                    <p className="text-lg">
                        Welcome to QazSmart! We are your go-to platform for affordable and captivating tours across the enchanting landscapes of Kazakhstan. Our mission is to provide you with unforgettable experiences, showcasing the hidden gems and must-see destinations of our country. Immerse yourself in the rich culture, awe-inspiring natural beauty, and vibrant traditions of this incredible country. Discover the wonders of Kazakhstan with QazSmart, where cheap doesn't mean compromising on quality.
                    </p>
                </div>
                <div className="md:min-w-[33.33%]">
                    <span className="footer-title text-xl">Address</span>
                    <div className="flex flex-col justify-center items-center gap-y-8">
                        <div className="w-full flex justify-start items-center">
                            <FontAwesomeIcon icon={faLocationDot} size="xl" className="mr-2" />
                            <div className="text-lg">
                                Kazakhstan, Almaty
                            </div>
                        </div>
                        <div className="w-full flex justify-start items-center">
                            <FontAwesomeIcon icon={faPhone} size="xl" className="mr-2" />
                            <div className="text-lg">
                                +7 727 322 33 62
                            </div>
                        </div>
                        <div className="w-full flex justify-start items-center">
                            <FontAwesomeIcon icon={faEnvelope} size="xl" className="mr-2" />
                            <div className="text-lg">
                                niyaztaye@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:max-w-[33.33%]">
                    <h2 className="font-semibold text-4xl">QazSmart</h2>
                    <p className="text-lg mb-4">© All rights reserved</p>
                    <div className="w-full flex justify-start items-center gap-x-6">
                        <a href="https://t.me/yelsultan"><FontAwesomeIcon icon={faTelegram} className="text-3xl cursor-pointer" /></a>
                        <a href="https://www.instagram.com/dsgrcls/"><FontAwesomeIcon icon={faInstagram} className="text-3xl cursor-pointer" /></a>
                        <a href="https://www.tiktok.com/@yels667"><FontAwesomeIcon icon={faTiktok} className="text-2xl cursor-pointer" /></a>
                    </div>
                </div>
            </div>
        </footer >
    );
}

export default Footer;