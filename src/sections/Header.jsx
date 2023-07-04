import { Link } from 'react-scroll';
import { faBars, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {

    return (
        <header className="max-w-[1536px] w-full top-0 left-[50%] translate-x-[-50%] absolute py-4  text-base-content">
            <div className="navbar bg-transparent">
                <div className="flex-1">
                    <div href="/" className="font-semibold text-4xl sm:text-5xl">QS</div>
                </div>
                <ul className="menu menu-horizontal px-1 text-xl font-medium capitalize space-x-10 hidden lg:flex">
                    <li>
                        <Link to="tours" smooth={true} duration={500}>tours</Link>
                    </li>
                    <li>
                        <Link to="reviews" smooth={true} duration={500}>reviews</Link>
                    </li>
                    <li>
                        <Link to="news" smooth={true} duration={500}>news</Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>contact</Link>
                    </li>
                    <li>
                        <details className="dropdown">
                            <summary>
                                <FontAwesomeIcon icon={faEarthAmericas} size='sm' />
                            </summary>
                            <ul className="shadow menu dropdown-content z-[1] bg-base-100 rounded-box text-lg">
                                <li className="btn btn-ghost flex flex-row justify-start">
                                    English
                                </li>
                                <li className="btn btn-ghost flex flex-row justify-start">
                                    Русский
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>

                <div className="drawer block lg:hidden flex-[0]">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
                            <FontAwesomeIcon icon={faBars} size='xl' />
                        </label>
                    </div>
                    <div className="drawer-side z-[1]">
                        <label htmlFor="my-drawer" className="drawer-overlay"></label>
                        <ul className="menu py-12 px-6 w-80 h-full bg-base-200 text-xl font-medium capitalize space-y-4 flex-nowrap z-50">
                            <li>
                                <Link to="tours" smooth={true} duration={500}>tours</Link>
                            </li>
                            <li>
                                <Link to="reviews" smooth={true} duration={500}>reviews</Link>
                            </li>
                            <li>
                                <Link to="news" smooth={true} duration={500}>news</Link>
                            </li>
                            <li>
                                <Link to="contact" smooth={true} duration={500}>contact</Link>
                            </li>
                            <li>
                                <details className="dropdown">
                                    <summary>
                                        <FontAwesomeIcon icon={faEarthAmericas} size='sm' />
                                    </summary>
                                    <ul className="w-full translate-x-0 shadow menu dropdown-content z-[1] bg-base-100 rounded-box text-lg ml-0">
                                        <li className="btn btn-ghost flex flex-row justify-start">
                                            English
                                        </li>
                                        <li className="btn btn-ghost flex flex-row justify-start">
                                            Русский
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;