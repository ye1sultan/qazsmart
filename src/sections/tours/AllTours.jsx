import Header from "../Header";
import Tours from "../Tours";
import backgroundImage from '../../assets/imgs/nature.jpg';
import Title from "../../components/Title";
import Tour from "../../components/Tour";
import Footer from "../Footer";

const AllTours = () => {
    const heroStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
    };

    const overlayStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

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
        },
        {
            id: 5,
            name: "KAZBEK MOUNTAIN TREK",
            text: "Embark on an unforgettable adventure to Kazbek Mountain, one of the highest peaks in the Caucasus. This multi-day trek takes you through lush valleys and picturesque villages, offering breathtaking views of the surrounding landscapes. Along the way, you'll experience Georgian hospitality and culture. Don't miss the opportunity to stand at the foot of Kazbek, where the Gergeti Trinity Church provides a stunning backdrop.",
            date: "5-8-23",
            cost: "600 ₸"
        },
        {
            id: 6,
            name: "CHARYN CANYON EXPLORATION",
            text: "Discover the wonders of Charyn Canyon, often referred to as the 'Grand Canyon of Kazakhstan.' This natural marvel features dramatic red rock formations, a winding river, and unique geological features. You can explore the canyon's depths, hike along its trails, and even enjoy a picnic by the river. Charyn Canyon is a photographer's paradise and a must-visit destination for nature enthusiasts.",
            date: "12-8-23",
            cost: "350 ₸"
        },
        {
            id: 7,
            name: "ARAL SEA ADVENTURE",
            text: "Embark on a journey to the Aral Sea, once the world's fourth-largest lake. This unique tour takes you to the heart of the Aral Sea tragedy, where you'll witness the dramatic consequences of environmental change. Explore the ship graveyards and abandoned fishing villages that now stand in the middle of the desert. It's a sobering but eye-opening experience that sheds light on environmental conservation.",
            date: "20-8-23",
            cost: "450 ₸"
        },
        {
            id: 8,
            name: "ALMATY CITY EXPLORATION",
            text: "Delve into the vibrant city life of Almaty, Kazakhstan's largest metropolis. This city tour takes you to iconic landmarks such as Panfilov Park, Zenkov Cathedral, and the bustling Green Bazaar. Explore the rich history and culture of Almaty while sampling delicious Kazakh cuisine. It's the perfect introduction to the urban charm of Kazakhstan.",
            date: "28-8-23",
            cost: "200 ₸"
        }
    ];

    return (
        <>
            <div className="w-full absolute z-50">
                <Header />
            </div>
            <div className="w-full h-[50vh] relative z-10" style={heroStyle}>
                <div style={overlayStyle}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-start items-center relative z-10">
                    <div className="max-w-2xl w-full px-6 lg:px-8">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            All available tours
                        </h1>
                    </div>
                </div>
            </div>
            <div id="tours" className="container mx-auto flex flex-col justify-center gap-y-12 sm:gap-y-14 py-8">
                <Title name={"All tours"} />
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden md:flex justify-center items-center flex-wrap gap-y-10 gap-x-20">
                    {data.map(tour =>
                        <Tour
                            key={tour.id}
                            name={tour.name.toLowerCase()}
                            text={tour.text}
                            date={tour.date}
                            cost={tour.cost} />
                    )}
                </div>
            </div >
            <Footer />
        </>
    );
}

export default AllTours;