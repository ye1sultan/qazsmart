import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { logout, selectIsAuth } from '../../redux/slices/auth';
import { ActivitiesIcon, ReviewsIcon } from './icons/icons';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function SideBar({ children }) {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);
    const location = useLocation();

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [navigation, setNavigation] = useState([
        {
            id: 1,
            name: 'Активности',
            to: '/admin/activities',
            icon: ActivitiesIcon,
            current: true,
        },
        {
            id: 2,
            name: 'Отзывы',
            to: '/admin/reviews',
            icon: ReviewsIcon,
            current: false,
        },
    ]);

    const handleMenuItemClick = (item) => {
        const id = item.id;
        const updatedNavigation = navigation.map((navItem) => ({
            ...navItem,
            current: navItem.id === id || navItem.to === location.pathname,
        }));

        setNavigation(updatedNavigation);
        setSidebarOpen(false);
    };

    const handleExit = () => {
        dispatch(logout());
        localStorage.removeItem('token');
    }

    if (!isAuth) {
        return <Navigate to={'/admin/auth'} />;
    }

    return (
        <div className='min-h-screen bg-gray-100'>
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="absolute top-0 right-0 -mr-12 pt-2">
                                    <button
                                        type="button"
                                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <span className="sr-only">Close sidebar</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </Transition.Child>
                            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                                <div className="flex-shrink-0 flex items-center px-4 text-2xl font-bold">
                                    QS Admin
                                </div>
                                <nav className="mt-5 px-2 space-y-1">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.to}
                                            onClick={() => handleMenuItemClick(item)}
                                            className={classNames(
                                                'group flex items-center px-2 py-2 text-base font-semibold rounded-md w-full',
                                                item.to === location.pathname
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                            )}
                                        >
                                            <item.icon
                                                className={classNames(
                                                    item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                                    'mr-3 flex-shrink-0 h-6 w-6'
                                                )}
                                                aria-hidden="true"
                                            />
                                            {item.name}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                                <div className="w-full flex items-center justify-between flex-shrink-0">
                                    <div className='flex justify-center items-center'>
                                        <img
                                            className="inline-block h-10 w-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                        <div className="ml-3">
                                            <p className="text-base font-medium text-gray-700">Yelsultan</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleExit}
                                        type='button'
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600 hover:text-red-400 cursor-pointer">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                    <div className="flex-shrink-0 w-14"></div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
                    <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                        <div className="flex items-center flex-shrink-0 px-4 text-2xl font-bold">
                            QS Admin
                        </div>
                        <nav className="mt-5 flex-1 bg-white px-2 space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    onClick={() => handleMenuItemClick(item)}
                                    className={classNames(
                                        'group flex items-center px-2 py-2 text-sm font-semibold rounded-md w-full',
                                        item.to === location.pathname
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    )}
                                >
                                    <item.icon
                                        className={classNames(
                                            item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                            'mr-3 flex-shrink-0 h-6 w-6'
                                        )}
                                        aria-hidden="true"
                                    />
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                    </div>
                    <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                        <div className="flex items-center justify-between flex-shrink-0 w-full">
                            <div className='flex justify-center items-center'>
                                <img
                                    className="inline-block h-9 w-9 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <div className="ml-3">
                                    <p className="text-sm font-semibold text-gray-700">Yelsultan</p>
                                </div>
                            </div>
                            <button
                                onClick={handleExit}
                                type='button'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600 hover:text-red-400 cursor-pointer">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:pl-64 flex flex-col flex-1">
                <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
                    <button
                        type="button"
                        className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <main className="flex-1">
                    <div className="py-6">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}