import Header from "./Header";
import backgroundImage from '../assets/imgs/headers.jpg';
import Footer from "./Footer";
import ToursTitle from "../components/ToursTitle";
import Empty from "../components/Empty";
import Tour from "../components/Tour";

const Favourites = ({ data }) => {

    document.title = "QazSmart - Favourites";

    const tourPageStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 35%',
    };

    const likedTourIds = JSON.parse(localStorage.getItem('likedTourIds')) || [];

    const likedTours = data.filter((tour) => likedTourIds.includes(tour.id));


    return (
        <div className="min-h-screen flex flex-col">
            <div className="w-full sticky z-50" style={tourPageStyle}>
                <div className="absolute inset-0 bg-gradient-to-t from-white" />
                <Header dark={true} />
            </div>
            <div className={`container mx-auto flex flex-col justify-start items-start py-8 flex-grow ${data ? "gap-y-12 sm:gap-y-14" : "gap-y-0"}`}>
                <ToursTitle name={"Favourites"} />
                {likedTours && likedTours.length > 0 ? (
                    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden md:flex justify-center items-center flex-wrap gap-y-10 gap-x-20">
                        {likedTours.map(tour =>
                            <Tour
                                key={tour.id}
                                id={tour.id}
                                name={tour.name.toLowerCase()}
                                text={tour.text}
                                date={tour.date}
                                cost={tour.cost} />
                        )}
                    </div>
                ) : (
                    <Empty
                        text={"No favourite tours"}
                        subText={"Your favourite tours will be displayed here"}
                        btnText={"See tours"}
                        href={"/all-tours"}
                        svg={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto h-12 w-12 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        } />
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Favourites;