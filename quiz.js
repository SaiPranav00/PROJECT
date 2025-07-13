// EV Quiz Logic - quiz.js

// Quiz data and state management
const quizData = {
    questions: [
        {
            id: 1,
            question: "What is your primary use for this electric vehicle?",
            type: "single",
            options: [
                { value: "daily-commute", text: "Daily commuting to work", icon: "🚗" },
                { value: "family-trips", text: "Family trips and errands", icon: "👨‍👩‍👧‍👦" },
                { value: "long-distance", text: "Long-distance travel", icon: "🛣" },
                { value: "city-driving", text: "City driving and short trips", icon: "🏙" },
                { value: "weekend-recreation", text: "Weekend recreation and leisure", icon: "🎯" }
            ]
        },
        {
            id: 2,
            question: "What is your preferred vehicle size?",
            type: "single",
            options: [
                { value: "compact", text: "Compact car (easy parking, efficiency)", icon: "🚙" },
                { value: "sedan", text: "Sedan (comfort and style)", icon: "🚗" },
                { value: "suv", text: "SUV (space and versatility)", icon: "🚐" },
                { value: "truck", text: "Pickup truck (utility and hauling)", icon: "🛻" },
                { value: "luxury", text: "Luxury vehicle (premium features)", icon: "✨" }
            ]
        },
        {
            id: 3,
            question: "What is your budget range for purchasing an EV?",
            type: "single",
            options: [
                { value: "under-30k", text: "Under $30,000", icon: "💰" },
                { value: "30k-50k", text: "$30,000 - $50,000", icon: "💳" },
                { value: "50k-70k", text: "$50,000 - $70,000", icon: "💎" },
                { value: "70k-100k", text: "$70,000 - $100,000", icon: "🏆" },
                { value: "over-100k", text: "Over $100,000", icon: "👑" }
            ]
        },
        {
            id: 4,
            question: "How important is driving range to you?",
            type: "range",
            min: 1,
            max: 10,
            step: 1,
            defaultValue: 5,
            labels: ["Not important", "Extremely important"],
            question_detail: "Rate the importance of having a long driving range on a single charge"
        },
        {
            id: 5,
            question: "What is your typical daily driving distance?",
            type: "single",
            options: [
                { value: "under-25", text: "Under 25 miles", icon: "🏠" },
                { value: "25-50", text: "25-50 miles", icon: "🚗" },
                { value: "50-100", text: "50-100 miles", icon: "🛣" },
                { value: "100-200", text: "100-200 miles", icon: "🌍" },
                { value: "over-200", text: "Over 200 miles", icon: "✈" }
            ]
        },
        {
            id: 6,
            question: "Which charging features are most important to you?",
            type: "multiple",
            options: [
                { value: "fast-charging", text: "Fast charging capability", icon: "⚡" },
                { value: "home-charging", text: "Home charging compatibility", icon: "🏠" },
                { value: "public-network", text: "Access to public charging networks", icon: "🔌" },
                { value: "wireless-charging", text: "Wireless charging capability", icon: "📡" },
                { value: "solar-integration", text: "Solar panel integration", icon: "☀" }
            ]
        },
        {
            id: 7,
            question: "What eco-friendly features matter most to you?",
            type: "multiple",
            options: [
                { value: "zero-emissions", text: "Zero direct emissions", icon: "🌱" },
                { value: "renewable-energy", text: "Renewable energy sourcing", icon: "🌞" },
                { value: "sustainable-materials", text: "Sustainable interior materials", icon: "🌿" },
                { value: "recycling-program", text: "Battery recycling programs", icon: "♻" },
                { value: "carbon-neutral", text: "Carbon-neutral manufacturing", icon: "🌍" }
            ]
        },
        {
            id: 8,
            question: "How important are advanced technology features?",
            type: "range",
            min: 1,
            max: 10,
            step: 1,
            defaultValue: 5,
            labels: ["Basic features only", "Latest tech essential"],
            question_detail: "Rate the importance of having cutting-edge technology and smart features"
        }
    ],

    evDatabase: [
        // EV database entries...
    ]
};

// Your existing code continues...
// NOTE: This snippet only shows the quizData definition since it's very large.
// The complete corrected version has been added to the canvas for easy editing and continuation.
