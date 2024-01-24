import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { fetchAuth, selectIsAuth } from '../../redux/slices/auth';
import Notification from '../app/pages/components/Notification';

export default function Login() {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);

    const [show, setShow] = useState(false);
    const [text, setText] = useState('Успешно сохранено!');
    const [subText, setSubText] = useState('Перенаправляем вас на главную страницу.');
    const [state, setState] = useState('success');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange',
    });

    const onSubmit = async (values) => {
        const data = await dispatch(fetchAuth(values));

        if (!data.payload) {
            setShow(true);
            setText("Не удалось авторизоваться!");
            setSubText("Попробуйте позже.");
            setState("error");

            setTimeout(() => {
                setShow(false);
            }, 3500);

            return;
        }

        if ('token' in data.payload) {
            localStorage.setItem('token', data.payload.token);
        }
    }

    if (isAuth) {
        return <Navigate to={'/admin/activities'} />;
    }

    return (
        <>
            <Notification show={show} setShow={setShow} text={text} subText={subText} state={state} />
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h1 className="text-5xl font-semibold navtexts text-center text-indigo-400">
                        <span className="sr-only">QazSmart</span>
                        QS
                    </h1>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Авторизация
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-xs">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Электронная почта
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    {...register('email', { required: 'Укажите почту' })}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <div className='text-sm text-red-500'>{errors.email?.message}</div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Пароль
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    {...register('password', { required: 'Укажите пароль' })}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <div className='text-sm text-red-500'>{errors.password?.message}</div>
                            </div>
                        </div>

                        <div className='mt-4'>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Авторизоваться
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
