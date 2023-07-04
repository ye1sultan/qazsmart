import { useEffect, useState } from "react";
import Review from "../components/Review";
import Title from "../components/Title";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/custom.css";

const Reviews = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const data = [
        {
            name: "Amir Kazken",
            country: "Austria",
            stars: "4.5",
            text: "We started in Almaty in Kazakhstan. We had various guides and drivers at different stages. The constant was Yels and Yels. They maintained contact with us to make sure everything was going to plan. Elena developed a tour to suit our needs including time to get visas. The price was great value for money."
        },
        {
            name: "Zhenis Zhumagul",
            country: "Kazakhstan",
            stars: "5",
            text: "I decided to be a tourist in my own country and I was blown away by the beauty of our nature. The tour guides were knowledgeable and friendly. It was a great adventure!"
        },
        {
            name: "Dias Mukhametrakhim",
            country: "Russia",
            stars: "4",
            text: "Our trip was an amazing experience! We visited some beautiful places in Kazakhstan. The organization was top-notch and our guide was very professional and passionate about their country."
        },
        {
            name: "Sultan Orazbay",
            country: "United States",
            stars: "4.5",
            text: "Kazakhstan surprised me in the best way! Its beautiful landscapes and rich culture made this one of my favorite trips. The tour company did an amazing job."
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div id="reviews" className="container mx-auto flex flex-col justify-center gap-y-16 sm:gap-y-24 py-12">
            <Title name={"reviews"} />
            {loading ? <div className="w-full flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div> : data.length > 0 ?
                (
                    <Slider {...settings}>
                        {data.map((review, index) =>
                            <Review key={index} name={review.name} country={review.country} stars={review.stars} text={review.text} />
                        )}
                    </Slider>
                ) : <div className="w-full flex justify-center items-center text-2xl">No reviews yet...</div>
            }
        </div>
    );
}

export default Reviews;