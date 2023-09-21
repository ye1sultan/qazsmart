import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import backgroundImage from '../assets/imgs/headers.jpg';
import Activity from "../components/Activity";
import Empty from "../components/Empty";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ToursTitle from "../components/ToursTitle";
import { fetchActivities } from "../redux/slices/activities";
import { useTranslation } from "react-i18next";

const AllActivities = () => {
    const { t, i18n } = useTranslation();
    const selectedLanguage = i18n.language;
    
    const dispatch = useDispatch();
    const { activities } = useSelector((state) => state.activities);

    useEffect(() => {
        document.title = "QazSmart - Actvities";

        dispatch(fetchActivities());

        return (() => {
            document.title = "QazSmart";
        });
    }, []);

    const allToursStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 35%',
    };

    return (
        <div className="min-h-screen flex flex-col">
            <div className="w-full sticky z-50" style={allToursStyle}>
                <div className="absolute inset-0 bg-gradient-to-t from-white" />
                <Header dark={true} />
            </div>
            <div className={`container mx-auto flex flex-col justify-start items-start py-8 flex-grow ${activities.items ? "gap-y-12 sm:gap-y-14" : "gap-y-0"}`}>
                <ToursTitle name={`${t("actPage.title")}`} />
                {activities.items && activities.items.length > 0 ? (
                    <>
                        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center flex-wrap gap-y-10 gap-x-20">
                            {activities.items.map(activity =>
                                <Activity
                                    key={activity._id}
                                    _id={activity._id}
                                    name={activity.name[selectedLanguage].toLowerCase()}
                                    category={activity.category[selectedLanguage]}
                                    text={activity.text[selectedLanguage]}
                                    date={activity.date}
                                    price={activity.price}
                                    imageUrl={activity.imageUrl}
                                />
                            )}
                        </div>
                    </>
                ) : (
                    <Empty
                        text={"No activities"}
                        subText={"New activities will be added soon"}
                        svg={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto h-12 w-12 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        }
                    />
                )}
            </div >
            <Footer />
        </div>
    );
}

export default AllActivities;