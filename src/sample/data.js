export const activities = [
    {
        _id: "1",
        name: {
            en: "Mountain Hiking",
            ru: "Горный поход"
        },
        text: {
            en: "Experience the thrill of mountain hiking.",
            ru: "Испытайте острые ощущения от горного похода."
        },
        date: "2023-06-15",
        price: "$120",
        category: {
            en: "Outdoor",
            ru: "На открытом воздухе"
        },
        imageUrl: "/images/mountain-hiking.jpg",
        coordinates: { lat: 40.7128, lng: -74.0060 } // Example coordinates
    },
    {
        _id: "2",
        name: {
            en: "City Tour",
            ru: "Городской тур"
        },
        text: {
            en: "Explore the city's most iconic landmarks.",
            ru: "Исследуйте самые знаковые достопримечательности города."
        },
        date: "2023-07-10",
        price: "$50",
        category: {
            en: "Urban",
            ru: "Городской"
        },
        imageUrl: "/images/city-tour.jpg",
        coordinates: { lat: 34.0522, lng: -118.2437 } // Example coordinates
    },
    {
        _id: "3",
        name: {
            en: "Cooking Class",
            ru: "Кулинарный мастер-класс"
        },
        text: {
            en: "Learn to cook delicious local dishes.",
            ru: "Научитесь готовить вкусные местные блюда."
        },
        date: "2023-06-20",
        price: "$80",
        category: {
            en: "Food",
            ru: "Еда"
        },
        imageUrl: "/images/cooking-class.jpg",
        coordinates: { lat: 51.5074, lng: -0.1278 } // Example coordinates
    },
    {
        _id: "4",
        name: {
            en: "Museum Visit",
            ru: "Посещение музея"
        },
        text: {
            en: "Discover the history and art in the museum.",
            ru: "Откройте для себя историю и искусство в музее."
        },
        date: "2023-07-01",
        price: "$30",
        category: {
            en: "Cultural",
            ru: "Культурный"
        },
        imageUrl: "/images/museum-visit.jpg",
        coordinates: { lat: 48.8566, lng: 2.3522 } // Example coordinates
    },
    {
        _id: "5",
        name: {
            en: "Beach Day",
            ru: "День на пляже"
        },
        text: {
            en: "Relax and enjoy a day at the beach.",
            ru: "Расслабьтесь и наслаждайтесь днем на пляже."
        },
        date: "2023-06-25",
        price: "$20",
        category: {
            en: "Relaxation",
            ru: "Отдых"
        },
        imageUrl: "/images/beach-day.jpg",
        coordinates: { lat: 36.7783, lng: -119.4179 } // Example coordinates
    }
];

export const reviews = [
    {
        id: 1,
        name: "Amir Kazken",
        country: "Austria",
        stars: "1",
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
        stars: "3",
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