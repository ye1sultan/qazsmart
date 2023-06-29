import Review from "../components/Review";
import Title from "../components/Title";

const Reviews = () => {
    return (
        <div className="container mx-auto py-24">
            <Title name={"reviews"} />
            <div className="pt-24 w-full">
                <div className="w-full flex justify-start items-center flex-wrap gap-20 even:ml-auto">
                    <Review id={1} />
                    <Review id={2} />
                    <Review id={3} />
                </div>
            </div>
        </div>
    );
}

export default Reviews;