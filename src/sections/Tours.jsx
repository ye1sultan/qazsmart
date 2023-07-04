import { useEffect, useState } from "react";
import Title from "../components/Title";
import Tour from "../components/Tour";

const Tours = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);


    const data = [
        {
            name: "ILE-ALATAU NATIONAL PARK",
            text: "The Ile-Alatau National Park is a beautiful national park located in the Trans-Ile Alatau mountains south of Almaty. The park was created in 1966 and is home to approximately 300 species of wildlife, including the snow leopard. There are lots of hiking trails in the National Park that will bring you through woodlands and alpine meadows towards beautiful waterfalls, glaciers, and lakes. The park is the perfect place to do some beautiful one-day hikes and treks if you want to get out of the city for a while.",
            date: "16-7-23",
            cost: "300$"
        },
        {
            name: "BIG ALMATY LAKE",
            text: "Big Almaty Lake is easily the most famous and recognizable lake in Kazakhstan. Situated extremely close to Almaty, it can strangely feel like worlds away from city life when you arrive in the mountains to the lake. Known for its ever-changing blue and teal hues, the lake is located very close to the border of Kyrgyzstan- a border that you used to be able to cross on foot but is now off-limits to trekkers. Big Almaty Lake supplies drinking water to the residents of Almaty and you are prohibited from swimming in its vivid waters. There are several hiking opportunities in the area, including Big Almaty Peak, a pyramid-shaped mountain that protrudes from behind the lake and is visible within the city, as well. The Big Almaty Lake is a can’t-miss for those visiting Almaty and want to see some of the city’s best nature.",
            date: "23-7-23",
            cost: "250$"
        },
        {
            name: "ISSYK LAKE",
            text: "Nestled in the mountains, the picturesque Issyk Lake is also part of the Ile-Alatau National Park and is fed by the Issyk River. The lake is often confused with Lake Issyk-Kul in Kyrgyzstan, which is one of the largest freshwater lakes in the world. The lake was created by an ancient natural landslide damming the valley and then was covered up by another natural landslide destroying it in 1963. Eventually, man stepped in and created the lake again. The mountain views, pristine nature, and Soviet relics in the area make this lake a can’t miss in Kazakhstan.",
            date: "13-7-23",
            cost: "120$"
        },
        {
            name: "TURGEN GORGE",
            text: "The Turgen Gorge is also part of the Ile Alatau National Park. This beautiful gorge is a real paradise for hikers and is home to dense forests, alpine meadows, lakes, hot springs, and seven waterfalls. You can go on some stunning hikes or visit the gorge on a mountain bike or on horseback. Here’s a great hiking guide to the Turgen Gorge.",
            date: "27-7-23",
            cost: "400$"
        }
    ];

    return (
        <div id="tours" className="container mx-auto flex flex-col justify-center gap-y-16 sm:gap-y-24 py-12">
            <Title name={"tours"} />
            {loading ? <div className="w-full flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div> : data.length > 0 ?
                (
                    <>
                        <div className="w-full flex justify-center items-center flex-wrap gap-20">
                            {data.slice(0, 6).map((tour, index) =>
                                <Tour key={index} name={tour.name.toLowerCase()} text={tour.text} date={tour.date} cost={tour.cost} />
                            )}
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <button className="btn w-56 sm:btn-wide btn-md lg:btn-lg bg-sky-300 font-medium">all tours</button>
                        </div>
                    </>
                ) : <div className="w-full flex justify-center items-center text-2xl">New tours soon...</div>
            }
        </div >
    );
}

export default Tours;