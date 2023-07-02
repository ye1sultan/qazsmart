import Header from './Header';
import backgroundImage from '../assets/imgs/kz.jpg';

const Hero = () => {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <>
            <div className="w-full h-screen bg-cover" style={backgroundStyle}>
                <div className="container mx-auto hero h-screen justify-start">
                    <div className="hero-content text-start text-neutral-content">
                        <div className="max-w-xl">
                            <p className="mb-5 text-md lg:text-xl xl:text-2xl 2xl:text-3xl italic">Pick your tour today!</p>
                            <h1 className="mb-5 text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">Welcome to Kazakhstan</h1>
                            <button className="btn btn-sm md:btn-md lg:btn-lg ">Get Started</button>
                        </div>
                    </div>
                </div>
            </div >
            <Header />
        </>
    );
}

export default Hero;