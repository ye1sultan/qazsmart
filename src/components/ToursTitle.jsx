export default function ToursTitle({ name }) {
    return (
        <>
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 capitalize -mt-[30px] ">
                {/* <h2 className="font-medium text-gray-500">Almaty</h2> */}
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl capitalize">
                    <span className="border-b-[4px] border-sky-400">
                        {name}
                    </span>
                </p>
            </div>
        </>
    );
}