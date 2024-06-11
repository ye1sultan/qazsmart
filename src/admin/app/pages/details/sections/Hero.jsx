import React, { useState } from "react";

export default function Hero() {
    const [heroData, setHeroData] = useState({
        text: "Добро пожаловать в Казахстан!",
        subText: "Начните путешествовать с нами!",
        btnText: "Начать путешествие!",
        imageUrl: "https://picsum.photos/2000/1000",
    });

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setHeroData({
                ...heroData,
                imageUrl,
            });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setHeroData({
            ...heroData,
            [name]: value,
        });
    };

    const handleButtonClick = () => {
        if (
            heroData.text &&
            heroData.subText &&
            heroData.btnText &&
            heroData.imageUrl
        ) {
            console.log(heroData);
        } else {
            alert("Заполните всю информацию!");
            console.error("Please fill in all required fields.");
        }
    };

    return (
        <>
            <div className="w-full flex flex-col justify-center items-start">
                <div className="w-full">
                    <div className="text-lg font-medium">
                        Главная секция
                    </div>
                    <div className="w-full flex flex-col gap-y-2">
                        <div className="max-w-lg w-full mt-2 flex flex-col md:flex-row justify-center items-center gap-2">
                            <div className="w-full">
                                <label htmlFor="text" className="block text-sm font-medium text-gray-700">
                                    Текст
                                </label>
                                <input
                                    type="text"
                                    name="text"
                                    id="text"
                                    className="mt-1 w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Добро пожаловать!"
                                    value={heroData.text}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="subText" className="block text-sm font-medium text-gray-700">
                                    Подтекст
                                </label>
                                <input
                                    type="text"
                                    name="subText"
                                    id="subText"
                                    className="mt-1 w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Путешествуйте по стране с нами!"
                                    value={heroData.subText}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="w-full flex flex-row justify-start items-end gap-x-6 gap-y-2">
                            <div>
                                <label htmlFor="btnText" className="block text-sm font-medium text-gray-700">
                                    Текст кнопки
                                </label>
                                <input
                                    type="text"
                                    name="btnText"
                                    id="btnText"
                                    className="mt-1 max-w-xs w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Начать путешествие!"
                                    value={heroData.btnText}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <button className="rounded-md h-fit px-3.5 py-2.5 text-sm sm:text-base font-semibold text-white shadow-sm bg-sky-600 hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
                                {heroData.btnText}
                            </button>
                        </div>
                        <div className="max-w-lg w-full flex flex-col justify-start items-start">
                            <div className="w-full flex justify-between items-center">
                                <div className="block text-sm font-medium text-gray-700">
                                    Изображение
                                </div>
                                <label
                                    htmlFor="imageInput"
                                    className="mt-1 self-end rounded-md px-2 py-2 text-xs sm:text-base font-semibold text-white shadow-sm bg-sky-600 hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 cursor-pointer"
                                >
                                    Поменять
                                </label>
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                                id="imageInput"
                            />
                            <img className="mt-1 rounded-md" src={heroData.imageUrl} alt="" />
                        </div>
                        <div className="max-w-lg w-full flex justify-end">
                            <button
                                type="button"
                                onClick={handleButtonClick}
                                className="self-end inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                            >
                                Сохранить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}