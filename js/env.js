const GYM_ENV = {
    // Brand Information
    gymName: "Gym ",
    gymNameHtml: "Gym <span>Test</span>", // Used for the logo text
    logo: "imagess/Logo.jpg",

    // Contact Information
    address: "57 Av. Khaled Ibn El Walid, Tunis",
    phone: "+216 46252537",
    whatsappNumber: "46252537", // Used for WhatsApp links (digits only)
    email: "essmairia.kaled@gmail.com",

    // Social Media & Location
    facebook: "https://www.facebook.com/gymcityaouina",
    instagram: "https://www.instagram.com/gymcityy/?hl=fr",
    mapIframeSrc: "https://maps.google.com/maps?q=36.8570139,10.2656309&hl=en&z=17&output=embed",

    // Pricing Plans
    pricing: [
        { id: "plan1", duration: "1 Month", price: "70 DT", features: ["Full Gym Access", "Cardio & Free Weights", "Locker Room Access"] },
        { id: "plan2", duration: "3 Months", price: "180 DT", features: ["Full Gym Access", "Cardio & Free Weights", "Group Classes", "1 Free PT Session"] },
        { id: "plan3", duration: "1 Year", price: "600 DT", features: ["Full Gym Access", "All Classes Included", "Free PT Session/Month", "Free Guest Pass"] }
    ],

    // Working Hours
    scheduleNormal: [
        { days: "Monday - Friday", hours: "06:00 - 22:00" },
        { days: "Saturday", hours: "08:00 - 20:00" },
        { days: "Sunday", hours: "08:00 - 14:00" }
    ],
    scheduleRamadan: [
        { days: "Monday - Saturday", hours: "14:00 - 18:00 & 20:30 - 01:00" },
        { days: "Sunday", hours: "14:00 - 18:00" }
    ]
};
