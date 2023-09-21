import SideBar from "../../SideBar";
import Title from "../components/Title";
import Review from "./Review";

const reviews = [
    {
        id: 1,
        name: "Amir Kazken",
        country: "Austria",
        stars: "1",
        text: "We started in Almaty in Kazakhstan. We had various guides and drivers at different stages. The constant was Yels and Yels. They maintained contact with us to make sure everything was going to plan. Elena developed a tour to suit our needs including time to get visas. The price was great value for money.",
        date: "16-05-2023",
    },
    {
        id: 2,
        name: "Zhenis Zhumagul",
        country: "Kazakhstan",
        stars: "3",
        text: "I decided to be a tourist in my own country and I was blown away by the beauty of our nature. The tour guides were knowledgeable and friendly. It was a great adventure!",
        date: "17-05-2023",
    },
    {
        id: 3,
        name: "Dias Mukhametrakhim",
        country: "Russia",
        stars: "3",
        text: "Our trip was an amazing experience! We visited some beautiful places in Kazakhstan. The organization was top-notch and our guide was very professional and passionate about their country.",
        date: "18-05-2023",
    },
    {
        id: 4,
        name: "Sultan Orazbay",
        country: "United States",
        stars: "4.5",
        text: "Kazakhstan surprised me in the best way! Its beautiful landscapes and rich culture made this one of my favorite trips. The tour company did an amazing job.",
        date: "19-05-2023",
    }
];

export default function Reviews() {
    const calculateAverageStars = (reviews) => {
        if (reviews.length === 0) {
            return 0;
        }

        const totalStars = reviews.reduce((sum, review) => {
            return sum + parseFloat(review.stars);
        }, 0);

        const averageStars = totalStars / reviews.length;

        return averageStars.toFixed(1);
    }

    return (
        <>
            <SideBar>
                <Title text={"Отзывы"} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <div className="py-4">
                        <div className="text-lg font-medium">
                            {`Количество отзывов ${reviews.length}`}
                        </div>
                        <div className="text-lg font-medium">
                            {`В среднем ${calculateAverageStars(reviews)} из 5 звезд`}
                        </div>
                        <div className="w-full max-w-7xl mx-auto flex flex-col gap-y-10 mt-4">
                            {reviews.map((review) => (
                                <Review data={review} />
                            ))}
                        </div>
                    </div>
                </div>
            </SideBar>
        </>
    );
}