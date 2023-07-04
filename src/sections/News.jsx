import Title from "../components/Title";
import New from "../components/News";

const News = () => {
    return (
        <div id="news" className="container mx-auto flex flex-col py-12">
            <Title name={"news"} />
            <div className="flex-grow flex justify-center items-center my-16 sm:my-32">
                <New />
            </div>
        </div>
    );
}

export default News;