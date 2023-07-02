import Title from "../components/Title";
import Tour from "../components/Tour";

const Tours = () => {
    return (
        <div className="container mx-auto pt-24">
            <Title name={"tours"} />
            <div className="pt-24 w-full mb-16">
                <div className="w-full flex justify-center items-center flex-wrap gap-20">
                    <Tour />
                    <Tour />
                    <Tour />
                    <Tour />
                    <Tour />
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <button className="btn btn-wide btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-sky-400 font-medium">all tours</button>
            </div>
        </div>
    );
}

export default Tours;