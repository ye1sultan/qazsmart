const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
}

const formatDate = (dateString) => {
    const [day, month, year] = dateString.split("-").map(Number);
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    const formattedDate = new Date(year, month - 1, day);
    const monthName = months[formattedDate.getMonth()];
    const dayNumber = formattedDate.getDate();
    const formattedYear = formattedDate.getFullYear();
    const formattedDateString = `${monthName} ${dayNumber}, ${formattedYear}`;

    return formattedDateString;
}

export default function Review({ reviewIdx, name, date, stars, text }) {
    const isEvenReview = reviewIdx % 2 === 0;
    const reviewAlignmentClass = isEvenReview ? 'lg:mr-auto' : 'lg:ml-auto';

    return (
        <div className={`${reviewAlignmentClass}`}>
            <div className="flex text-sm text-gray-500 space-x-4 max-w-[900px] px-20 rounded-xl border border-gray-200 shadow-lg">
                <div className="flex-none py-10">
                    <img
                        src="https://picsum.photos/2000/1000"
                        alt="Region"
                        className="w-10 h-10 bg-gray-100 rounded-full" />
                </div>
                <div className="py-10">
                    <h3 className="text-lg font-medium text-gray-900">{name}</h3>
                    <p>{formatDate(date)}</p>

                    <div className="flex items-center mt-4">
                        {[0, 1, 2, 3, 4].map((rating) => (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" key={rating}
                                className={classNames(
                                    stars > rating ? 'text-yellow-400' : 'text-gray-300',
                                    'h-5 w-5 flex-shrink-0'
                                )}>
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
                        ))}
                    </div>
                    <p className="sr-only">{stars} out of 5 stars</p>
                    <div
                        className="mt-4 prose prose-base max-w-none text-gray-600"
                        dangerouslySetInnerHTML={{ __html: text }}
                    />
                </div>
            </div>
        </div>
    );
}