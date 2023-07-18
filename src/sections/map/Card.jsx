import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Card({ name, description, photo, setCard }) {
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl z-[9999]">
            <figure className="w-full flex items-center justify-center max-h-56">
                <img className="w-full object-cover" src="https://picsum.photos/300/200" alt="Shoes" />
            </figure>
            <FontAwesomeIcon icon={faXmark} className='absolute top-3 right-3 cursor-pointer text-white' size='xl' onClick={() => setCard(false)} />
            <div className="card-body">
                <h2 className="card-title text-2xl capitalize">{name}</h2>
                <p className="line-clamp-4 mb-2 text-lg">{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn h-10 sm:h-12 bg-sky-300 font-medium min-h-0">See</button>
                </div>
            </div>
        </div>
    );
}