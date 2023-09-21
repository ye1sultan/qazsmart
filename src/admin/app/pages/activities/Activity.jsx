import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchRemoveActivities } from "../../../../redux/slices/activities";
import Alert from "../components/Alert";
import Notification from "../components/Notification";

const formatDate = (inputDate) => {
    const parts = inputDate.split('-');

    const day = parts[0];
    const month = getMonthName(parts[1]);
    const year = parts[2];

    return `${month} ${day}, ${year}`;
}

const getMonthName = (month) => {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return months[parseInt(month) - 1];
}

export default function Activity({ _id, name, text, date, price, category, imageUrl, activity }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    
    const [show, setShow] = useState(false);
    const [textN, setTextN] = useState('Успешно удалено!');
    const [state, setState] = useState('success');

    const handleDelete = () => {
        setOpen(true);
    }

    const handleEdit = () => {
        navigate('/admin/edit-activity', { state: activity });
    }

    const deleteActivity = () => {
        dispatch(fetchRemoveActivities(_id));

        setShow(true);
        setTextN("Активность успешно удалена!");
        setState("success");
        setTimeout(() => {
            setShow(false);
        }, 3500);
    }

    return (
        <>
            <Alert
                open={open}
                setOpen={setOpen}
                text={"Удалить активность?"}
                subText={"Вы уверены что хотите удалить активность? Действие нельзя будет отменить."}
                btnText={"Удалить"}
                deleteClicked={deleteActivity}
            />
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
                    <button onClick={handleEdit} type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer text-gray-900 hover:text-gray-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                    </button>
                    <button onClick={handleDelete} type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer text-red-600 hover:text-red-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </button>
                </div>
            </div>
            <Notification show={show} setShow={setShow} text={textN} state={state} />
        </>
    );
}