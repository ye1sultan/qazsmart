import React from 'react';
import { useTranslation } from "react-i18next";

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
}

function formatDate(dateString, locale) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(locale, options);
}

function translateMonthNames(dateString, i18n) {
    const date = new Date(dateString);
    const month = date.toLocaleDateString(i18n.language, { month: 'long' });
    return date.toLocaleDateString(i18n.language, { day: 'numeric' }) + ' ' + month + ', ' + date.toLocaleDateString(i18n.language, { year: 'numeric' });
}

export default function Review({ name, date, stars, comment }) {
    const { i18n } = useTranslation();
    const formattedDate = translateMonthNames(date, i18n);

    return (
        <div className="py-10">
            <div className="flex items-center">
                <img src="https://picsum.photos/2000/1000" alt={`${name}.`} className="h-12 w-12 rounded-full" />
                <div className="ml-4">
                    <h4 className="text-base font-semibold text-gray-900">{name}</h4>
                    <div className="mt-1 flex items-center">
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
                </div>
            </div>
            <div
                className="mt-4 space-y-6 text-base italic text-gray-600"
                dangerouslySetInnerHTML={{ __html: comment }}
            />
            <div className="mt-4 text-sm text-gray-600">
                {formattedDate}
            </div>
        </div >
    );
}
