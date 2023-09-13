import Review from "../components/Review";
import Title from "../components/Title";

const Reviews = () => {
    const data = [
        {
            id: 1,
            name: "Amir Kazken",
            country: "Austria",
            stars: "4.5",
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
            stars: "4",
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

    return data && data.length > 0 && (
        <div id="reviews" className="container mx-auto flex flex-col justify-center gap-y-12 sm:gap-y-14 py-8">
            <Title name={"reviews"} />
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-y-10">
                {data.slice(0, 3).map((review, reviewIdx) => (
                    <Review
                        key={review.id}
                        reviewIdx={reviewIdx}
                        name={review.name}
                        date={review.date}
                        stars={review.stars}
                        text={review.text} />
                ))}
            </div>
        </div>
    );
}

export default Reviews;