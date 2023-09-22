import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import axios from "../axios";
import backgroundImage from './assets/imgs/headers.jpg';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Notification from "./components/Notification";
import Title from "./components/Title";

const WriteReview = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Успешно сохранено!');
    const [subText, setSubText] = useState('Перенаправляем вас на главную страницу.');
    const [state, setState] = useState('success');

    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        stars: 1,
        comment: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleStarClick = (selectedRating) => {
        setFormData({
            ...formData,
            stars: selectedRating,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.name &&
            formData.email &&
            formData.stars &&
            formData.comment
        ) {
            try {
                const today = new Date().toISOString().slice(0, 10);
                formData.date = today;
                await axios.post('/reviews', formData);

                setShow(true);
                setText("Отзыв создан успешно!");
                setSubText("Перенаправляем вас на главную страницу!");
                setState("success");

                setTimeout(() => {
                    setShow(false);
                    navigate("/#reviews");
                }, 3500);
            } catch (error) {
                setShow(true);
                setText("Что то не так!");
                setSubText("Пожалуйста попробуйте позже!");
                setState("error");

                setTimeout(() => {
                    setShow(false);
                }, 3500);
                console.error(error);
            }
        } else {
            setShow(true);
            setText("Пустые данные!");
            setSubText("Пожалуйста заполните все данные!");
            setState("warn");

            setTimeout(() => {
                setShow(false);
            }, 3500);
            console.log('Please write all inputs');
        }
    };

    const allToursStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 35%',
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Notification show={show} setShow={setShow} text={text} subText={subText} state={state} />
            <div className="w-full sticky z-50" style={allToursStyle}>
                <div className="absolute inset-0 bg-gradient-to-t from-[#f4f7f7]" />
                <Header dark={true} />
            </div>
            <div className="container mx-auto flex flex-col justify-start items-start py-8 flex-grow gap-y-12 sm:gap-y-14">
                <Title name={t("writeReview.title")} />
                <form onSubmit={handleSubmit} className='w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start flex-wrap gap-y-5'>
                    <div className='w-full flex flex-col md:flex-row justify-start items-start gap-4'>
                        <div className='w-1/2'>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                {t("writeReview.name")}
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="focus:ring-sky-600 focus:border-sky-600 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                                    placeholder="Yelsultan"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                {t("writeReview.email")}
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="focus:ring-sky-600 focus:border-sky-600 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='w-full max-w-xs'>
                        <div className="block text-sm font-medium text-gray-700 mb-1">
                            {t("writeReview.rating")}: {formData.stars}
                        </div>
                        <div className='flex justify-start items-center gap-1'>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                    key={star}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className={`h-6 w-6 flex-shrink-0 cursor-pointer ${star <= formData.stars ? 'fill-yellow-400' : 'fill-gray-300'}`}
                                    onClick={() => handleStarClick(star)}
                                >
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                </svg>
                            ))}
                        </div>
                    </div>
                    <div className='w-full'>
                        <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                            {t("writeReview.comment")}
                        </label>
                        <div className="mt-1">
                            <textarea
                                rows={4}
                                name="comment"
                                id="comment"
                                className="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                value={formData.comment}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className='w-full flex justify-end md:justify-start items-center'>
                        <button
                            type='submit'
                            className='rounded-md px-4 py-2 text-sm sm:text-base font-semibold text-white shadow-sm bg-sky-600 hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500'
                        >
                            {t("writeReview.btnText")}
                        </button>
                    </div>
                </form>
            </div >
            <Footer />
        </div>
    );
}

export default WriteReview;
