import Review from "../components/Review";
import Title from "../components/Title";

const Reviews = () => {
    return (
        <div id="reviews" className="container mx-auto flex flex-col justify-center gap-y-16 sm:gap-y-24 py-12">
            <Title name={"reviews"} />
            <div className="w-full flex justify-center items-center flex-wrap gap-20">
                <Review id={1} />
                <Review id={2} />
            </div>
        </div>
    );
}

export default Reviews;