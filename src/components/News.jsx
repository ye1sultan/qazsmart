import backgroundImage from '../assets/imgs/kz.jpg';

export default function New() {
    //Max title size 94 characters
    //Max text size
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl max-w-6xl mx-4">
            <figure className='max-h-[300px] lg:max-h-full lg:max-w-[50%]'>
                <img src={backgroundImage} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl line-clamp-2">Kazakh President signs changes to legislations on social protection and education education dd</h2>
                <p className='text-lg line-clamp-6'>The Kazakh Head of State signed the Law of the Republic of Kazakhstan introducing changes and additions to some legislative acts of the Republic of Kazakhstan regarding professional qualifications, state awards, social protection, and education, Kazinform cites Akorda. </p>
                <div className="card-actions justify-end">
                    <button className="btn h-10 sm:h-12 bg-sky-300 font-medium min-h-0">Read</button>
                </div>
            </div>
        </div>
    );
}