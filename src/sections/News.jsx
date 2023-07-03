import Title from "../components/Title";
import New from "../components/News";

const News = () => {
    return (
        <div className="border-[2px] border-black container mx-auto min-h-screen flex flex-col py-12">
            <Title name={"news"} />
            <div className="flex-grow flex justify-center items-center">
                <New />
            </div>
        </div>
    );
}

export default News;
