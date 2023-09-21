import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivities } from "./redux/slices/activities";
import { fetchReviews } from "./redux/slices/reviews";
import Activities from "./sections/Activities";
import Hero from "./sections/Hero";
import Map from "./sections/Map";
import Reviews from "./sections/Reviews";
import Footer from "./sections/components/Footer";

// const reviews = [
//     {
//         id: 1,
//         name: "Amir Kazken",
//         country: "Austria",
//         stars: "1",
//         text: "We started in Almaty in Kazakhstan. We had various guides and drivers at different stages. The constant was Yels and Yels. They maintained contact with us to make sure everything was going to plan. Elena developed a tour to suit our needs including time to get visas. The price was great value for money.",
//         date: "16-05-2023",
//     },
//     {
//         id: 2,
//         name: "Zhenis Zhumagul",
//         country: "Kazakhstan",
//         stars: "3",
//         text: "I decided to be a tourist in my own country and I was blown away by the beauty of our nature. The tour guides were knowledgeable and friendly. It was a great adventure!",
//         date: "17-05-2023",
//     },
//     {
//         id: 3,
//         name: "Dias Mukhametrakhim",
//         country: "Russia",
//         stars: "3",
//         text: "Our trip was an amazing experience! We visited some beautiful places in Kazakhstan. The organization was top-notch and our guide was very professional and passionate about their country.",
//         date: "18-05-2023",
//     },
//     {
//         id: 4,
//         name: "Sultan Orazbay",
//         country: "United States",
//         stars: "4.5",
//         text: "Kazakhstan surprised me in the best way! Its beautiful landscapes and rich culture made this one of my favorite trips. The tour company did an amazing job.",
//         date: "19-05-2023",
//     }
// ];

const MainPage = () => {
    const dispatch = useDispatch();
    const { activities } = useSelector((state) => state.activities);
    const { reviews } = useSelector((state) => state.reviews);

    useEffect(() => {
        document.title = "QazSmart - Home";

        dispatch(fetchActivities());
        dispatch(fetchReviews());

        return (() => {
            document.title = "QazSmart";
        });
    }, []);


    const collectCoordinates = (activities) => {
        const coordinatesArray = activities.items.map((activity) => ({
            name: activity.name,
            coordinates: activity.coordinates,
        }));

        return coordinatesArray;
    }

    const allCoordinates = collectCoordinates(activities);

    return (
        <div>
            <Hero />
            <Activities activities={activities.items} />
            <Map coord={allCoordinates} />
            <Reviews data={reviews.items} />
            <Footer />
        </div >
    );
}

export default MainPage;