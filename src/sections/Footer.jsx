const Footer = () => {
    return (
        <footer className="bg-neutral">
            <div className="footer p-10 text-neutral-content container mx-auto justify-between">
                <div>
                    <span className="footer-title">Services</span>
                    <a href="/" className="link link-hover">Branding</a>
                    <a href="/" className="link link-hover">Design</a>
                    <a href="/" className="link link-hover">Marketing</a>
                    <a href="/" className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href="/" className="link link-hover">About us</a>
                    <a href="/" className="link link-hover">Contact</a>
                    <a href="/" className="link link-hover">Jobs</a>
                    <a href="/" className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href="/" className="link link-hover">Terms of use</a>
                    <a href="/" className="link link-hover">Privacy policy</a>
                    <a href="/" className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-neutral-content">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn absolute top-0 right-0 rounded-l-none bg-sky-300 font-medium">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto footer items-center pl-10 md:pl-0 p-4 bg-neutral text-neutral-content justify-start md:justify-center">
                <div className="items-center grid-flow-col">
                    <a href="/" className="font-semibold text-2xl">QS</a>
                    <p>Copyright © 2023 - All right reserved</p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a href="/"> </a>
                    <a href="/"> </a>
                    <a href="/"> </a>
                </div>
            </div>
        </footer >
    );
}

export default Footer;