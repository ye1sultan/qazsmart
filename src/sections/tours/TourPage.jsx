import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import backgroundImage from '../assets/imgs/headers.jpg';
import axios from "../../axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageMap from "../components/PageMap";
import TourInfo from "../components/TourInfo";

const TourPage = () => {
    const { t, i18n } = useTranslation();
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    const selectedLanguage = i18n.language;

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
        axios.get(`/activities/${id}`)
            .then((res) => {
                setData(res.data);
                document.title = `QazSmart - ${res.data.name[selectedLanguage]}`;
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
                alert('Ошибка при получении активности');
            });
        return () => {
            document.title = `QazSmart`;
        }
    }, []);

    const tourPageStyle = {
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
            <div className="w-full sticky z-50" style={tourPageStyle}>
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

export default TourPage;
