import { useState } from "react";
import SideBar from "../../SideBar";
import Title from "../components/Title";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";

const Details = () => {
    const [tabs, setTabs] = useState([
        { name: 'Главная', href: '#', current: true },
        { name: 'Нижняя', href: '#', current: false },
    ]);

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    const handleTabClick = (tabName) => {
        const updatedTabs = tabs.map((tab) => ({
            ...tab,
            current: tab.name === tabName,
        }));
        setTabs(updatedTabs);
    };

    const renderSection = () => {
        switch (tabs.find((tab) => tab.current).name) {
            case "Главная":
                return <Hero />;
            case "Нижняя":
                return <Footer />;
            default:
                return <Hero />;
        }
    };

    return (
        <SideBar>
            <Title text={"Детали страницы"} />
            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 py-6">
                <div className="w-full mt-[-10px] mb-[20px]">
                    <div className="sm:hidden">
                        <label htmlFor="tabs" className="sr-only">
                            Select a tab
                        </label>
                        <select
                            id="tabs"
                            name="tabs"
                            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            defaultValue={tabs.find((tab) => tab.current).name}
                            onChange={(e) => handleTabClick(e.target.value)}
                        >
                            {tabs.map((tab) => (
                                <option key={tab.name} >
                                    {tab.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="hidden sm:block">
                        <div className="border-b border-gray-200">
                            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                                {tabs.map((tab) => (
                                    <a
                                        key={tab.name}
                                        href={tab.href}
                                        onClick={() => handleTabClick(tab.name)}
                                        className={classNames(
                                            tab.current
                                                ? 'border-indigo-500 text-indigo-600'
                                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                            'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                                        )}
                                        aria-current={tab.current ? 'page' : undefined}
                                    >
                                        {tab.name}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
                {renderSection()}
            </div>
        </SideBar >
    );
}

export default Details;