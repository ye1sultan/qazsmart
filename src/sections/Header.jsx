import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <Popover className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 flex-1">
                    <Link className='text-3xl font-semibold text-white navtexts'>
                        <span className="sr-only">QazSmart</span>
                        QS
                    </Link>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                    <Popover.Button className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </Popover.Button>
                </div>
                <nav className="hidden md:flex space-x-16 capitalize">
                    <a href="/#tours" className="text-base font-medium text-white hover:text-gray-300 navtexts">
                        tours
                    </a>
                    <a href="/#reviews" className="text-base font-medium text-white hover:text-gray-300 navtexts">
                        reviews
                    </a>
                    <Link className="text-base font-medium text-white hover:text-gray-300 navtexts">
                        favourites
                    </Link>
                    <a href="/#footer" className="text-base font-medium text-white hover:text-gray-300 navtexts">
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
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <Link className='text-3xl font-medium text-gray-900'>
                                    <span className="sr-only">QazSmart</span>
                                    QS
                                </Link>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 px-5">
                            <div className="grid grid-cols-2 gap-4 capitalize">
                                <a href="/#tours" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    tours
                                </a>
                                <a href="/#reviews" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    reviews
                                </a>
                                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    favourites
                                </a>
                                <a href="/#footer" className="text-base font-medium text-gray-900 hover:text-gray-700">
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