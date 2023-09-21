import { Menu, Popover, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/imgs/header-sm.jpg';
import russian from '../assets/imgs/russia.png';
import english from '../assets/imgs/united-kingdom.png';

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
}

const flags = [
    { name: "English", src: english, lng: 'en' },
    { name: "Русский", src: russian, lng: 'ru' },
    // { name: "日本語", src: "https://flagcdn.com/w80/jp.png", lng: "jp" },
];

export default function Header({ dark }) {
    const { t, i18n } = useTranslation();

    const textColor = !dark ? 'text-white' : 'text-gray-900';
    const hoverColor = !dark ? 'hover:text-gray-300' : 'hover:text-gray-700';

    const headerSmStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 35%',
    };

    const overlayStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

    const storedFlag = localStorage.getItem("selectedFlag");
    const [selectedFlag, setSelectedFlag] = useState(
        storedFlag ? JSON.parse(storedFlag) : flags[0]
    );

    const handleFlagClick = (flag) => {
        setSelectedFlag(flag);
        i18n.changeLanguage(flag.lng);
    };

    useEffect(() => {
        localStorage.setItem("selectedFlag", JSON.stringify(selectedFlag));
    }, [selectedFlag]);

    return (
        <Popover className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 flex-1">
                    <a href='/' className={`text-3xl font-semibold ${textColor} navtexts`}>
                        <span className="sr-only">QazSmart</span>
                        QS
                    </a>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                    <Popover.Button className={`bg-transparent rounded-md p-2 inline-flex items-center justify-center ${textColor} ${hoverColor} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}>
                        <span className="sr-only">Open menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </Popover.Button>
                </div>
                <nav className="hidden md:flex space-x-16 capitalize text-base font-medium">
                    <a href="/#activities" className={`${textColor} ${hoverColor}`}>
                        {t('header.activities')}
                    </a>
                    <a href="/#reviews" className={`${textColor} ${hoverColor}`}>
                        {t('header.reviews')}
                    </a>
                    <a href="/#footer" className={`${textColor} ${hoverColor}`}>
                        {t('header.contactUs')}
                    </a>
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button>
                                <div className={`${textColor} ${hoverColor} flex justify-center items-center gap-x-1`}>
                                    <img className='rounded-[2px] w-[20px]' src={selectedFlag.src} alt={selectedFlag.name} width="20" />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 w-32 mt-2 origin-top-right rounded-md bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    {flags.map((flag, index) => (
                                        <Menu.Item key={index}>
                                            {({ active }) => (
                                                <button
                                                    className={classNames(
                                                        active ? 'bg-gray-200 text-gray-900' : 'text-gray-700',
                                                        'flex justify-start items-center gap-x-2 px-4 py-2 text-sm w-full text-start'
                                                    )}
                                                    onClick={() => handleFlagClick(flag)} // Handle flag click
                                                >
                                                    <img className='w-[20px]' src={flag.src} alt={flag.name} />
                                                    {flag.name}
                                                </button>
                                            )}
                                        </Menu.Item>
                                    ))}
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </nav>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="h-[90vh] md:h-[60vh] rounded-lg shadow-lg ring-opacity-5 overflow-hidden relative z-10" style={headerSmStyle}>
                        <div style={overlayStyle}></div>
                        <div className="pt-5 pb-6 px-5 relative z-50">
                            <div className="flex items-center justify-between">
                                <Link className={`text-3xl font-medium text-white hover:text-gray-300`}>
                                    <span className="sr-only">QazSmart</span>
                                    QS
                                </Link>
                                <div className="-mr-2">
                                    <Popover.Button className={`rounded-md p-2 inline-flex items-center justify-center text-white ${hoverColor} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}>
                                        <span className="sr-only">Close menu</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 px-5 relative z-50">
                            <div className="grid grid-cols-1 gap-6 capitalize text-xl font-medium text-white">
                                <a href="/#activities" className={`hover:text-gray-300 flex justify-start items-center gap-x-2`}>
                                    {t('header.activities')}
                                </a>
                                <a href="/#reviews" className={`hover:text-gray-300 flex justify-start items-center gap-x-2`}>
                                    {t('header.reviews')}
                                </a>
                                <a href="/#footer" className={`hover:text-gray-300 flex justify-start items-center gap-x-2`}>
                                    {t('header.contactUs')}
                                </a>
                                <Menu as="div" className="relative text-left">
                                    <div>
                                        <Menu.Button>
                                            <div className={`${textColor} ${hoverColor} flex justify-center items-center gap-x-1`}>
                                                <img className='rounded-[2px] w-[20px]' src={selectedFlag.src} alt={selectedFlag.name} width="20" />
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </div>
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute left-0 w-32 mt-2 origin-top-right rounded-md bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[999]">
                                            <div className="py-1">
                                                {flags.map((flag, index) => (
                                                    <Menu.Item key={index}>
                                                        {({ active }) => (
                                                            <button
                                                                className={classNames(
                                                                    active ? 'bg-gray-200 text-gray-900' : 'text-gray-700',
                                                                    'flex justify-start items-center gap-x-2 px-4 py-2 text-sm w-full text-start'
                                                                )}
                                                                onClick={() => handleFlagClick(flag)}
                                                            >
                                                                <img className='w-[20px]' src={flag.src} alt={flag.name} />
                                                                {flag.name}
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}