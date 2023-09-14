import Info from "./Info";

export default function TourInfo({ name, place, descriptions, stats }) {
    return (
        <>
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid items-start grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
                    <div>
                        <h2 className="font-medium text-gray-500">{place}</h2>
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
                                <div key={feature.name}>
                                    <dt className="text-lg font-medium text-gray-900">{feature.name}</dt>
                                    <dd className="mt-3 text-base text-gray-500">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>

                    </div>

                    <div>
                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/product-feature-09-main-detail.jpg"
                                alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-4 sm:gap-6 sm:mt-6 lg:gap-8 lg:mt-8">
                            <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/product-feature-09-detail-01.jpg"
                                    alt="Detail of temperature setting button on kettle bass with digital degree readout."
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>
                            <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/product-feature-09-detail-02.jpg"
                                    alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
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