import backgroundImage from '../assets/imgs/kz.jpg';

const New = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl max-w-5xl">
            <figure>
                <img src={backgroundImage} alt="Album" className='mask mask-square max-h-80' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p className='flex-grow-0 max-w-[600px] w-full'>“We started in Almaty in Kazakhstan. We had various guides and drivers at different stages. The constant was Yels and Yels. They maintained contact with us to make sure everything was going to plan. Elena developed a tour to suit our needs including time to get visas. The price was great value for money."</p>
                <div className="card-actions justify-end">
                    <button className="btn bg   -sky-400">Listen</button>
                </div>
            </div>
        </div>
    );
}

export default New;