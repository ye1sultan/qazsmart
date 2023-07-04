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
                        <p className="mb-5 text-xl md:text-2xl lg:text-2xl xl:text-3xl italic">Explore today!</p>
                            <h1 className="mb-5 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">Welcome to Kazakhstan</h1>
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