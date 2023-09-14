export default function Empty({ text, subText, btnText, href, svg }) {
    return (
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 text-center my-auto">
            {svg}
            <h3 className="mt-2 text-sm font-medium text-gray-900">{text}</h3>
            <p className="mt-1 text-sm text-gray-500">{subText}</p>
            {btnText && (
                <div className="mt-6">
                    <a href={href} className="w-fit bg-sky-600 rounded-md py-2 px-8 text-sm font-medium text-white hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 capitalize">
                        {btnText}
                    </a>
                </div>
            )}
        </div>
    )
}