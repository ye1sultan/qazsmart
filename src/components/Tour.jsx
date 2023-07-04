import { useState } from 'react';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import backgroundImage from '../assets/imgs/kz.jpg';

export default function Tour({ name, text, date, cost }) {
    const [likeColor, setLikeColor] = useState("#000000");

    const handleLike = () => {
        setLikeColor(likeColor === "#000000" ? "#ff0000" : "#000000");
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-8 sm:mx-4">
            <figure>
                <img src={backgroundImage} alt="Tours" />
            </figure>
            <div className="card-body relative">
                <div className="absolute top-0 translate-y-[-50%] left-[50%] translate-x-[-50%] bg-white shadow shadow-sky-100 h-[40px] w-[70%] rounded-lg">
                    <div className="w-full h-full flex justify-evenly items-center">
                        <div className="text-lg">
                            {date}
                        </div>
                        <div className="text-lg">
                            {cost}
                        </div>
                    </div>
                </div>
                <h2 className="card-title text-2xl capitalize">{name}</h2>
                <p className="line-clamp-4 mb-2 text-lg">{text}</p>
                <div className="card-actions w-full flex justify-between items-center">
                    <FontAwesomeIcon icon={faHeart} size='xl' className='pl-2 cursor-pointer' style={{ color: likeColor }} onClick={() => handleLike()} />
                    <button className="btn h-10 sm:h-12 bg-sky-300 font-medium min-h-0">More</button>
                </div>
            </div>
        </div>
    );
}