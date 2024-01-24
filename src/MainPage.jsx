import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivities } from "./redux/slices/activities";
import { fetchReviews } from "./redux/slices/reviews";
import Activities from "./sections/Activities";
import Hero from "./sections/Hero";
import Map from "./sections/Map";
import Reviews from "./sections/Reviews";
import Footer from "./sections/components/Footer";

const sampleReviews = [
    {
        _id: "650c9fcb1739c690c658e315",
        name: "Max Crane",
        email: "max.crane@example.com",
        date: "2023-09-17T00:00:00.000+00:00",
        stars: 4,
        comment: "Great service and quick delivery. I highly recommend this company.",
        createdAt: "2023-09-21T19:55:55.353+00:00",
        updatedAt: "2023-09-21T19:55:55.353+00:00",
        __v: 0
    },
    {
        _id: "4b8d3fde748a7b23f0d9c562",
        name: "Sarah Jennings",
        email: "sarah.jennings@example.com",
        date: "2023-09-15T00:00:00.000+00:00",
        stars: 5,
        comment: "Outstanding experience! The quality of products exceeded my expectations.",
        createdAt: "2023-09-18T10:20:30.123+00:00",
        updatedAt: "2023-09-18T10:20:30.123+00:00",
        __v: 0
    },
    {
        _id: "7a6e8bec9ef1a2e3d5b4c793",
        name: "Alex Reed",
        email: "alex.reed@example.com",
        date: "2023-09-12T00:00:00.000+00:00",
        stars: 3,
        comment: "Decent products, but the customer service needs improvement.",
        createdAt: "2023-09-14T15:45:20.987+00:00",
        updatedAt: "2023-09-14T15:45:20.987+00:00",
        __v: 0
    },
    {
        _id: "3c2f1e8ca4b246798d1ae2b1",
        name: "Emily Turner",
        email: "emily.turner@example.com",
        date: "2023-09-10T00:00:00.000+00:00",
        stars: 2,
        comment: "Slow delivery and average product quality. Not what I expected.",
        createdAt: "2023-09-11T08:33:47.321+00:00",
        updatedAt: "2023-09-11T08:33:47.321+00:00",
        __v: 0
    }
];

const sampleActivities = [
    {
        _id: "650b61797f138fb4fd27b928",
        name: {
            en: "Hiking Adventure in the Almaty Mountains",
            ru: "Поход в горы Алматы"
        },
        text: {
            en: "Explore the stunning beauty of the Almaty Mountains on this guided hiking adventure. This full-day trip takes you through lush forests and up to breathtaking mountain peaks. Discover hidden waterfalls and enjoy a picnic lunch with panoramic views.",
            ru: "Исследуйте потрясающую красоту гор Алматы в этом горном походе под руководством опытных гидов. Экскурсия продлится весь день и позволит вам пройти через плотные леса и подняться на вершины гор. Откройте для себя скрытые водопады и насладитесь пикником с панорамными видами."
        },
        date: "15-08-2023",
        price: "5000 ₸",
        place: {
            en: "Almaty, Kazakhstan",
            ru: "Алматы, Казахстан"
        },
        category: {
            en: "Outdoor Adventures",
            ru: "Активный отдых"
        },
        imageUrl: "https://picsum.photos/2000/1000",
        descriptions: [
            {
                name: {
                    en: "Stunning beauty of the Almaty",
                    ru: "Потрясающаю красота гор Алматы"
                },
                description: {
                    en: "Explore the stunning beauty of the Almaty Mountains on this guided hiking adventure. This full-day trip takes you through lush forests and up to breathtaking mountain peaks. Discover hidden waterfalls and enjoy a picnic lunch with panoramic views.",
                    ru: "Исследуйте потрясающую красоту гор Алматы в этом горном походе под руководством опытных гидов. Экскурсия продлится весь день и позволит вам пройти через плотные леса и подняться на вершины гор. Откройте для себя скрытые водопады и насладитесь пикником с панорамными видами."
                },
                _id: "650c99866cec966dc4fb2583"
            },
            {
                name: {
                    en: "Beginner friendly",
                    ru: "Подходит для начинающих"
                },
                description: {
                    en: "Suitable for both beginners and experienced hikers. Don't miss the chance to immerse yourself in the natural beauty of Kazakhstan.",
                    ru: "Подходит как для начинающих, так и для опытных путешественников. Не упустите шанс погрузиться в природную красоту Казахстана."
                },
                _id: "650c99866cec966dc4fb2584"
            }
        ],
        coordinates: {
            lat: 43.12880173342851,
            lng: 77.0804214477539
        },
        createdAt: "2023-09-20T21:17:45.640+00:00",
        updatedAt: "2023-09-21T19:29:10.856+00:00",
        __v: 0
    },
    // Additional 5 activities will follow the same format...
];

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
            <Activities activities={sampleActivities} />
            <Map coord={allCoordinates} />
            <Reviews data={sampleReviews} />
            <Footer />
        </div >
    );
}

export default MainPage;