    import { useEffect } from "react";
    import { useDispatch, useSelector } from "react-redux";
    import { Link } from "react-router-dom";
    import { fetchActivities } from "../../../../redux/slices/activities";
    import SideBar from "../../SideBar";
    import Empty from "../components/Empty";
    import Title from "../components/Title";
    import Activity from "./Activity";
    import AllMap from "./AllMap";

    export default function Activities() {
        const dispatch = useDispatch();
        const { activities } = useSelector((state) => state.activities);

        useEffect(() => {
            dispatch(fetchActivities());
        }, []);

        const collectCoordinates = (activities) => {
            const coordinatesArray = activities.map((activity) => ({
                name: activity.name,
                coordinates: activity.coordinates,
            }));

            return coordinatesArray;
        }

        const allCoordinates = collectCoordinates(activities.items);

        return (
            <>
                <SideBar>
                    <Title text={"Активности"} />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6">
                        <Link
                            to="/admin/create-activity"
                            className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-sky-600 hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </Link>
                        {activities.items && activities.items.length > 0 ? (
                            <>
                                <div className="text-lg font-medium mt-4 underline-offset-2 underline">Eng Активности:</div>
                                <div className="py-4 flex justify-center items-center flex-wrap gap-y-10 gap-x-20">
                                    {activities.items.map((activity) => (
                                        <Activity
                                            key={activity._id}
                                            _id={activity._id}
                                            name={activity.name.en.toLowerCase()}
                                            category={activity.category.en}
                                            text={activity.text.en}
                                            date={activity.date}
                                            price={activity.price}
                                            imageUrl={activity.imageUrl}
                                            activity={activity}
                                        />
                                    ))}
                                </div>
                                <div className="text-lg font-medium mt-4 underline-offset-2 underline">Ru Активности:</div>
                                <div className="py-4 flex justify-center items-center flex-wrap gap-y-10 gap-x-20">
                                    {activities.items.map((activity) => (
                                        <Activity
                                            key={activity._id}
                                            _id={activity._id}
                                            name={activity.name.ru.toLowerCase()}
                                            category={activity.category.ru}
                                            text={activity.text.ru}
                                            date={activity.date}
                                            price={activity.price}
                                            imageUrl={activity.imageUrl}
                                            activity={activity}
                                        />
                                    ))}
                                </div>
                                <AllMap coord={allCoordinates} />
                            </>
                        ) : (
                            <Empty
                                text={"Список туров пуст"}
                                subText={"Добавьте туры нажав на кнопку + сверху"}
                                svg={
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto h-12 w-12 text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                }
                            />
                        )}
                    </div>
                </SideBar>
            </>
        );
    }
