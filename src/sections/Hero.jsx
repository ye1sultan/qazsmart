import { Link } from "react-router-dom";
import backgroundImage from '../assets/imgs/kz.jpg';
import Header from "./Header";

const Hero = () => {
    const heroStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
    };

    const overlayStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

    return (
        <>
            <div id="header" className="w-full absolute z-50 transition-all duration-200 ease-linear">
                <Header />
            </div>
            <div className="w-full h-screen relative z-10" style={heroStyle}>
                <div style={overlayStyle}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-start items-center relative z-10">
                    <div className="max-w-2xl w-full px-6 lg:px-8">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Discover the Beauty of Kazakhstan
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Immerse Yourself in the Rich Culture and Scenic Landscapes of Kazakhstan
                        </p>
                        <div className="mt-10 flex items-center justify-start gap-x-6">
                            <Link className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
                                Start Your Journey
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;