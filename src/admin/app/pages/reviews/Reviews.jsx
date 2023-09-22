import { useDispatch, useSelector } from "react-redux";
import SideBar from "../../SideBar";
import Title from "../components/Title";
import Review from "./Review";
import { useEffect } from "react";
import { fetchReviews } from "../../../../redux/slices/reviews";

export default function Reviews() {
    const dispatch = useDispatch();
    const { reviews } = useSelector((state) => state.reviews);

    useEffect(() => {
        dispatch(fetchReviews());
    }, []);

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
                            {`Количество отзывов ${reviews.items.length}`}
                        </div>
                        <div className="text-lg font-medium">
                            {`В среднем ${calculateAverageStars(reviews.items)} из 5 звезд`}
                        </div>
                        <div className="w-full max-w-7xl mx-auto flex flex-col gap-y-10 mt-4">
                            {reviews.items.map((review) => (
                                <Review data={review} />
                            ))}
                        </div>
                    </div>
                </div>
            </SideBar>
        </>
    );
}
