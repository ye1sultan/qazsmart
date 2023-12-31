import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const isActivityLiked = (activityId) => {
    const likedActivities = JSON.parse(localStorage.getItem('likedActivities')) || [];
    return likedActivities.includes(activityId);
};

const toggleLike = (activityId) => {
    let likedActivities = JSON.parse(localStorage.getItem('likedActivities')) || [];

    if (likedActivities.includes(activityId)) {
        likedActivities = likedActivities.filter((id) => id !== activityId);
    } else {
        likedActivities.push(activityId);
    }

    localStorage.setItem('likedActivities', JSON.stringify(likedActivities));
};

export default function Activity({ _id, name, text, date, price, category, imageUrl }) {
    const [like, setLike] = useState(isActivityLiked(_id));
    const { i18n } = useTranslation();

    const handleLike = () => {
        toggleLike(_id);
        setLike(!like);
    };

    const formatDate = (inputDate) => {
        const parts = inputDate.split('-');

        const day = parts[2];
        const month = getMonthName(parts[1]);
        const year = parts[0];

        return `${month} ${day}, ${year}`;
    }

    const getMonthName = (month) => {
        const selectedLanguage = i18n.language;

        const monthsEn = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const monthsRu = [
            "Январь", "Февраль", "Март", "Априль", "Май", "Июнь",
            "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
        ];

        return selectedLanguage === 'en' ? monthsEn[parseInt(month) - 1] : monthsRu[parseInt(month) - 1];
    }

    return (
        <div className="group relative w-[280px] min-h-[400px] rounded-xl border border-gray-200 shadow-lg">
            <div className="relative">
                <div className="relative w-full h-56 rounded-tl-lg rounded-tr-lg overflow-hidden">
                    <img
                        src={`${process.env.REACT_APP_BASE_API}${imageUrl}`}
                        alt="Region"
                        className="w-full h-full object-center object-cover"
                    />
                </div>
                <div className="relative mt-4 px-4">
                    <p className='text-sm mt-2 text-gray-600'>{category}</p>
                    <h3 className="text-lg font-medium text-gray-900 capitalize whitespace-nowrap truncate">{name}</h3>
                    <p className='line-clamp-3 text-sm mt-2 text-gray-600'>{text}</p>
                </div>
                <div className="absolute top-0 inset-x-0 h-56 rounded-tl-lg rounded-tr-lg p-4 flex items-end justify-end overflow-hidden">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black opacity-50"
                    />
                    <div className='relative w-full flex justify-between items-center'>
                        <p className="text-md font-semibold text-white">{formatDate(date)}</p>
                        <p className="text-md font-semibold text-white">{price}</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex items-center justify-between my-5 px-4'>
                {!like ? (
                    <svg onClick={handleLike} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                ) : (
                    <svg onClick={handleLike} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="fill-red-500" className="w-6 h-6 cursor-pointer fill-red-500">
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                )}
                <Link to={`/activities/${_id}`} className="w-fit bg-sky-600 rounded-md py-2 px-8 text-sm font-medium text-white hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
                    See
                </Link>
            </div>
        </div>
    );
}