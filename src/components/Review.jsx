import backgroundImage from '../assets/imgs/kz.jpg';
// import StarRatings from 'react-rating-stars-component';

export default function Review({ name, country, stars, text }) {
    //max text size 350 characters
    const starRating = {
        value: stars, // rating value
        edit: false, // disable editing functionality
        color: 'rgb(100 116 139)',
        activeColor: 'rgb(125 211 252)', // custom active color
        isHalf: true
    };

    return (
        <div className='w-full flex justify-center items-center'>
            <div className="card lg:card-side bg-base-100 shadow-xl max-w-5xl py-6 mx-8 my-12">
                <figure>
                    <img src={backgroundImage} alt="Album" className="mask mask-circle max-h-60" />
                </figure>
                <div className="card-body flex flex-col justify-center items-start">
                    <div className='w-full flex justify-between items-center'>
                        <h2 className="card-title text-3xl">{name}</h2>
                        <div className="rating rating-md rating-half mr-2 hidden sm:block">
                            {/* <StarRatings {...starRating} size={30} /> */}
                        </div>
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        <h1 className="text-xl text-slate-500">{country}</h1>
                        <div className="rating rating-sm rating-half block sm:hidden ">
                            {/* <StarRatings {...starRating} size={18} /> */}
                        </div>
                    </div>
                    <p className="flex-grow-0 max-w-[500px] w-full text-lg">{text}</p>
                </div>
            </div>
        </div>
    );
}