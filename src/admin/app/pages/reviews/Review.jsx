import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRemoveReviews } from "../../../../redux/slices/reviews";
import Alert from "../components/Alert";
import Notification from "../components/Notification";

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
}

export default function Review({ data }) {
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const [show, setShow] = useState(false);
    const [textN, setTextN] = useState('Успешно удалено!');
    const [state, setState] = useState('success');

    const handleDelete = () => {
        setOpen(true);
    }

    const deleteReview = () => {
        dispatch(fetchRemoveReviews(data._id));

        setShow(true);
        setTextN("Отзыв успешно удален!");
        setState("success");
        setTimeout(() => {
            setShow(false);
        }, 3500);
    }

    function formatDateToLongDate(isoDateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(isoDateString);
        return date.toLocaleDateString('en-US', options);
    }

    return (
        <>
            <Alert
                open={open}
                setOpen={setOpen}
                text={"Удалить отзыв?"}
                subText={"Вы уверены что хотите удалить отзыв? Действие нельзя будет отменить."}
                btnText={"Удалить"}
                deleteClicked={deleteReview}
            />
            <div className="flex text-sm text-gray-500 space-x-4 max-w-[900px] px-10 rounded-xl border border-gray-200 shadow-lg relative">
                <button onClick={handleDelete} type="button" className="absolute top-4 right-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer text-red-600 hover:text-red-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </button>
                <div className="flex-none py-6">
                    <img
                        src="https://picsum.photos/2000/1000"
                        alt="Region"
                        className="w-10 h-10 bg-gray-100 rounded-full" />
                </div>
                <div className="py-5">
                    <h3 className="text-lg font-medium text-gray-900">{data.name}</h3>
                    <p>{formatDateToLongDate(data.date)}</p>

                    <div className="flex items-center mt-4">
                        {[0, 1, 2, 3, 4].map((rating) => (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" key={rating}
                                className={classNames(
                                    data.stars > rating ? 'text-yellow-400' : 'text-gray-300',
                                    'h-5 w-5 flex-shrink-0'
                                )}>
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
                        ))}
                    </div>
                    <p className="sr-only">{data.stars} из 5 звезд</p>
                    <div
                        className="mt-4 prose prose-base max-w-none text-gray-600"
                        dangerouslySetInnerHTML={{ __html: data.comment }}
                    />
                </div>
            </div>
            <Notification show={show} setShow={setShow} text={textN} state={state} />
        </>
    );
}
