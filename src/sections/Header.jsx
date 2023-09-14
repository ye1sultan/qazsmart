import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/imgs/header-sm.jpg';

export default function Header({ dark }) {
    const textColor = !dark ? 'text-white' : 'text-gray-900';
    const hoverColor = !dark ? 'hover:text-gray-300' : 'hover:text-gray-700';

    const headerSmStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 35%',
    };

    const overlayStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

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
                    <a href="/#tours" className={`${textColor} ${hoverColor}`}>
                        tours
                    </a>
                    <a href="/#reviews" className={`${textColor} ${hoverColor}`}>
                        reviews
                    </a>
                    <a href="/favourites" className={`${textColor} ${hoverColor}`}>
                        favourites
                    </a>
                    <a href="/#footer" className={`${textColor} ${hoverColor}`}>
                        contact
                    </a>
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
                    <div className="rounded-lg shadow-lg ring-opacity-5 overflow-hidden relative z-10" style={headerSmStyle}>
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
                                <a href="/#tours" className={`hover:text-gray-300 flex justify-start items-center gap-x-2`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                    tours
                                </a>
                                <a href="/#reviews" className={`hover:text-gray-300 flex justify-start items-center gap-x-2`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                    </svg>
                                    reviews
                                </a>
                                <a href="/favourites" className={`hover:text-gray-300 flex justify-start items-center gap-x-2`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                    favourites
                                </a>
                                <a href="/#footer" className={`hover:text-gray-300 flex justify-start items-center gap-x-2`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                    </svg>
                                    contact
                                </a>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}