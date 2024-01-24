import { useTranslation } from "react-i18next";
import Info from "./Info";

export default function TourInfo({ name, place, descriptions, stats, category, imageUrl }) {
    const { i18n } = useTranslation();
    const selectedLanguage = i18n.language;

    return (
        <>
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid items-start grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
                    <div>
                        <h2 className="font-medium text-gray-500 italic">{`${place} / ${category}`}</h2>
                        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl capitalize">
                            <span className="border-b-[4px] border-sky-400">
                                {name}
                            </span>
                        </p>
                        <div className="border-b border-gray-200 pb-10">
                            <Info data={stats} />
                        </div>
                        <dl className="mt-10 space-y-10">
                            {descriptions.map((feature) => (
                                <div key={feature.name.en}>
                                    <dt className="text-lg font-medium text-gray-900">{feature.name[selectedLanguage]}</dt>
                                    <dd className="mt-3 text-base text-gray-500">{feature.description[selectedLanguage]}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                    <div>
                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                            <img
                                // src={`${process.env.REACT_APP_BASE_API}${imageUrl}`}
                                src={`${imageUrl}`}
                                alt=""
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-4 sm:gap-6 sm:mt-6 lg:gap-8 lg:mt-8">
                            <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                                <img
                                    // src={`${process.env.REACT_APP_BASE_API}${imageUrl}`}
                                    src={`${imageUrl}`}
                                    alt=""
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>
                            <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                                <img
                                    // src={`${process.env.REACT_APP_BASE_API}${imageUrl}`}
                                    src={`${imageUrl}`}
                                    alt=""
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}