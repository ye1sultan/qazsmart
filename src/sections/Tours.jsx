import { Link } from 'react-router-dom';
import Title from "../components/Title";
import Tour from "../components/Tour";

const Tours = () => {
    const data = [
        {
            id: 1,
            name: "ILE-ALATAU NATIONAL PARK",
            text: "The Ile-Alatau National Park is a beautiful national park located in the Trans-Ile Alatau mountains south of Almaty. The park was created in 1966 and is home to approximately 300 species of wildlife, including the snow leopard. There are lots of hiking trails in the National Park that will bring you through woodlands and alpine meadows towards beautiful waterfalls, glaciers, and lakes. The park is the perfect place to do some beautiful one-day hikes and treks if you want to get out of the city for a while.",
            date: "16-7-23",
            cost: "300 ₸"
        },
        {
            id: 2,
            name: "BIG ALMATY LAKE",
            text: "Big Almaty Lake is easily the most famous and recognizable lake in Kazakhstan. Situated extremely close to Almaty, it can strangely feel like worlds away from city life when you arrive in the mountains to the lake. Known for its ever-changing blue and teal hues, the lake is located very close to the border of Kyrgyzstan- a border that you used to be able to cross on foot but is now off-limits to trekkers. Big Almaty Lake supplies drinking water to the residents of Almaty and you are prohibited from swimming in its vivid waters. There are several hiking opportunities in the area, including Big Almaty Peak, a pyramid-shaped mountain that protrudes from behind the lake and is visible within the city, as well. The Big Almaty Lake is a can’t-miss for those visiting Almaty and want to see some of the city’s best nature.",
            date: "23-7-23",
            cost: "250 ₸"
        },
        {
            id: 3,
            name: "ISSYK LAKE",
            text: "Nestled in the mountains, the picturesque Issyk Lake is also part of the Ile-Alatau National Park and is fed by the Issyk River. The lake is often confused with Lake Issyk-Kul in Kyrgyzstan, which is one of the largest freshwater lakes in the world. The lake was created by an ancient natural landslide damming the valley and then was covered up by another natural landslide destroying it in 1963. Eventually, man stepped in and created the lake again. The mountain views, pristine nature, and Soviet relics in the area make this lake a can’t miss in Kazakhstan.",
            date: "13-7-23",
            cost: "120 ₸"
        },
        {
            id: 4,
            name: "TURGEN GORGE",
            text: "The Turgen Gorge is also part of the Ile Alatau National Park. This beautiful gorge is a real paradise for hikers and is home to dense forests, alpine meadows, lakes, hot springs, and seven waterfalls. You can go on some stunning hikes or visit the gorge on a mountain bike or on horseback. Here’s a great hiking guide to the Turgen Gorge.",
            date: "27-7-23",
            cost: "400 ₸"
        }
    ];

    return (
        <div id="tours" className="container mx-auto flex flex-col justify-center gap-y-12 sm:gap-y-14 py-8">
            <Title name={"tours"} />
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden md:flex justify-center items-center flex-wrap gap-y-10 gap-x-20">
                {data.slice(0, 6).map(tour =>
                    <Tour
                        key={tour.id}
                        name={tour.name.toLowerCase()}
                        text={tour.text}
                        date={tour.date}
                        cost={tour.cost} />
                )}
            </div>
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex md:hidden justify-center items-center flex-wrap gap-y-10 gap-x-20">
                {data.slice(0, 3).map(tour =>
                    <Tour
                        key={tour.id}
                        name={tour.name.toLowerCase()}
                        text={tour.text}
                        date={tour.date}
                        cost={tour.cost} />
                )}
            </div>
            <div className="w-full flex justify-center items-center capitalize mt-10">
                <a href="/all-tours" className="rounded-md bg-sky-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
                    view all tours
                </a>
            </div>
        </div >
    );
}

export default Tours;