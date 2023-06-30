import backgroundImage from '../assets/imgs/kz.jpg';

const Review = ({ id }) => {
    const isEven = id % 2 === 0;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl max-w-5xl py-6 mx-4" style={{ marginLeft: isEven ? "auto" : "16px" }}>
            <figure>
                <img src={backgroundImage} alt="Album" className="mask mask-circle max-h-60" />
            </figure>
            <div className="card-body flex flex-col justify-center items-start">
                <h2 className="card-title text-4xl">Amir Kazken</h2>
                <h1 className="text-xl">Austria</h1>
                <p className="flex-grow-0 max-w-[600px] w-full">“We started in Almaty in Kazakhstan. We had various guides and drivers at different stages. The constant was Yels and Yels. They maintained contact with us to make sure everything was going to plan. Elena developed a tour to suit our needs including time to get visas. The price was great value for money."</p>
            </div>
        </div>
    );
}

export default Review;