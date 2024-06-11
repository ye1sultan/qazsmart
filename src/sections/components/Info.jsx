import React from 'react';
export default function Info({ data }) {
    return (
        <dl className="grid grid-cols-1 gap-5 mt-10">
            {data.map((item) => (
                <div key={item.name} className="px-4 py-5 bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                    <dd className="mt-1 text-2xl md:text-3xl font-semibold text-gray-900">{item.stat}</dd>
                </div>
            ))}
        </dl>
    );
}