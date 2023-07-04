import backgroundImage from '../assets/imgs/kz.jpg';

export default function Review({ id }) {
    //max text size 350 characters
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl max-w-5xl py-6 mx-8">
            <figure>
                <img src={backgroundImage} alt="Album" className="mask mask-circle max-h-60" />
            </figure>
            <div className="card-body flex flex-col justify-center items-start">
                <div className='w-full flex justify-between items-center'>
                    <h2 className="card-title text-4xl">Amir Kazken</h2>
                    <div className="rating rating-md rating-half mr-2 hidden sm:block">
                        <input type="radio" className="rating-hidden cursor-default" disabled />
                        <input type="radio" className="bg-sky-300 cursor-default mask mask-star-2 mask-half-1" disabled />
                        <input type="radio" className="bg-sky-300 cursor-default mask mask-star-2 mask-half-2" disabled />
                        <input type="radio" className="bg-sky-300 cursor-default mask mask-star-2 mask-half-1" disabled />
                        <input type="radio" className="bg-sky-300 cursor-default mask mask-star-2 mask-half-2" disabled />
                        <input type="radio" className="bg-sky-300 cursor-default mask mask-star-2 mask-half-1" disabled />
                        <input type="radio" className="bg-sky-300 cursor-default mask mask-star-2 mask-half-2" disabled />
                        <input type="radio" className="bg-sky-300 cursor-default mask mask-star-2 mask-half-1" disabled checked />
                        <input type="radio" className="bg-sky-300 cursor-default mask mask-star-2 mask-half-2" disabled />
                        <input type="radio" className="bg-sky-300 cursor-default mask mask-star-2 mask-half-1" disabled />
                        <input type="radio" className="bg-sky-300 cursor-default mask mask-star-2 mask-half-2" disabled />
                    </div>
                </div>
                <div className='w-full flex justify-between items-center'>
                    <h1 className="text-xl text-slate-500">Austria</h1>
                    <div className="rating rating-sm rating-half block sm:hidden">
                        <input type="radio" className="rating-hidden cursor-default" disabled />
                        <input type="radio" className="bg-sky-300 cursor-default mask mask-star-2 mask-half-1" disabled />
                        <input type="radio" className="bg-sky-300 cursor-default mask mask-star-2 mask-half-2" disabled />
                        <input type="radio" className="bg-sky-300 cursor-default mask mask-star-2 mask-half-1" disabled />
                        <input type="radio" className="bg-sky-300 cursor-default mask mask-star-2 mask-half-2" disabled />
                        <input type="radio" className="bg-sky-300 cursor-default mask mask-star-2 mask-half-1" disabled />
                        <input type="radio" className="bg-sky-300 cursor-default mask mask-star-2 mask-half-2" disabled />
                        <input type="radio" className="bg-sky-300 cursor-default mask mask-star-2 mask-half-1" checked disabled />
                        <input type="radio" className="bg-sky-300 cursor-default mask mask-star-2 mask-half-2" disabled />
                        <input type="radio" className="bg-sky-300 cursor-default mask mask-star-2 mask-half-1" disabled />
                        <input type="radio" className="bg-sky-300 cursor-default mask mask-star-2 mask-half-2" disabled />
                    </div>
                </div>
                <p className="flex-grow-0 max-w-[500px] w-full text-lg">"We started in Almaty in Kazakhstan. We had various guides and drivers at different stages. The constant was Yels and Yels. They maintained contact with us to make sure everything was going to plan. Elena developed a tour to suit our needs including time to get visas. The price was great value for money."</p>
            </div>
        </div>
    );
}