import { Link } from 'react-scroll';
import Wave from 'react-wavify';
import backgroundImage from '../assets/imgs/kz.jpg';
import Header from './Header';

const Hero = () => {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className='w-full relative'>
            <div className="w-full h-screen bg-cover" style={backgroundStyle}>
                <div className="container mx-auto hero h-screen justify-start">
                    <div className="hero-content text-start text-neutral-content">
                        <div className="max-w-xl">
                            <p className="mb-5 text-xl md:text-2xl lg:text-2xl xl:text-3xl italic">Explore today!</p>
                            <h1 className="mb-5 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">Welcome to Kazakhstan</h1>
                            <Link className="btn btn-sm md:btn-md lg:btn-lg" to="tours" smooth={true} duration={500}>Get Started</Link>
                        </div>
                    </div>
                </div>
            </div >
            {/* f9f8fd */}
            <div className='w-full absolute bottom-[-7px] left-0 z-50'>
                <Wave fill='#f9f8fd'
                    paused={false}
                    options={{
                        height: 20,
                        amplitude: 40,
                        speed: 0.15,
                        points: 4
                    }}
                />
            </div>
            <Header />
        </div>
    );
}

export default Hero;