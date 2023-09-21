import { useTranslation } from 'react-i18next';
import backgroundImage from '../assets/imgs/kz.jpg';
import Header from "../components/Header";

const Hero = () => {
    const { t } = useTranslation();

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
            <div className="w-full absolute z-50">
                <Header />
            </div>
            <div className="w-full h-screen relative z-10" style={heroStyle}>
                <div style={overlayStyle}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-start items-center relative z-10">
                    <div className="max-w-2xl w-full px-6 lg:px-8">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            {t('main.hero.title')}
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            {t('main.hero.subtitle')}
                        </p>
                        <div className="mt-10 flex items-center justify-start gap-x-6">
                            <a href="#activities" className="rounded-md px-3.5 py-2.5 text-sm sm:text-base font-semibold text-white shadow-sm bg-sky-600 hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
                                {t('main.hero.buttonText')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;