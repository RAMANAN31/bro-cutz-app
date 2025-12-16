export const salons = [
    {
        id: "1",
        name: "Elite Gents Salon",
        address: "Anna Nagar, Chennai",
        rating: 4.8,
        image: "/images/salon_luxury.png",
        description: "Experience the pinnacle of grooming at Elite Gents Salon in the heart of Anna Nagar. Master barbers specializing in classic cuts.",
        openingHours: "Mon-Sat: 9am - 9pm, Sun: 10am - 8pm",
        reviews: [
            { id: 1, user: "Rahul K.", rating: 5, text: "Best fade in Chennai. Ask for Alex!" },
            { id: 2, user: "Amit S.", rating: 4, text: "Great ambiance, slightly expensive but worth it." }
        ]
    },
    {
        id: "2",
        name: "Campus Cuts",
        address: "Near VIT College, Vellore",
        rating: 4.5,
        image: "/images/salon_urban.png",
        description: "The favorite spot for VIT students. Trendy styles, student discounts, and a chill vibe.",
        openingHours: "Mon-Sun: 10am - 10pm",
        reviews: [
            { id: 1, user: "Vikram R.", rating: 5, text: "Perfect for a quick trim between classes." }
        ]
    },
    {
        id: "3",
        name: "The Barber's Den",
        address: "Gandhinagar, Vellore",
        rating: 4.9,
        image: "/images/salon_luxury.png",
        description: "A classic neighborhood barbershop in Vellore. Quality cuts at great prices.",
        openingHours: "Tue-Sat: 8am - 8pm, Mon: Closed",
        reviews: [
            { id: 1, user: "Arjun M.", rating: 5, text: "Mike is a legend. Best shop in town." }
        ]
    },
];

export const services = [
    {
        id: "1",
        name: "Classic Haircut",
        duration: 30,
        price: 25,
        description: "Traditional scissor cut with hot towel finish.",
    },
    {
        id: "2",
        name: "Beard Trim & Shape",
        duration: 20,
        price: 15,
        description: "Precision trimming and shaping with razor line-up.",
    },
    {
        id: "3",
        name: "Full Service Special",
        duration: 60,
        price: 50,
        description: "Haircut, beard trim, wash, and head massage.",
    },
    {
        id: "4",
        name: "Kids Cut",
        duration: 30,
        price: 20,
        description: "Gentle and fun haircut for children under 12.",
    },
];

export const trendingStyles = [
    {
        id: "1",
        name: "Fade with Pompadour",
        image: "/images/style_fade.png",
        likes: 120,
    },
    {
        id: "2",
        name: "Textured Crop",
        image: "/images/style_crop.png",
        likes: 95,
    },
    {
        id: "3",
        name: "Classic Side Part",
        image: "/images/style_part.png",
        likes: 88,
    },
];

export const topBarbers = [
    {
        id: "1",
        name: "Alex 'The Blade'",
        salon: "Elite Gents Salon",
        rating: 4.9,
        image: "/images/barber_fair_1.png",
    },
    {
        id: "2",
        name: "Sam Scissorhands",
        salon: "Urban Cuts",
        rating: 4.7,
        image: "/images/barber_fair_2.png",
    },
    {
        id: "3",
        name: "Mike The Master",
        salon: "The Barber's Den",
        rating: 4.8,
        image: "/images/barber_fair_3.png",
    },
];

export const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
];

export const offers = [
    {
        id: "1",
        title: "Summer Fresh Cut",
        description: "Get 20% off on all haircuts this summer season.",
        discount: "20% OFF",
        validUntil: "2025-08-31",
        salon: "Elite Gents Salon",
        image: "/images/style_fade.png",
    },
    {
        id: "2",
        title: "Beard & Hair Combo",
        description: "Complete grooming package at a special price.",
        discount: "₹100 OFF",
        validUntil: "2025-12-31",
        salon: "Urban Cuts",
        image: "/images/barber_fair_1.png",
    },
    {
        id: "3",
        title: "First Time Visit",
        description: "New to The Barber's Den? Enjoy a welcome discount.",
        discount: "15% OFF",
        validUntil: "2025-06-30",
        salon: "The Barber's Den",
        image: "/images/salon_luxury.png",
    },
];

export const communityPosts = [
    {
        id: "1",
        user: "John Doe",
        avatar: "/images/barber.png",
        image: "/images/haircut.png",
        caption: "Fresh fade for the weekend! Thanks to Alex at Elite Gents.",
        likes: 45,
        comments: 12,
        timeAgo: "2h ago",
    },
    {
        id: "2",
        user: "Mike Smith",
        avatar: "/images/barber.png",
        image: "/images/haircut.png",
        caption: "Trying out the textured crop look. Thoughts?",
        likes: 32,
        comments: 8,
        timeAgo: "5h ago",
    },
    {
        id: "3",
        user: "David Lee",
        avatar: "/images/barber.png",
        image: "/images/haircut.png",
        caption: "Classic never goes out of style.",
        likes: 67,
        comments: 15,
        timeAgo: "1d ago",
    },
];

export const bookings = [
    {
        id: "1",
        salonId: "1",
        salonName: "Elite Gents Salon",
        salonAddress: "Anna Nagar, Chennai",
        salonImage: "/images/salon_luxury.png",
        service: "Classic Haircut",
        barber: "Alex 'The Blade'",
        date: "2025-06-15",
        time: "10:00 AM",
        price: 25,
        status: "Upcoming",
    },
    {
        id: "2",
        salonId: "2",
        salonName: "Campus Cuts",
        salonAddress: "Near VIT College, Vellore",
        salonImage: "/images/salon_urban.png",
        service: "Beard Trim & Shape",
        barber: "Sam Scissorhands",
        date: "2025-05-20",
        time: "02:00 PM",
        price: 15,
        status: "Completed",
    },
    {
        id: "3",
        salonId: "3",
        salonName: "The Barber's Den",
        salonAddress: "Gandhinagar, Vellore",
        salonImage: "/images/salon_luxury.png",
        service: "Full Service Special",
        barber: "Mike The Master",
        date: "2025-10-10",
        time: "04:00 PM",
        price: 50,
    }
];

export const currentUser = {
    name: "Ramanan",
    email: "ramanan@example.com",
    phone: "+1 234 567 8900",
    avatar: "/images/barber.png",
    walletBalance: 150.00,
    rewardPoints: 450,
};

export const walletTransactions = [
    {
        id: "1",
        type: "credit",
        amount: 50.00,
        description: "Added money to wallet",
        date: "2025-06-10",
        time: "09:30 AM",
    },
    {
        id: "2",
        type: "debit",
        amount: 25.00,
        description: "Payment to Elite Gents Salon",
        date: "2025-06-15",
        time: "10:45 AM",
    },
    {
        id: "3",
        type: "reward",
        points: 50,
        description: "Points earned from Elite Gents Salon",
        date: "2025-06-15",
        time: "10:45 AM",
    },
    {
        id: "4",
        type: "credit",
        amount: 100.00,
        description: "Added money to wallet",
        date: "2025-05-30",
        time: "05:00 PM",
    }
];
