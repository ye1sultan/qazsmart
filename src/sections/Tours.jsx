import Title from "../components/Title";
import Tour from "../components/Tour";

const Tours = () => {
    return (
        <div className="border-[2px] border-black container mx-auto min-h-screen flex flex-col justify-center gap-y-24 py-12">
            <Title name={"tours"} />
            <div className="w-full">
                <div className="w-full flex justify-center items-center flex-wrap gap-20">
                    <Tour />
                    <Tour />
                    <Tour />
                    <Tour />
                    <Tour />
                    <Tour />
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <button className="btn btn-wide btn-md lg:btn-lg bg-sky-400 font-medium">all tours</button>
            </div>
        </div>
    );
}

export default Tours;