export default function Title({ name }) {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 capitalize">
            <h3 className="text-2xl md:text-3xl leading-6 font-medium text-gray-900">
                <span className="border-b-[4px] border-sky-400">
                    {name}
                </span>
            </h3>
        </div>
    );
}