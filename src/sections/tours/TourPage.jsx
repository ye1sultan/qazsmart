import { useParams } from "react-router-dom";
import Header from "../Header";
import backgroundImage from '../../assets/imgs/headers.jpg';
import Footer from "../Footer";
import TourInfo from "../../components/TourInfo";

const TourPage = ({ data }) => {
    const { combinedTourInfo } = useParams();
    const [name, id] = combinedTourInfo.split('$');

    document.title = `QazSmart - ${name.toUpperCase()}`;

    const tourPageStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 35%',
    };

    const formatDate = (inputDate) => {
        const parts = inputDate.split('-');

        const year = `20${parts[2]}`;
        const month = getMonthName(parts[1]);
        const day = parts[0];

        return `${month} ${day}, ${year}`;
    }

    const getMonthName = (month) => {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return months[parseInt(month) - 1];
    }

    const findTourById = (id) => {
        return data.find((tour) => tour.id.toString() === id);
    };

    const selectedTour = findTourById(id);

    const stats = [
        { name: 'Price', stat: selectedTour.cost },
        { name: 'Date', stat: formatDate(selectedTour.date) },
        { name: 'Weather', stat: '23°C' },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <div className="w-full sticky z-50" style={tourPageStyle}>
                <div className="absolute inset-0 bg-gradient-to-t from-white" />
                <Header dark={true} />
            </div>
            <div className="container mx-auto flex flex-col justify-center gap-y-12 sm:gap-y-14 py-8 flex-grow">
                <TourInfo id={id} name={name} place={selectedTour.place} descriptions={selectedTour.descriptions} stats={stats} />
            </div>
            <Footer />
        </div>
    );
}

export default TourPage;