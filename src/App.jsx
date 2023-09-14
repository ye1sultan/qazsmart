import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllTours from "./sections/tours/AllTours";
import MainPage from './MainPage';
import TourPage from './sections/tours/TourPage';
import Favourites from './sections/Favourites';

const data = [
	{
		id: 1,
		name: "ILE-ALATAU NATIONAL PARK",
		place: "Kazakhstan / Almaty",
		text: "The Ile-Alatau National Park is a beautiful national park located in the Trans-Ile Alatau mountains south of Almaty. The park was created in 1966 and is home to approximately 300 species of wildlife, including the snow leopard. There are lots of hiking trails in the National Park that will bring you through woodlands and alpine meadows towards beautiful waterfalls, glaciers, and lakes. The park is the perfect place to do some beautiful one-day hikes and treks if you want to get out of the city for a while.",
		date: "16-7-23",
		cost: "300 ₸",
		descriptions: [
			{
				name: 'Shymbulak Ski Resort',
				description: 'Visit Shymbulak, a popular ski resort located in the Trans-Ile Alatau mountains. Enjoy skiing and snowboarding during the winter season or explore hiking trails during the summer. The resort offers stunning views of the surrounding mountains.',
			},
			{
				name: 'Chimbulak Waterfalls',
				description: 'Hike to Chimbulak Waterfalls within the park. These beautiful waterfalls cascade through lush woodlands and offer a refreshing sight. Don\'t forget your camera to capture the natural beauty.',
			},
			{
				name: 'Glacial Lakes',
				description: 'Discover pristine glacial lakes scattered throughout the park. These crystal-clear lakes are perfect for a tranquil getaway, where you can enjoy picnics and the serene atmosphere.',
			},
		],
	},
	{
		id: 2,
		name: "BIG ALMATY LAKE",
		place: "Kazakhstan / Almaty",
		text: "Big Almaty Lake is easily the most famous and recognizable lake in Kazakhstan. Situated extremely close to Almaty, it can strangely feel like worlds away from city life when you arrive in the mountains to the lake. Known for its ever-changing blue and teal hues, the lake is located very close to the border of Kyrgyzstan- a border that you used to be able to cross on foot but is now off-limits to trekkers. Big Almaty Lake supplies drinking water to the residents of Almaty and you are prohibited from swimming in its vivid waters. There are several hiking opportunities in the area, including Big Almaty Peak, a pyramid-shaped mountain that protrudes from behind the lake and is visible within the city, as well. The Big Almaty Lake is a can’t-miss for those visiting Almaty and want to see some of the city’s best nature.",
		date: "23-7-23",
		cost: "250 ₸",
		descriptions: [
			{
				name: 'Big Almaty Peak',
				description: 'Hike to Big Almaty Peak and be rewarded with breathtaking panoramic views of the Big Almaty Lake. The pyramid-shaped mountain is a challenging yet rewarding trek for adventurers.',
			},
			{
				name: 'Almaty Observatory',
				description: 'Visit the Almaty Observatory, located near the lake. You can learn about astronomy and enjoy stargazing sessions. The observatory offers a unique perspective on the night sky.',
			},
		],
	},
	{
		id: 3,
		name: "ISSYK LAKE",
		place: "Kazakhstan / Almaty",
		text: "Nestled in the mountains, the picturesque Issyk Lake is also part of the Ile-Alatau National Park and is fed by the Issyk River. The lake is often confused with Lake Issyk-Kul in Kyrgyzstan, which is one of the largest freshwater lakes in the world. The lake was created by an ancient natural landslide damming the valley and then was covered up by another natural landslide destroying it in 1963. Eventually, man stepped in and created the lake again. The mountain views, pristine nature, and Soviet relics in the area make this lake a can’t miss in Kazakhstan.",
		date: "13-7-23",
		cost: "120 ₸",
		descriptions: [
			{
				name: 'Issyk Lake Beach',
				description: 'Relax on the shores of Issyk Lake Beach, where you can enjoy the breathtaking mountain scenery and swim in the crystal-clear waters. It\'s a perfect spot for a leisurely day by the lake.',
			},
			{
				name: 'Soviet Relics',
				description: 'Explore remnants of Soviet-era structures and relics around Issyk Lake. These historic sites provide a glimpse into the region\'s past and offer unique photo opportunities.',
			},
		],
	},
	{
		id: 4,
		name: "TURGEN GORGE",
		place: "Kazakhstan / Almaty",
		text: "The Turgen Gorge is also part of the Ile Alatau National Park. This beautiful gorge is a real paradise for hikers and is home to dense forests, alpine meadows, lakes, hot springs, and seven waterfalls. You can go on some stunning hikes or visit the gorge on a mountain bike or on horseback. Here’s a great hiking guide to the Turgen Gorge.",
		date: "27-7-23",
		cost: "400 ₸",
		descriptions: [
			{
				name: 'Seven Waterfalls Trail',
				description: 'Embark on the Seven Waterfalls Trail in Turgen Gorge. This scenic trail takes you past seven stunning waterfalls, each with its unique charm. It\'s a must-visit for waterfall enthusiasts.',
			},
			{
				name: 'Hot Springs',
				description: 'Relax in the natural hot springs of Turgen Gorge, surrounded by lush forests and mountain scenery. The therapeutic waters provide a soothing experience after a day of hiking.',
			},
		],
	},
];

const App = () => {
	return (
		<div className='bg-white font-mont'>
			<Router>
				<Routes>
					<Route path="/" element={<MainPage data={data} />} />
					<Route path="/all-tours" element={<AllTours data={data} />} />
					<Route path="/:combinedTourInfo" element={<TourPage data={data} />} />
					<Route path="/favourites" element={<Favourites data={data} />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;