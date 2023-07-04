import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import backgroundImage from '../assets/imgs/kz.jpg';
import { useState } from 'react';

export default function Tour() {
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
                            16-7-2023
                        </div>
                        <div className="text-lg">
                            300$
                        </div>
                    </div>
                </div>
                <h2 className="card-title text-2xl">Kaindy lake!</h2>
                <p className="line-clamp-4 mb-2 text-lg">Lake Kaindy (Kazakh: Qaiyñdy kölı, meaning the "birch tree lake" or landslide) is a 400-meter-long (1,300 ft) lake located in Kazakhstan. The lake reaches depths of nearly 30 meters (98 ft). It is located 129 kilometers (80 mi) east-southeast of the city of Almaty and is 2,000 meters (6,600 ft) above sea level.</p>
                <div className="card-actions w-full flex justify-between items-center">
                    <FontAwesomeIcon icon={faHeart} size='xl' className='pl-2 cursor-pointer' style={{ color: likeColor }} onClick={() => handleLike()} />
                    <button className="btn h-10 sm:h-12 bg-sky-300 font-medium min-h-0">More</button>
                </div>
            </div>
        </div>
    );
}