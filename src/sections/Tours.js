import Title from "../components/Title";
import Tour from "../components/Tour";

const Tours = () => {
    return (
        <div className="container mx-auto py-24">
            <Title name={"tours"} />
            <div className="pt-24 w-full">
                <div className="w-full flex justify-center items-center flex-wrap gap-20">
                    <Tour />
                    <Tour />
                    <Tour />
                </div>
            </div>
        </div>
    );
}

export default Tours;