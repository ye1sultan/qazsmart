import { Link } from "react-router-dom";

export default function Card({ name, description, photo, setCard }) {
    return (
        <div className="max-w-[240px]">
            <Link className="relative">
                <div className="relative w-full h-72 rounded-lg overflow-hidden">
                    <img
                        src="https://picsum.photos/2000/1000"
                        alt="Region"
                        className="w-full h-full object-center object-cover"
                    />
                </div>
                <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">{name}</p>
                </div>
                <svg onClick={() => setCard(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute right-2 top-2 w-6 h-6 cursor-pointer text-white mix-blend-lighten">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </Link>
        </div>
    );
}