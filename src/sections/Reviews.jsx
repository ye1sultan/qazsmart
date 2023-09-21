import { useTranslation } from "react-i18next";
import Empty from "./components/Empty";
import Review from "./components/Review";
import Title from "./components/Title";
import { Link } from "react-router-dom";

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
}

// const Reviews = ({ data }) => {
//     const { t } = useTranslation();

//     const calculateAverageStars = (reviews) => {
//         if (reviews.length === 0) {
//             return 0;
//         }

//         const totalStars = reviews.reduce((sum, review) => {
//             return sum + parseFloat(review.stars);
//         }, 0);

//         const averageStars = totalStars / reviews.length;

//         return averageStars.toFixed(1);
//     }

//     const starCounts = {};

//     data.forEach((review) => {
//         const stars = review.stars;
//         if (starCounts[stars]) {
//             starCounts[stars]++;
//         } else {
//             starCounts[stars] = 1;
//         }
//     });

//     const possibleRatings = [5, 4, 3, 2, 1];

//     const counts = possibleRatings.map((rating) => ({
//         rating,
//         count: starCounts[rating] || 0,
//     }));

//     return data && data.length > 0 && (
//         <div id="reviews" className="container mx-auto flex flex-col justify-center gap-y-12 sm:gap-y-14 py-8">
//             <Title name={`${t("reviews.title")}`} />
//             {data && data.length > 0 ? (
//                 <div className="w-full max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 lg:grid lg:grid-cols-12 lg:gap-x-8">
//                     <div className="lg:col-span-4">
//                         <div className="mt-3 flex items-center">
//                             <div>
//                                 <div className="flex items-center">
//                                     {[0, 1, 2, 3, 4].map((rating) => (
//                                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" key={rating}
//                                             className={classNames(
//                                                 calculateAverageStars(data) > rating ? 'text-yellow-400' : 'text-gray-300',
//                                                 'h-5 w-5 flex-shrink-0'
//                                             )}>
//                                             <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
//                                         </svg>
//                                     ))}
//                                 </div>
//                                 <p className="sr-only">{calculateAverageStars(data)} out of 5 stars</p>
//                             </div>
//                             <p className="ml-2 text-sm text-gray-900">{t("reviews.basedOn")} {data.length} {t("reviews.reviews")}</p>
//                         </div>

//                         <div className="mt-6">
//                             <h3 className="sr-only">Review data</h3>
//                             <dl className="space-y-3">
//                                 {counts.map((count) => (
//                                     <div key={count.rating} className="flex items-center text-sm">
//                                         <dt className="flex-1 flex items-center">
//                                             <p className="w-3 font-medium text-gray-900">
//                                                 {count.rating}
//                                                 <span className="sr-only"> star reviews</span>
//                                             </p>
//                                             <div aria-hidden="true" className="ml-1 flex-1 flex items-center">
//                                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
//                                                     className={classNames(
//                                                         data.length > 0 ? 'text-yellow-400' : 'text-gray-300',
//                                                         'h-5 w-5 flex-shrink-0'
//                                                     )} aria-hidden="true">
//                                                     <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
//                                                 </svg>

//                                                 <div className="ml-3 relative flex-1">
//                                                     <div className="h-3 bg-gray-100 border border-gray-200 rounded-full" />
//                                                     {count.count > 0 ? (
//                                                         <div
//                                                             className="absolute inset-y-0 bg-yellow-400 border border-yellow-400 rounded-full"
//                                                             style={{ width: `calc(${count.count} / ${data.length} * 100%)` }}
//                                                         />
//                                                     ) : null}
//                                                 </div>
//                                             </div>
//                                         </dt>
//                                         <dd className="ml-3 w-10 text-right tabular-nums text-sm text-gray-900">
//                                             {Math.round((count.count / data.length) * 100)}%
//                                         </dd>
//                                     </div>
//                                 ))}
//                             </dl>
//                         </div>

//                         <div className="mt-10">
//                             <h3 className="text-lg font-medium text-gray-900">{t("reviews.thoughtsText")}</h3>
//                             <p className="mt-1 text-sm text-gray-600">{t("reviews.thoughtsSubText")}</p>
//                             <Link to="/write-review" className="mt-6 inline-flex w-full bg-white border border-gray-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full
//                             "
//                             >
//                                 {t("reviews.btnText")}
//                             </Link>
//                         </div>
//                     </div>

//                     <div className="mt-16 lg:mt-0 lg:col-start-6 lg:col-span-7">
//                         <h3 className="sr-only">Recent reviews</h3>

//                         <div className="flow-root">
//                             <div className="-my-12 divide-y divide-gray-200">
//                                 {data.slice(-3).map((review, reviewIdx) => (
//                                     <Review
//                                         key={review._id}
//                                         name={review.name}
//                                         date={review.date}
//                                         stars={review.stars}
//                                         comment={review.comment} />
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             ) : (
//                 <div className="mb-20">
//                     <Empty
//                         text={"No reviews"}
//                         subText={"Write your first review!"}
//                         btnText={"Write review"}
//                         svg={
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto h-12 w-12 text-gray-400">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
//                             </svg>
//                         } />
//                 </div>
//             )
//             }
//         </div >
//     );
// }

// export default Reviews;
const Reviews = ({ data }) => {
    const { t } = useTranslation();
    
    const data = [
        {
            id: 1,
            name: "Amir Kazken",
            country: "Austria",
            stars: "4.5",
            text: "We started in Almaty in Kazakhstan. We had various guides and drivers at different stages. The constant was Yels and Yels. They maintained contact with us to make sure everything was going to plan. Elena developed a tour to suit our needs including time to get visas. The price was great value for money.",
            date: "16-05-2023",
        },
        {
            id: 2,
            name: "Zhenis Zhumagul",
            country: "Kazakhstan",
            stars: "3",
            text: "I decided to be a tourist in my own country and I was blown away by the beauty of our nature. The tour guides were knowledgeable and friendly. It was a great adventure!",
            date: "17-05-2023",
        },
        {
            id: 3,
            name: "Dias Mukhametrakhim",
            country: "Russia",
            stars: "4",
            text: "Our trip was an amazing experience! We visited some beautiful places in Kazakhstan. The organization was top-notch and our guide was very professional and passionate about their country.",
            date: "18-05-2023",
        },
        {
            id: 4,
            name: "Sultan Orazbay",
            country: "United States",
            stars: "4.5",
            text: "Kazakhstan surprised me in the best way! Its beautiful landscapes and rich culture made this one of my favorite trips. The tour company did an amazing job.",
            date: "19-05-2023",
        }
    ];
    
    return data && data.length > 0 && (
        <div id="reviews" className="container mx-auto flex flex-col justify-center gap-y-12 sm:gap-y-14 py-8">
            <Title name={`${t("reviews.title")}`} />
            {data && data.length > 0 ? (
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-y-10">
                    {data.slice(0, 3).map((review, reviewIdx) => (
                        <Review
                            key={review.id}
                            reviewIdx={reviewIdx}
                            name={review.name}
                            date={review.date}
                            stars={review.stars}
                            text={review.text} />
                    ))}
                </div>
            ) : (
                <div className="mb-20">
                    <Empty
                        text={"No reviews"}
                        subText={"Write your first review!"}
                        btnText={"Write review"}
                        svg={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto h-12 w-12 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                        } />
                </div>
            )}
        </div>
    );
}
export default Reviews;
