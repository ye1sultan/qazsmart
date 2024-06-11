import React from 'react';
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../../../../axios';
import SideBar from "../../SideBar";
import Notification from "../components/Notification";
import Title from "../components/Title";
import Map from "./CreateMap";

export default function CreateActivity() {
    const navigate = useNavigate();

    const [descNum, setDescNum] = useState(1);
    const [imageUrl, setImageUrl] = useState('');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Успешно сохранено!');
    const [subText, setSubText] = useState('Перенаправляем вас на главную страницу.');
    const [state, setState] = useState('success');
    const inputFileRef = useRef(null);

    const increaseDescNum = () => {
        if (descNum < 4) {
            setDescNum(prev => prev + 1);
            setFormData(prevFormData => ({
                ...prevFormData,
                descriptions: [...prevFormData.descriptions, { name: "", description: "" }],
            }));
        }
    };

    const decreaseDescNum = () => {
        if (descNum > 1) {
            setDescNum(prev => prev - 1);
            setFormData(prevFormData => ({
                ...prevFormData,
                descriptions: prevFormData.descriptions.slice(0, -1),
            }));
        }
    };

    const handleCancelClick = () => {
        navigate("/admin/activities");
    }

    const [formData, setFormData] = useState({
        name: {
            en: "",
            ru: ""
        },
        place: {
            en: "",
            ru: ""
        },
        text: {
            en: "",
            ru: ""
        },
        date: "",
        price: "",
        category: {
            en: "",
            ru: ""
        },
        descriptions: Array(descNum).fill({
            name: {
                en: "",
                ru: ""
            },
            description: {
                en: "",
                ru: ""
            }
        }),
        coordinates: { lat: "", lng: "" },
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'date' || name === 'price') {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        } else {
            const [fieldName, lang] = name.split('.');

            setFormData((prevData) => ({
                ...prevData,
                [fieldName]: {
                    ...prevData[fieldName],
                    [lang]: value,
                },
            }));
        }
    };

    const handleDescriptionNameChange = (index, value, lang) => {
        const updatedDescriptions = [...formData.descriptions];
        if (!updatedDescriptions[index].name) {
            updatedDescriptions[index].name = { [lang]: value };
        } else {
            updatedDescriptions[index].name[lang] = value;
        }
        setFormData({
            ...formData,
            descriptions: updatedDescriptions,
        });
    };

    const handleDescriptionDescriptionChange = (index, value, lang) => {
        const updatedDescriptions = [...formData.descriptions];
        if (!updatedDescriptions[index].description) {
            updatedDescriptions[index].description = { [lang]: value };
        } else {
            updatedDescriptions[index].description[lang] = value;
        }
        setFormData({
            ...formData,
            descriptions: updatedDescriptions,
        });
    };

    const handleChangeFile = async (e) => {
        try {
            const formData = new FormData();
            const file = e.target.files[0];
            formData.append('image', file);
            const { data } = await axios.post('/upload', formData);
            setImageUrl(data.url);
        } catch (error) {
            setShow(true);
            setText("Не удалось загрузить файл!");
            setSubText("Попробуйте файл другого типа!");
            setState("warn");
            setTimeout(() => {
                setShow(false);
            }, 3500);

            console.warn(error);
        }
    }

    const removeImage = () => {
        setImageUrl('');
    }

    const getNestedValue = (obj, path) => {
        return path.split('.').reduce((acc, curr) => (acc && acc[curr] !== undefined ? acc[curr] : null), obj);
    }

    const handleCreateClick = async () => {
        const requiredFields = [
            'name.en',
            'name.ru',
            'place.en',
            'place.ru',
            'text.en',
            'text.ru',
            'date',
            'price',
            'category.en',
            'category.ru',
            'coordinates.lat',
            'coordinates.lng',
        ];

        const hasEmptyField = requiredFields.some((fieldName) => {
            const fieldValue = getNestedValue(formData, fieldName);
            return !fieldValue || (typeof fieldValue === 'object' && Object.values(fieldValue).some((v) => !v));
        });

        const hasEmptyDescriptions = formData.descriptions.some((desc) => {
            return !desc.name.en || !desc.name.ru || !desc.description.en || !desc.description.ru;
        });

        if (!hasEmptyField && !hasEmptyDescriptions && imageUrl) {
            try {
                formData.imageUrl = imageUrl;
                const { data } = await axios.post('/activities', formData);
                console.log(data);

                setShow(true);
                setText("Активность создана успешно!");
                setSubText("Перенаправляем вас на главную страницу!");
                setState("success");

                setTimeout(() => {
                    setShow(false);
                    navigate("/admin/activities");
                }, 3500);
            } catch (error) {
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
            console.warn("Please fill in all required fields.");
        }
    };

    return (
        <>
            <SideBar>
                <Notification show={show} setShow={setShow} text={text} subText={subText} state={state} />
                <Title text="Создать активность" />
                <div className="w-full flex justify-start items-center">
                    <div className="p-4 rounded-md max-w-3xl w-full relative">
                        <div className="w-full flex flex-col justify-start items-start gap-y-4 md:px-4">
                            <div className="w-full flex flex-col md:flex-row justify-start items-start gap-y-4 gap-x-4">
                                <div className="max-w-sm w-full">
                                    <label htmlFor="nameEn" className="block text-sm font-medium text-gray-700">
                                        Название на английском
                                    </label>
                                    <input
                                        type="text"
                                        name="name.en"
                                        id="nameEn"
                                        className="mt-1 w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Charyn Canyon"
                                        value={formData.name.en}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="max-w-sm w-full">
                                    <label htmlFor="nameRu" className="block text-sm font-medium text-gray-700">
                                        Название на русском
                                    </label>
                                    <input
                                        type="text"
                                        name="name.ru"
                                        id="nameRu"
                                        className="mt-1 w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Чарынский каньон"
                                        value={formData.name.ru}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="w-full flex flex-col md:flex-row justify-start items-start gap-y-4 gap-x-4">
                                <div className="max-w-sm w-full">
                                    <label htmlFor="placeEn" className="block text-sm font-medium text-gray-700">
                                        Место на английском
                                    </label>
                                    <input
                                        type="text"
                                        name="place.en"
                                        id="placeEn"
                                        className="mt-1 w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Kazakhstan / Almaty"
                                        value={formData.place.en}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="max-w-sm w-full">
                                    <label htmlFor="placeRu" className="block text-sm font-medium text-gray-700">
                                        Место на русском
                                    </label>
                                    <input
                                        type="text"
                                        name="place.ru"
                                        id="placeRu"
                                        className="mt-1 w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Казахстан / Алматы"
                                        value={formData.place.ru}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="w-full flex flex-col md:flex-row justify-start items-start gap-y-4 gap-x-4">
                                <div className="w-full">
                                    <label htmlFor="textEn" className="block text-sm font-medium text-gray-700">
                                        Краткое описание на английском
                                    </label>
                                    <textarea
                                        type="text"
                                        name="text.en"
                                        id="textEn"
                                        className="mt-1 w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-auto"
                                        placeholder="Описание"
                                        value={formData.text.en}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="textRu" className="block text-sm font-medium text-gray-700">
                                        Краткое описание на русском
                                    </label>
                                    <textarea
                                        type="text"
                                        name="text.ru"
                                        id="textRu"
                                        className="mt-1 w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-auto"
                                        placeholder="Описание"
                                        value={formData.text.ru}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="w-full flex flex-col md:flex-row justify-start items-start gap-y-4 gap-x-4">
                                <div className="w-full">
                                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                                        Дата
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        className="mt-1 w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="23-11-2023"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                        Цена
                                    </label>
                                    <input
                                        type="text"
                                        name="price"
                                        id="price"
                                        className="mt-1 w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="35,000 ₸"
                                        value={formData.price}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="w-full flex gap-x-2">
                                <div className="w-full">
                                    <label htmlFor="categoryEn" className="block text-sm font-medium text-gray-700">
                                        Категория на английском
                                    </label>
                                    <input
                                        type="text"
                                        name="category.en"
                                        id="categoryEn"
                                        className="mt-1 w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Туры"
                                        value={formData.category.en}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="categoryRu" className="block text-sm font-medium text-gray-700">
                                        Категория на русском
                                    </label>
                                    <input
                                        type="text"
                                        name="category.ru"
                                        id="categoryRu"
                                        className="mt-1 w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Туры"
                                        value={formData.category.ru}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="w-full flex justify-between items-center">
                                <div className="block text-base font-medium text-gray-700">
                                    Расширенное описание
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <button
                                        type="button"
                                        onClick={increaseDescNum}
                                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                                    >
                                        Добавить
                                    </button>
                                    <button
                                        type="button"
                                        onClick={decreaseDescNum}
                                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                                    >
                                        Убрать
                                    </button>
                                </div>
                            </div>
                            {formData.descriptions.map((desc, index) => (
                                <div key={index} className="w-full border-b-2 border-gray-300">
                                    <div>
                                        <label htmlFor={`descName${index}En`} className="block text-sm font-medium text-gray-700">
                                            {` Описание № ${index + 1} на английском`}
                                        </label>
                                        <input
                                            type="text"
                                            name={`descName${index}.en`}
                                            id={`descName${index}En`}
                                            className="mt-1 max-w-sm w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder={`Название описания № ${index + 1}`}
                                            value={desc.name.en}
                                            onChange={(e) => handleDescriptionNameChange(index, e.target.value, "en")}
                                            required
                                        />
                                        <textarea
                                            type="text"
                                            name={`descText${index}.en`}
                                            id={`descText${index}En`}
                                            className="mt-1 w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder={`Текст описания № ${index + 1}`}
                                            value={desc.description.en}
                                            onChange={(e) => handleDescriptionDescriptionChange(index, e.target.value, "en")}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor={`descName${index}Ru`} className="block text-sm font-medium text-gray-700">
                                            {` Описание № ${index + 1} на русском`}
                                        </label>
                                        <input
                                            type="text"
                                            name={`descName${index}.ru`}
                                            id={`descName${index}Ru`}
                                            className="mt-1 max-w-sm w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder={`Название описания № ${index + 1}`}
                                            value={desc.name.ru}
                                            onChange={(e) => handleDescriptionNameChange(index, e.target.value, "ru")}
                                            required
                                        />
                                        <textarea
                                            type="text"
                                            name={`descText${index}.ru`}
                                            id={`descText${index}Ru`}
                                            className="mt-1 w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder={`Текст описания № ${index + 1}`}
                                            value={desc.description.ru}
                                            onChange={(e) => handleDescriptionDescriptionChange(index, e.target.value, "ru")}
                                            required
                                        />
                                    </div>
                                </div>
                            ))}
                            <button className="self-start inline-flex items-center px-2 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500" onClick={() => inputFileRef.current.click()}>Загрузить фото</button>
                            <input ref={inputFileRef} type="file" onChange={handleChangeFile} hidden />
                            {imageUrl && (
                                <>
                                    <button className="inline-flex items-center px-2 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500" onClick={removeImage}>Удалить файл</button>
                                    <img src={`${process.env.REACT_APP_BASE_API}${imageUrl}`} alt="" />
                                </>
                            )}
                            <Map setFormData={setFormData} />
                            <div className="mt-4 mr-8 w-full flex justify-end items-center gap-x-4">
                                <button
                                    type="button"
                                    onClick={handleCancelClick}
                                    className="self-end inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-900 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                                >
                                    Отмена
                                </button>
                                <button
                                    type="button"
                                    onClick={handleCreateClick}
                                    className="self-end inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                                >
                                    Создать
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </SideBar>
        </>
    );
}