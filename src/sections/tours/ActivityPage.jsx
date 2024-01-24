import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import backgroundImage from '../assets/imgs/headers.jpg';
import axios from "../../axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageMap from "../components/PageMap";
import TourInfo from "../components/TourInfo";

const sampleActivity = {
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
    imageUrl: "https://picsum.photos/2000/1500",
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
};

const ActivityPage = () => {
    const { t, i18n } = useTranslation();
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    const selectedLanguage = i18n.language;

    console.log(selectedLanguage);
    const formatDate = (inputDate) => {
        const parts = inputDate.split('-');
        const year = `${parts[2]}`;
        const month = getMonthName(parts[1]);
        const day = parts[0];
        return `${month} ${day}, ${year}`;
    }

    const getMonthName = (month) => {
        const monthsEn = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const monthsRu = [
            "Январь", "Февраль", "Март", "Априль", "Май", "Июнь",
            "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
        ];

        return selectedLanguage === 'en' ? monthsEn[parseInt(month) - 1] : monthsRu[parseInt(month) - 1];
    }

    useEffect(() => {
        // axios.get(`/activities/${id}`)
        //     .then((res) => {
        //         setData(res.data);
        //         document.title = `QazSmart - ${res.data.name[selectedLanguage]}`;
        //         setIsLoading(false);
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //         alert('Ошибка при получении активности');
        //     });
        // return () => {
        //     document.title = `QazSmart`;
        // }

        setData(sampleActivity);
        setIsLoading(false);
    }, []);

    const ActivityPageStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 35%',
    };

    if (isLoading) {
        return <div className="text-4xl">...Loading</div>
    }

    const name = data.name[selectedLanguage];
    const place = data.place[selectedLanguage];
    const category = data.category[selectedLanguage];

    const stats = [
        { name: t("actInfo.price"), stat: data.price },
        { name: t("actInfo.date"), stat: formatDate(data.date) },
        { name: t("actInfo.weather"), stat: '23°C' },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <div className="w-full sticky z-50" style={ActivityPageStyle}>
                <div className="absolute inset-0 bg-gradient-to-t from-[#f4f7f7]" />
                <Header dark={true} />
            </div>
            <div className="container mx-auto flex flex-col justify-center gap-y-12 sm:gap-y-14 py-8 flex-grow">
                <TourInfo
                    id={data._id}
                    name={name}
                    place={place}
                    descriptions={data.descriptions}
                    stats={stats}
                    category={category}
                    imageUrl={data.imageUrl}
                />
            </div>
            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 relative">
                <PageMap coord={data.coordinates} />
            </div>
            <Footer />
        </div>
    );
}

export default ActivityPage;
