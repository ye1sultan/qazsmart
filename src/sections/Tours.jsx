import Title from "../components/Title";
import Tour from "../components/Tour";

const Tours = () => {
    return (
        <div className="container mx-auto flex flex-col justify-center gap-y-16 sm:gap-y-24 py-12">
            <Title name={"tours"} />
            <div className="w-full flex justify-center items-center flex-wrap gap-20">
                <Tour />
                <Tour />
                <Tour />
                <Tour />
                <Tour />
            </div>
            <div className="w-full flex justify-center items-center">
                <button className="btn w-56 sm:btn-wide btn-md lg:btn-lg bg-sky-300 font-medium">all tours</button>
            </div>
        </div>
    );
}

export default Tours;