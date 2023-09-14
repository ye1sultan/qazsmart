import Empty from "../components/Empty";
import Title from "../components/Title";
import Tour from "../components/Tour";

const Tours = ({ data }) => {
    return (
        <div id="tours" className="container mx-auto flex flex-col justify-center gap-y-12 sm:gap-y-14 py-8">
            <Title name={"tours"} />
            {data && data.length > 0 ? (
                <>
                    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden md:flex justify-center items-center flex-wrap gap-y-10 gap-x-20">
                        {data.slice(0, 6).map(tour =>
                            <Tour
                                key={tour.id}
                                id={tour.id}
                                name={tour.name.toLowerCase()}
                                text={tour.text}
                                date={tour.date}
                                cost={tour.cost} />
                        )}
                    </div>
                    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex md:hidden justify-center items-center flex-wrap gap-y-10 gap-x-20">
                        {data.slice(0, 3).map(tour =>
                            <Tour
                                key={tour.id}
                                id={tour.id}
                                name={tour.name.toLowerCase()}
                                text={tour.text}
                                date={tour.date}
                                cost={tour.cost} />
                        )}
                    </div>
                    <div className="w-full flex justify-center items-center capitalize mt-10">
                        <a href="/all-tours" className="rounded-md bg-sky-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
                            view all tours
                        </a>
                    </div>
                </>
            ) : (
                <div className="mb-20">
                    <Empty
                        text={"No tours"}
                        subText={"New tours will be added soon"}
                        svg={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto h-12 w-12 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        } />
                </div>
            )}
        </div >
    );
}

export default Tours;