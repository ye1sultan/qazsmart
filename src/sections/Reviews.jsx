import Review from "../components/Review";
import Title from "../components/Title";

const Reviews = () => {
    const data = [
        {
            name: "Amir Kazken",
            country: "Austria",
            stars: "4.5",
            text: "We started in Almaty in Kazakhstan. We had various guides and drivers at different stages. The constant was Yels and Yels. They maintained contact with us to make sure everything was going to plan. Elena developed a tour to suit our needs including time to get visas. The price was great value for money.",
            date: "16-05-2023",
        },
        {
            name: "Zhenis Zhumagul",
            country: "Kazakhstan",
            stars: "3",
            text: "I decided to be a tourist in my own country and I was blown away by the beauty of our nature. The tour guides were knowledgeable and friendly. It was a great adventure!",
            date: "17-05-2023",
        },
        {
            name: "Dias Mukhametrakhim",
            country: "Russia",
            stars: "4",
            text: "Our trip was an amazing experience! We visited some beautiful places in Kazakhstan. The organization was top-notch and our guide was very professional and passionate about their country.",
            date: "18-05-2023",
        },
        {
            name: "Sultan Orazbay",
            country: "United States",
            stars: "4.5",
            text: "Kazakhstan surprised me in the best way! Its beautiful landscapes and rich culture made this one of my favorite trips. The tour company did an amazing job.",
            date: "19-05-2023",
        }
    ];

    const formatDate = (inputDate) => {
        const [day, month, year] = inputDate.split("-").map(Number);
        const months = [
            "January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"
        ];

        // Create a Date object with the parsed values
        const formattedDate = new Date(year, month - 1, day);

        // Get the month name
        const monthName = months[formattedDate.getMonth()];

        // Get the day and year
        const dayNumber = formattedDate.getDate();
        const formattedYear = formattedDate.getFullYear();

        // Format the date as "Month dd, yyyy"
        const formattedDateString = `${monthName} ${dayNumber}, ${formattedYear}`;

        return formattedDateString;
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div id="reviews" className="container mx-auto flex flex-col justify-center gap-y-16 sm:gap-y-24 py-12">
            <Title name={"reviews"} />
            <div className="-my-10">
                {data.map((review, reviewIdx) => (
                    <div key={review.id} className="mx-auto flex text-sm text-gray-500 space-x-4 max-w-[1000px] px-20">
                        <div className="flex-none py-10">
                            <img
                                src="https://picsum.photos/2000/1000"
                                alt="Region"
                                className="w-10 h-10 bg-gray-100 rounded-full" />
                        </div>
                        <div className={classNames(reviewIdx === 0 ? '' : 'border-t border-gray-200', 'flex-1 py-10')}>
                            <h3 className="text-lg font-medium text-gray-900">{review.name}</h3>
                            <p>{formatDate(review.date)}</p>

                            <div className="flex items-center mt-4">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" key={rating}
                                        className={classNames(
                                            review.stars > rating ? 'text-yellow-400' : 'text-gray-300',
                                            'h-5 w-5 flex-shrink-0'
                                        )}>
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                ))}
                            </div>
                            <p className="sr-only">{review.stars} out of 5 stars</p>

                            <div
                                className="mt-4 prose prose-base max-w-none text-gray-600"
                                dangerouslySetInnerHTML={{ __html: review.text }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reviews;