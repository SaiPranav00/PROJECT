// Complete EV Database with all manufacturers including new Indian EVs
const completeEVDatabase = [
  // Tata Motors EVs (existing)
  {
    id: 1,
    make: "Tata",
    model: "Tiago.ev",
    fullName: "Tata Tiago.ev",
    bodyType: "Hatchback",
    priceMin: 7.99,
    priceMax: 11.99,
    batteryOptions: [
      { capacity: 19.2, type: "MR", range: 250 },
      { capacity: 24, type: "LR", range: 315 },
    ],
    motorPower: 75,
    torque: 114,
    maxRange: 315,
    chargingType: "7.2 kW AC",
    topSpeed: 120,
    groundClearance: 181,
    bootSpace: 316,
    variants: ["XE MR", "XT MR", "XT LR"],
    features: ["Entry Level", "City Friendly", "Compact Design"],
    status: "Available",
    seating: 5,
    dimensions: "3993 x 1677 x 1537 mm",
    warranty: "8 years/1,60,000 km battery",
  },
  {
    id: 2,
    make: "Tata",
    model: "Punch.ev",
    fullName: "Tata Punch.ev",
    bodyType: "SUV",
    priceMin: 9.99,
    priceMax: 14.99,
    batteryOptions: [
      { capacity: 25, type: "MR", range: 315 },
      { capacity: 35, type: "LR", range: 421 },
    ],
    motorPower: 120,
    torque: 190,
    maxRange: 421,
    chargingType: "7.2 kW AC",
    topSpeed: 120,
    groundClearance: 187,
    bootSpace: 366,
    variants: ["Smart+", "Adventure+", "Empowered+"],
    features: ["Compact SUV", "High Ground Clearance", "Spacious Interior"],
    status: "Available",
    seating: 5,
    dimensions: "3993 x 1811 x 1606 mm",
    warranty: "8 years/1,60,000 km battery",
  },
  {
    id: 3,
    make: "Tata",
    model: "Nexon.ev",
    fullName: "Tata Nexon.ev",
    bodyType: "SUV",
    priceMin: 12.49,
    priceMax: 17.19,
    batteryOptions: [
      { capacity: 30, type: "MR", range: 325 },
      { capacity: 40.5, type: "LR", range: 453 },
      { capacity: 45, type: "Max", range: 489 },
    ],
    motorPower: 149,
    torque: 215,
    maxRange: 489,
    chargingType: "7.2 kW AC, 50 kW DC",
    topSpeed: 120,
    groundClearance: 209,
    bootSpace: 350,
    variants: ["Creative", "Fearless", "Fearless+", "Empowered+"],
    features: ["Most Popular", "Fast Charging", "Premium Features"],
    status: "Available",
    seating: 5,
    dimensions: "3993 x 1811 x 1606 mm",
    warranty: "8 years/1,60,000 km battery",
  },
  {
    id: 4,
    make: "Tata",
    model: "Curvv.ev",
    fullName: "Tata Curvv.ev",
    bodyType: "Coupe SUV",
    priceMin: 17.0,
    priceMax: 20.0,
    batteryOptions: [{ capacity: 45, type: "Standard", range: 400 }],
    motorPower: 150,
    torque: 215,
    maxRange: 400,
    chargingType: "DC Fast Charging",
    topSpeed: 120,
    groundClearance: 200,
    bootSpace: 400,
    variants: ["Creative", "Accomplished", "Empowered+"],
    features: ["Coupe Design", "Premium Styling", "Latest Launch"],
    status: "Available",
    seating: 5,
    dimensions: "4308 x 1810 x 1637 mm",
    warranty: "8 years/1,60,000 km battery",
  },
  {
    id: 5,
    make: "Tata",
    model: "Harrier.ev",
    fullName: "Tata Harrier.ev",
    bodyType: "SUV",
    priceMin: 21.49,
    priceMax: 25.0,
    batteryOptions: [{ capacity: 50, type: "Standard", range: 592 }],
    motorPower: 201,
    torque: 350,
    maxRange: 592,
    chargingType: "11 kW AC, 70 kW DC",
    topSpeed: 140,
    groundClearance: 205,
    bootSpace: 425,
    variants: ["Smart", "Pure", "Adventure", "Fearless"],
    features: ["Premium SUV", "Long Range", "Luxury Interior"],
    status: "Available",
    seating: 5,
    dimensions: "4598 x 1894 x 1706 mm",
    warranty: "8 years/1,60,000 km battery",
  },
  {
    id: 6,
    make: "Tata",
    model: "Safari.ev",
    fullName: "Tata Safari.ev",
    bodyType: "SUV",
    priceMin: 22.0,
    priceMax: 25.0,
    batteryOptions: [{ capacity: 50, type: "Standard", range: 550 }],
    motorPower: 201,
    torque: 350,
    maxRange: 550,
    chargingType: "11 kW AC, 70 kW DC",
    topSpeed: 140,
    groundClearance: 205,
    bootSpace: 447,
    variants: ["Smart", "Pure", "Adventure", "Accomplished"],
    features: ["7-Seater", "Family SUV", "Premium Features"],
    status: "Available",
    seating: 7,
    dimensions: "4661 x 1894 x 1786 mm",
    warranty: "8 years/1,60,000 km battery",
  },
  {
    id: 7,
    make: "Tata",
    model: "Tigor.ev",
    fullName: "Tata Tigor.ev",
    bodyType: "Sedan",
    priceMin: 11.99,
    priceMax: 13.99,
    batteryOptions: [{ capacity: 26, type: "Standard", range: 306 }],
    motorPower: 75,
    torque: 170,
    maxRange: 306,
    chargingType: "15 kW DC",
    topSpeed: 120,
    groundClearance: 165,
    bootSpace: 316,
    variants: ["XE", "XM", "XT"],
    features: ["Fleet Focused", "Sedan Comfort", "Commercial Use"],
    status: "Available",
    seating: 5,
    dimensions: "3993 x 1677 x 1532 mm",
    warranty: "8 years/1,60,000 km battery",
  },

  // Mahindra EVs
  {
    id: 8,
    make: "Mahindra",
    model: "BE 6e",
    fullName: "Mahindra BE 6e",
    bodyType: "SUV",
    priceMin: 18.9,
    priceMax: 30.5,
    batteryOptions: [
      { capacity: 59, type: "Standard", range: 556 },
      { capacity: 79, type: "Extended", range: 682 },
    ],
    motorPower: 282,
    torque: 380,
    maxRange: 682,
    chargingType: "175 kW DC Fast Charging",
    topSpeed: 200,
    groundClearance: 207,
    bootSpace: 455,
    variants: ["Pack One", "Pack Two", "Pack Three"],
    features: ["INGLO Platform", "Advanced ADAS", "Premium Interior"],
    status: "Available",
    seating: 5,
    dimensions: "4371 x 1907 x 1627 mm",
    warranty: "Lifetime battery warranty",
    acceleration: "0-100 km/h in 6.7s",
  },
  {
    id: 9,
    make: "Mahindra",
    model: "XEV 9e",
    fullName: "Mahindra XEV 9e",
    bodyType: "SUV",
    priceMin: 21.9,
    priceMax: 31.25,
    batteryOptions: [
      { capacity: 59, type: "Standard", range: 542 },
      { capacity: 79, type: "Extended", range: 656 },
    ],
    motorPower: 282,
    torque: 380,
    maxRange: 656,
    chargingType: "175 kW DC Fast Charging",
    topSpeed: 200,
    groundClearance: 207,
    bootSpace: 663,
    variants: ["Pack One", "Pack Two", "Pack Three"],
    features: ["Triple Display", "7 Airbags", "360° Camera"],
    status: "Available",
    seating: 5,
    dimensions: "4789 x 1907 x 1690 mm",
    warranty: "Lifetime battery warranty",
    acceleration: "0-100 km/h in 6.8s",
  },

  // MG Motor EVs
  {
    id: 10,
    make: "MG",
    model: "ZS EV",
    fullName: "MG ZS EV",
    bodyType: "SUV",
    priceMin: 17.99,
    priceMax: 20.49,
    batteryOptions: [{ capacity: 50.3, type: "Standard", range: 461 }],
    motorPower: 177,
    torque: 280,
    maxRange: 461,
    chargingType: "7.4 kW AC, 50 kW DC",
    topSpeed: 140,
    groundClearance: 161,
    bootSpace: 448,
    variants: ["Executive", "Excite Pro", "Exclusive Plus", "Essence"],
    features: ["i-SMART Technology", "Premium Interior", "Advanced Safety"],
    status: "Available",
    seating: 5,
    dimensions: "4323 x 1809 x 1649 mm",
    warranty: "8 years/1,50,000 km battery",
  },
  {
    id: 11,
    make: "MG",
    model: "Comet EV",
    fullName: "MG Comet EV",
    bodyType: "Hatchback",
    priceMin: 9.56,
    priceMax: 9.96,
    batteryOptions: [{ capacity: 17.3, type: "Standard", range: 230 }],
    motorPower: 42,
    torque: 110,
    maxRange: 230,
    chargingType: "3.3 kW AC, 7.4 kW AC",
    topSpeed: 105,
    groundClearance: 180,
    bootSpace: 270,
    variants: ["Exclusive", "Exclusive FC"],
    features: ["Ultra Compact", "City Friendly", "55+ Connected Features"],
    status: "Available",
    seating: 4,
    dimensions: "2974 x 1505 x 1640 mm",
    warranty: "8 years/1,50,000 km battery",
  },
  {
    id: 12,
    make: "MG",
    model: "Windsor EV",
    fullName: "MG Windsor EV",
    bodyType: "SUV",
    priceMin: 9.99,
    priceMax: 18.09,
    batteryOptions: [
      { capacity: 38, type: "Standard", range: 331 },
      { capacity: 52.9, type: "Pro", range: 449 },
    ],
    motorPower: 136,
    torque: 200,
    maxRange: 449,
    chargingType: "7.4 kW AC, 60 kW DC",
    topSpeed: 140,
    groundClearance: 200,
    bootSpace: 521,
    variants: ["Exclusive", "Essence", "Exclusive Pro", "Essence Pro"],
    features: ["Aero-Lounge Seats", "Infinity View Glass Roof", "BaaS Program"],
    status: "Available",
    seating: 5,
    dimensions: "4295 x 1850 x 1677 mm",
    warranty: "Lifetime battery warranty",
  },

  // Citroën EVs
  {
    id: 13,
    make: "Citroën",
    model: "eC3",
    fullName: "Citroën eC3",
    bodyType: "Hatchback",
    priceMin: 12.84,
    priceMax: 12.9,
    batteryOptions: [{ capacity: 29.2, type: "Standard", range: 320 }],
    motorPower: 57,
    torque: 143,
    maxRange: 320,
    chargingType: "15 Amp AC, DC Fast Charging",
    topSpeed: 107,
    groundClearance: 180,
    bootSpace: 315,
    variants: ["Live", "Feel", "Shine"],
    features: ["10.2-inch Touchscreen", "Eco Mode", "Regenerative Braking"],
    status: "Available",
    seating: 5,
    dimensions: "3981 x 1733 x 1669 mm",
    warranty: "7 years/1,40,000 km battery",
  },
  {
    id: 14,
    make: "Citroën",
    model: "Basalt EV",
    fullName: "Citroën Basalt EV",
    bodyType: "Coupe SUV",
    priceMin: 14.0,
    priceMax: 17.0,
    batteryOptions: [{ capacity: 35, type: "Standard", range: 350 }],
    motorPower: 110,
    torque: 200,
    maxRange: 350,
    chargingType: "7.4 kW AC, 50 kW DC",
    topSpeed: 130,
    groundClearance: 200,
    bootSpace: 470,
    variants: ["You", "Plus", "Max"],
    features: ["SUV Coupe Design", "Modern Connectivity", "Advanced Safety"],
    status: "Coming Soon",
    seating: 5,
    dimensions: "4352 x 1765 x 1593 mm",
    warranty: "8 years/1,60,000 km battery",
  },
  // Atul Electric Vehicles
  {
    id: 15,
    make: "Atul",
    model: "RIK EV",
    fullName: "Atul RIK EV",
    bodyType: "three-wheeler",
    priceMin: 3.5,
    priceMax: 3.8,
    batteryOptions: [{ capacity: 6.6, type: "Li-ion", range: 110 }],
    motorPower: 13.3,
    torque: 44,
    maxRange: 110,
    chargingType: "3.3 kW AC",
    topSpeed: 45,
    groundClearance: 190,
    bootSpace: 0,
    variants: ["Standard"],
    features: ["IP67 Battery", "Active Thermal Management", "AI Telemetry"],
    status: "Available",
    seating: 4,
    dimensions: "2836 x 1390 x 1890 mm",
    warranty: "3 years battery",
  },
  {
    id: 16,
    make: "Atul",
    model: "RIK Swap",
    fullName: "Atul RIK Swap",
    bodyType: "three-wheeler",
    priceMin: 3.2,
    priceMax: 3.5,
    batteryOptions: [{ capacity: 5.9, type: "Swappable Li-ion", range: 79 }],
    motorPower: 13.3,
    torque: 44,
    maxRange: 79,
    chargingType: "5-min Battery Swap",
    topSpeed: 45,
    groundClearance: 190,
    bootSpace: 0,
    variants: ["Standard"],
    features: ["Fast Battery Swap", "5-min Replacement", "Commercial Use"],
    status: "Available",
    seating: 4,
    dimensions: "2836 x 1390 x 1890 mm",
    warranty: "3 years battery",
  },
  {
    id: 17,
    make: "Atul",
    model: "Energie 6.6",
    fullName: "Atul Energie 6.6",
    bodyType: "commercial",
    priceMin: 4.5,
    priceMax: 4.8,
    batteryOptions: [{ capacity: 6.6, type: "Li-ion", range: 107 }],
    motorPower: 13.3,
    torque: 44,
    maxRange: 107,
    chargingType: "3.3 kW AC",
    topSpeed: 45,
    groundClearance: 215,
    bootSpace: 500,
    variants: ["Standard"],
    features: ["500kg Payload", "Commercial Grade", "IP67 Components"],
    status: "Available",
    seating: 1,
    dimensions: "3350 x 1510 x 1700 mm",
    warranty: "3 years battery",
  },
  {
    id: 18,
    make: "Atul",
    model: "Energie 13.2",
    fullName: "Atul Energie 13.2",
    bodyType: "commercial",
    priceMin: 6.5,
    priceMax: 7.0,
    batteryOptions: [{ capacity: 13.2, type: "Li-ion", range: 195 }],
    motorPower: 13.3,
    torque: 44,
    maxRange: 195,
    chargingType: "3.3 kW AC",
    topSpeed: 45,
    groundClearance: 215,
    bootSpace: 457,
    variants: ["Extended Range"],
    features: ["Extended Range", "457kg Payload", "Long Distance"],
    status: "Available",
    seating: 1,
    dimensions: "3350 x 1510 x 1700 mm",
    warranty: "3 years battery",
  },
  {
    id: 19,
    make: "Atul",
    model: "Elite Plus",
    fullName: "Atul Elite Plus",
    bodyType: "three-wheeler",
    priceMin: 2.5,
    priceMax: 3.0,
    batteryOptions: [
      { capacity: 12, type: "Li-ion", range: 70 },
      { capacity: 12, type: "Lead-acid", range: 100 },
    ],
    motorPower: 1.34,
    torque: 8,
    maxRange: 100,
    chargingType: "1 kW AC",
    topSpeed: 25,
    groundClearance: 150,
    bootSpace: 0,
    variants: ["Li-ion", "Lead-acid"],
    features: ["D+4 Seating", "Passenger Vehicle", "Hydraulic Brakes"],
    status: "Available",
    seating: 5,
    dimensions: "2860 x 1072 x 1775 mm",
    warranty: "3 years battery",
  },
  {
    id: 20,
    make: "Atul",
    model: "Elite Cargo",
    fullName: "Atul Elite Cargo",
    bodyType: "cargo-three-wheeler",
    priceMin: 2.3,
    priceMax: 2.8,
    batteryOptions: [
      { capacity: 12, type: "Li-ion", range: 60 },
      { capacity: 12, type: "Lead-acid", range: 80 },
    ],
    motorPower: 1.0,
    torque: 8,
    maxRange: 80,
    chargingType: "1 kW AC",
    topSpeed: 25,
    groundClearance: 150,
    bootSpace: 400,
    variants: ["Li-ion", "Lead-acid"],
    features: ["400kg Payload", "Cargo Deck", "Commercial Use"],
    status: "Available",
    seating: 1,
    dimensions: "2775 x 930 x 1350 mm",
    warranty: "3 years battery",
  },

  // Ampere Electric Vehicles
  {
    id: 21,
    make: "Ampere",
    model: "Zeal EX",
    fullName: "Ampere Zeal EX",
    bodyType: "scooter",
    priceMin: 0.7,
    priceMax: 0.75,
    batteryOptions: [{ capacity: 3.0, type: "CAN Li-ion", range: 120 }],
    motorPower: 2.7,
    torque: 15,
    maxRange: 120,
    chargingType: "1.5 kW AC",
    topSpeed: 50,
    groundClearance: 160,
    bootSpace: 20,
    variants: ["Standard"],
    features: ["Multiple Ride Modes", "Side-stand Sensor", "Sporty Design"],
    status: "Available",
    seating: 2,
    dimensions: "1830 x 660 x 1090 mm",
    warranty: "3 years battery",
  },
  {
    id: 22,
    make: "Ampere",
    model: "Primus",
    fullName: "Ampere Primus",
    bodyType: "scooter",
    priceMin: 1.1,
    priceMax: 1.15,
    batteryOptions: [{ capacity: 3.0, type: "LFP", range: 107 }],
    motorPower: 5.4,
    torque: 25,
    maxRange: 107,
    chargingType: "2.0 kW AC",
    topSpeed: 77,
    groundClearance: 160,
    bootSpace: 22,
    variants: ["Standard"],
    features: ["4kW PMSM Motor", "Keyless Operation", "Digital Dashboard"],
    status: "Available",
    seating: 2,
    dimensions: "1905 x 711 x 1143 mm",
    warranty: "5 years battery",
  },
  {
    id: 23,
    make: "Ampere",
    model: "Nexus",
    fullName: "Ampere Nexus",
    bodyType: "scooter",
    priceMin: 1.1,
    priceMax: 1.15,
    batteryOptions: [{ capacity: 3.0, type: "LFP", range: 136 }],
    motorPower: 5.4,
    torque: 28,
    maxRange: 136,
    chargingType: "2.2 kW AC",
    topSpeed: 93,
    groundClearance: 165,
    bootSpace: 25,
    variants: ["Standard"],
    features: ["7-inch TFT Display", "Five Ride Modes", "IP67 Rating"],
    status: "Available",
    seating: 2,
    dimensions: "1930 x 737 x 1168 mm",
    warranty: "5 years battery",
  },

  // Okinawa Electric Vehicles
  {
    id: 24,
    make: "Okinawa",
    model: "Lite",
    fullName: "Okinawa Lite",
    bodyType: "scooter",
    priceMin: 0.45,
    priceMax: 0.5,
    batteryOptions: [{ capacity: 1.25, type: "AIS-156 Li-ion", range: 60 }],
    motorPower: 0.34,
    torque: 8,
    maxRange: 60,
    chargingType: "0.5 kW AC",
    topSpeed: 25,
    groundClearance: 140,
    bootSpace: 17,
    variants: ["Standard"],
    features: ["Low Speed", "No License Required", "Detachable Battery"],
    status: "Available",
    seating: 2,
    dimensions: "1727 x 610 x 1016 mm",
    warranty: "2 years battery",
  },
  {
    id: 25,
    make: "Okinawa",
    model: "R30",
    fullName: "Okinawa R30",
    bodyType: "scooter",
    priceMin: 0.48,
    priceMax: 0.52,
    batteryOptions: [{ capacity: 1.25, type: "Li-ion", range: 60 }],
    motorPower: 0.34,
    torque: 8,
    maxRange: 60,
    chargingType: "0.5 kW AC",
    topSpeed: 25,
    groundClearance: 140,
    bootSpace: 15,
    variants: ["Standard"],
    features: ["Learner License Compatible", "Basic Features", "LED Lighting"],
    status: "Available",
    seating: 2,
    dimensions: "1720 x 605 x 1010 mm",
    warranty: "2 years battery",
  },
  {
    id: 26,
    make: "Okinawa",
    model: "Ridge+",
    fullName: "Okinawa Ridge+",
    bodyType: "scooter",
    priceMin: 0.85,
    priceMax: 0.9,
    batteryOptions: [{ capacity: 2.1, type: "Detachable Li-ion", range: 84 }],
    motorPower: 2.3,
    torque: 12,
    maxRange: 84,
    chargingType: "1.0 kW AC",
    topSpeed: 45,
    groundClearance: 150,
    bootSpace: 20,
    variants: ["Standard", "GPS"],
    features: ["Keyless Entry", "Anti-theft Alarm", "E-ABS Braking"],
    status: "Available",
    seating: 2,
    dimensions: "1778 x 660 x 1067 mm",
    warranty: "3 years battery",
  },
  {
    id: 27,
    make: "Okinawa",
    model: "PraisePro",
    fullName: "Okinawa PraisePro",
    bodyType: "scooter",
    priceMin: 0.95,
    priceMax: 1.0,
    batteryOptions: [{ capacity: 2.0, type: "Removable Li-ion", range: 88 }],
    motorPower: 3.4,
    torque: 18,
    maxRange: 88,
    chargingType: "1.2 kW AC",
    topSpeed: 56,
    groundClearance: 155,
    bootSpace: 22,
    variants: ["Standard"],
    features: ["Keyless Entry", "Walking Assist", "LCD Display"],
    status: "Available",
    seating: 2,
    dimensions: "1800 x 670 x 1080 mm",
    warranty: "3 years battery",
  },
  {
    id: 28,
    make: "Okinawa",
    model: "iPraise+",
    fullName: "Okinawa iPraise+",
    bodyType: "scooter",
    priceMin: 1.25,
    priceMax: 1.3,
    batteryOptions: [{ capacity: 3.3, type: "72V Removable Li-ion", range: 137 }],
    motorPower: 3.4,
    torque: 18,
    maxRange: 137,
    chargingType: "1.5 kW AC",
    topSpeed: 70,
    groundClearance: 160,
    bootSpace: 25,
    variants: ["Standard"],
    features: ["Three Ride Modes", "Dual Disc Brakes", "Full LED Lighting"],
    status: "Available",
    seating: 2,
    dimensions: "1830 x 680 x 1118 mm",
    warranty: "3 years battery",
  },
  {
    id: 29,
    make: "Okinawa",
    model: "Dual 100",
    fullName: "Okinawa Dual 100",
    bodyType: "cargo-scooter",
    priceMin: 1.15,
    priceMax: 1.2,
    batteryOptions: [{ capacity: 3.0, type: "Removable Li-ion", range: 130 }],
    motorPower: 4.0,
    torque: 20,
    maxRange: 130,
    chargingType: "1.5 kW AC",
    topSpeed: 60,
    groundClearance: 155,
    bootSpace: 50,
    variants: ["Delivery"],
    features: ["Front Load Rack", "Dual-disc Brakes", "E-ABS"],
    status: "Available",
    seating: 1,
    dimensions: "1900 x 700 x 1150 mm",
    warranty: "3 years battery",
  },
  {
    id: 30,
    make: "Okinawa",
    model: "OKHI-90",
    fullName: "Okinawa OKHI-90",
    bodyType: "scooter",
    priceMin: 1.8,
    priceMax: 1.85,
    batteryOptions: [{ capacity: 3.6, type: "72V NMC Li-ion", range: 161 }],
    motorPower: 5.1,
    torque: 25,
    maxRange: 161,
    chargingType: "2.0 kW AC",
    topSpeed: 90,
    groundClearance: 165,
    bootSpace: 30,
    variants: ["Premium"],
    features: ["3.8kW Central Motor", "16-inch Alloys", "TFT Display"],
    status: "Available",
    seating: 2,
    dimensions: "1880 x 711 x 1143 mm",
    warranty: "3 years battery",
  },

  // Joy e-bike Electric Vehicles
  {
    id: 31,
    make: "Joy e-bike",
    model: "Nemo",
    fullName: "Joy e-bike Nemo",
    bodyType: "scooter",
    priceMin: 0.99,
    priceMax: 1.05,
    batteryOptions: [{ capacity: 2.5, type: "72V NMC Li-ion", range: 130 }],
    motorPower: 2.0,
    torque: 70,
    maxRange: 130,
    chargingType: "1.2 kW AC",
    topSpeed: 65,
    groundClearance: 155,
    bootSpace: 25,
    variants: ["Standard"],
    features: ["Smart BMS", "USB Charging", "Reverse Assist"],
    status: "Available",
    seating: 2,
    dimensions: "1803 x 673 x 1092 mm",
    warranty: "3 years battery",
  },
  {
    id: 32,
    make: "Joy e-bike",
    model: "Mihos",
    fullName: "Joy e-bike Mihos",
    bodyType: "scooter",
    priceMin: 1.15,
    priceMax: 1.2,
    batteryOptions: [{ capacity: 2.5, type: "74V NMC Li-ion", range: 100 }],
    motorPower: 2.7,
    torque: 70,
    maxRange: 100,
    chargingType: "1.5 kW AC",
    topSpeed: 70,
    groundClearance: 175,
    bootSpace: 22,
    variants: ["Retro"],
    features: ["Retro Design", "Instant Torque", "Keyless Operation"],
    status: "Available",
    seating: 2,
    dimensions: "1829 x 686 x 1118 mm",
    warranty: "3 years battery",
  },
  {
    id: 33,
    make: "Joy e-bike",
    model: "e-rik V1",
    fullName: "Joy e-bike e-rik V1",
    bodyType: "three-wheeler",
    priceMin: 3.85,
    priceMax: 4.0,
    batteryOptions: [{ capacity: 10.24, type: "Li-ion", range: 150 }],
    motorPower: 6.7,
    torque: 35,
    maxRange: 150,
    chargingType: "5.0 kW AC",
    topSpeed: 50,
    groundClearance: 180,
    bootSpace: 0,
    variants: ["Passenger"],
    features: ["D+3 Seating", "Hydraulic Brakes", "Digital Speedometer"],
    status: "Available",
    seating: 4,
    dimensions: "2655 x 1335 x 1693 mm",
    warranty: "3 years battery",
  },
  {
    id: 34,
    make: "Joy e-bike",
    model: "Bandhu",
    fullName: "Joy e-bike Bandhu",
    bodyType: "three-wheeler",
    priceMin: 1.34,
    priceMax: 1.4,
    batteryOptions: [{ capacity: 7.2, type: "Lead-acid", range: 120 }],
    motorPower: 2.1,
    torque: 12,
    maxRange: 120,
    chargingType: "1.6 kW AC",
    topSpeed: 35,
    groundClearance: 160,
    bootSpace: 0,
    variants: ["Passenger"],
    features: ["D+4 Seating", "Drum Brakes", "USB Port"],
    status: "Available",
    seating: 5,
    dimensions: "2760 x 1200 x 1650 mm",
    warranty: "18 months battery",
  },
  {
    id: 35,
    make: "Joy e-bike",
    model: "Sahayak Cargo",
    fullName: "Joy e-bike Sahayak Cargo",
    bodyType: "cargo-three-wheeler",
    priceMin: 4.24,
    priceMax: 4.5,
    batteryOptions: [{ capacity: 10.2, type: "LFP Li-ion", range: 130 }],
    motorPower: 12.0,
    torque: 60,
    maxRange: 130,
    chargingType: "5.0 kW AC",
    topSpeed: 50,
    groundClearance: 180,
    bootSpace: 650,
    variants: ["Commercial"],
    features: ["650kg Payload", "GPS Tracking", "Fleet Management"],
    status: "Available",
    seating: 1,
    dimensions: "2800 x 1400 x 1700 mm",
    warranty: "3 years battery",
  },
  {
    id: 36,
    make: "Joy e-bike",
    model: "Eco Loader",
    fullName: "Joy e-bike Eco Loader",
    bodyType: "cargo-three-wheeler",
    priceMin: 1.3,
    priceMax: 1.35,
    batteryOptions: [{ capacity: 7.2, type: "Lead-acid", range: 120 }],
    motorPower: 2.1,
    torque: 12,
    maxRange: 120,
    chargingType: "1.6 kW AC",
    topSpeed: 35,
    groundClearance: 160,
    bootSpace: 310,
    variants: ["Commercial"],
    features: ["310kg Payload", "Hydraulic Disc Brakes", "Dual-shock Suspension"],
    status: "Available",
    seating: 1,
    dimensions: "2600 x 1200 x 1500 mm",
    warranty: "18 months battery",
  },

  // Zypp Cargo
  {
    id: 37,
    make: "Zypp",
    model: "Cargo",
    fullName: "Zypp Cargo",
    bodyType: "cargo-scooter",
    priceMin: 0.59,
    priceMax: 0.74,
    batteryOptions: [
      { capacity: 4.0, type: "40Ah Li-ion", range: 120 },
      { capacity: 8.0, type: "Dual Battery", range: 240 },
    ],
    motorPower: 1.3,
    torque: 15,
    maxRange: 240,
    chargingType: "Swappable Battery",
    topSpeed: 51,
    groundClearance: 152,
    bootSpace: 250,
    variants: ["Single Battery", "Dual Battery"],
    features: ["250kg Payload", "IoT Tracking", "Fleet Integration"],
    status: "Available",
    seating: 1,
    dimensions: "1905 x 711 x 1168 mm",
    warranty: "2 years battery",
  },
  // Mahindra EVs (Updated/Additional)
  {
    id: 38,
    make: "Mahindra",
    model: "BE 6e",
    fullName: "Mahindra BE 6e",
    bodyType: "SUV",
    priceMin: 18.9,
    priceMax: 30.5,
    batteryOptions: [
      { capacity: 59, type: "LFP", range: 556 },
      { capacity: 79, type: "LFP", range: 682 },
    ],
    motorPower: 282,
    torque: 380,
    maxRange: 682,
    chargingType: "175 kW DC Fast Charging",
    topSpeed: 200,
    groundClearance: 207,
    bootSpace: 455,
    variants: ["Pack One", "Pack Two", "Pack Three"],
    features: ["INGLO Platform", "Advanced ADAS", "Premium Interior", "0-100 in 6.7s"],
    status: "Available",
    seating: 5,
    dimensions: "4371 x 1907 x 1627 mm",
    warranty: "Lifetime battery warranty",
    acceleration: "0-100 km/h in 6.7s",
  },
  {
    id: 39,
    make: "Mahindra",
    model: "XEV 9e",
    fullName: "Mahindra XEV 9e",
    bodyType: "SUV",
    priceMin: 21.9,
    priceMax: 31.25,
    batteryOptions: [
      { capacity: 59, type: "LFP", range: 542 },
      { capacity: 79, type: "LFP", range: 656 },
    ],
    motorPower: 282,
    torque: 380,
    maxRange: 656,
    chargingType: "175 kW DC Fast Charging",
    topSpeed: 200,
    groundClearance: 207,
    bootSpace: 663,
    variants: ["Pack One", "Pack Two", "Pack Three"],
    features: ["Triple Display", "7 Airbags", "360° Camera", "0-100 in 6.8s"],
    status: "Available",
    seating: 5,
    dimensions: "4789 x 1907 x 1690 mm",
    warranty: "Lifetime battery warranty",
    acceleration: "0-100 km/h in 6.8s",
  },

  // MG Motor EVs (Updated)
  {
    id: 40,
    make: "MG",
    model: "ZS EV",
    fullName: "MG ZS EV",
    bodyType: "SUV",
    priceMin: 17.99,
    priceMax: 20.49,
    batteryOptions: [{ capacity: 50.3, type: "Li-ion", range: 461 }],
    motorPower: 177,
    torque: 280,
    maxRange: 461,
    chargingType: "7.4 kW AC, 50 kW DC",
    topSpeed: 140,
    groundClearance: 161,
    bootSpace: 448,
    variants: ["Executive", "Excite Pro", "Exclusive Plus", "Essence"],
    features: ["i-SMART Technology", "Premium Interior", "Advanced Safety"],
    status: "Available",
    seating: 5,
    dimensions: "4323 x 1809 x 1649 mm",
    warranty: "8 years/1,50,000 km battery",
  },
  {
    id: 41,
    make: "MG",
    model: "Comet EV",
    fullName: "MG Comet EV",
    bodyType: "Hatchback",
    priceMin: 9.56,
    priceMax: 9.96,
    batteryOptions: [{ capacity: 17.3, type: "Li-ion", range: 230 }],
    motorPower: 42,
    torque: 110,
    maxRange: 230,
    chargingType: "3.3 kW AC, 7.4 kW AC",
    topSpeed: 105,
    groundClearance: 180,
    bootSpace: 270,
    variants: ["Exclusive", "Exclusive FC"],
    features: ["Ultra Compact", "City Friendly", "55+ Connected Features", "4-Seater"],
    status: "Available",
    seating: 4,
    dimensions: "2974 x 1505 x 1640 mm",
    warranty: "8 years/1,50,000 km battery",
  },
  {
    id: 42,
    make: "MG",
    model: "Windsor EV",
    fullName: "MG Windsor EV",
    bodyType: "SUV",
    priceMin: 9.99,
    priceMax: 18.09,
    batteryOptions: [
      { capacity: 38, type: "Standard", range: 331 },
      { capacity: 52.9, type: "Pro", range: 449 },
    ],
    motorPower: 136,
    torque: 200,
    maxRange: 449,
    chargingType: "7.4 kW AC, 60 kW DC",
    topSpeed: 140,
    groundClearance: 200,
    bootSpace: 521,
    variants: ["Exclusive", "Essence", "Exclusive Pro", "Essence Pro"],
    features: ["Aero-Lounge Seats", "Infinity View Glass Roof", "BaaS Program"],
    status: "Available",
    seating: 5,
    dimensions: "4295 x 1850 x 1677 mm",
    warranty: "Lifetime battery warranty",
  },

  // Citroën EVs (Updated)
  {
    id: 43,
    make: "Citroën",
    model: "eC3",
    fullName: "Citroën eC3",
    bodyType: "Hatchback",
    priceMin: 12.84,
    priceMax: 12.9,
    batteryOptions: [{ capacity: 29.2, type: "Li-ion", range: 320 }],
    motorPower: 57,
    torque: 143,
    maxRange: 320,
    chargingType: "15 Amp AC, DC Fast Charging",
    topSpeed: 107,
    groundClearance: 180,
    bootSpace: 315,
    variants: ["Live", "Feel", "Shine"],
    features: ["10.2-inch Touchscreen", "Eco Mode", "Regenerative Braking"],
    status: "Available",
    seating: 5,
    dimensions: "3981 x 1733 x 1669 mm",
    warranty: "7 years/1,40,000 km battery",
  },
  {
    id: 44,
    make: "Citroën",
    model: "Basalt EV",
    fullName: "Citroën Basalt EV",
    bodyType: "Coupe SUV",
    priceMin: 14.0,
    priceMax: 17.0,
    batteryOptions: [{ capacity: 35, type: "Li-ion", range: 350 }],
    motorPower: 110,
    torque: 200,
    maxRange: 350,
    chargingType: "7.4 kW AC, 50 kW DC",
    topSpeed: 130,
    groundClearance: 200,
    bootSpace: 470,
    variants: ["You", "Plus", "Max"],
    features: ["SUV Coupe Design", "Modern Connectivity", "Advanced Safety"],
    status: "Coming Soon",
    seating: 5,
    dimensions: "4352 x 1765 x 1593 mm",
    warranty: "8 years/1,60,000 km battery",
  },

  // Tesla EVs
  {
    id: 45,
    make: "Tesla",
    model: "Model Y",
    fullName: "Tesla Model Y",
    bodyType: "SUV",
    priceMin: 59.89,
    priceMax: 67.89,
    batteryOptions: [
      { capacity: 60, type: "LFP", range: 500 },
      { capacity: 75, type: "NMC", range: 622 },
    ],
    motorPower: 299,
    torque: 420,
    maxRange: 622,
    chargingType: "250 kW Supercharger",
    topSpeed: 201,
    groundClearance: 167,
    bootSpace: 854,
    variants: ["RWD", "Long Range RWD"],
    features: ["Autopilot", "Full Self-Driving", "Over-the-Air Updates", "Supercharger Network"],
    status: "Available",
    seating: 5,
    dimensions: "4751 x 1921 x 1624 mm",
    warranty: "8 years battery warranty",
    acceleration: "0-100 km/h in 6.9s",
  },

  // Kia EVs
  {
    id: 46,
    make: "Kia",
    model: "EV6",
    fullName: "Kia EV6",
    bodyType: "SUV",
    priceMin: 65.97,
    priceMax: 70.0,
    batteryOptions: [{ capacity: 84, type: "Li-ion", range: 650 }],
    motorPower: 321,
    torque: 605,
    maxRange: 650,
    chargingType: "350 kW DC Fast Charging",
    topSpeed: 185,
    groundClearance: 160,
    bootSpace: 520,
    variants: ["84 kWh RWD", "84 kWh AWD"],
    features: ["ADAS 2.0", "V2L Technology", "Panoramic Display", "Meridian Audio"],
    status: "Available",
    seating: 5,
    dimensions: "4695 x 1890 x 1570 mm",
    warranty: "8 years battery warranty",
    acceleration: "0-100 km/h in 5.0s",
  },
  {
    id: 47,
    make: "Kia",
    model: "EV9",
    fullName: "Kia EV9",
    bodyType: "SUV",
    priceMin: 80.0,
    priceMax: 90.0,
    batteryOptions: [{ capacity: 99.8, type: "Li-ion", range: 561 }],
    motorPower: 384,
    torque: 700,
    maxRange: 561,
    chargingType: "350 kW DC Fast Charging",
    topSpeed: 200,
    groundClearance: 190,
    bootSpace: 333,
    variants: ["GT-Line AWD"],
    features: ["7-Seater", "Captain Seats", "Massage Seats", "Trinity Display", "10 Airbags"],
    status: "Available",
    seating: 7,
    dimensions: "5015 x 1980 x 1780 mm",
    warranty: "8 years battery warranty",
    acceleration: "0-100 km/h in 5.3s",
  },

  // Mercedes-Benz EVs
  {
    id: 48,
    make: "Mercedes-Benz",
    model: "EQS",
    fullName: "Mercedes-Benz EQS",
    bodyType: "Sedan",
    priceMin: 163.0,
    priceMax: 163.0,
    batteryOptions: [{ capacity: 107.8, type: "Li-ion", range: 857 }],
    motorPower: 516,
    torque: 950,
    maxRange: 857,
    chargingType: "200 kW DC Fast Charging",
    topSpeed: 250,
    groundClearance: 120,
    bootSpace: 610,
    variants: ["580 4MATIC"],
    features: ["MBUX Hyperscreen", "Air Suspension", "Advanced ADAS", "Luxury Interior"],
    status: "Available",
    seating: 5,
    dimensions: "5216 x 1926 x 1512 mm",
    warranty: "8 years battery warranty",
    acceleration: "0-100 km/h in 4.3s",
  },
  {
    id: 49,
    make: "Mercedes-Benz",
    model: "EQS SUV",
    fullName: "Mercedes-Benz EQS SUV",
    bodyType: "SUV",
    priceMin: 128.0,
    priceMax: 143.0,
    batteryOptions: [{ capacity: 122, type: "Li-ion", range: 820 }],
    motorPower: 536,
    torque: 858,
    maxRange: 820,
    chargingType: "200 kW DC Fast Charging",
    topSpeed: 210,
    groundClearance: 181,
    bootSpace: 645,
    variants: ["580 4MATIC", "450+"],
    features: ["7-Seater", "11 Airbags", "Active Brake Assist", "Luxury Features"],
    status: "Available",
    seating: 7,
    dimensions: "5125 x 1959 x 1718 mm",
    warranty: "8 years battery warranty",
    acceleration: "0-100 km/h in 4.7s",
  },
  {
    id: 50,
    make: "Mercedes-Benz",
    model: "EQE SUV",
    fullName: "Mercedes-Benz EQE SUV",
    bodyType: "SUV",
    priceMin: 141.0,
    priceMax: 141.0,
    batteryOptions: [{ capacity: 90.56, type: "Li-ion", range: 550 }],
    motorPower: 408,
    torque: 858,
    maxRange: 550,
    chargingType: "170 kW DC Fast Charging",
    topSpeed: 210,
    groundClearance: 154,
    bootSpace: 520,
    variants: ["500 4MATIC"],
    features: ["9 Airbags", "ABS", "Premium Interior", "Advanced Safety"],
    status: "Available",
    seating: 5,
    dimensions: "4863 x 1940 x 1685 mm",
    warranty: "8 years battery warranty",
    acceleration: "0-100 km/h in 4.9s",
  },
  {
    id: 51,
    make: "Mercedes-Benz",
    model: "EQB",
    fullName: "Mercedes-Benz EQB",
    bodyType: "SUV",
    priceMin: 72.2,
    priceMax: 78.9,
    batteryOptions: [
      { capacity: 66.5, type: "Li-ion", range: 447 },
      { capacity: 70.5, type: "Li-ion", range: 535 },
    ],
    motorPower: 292,
    torque: 385,
    maxRange: 535,
    chargingType: "100 kW DC Fast Charging",
    topSpeed: 160,
    groundClearance: 165,
    bootSpace: 495,
    variants: ["250+", "350 4MATIC"],
    features: ["6 Airbags", "TPMS", "Compact Luxury", "Family SUV"],
    status: "Available",
    seating: 7,
    dimensions: "4684 x 1834 x 1667 mm",
    warranty: "8 years battery warranty",
    acceleration: "0-100 km/h in 6.2s",
  },
  {
    id: 52,
    make: "Mercedes-Benz",
    model: "EQA",
    fullName: "Mercedes-Benz EQA",
    bodyType: "SUV",
    priceMin: 67.2,
    priceMax: 67.2,
    batteryOptions: [{ capacity: 70.5, type: "Li-ion", range: 560 }],
    motorPower: 292,
    torque: 385,
    maxRange: 560,
    chargingType: "100 kW DC Fast Charging",
    topSpeed: 160,
    groundClearance: 140,
    bootSpace: 340,
    variants: ["250+"],
    features: ["7 Airbags", "ESC", "Compact Design", "Premium Features"],
    status: "Available",
    seating: 5,
    dimensions: "4463 x 1834 x 1624 mm",
    warranty: "8 years battery warranty",
    acceleration: "0-100 km/h in 8.6s",
  },
  {
    id: 53,
    make: "Mercedes-Benz",
    model: "Maybach EQS SUV",
    fullName: "Mercedes-Benz Maybach EQS SUV",
    bodyType: "SUV",
    priceMin: 228.0,
    priceMax: 263.0,
    batteryOptions: [{ capacity: 122, type: "Li-ion", range: 611 }],
    motorPower: 658,
    torque: 950,
    maxRange: 611,
    chargingType: "200 kW DC Fast Charging",
    topSpeed: 250,
    groundClearance: 181,
    bootSpace: 645,
    variants: ["680 SUV"],
    features: ["Ultra Luxury", "11 Airbags", "Adaptive Cruise Control", "Maybach Features"],
    status: "Available",
    seating: 4,
    dimensions: "5125 x 1959 x 1718 mm",
    warranty: "8 years battery warranty",
    acceleration: "0-100 km/h in 4.4s",
  },
  {
    id: 54,
    make: "Mercedes-Benz",
    model: "AMG EQS",
    fullName: "Mercedes-Benz AMG EQS",
    bodyType: "Sedan",
    priceMin: 245.0,
    priceMax: 245.0,
    batteryOptions: [{ capacity: 107.8, type: "Li-ion", range: 526 }],
    motorPower: 751,
    torque: 950,
    maxRange: 526,
    chargingType: "200 kW DC Fast Charging",
    topSpeed: 250,
    groundClearance: 120,
    bootSpace: 610,
    variants: ["53 4MATIC+"],
    features: ["AMG Performance", "9 Airbags", "Active Lane Keeping", "Track Mode"],
    status: "Available",
    seating: 5,
    dimensions: "5216 x 1926 x 1512 mm",
    warranty: "8 years battery warranty",
    acceleration: "0-100 km/h in 3.4s",
  },
  {
    id: 55,
    make: "Mercedes-Benz",
    model: "G-Class Electric",
    fullName: "Mercedes-Benz G-Class Electric",
    bodyType: "SUV",
    priceMin: 300.0,
    priceMax: 300.0,
    batteryOptions: [{ capacity: 116, type: "Li-ion", range: 473 }],
    motorPower: 587,
    torque: 1164,
    maxRange: 473,
    chargingType: "200 kW DC Fast Charging",
    topSpeed: 180,
    groundClearance: 241,
    bootSpace: 566,
    variants: ["580 EQG"],
    features: ["Iconic G-Wagon", "360° Camera", "8 Airbags", "Off-Road Capability"],
    status: "Available",
    seating: 5,
    dimensions: "4817 x 1986 x 1954 mm",
    warranty: "8 years battery warranty",
    acceleration: "0-100 km/h in 4.7s",
  },
]

// Global filter state
let currentFilters = {
  search: "",
  maxPrice: 35,
  makes: [],
  bodyTypes: [],
  minRange: 150,
  batteryTypes: [],
}

let currentSort = "name"
let filteredEVs = [...completeEVDatabase]

// Initialize page when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("Initializing browse page...")
  initializeBrowsePage()
  setupEventListeners()
})

function initializeBrowsePage() {
  console.log("Setting up initial filters and display...")
  applyFilters()
  updateResultsCount()
  displayResults()
}

function setupEventListeners() {
  console.log("Setting up event listeners...")

  // Search input with debouncing
  const searchInput = document.getElementById("searchInput")
  if (searchInput) {
    let searchTimeout
    searchInput.addEventListener("input", (e) => {
      clearTimeout(searchTimeout)
      searchTimeout = setTimeout(() => {
        currentFilters.search = e.target.value.toLowerCase().trim()
        console.log("Search filter applied:", currentFilters.search)
        applyFilters()
      }, 300) // 300ms debounce
    })
  }

  // Price range slider
  const priceRange = document.getElementById("priceRange")
  if (priceRange) {
    priceRange.addEventListener("input", (e) => {
      currentFilters.maxPrice = Number.parseInt(e.target.value)
      const maxPriceLabel = document.getElementById("maxPrice")
      if (maxPriceLabel) {
        maxPriceLabel.textContent = `₹${currentFilters.maxPrice}L`
      }
      console.log("Price filter applied:", currentFilters.maxPrice)
      applyFilters()
    })
  }

  // Range filter slider
  const rangeFilter = document.getElementById("rangeFilter")
  if (rangeFilter) {
    rangeFilter.addEventListener("input", (e) => {
      currentFilters.minRange = Number.parseInt(e.target.value)
      const maxRangeLabel = document.getElementById("maxRange")
      if (maxRangeLabel) {
        maxRangeLabel.textContent = `${currentFilters.minRange}+ km`
      }
      console.log("Range filter applied:", currentFilters.minRange)
      applyFilters()
    })
  }

  // Make filters - Fixed event handling
  setupCheckboxFilters("makeFilters", "makes")

  // Body type filters
  setupCheckboxFilters("bodyTypeFilters", "bodyTypes")

  // Battery filters
  setupCheckboxFilters("batteryFilters", "batteryTypes")

  // Sort dropdown
  const sortSelect = document.getElementById("sortSelect")
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value
      console.log("Sort applied:", currentSort)
      applySort()
      displayResults()
    })
  }
}

// Improved checkbox filter setup
function setupCheckboxFilters(containerId, filterKey) {
  const container = document.getElementById(containerId)
  if (!container) {
    console.warn(`Container ${containerId} not found`)
    return
  }

  // Add event listener to container for event delegation
  container.addEventListener("change", (e) => {
    if (e.target.type === "checkbox") {
      const value = e.target.value
      const isChecked = e.target.checked

      console.log(`Checkbox ${value} ${isChecked ? "checked" : "unchecked"} for ${filterKey}`)

      if (isChecked) {
        if (!currentFilters[filterKey].includes(value)) {
          currentFilters[filterKey].push(value)
        }
      } else {
        currentFilters[filterKey] = currentFilters[filterKey].filter((item) => item !== value)
      }

      console.log(`Updated ${filterKey}:`, currentFilters[filterKey])
      applyFilters()
    }
  })

  // Also handle clicks on checkbox items (not just checkboxes)
  const checkboxItems = container.querySelectorAll(".checkbox-item")
  checkboxItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      // Only trigger if click wasn't directly on checkbox
      if (e.target.type !== "checkbox") {
        const checkbox = this.querySelector('input[type="checkbox"]')
        if (checkbox) {
          checkbox.checked = !checkbox.checked
          // Trigger change event
          checkbox.dispatchEvent(new Event("change", { bubbles: true }))
        }
      }

      // Visual feedback
      const checkbox = this.querySelector('input[type="checkbox"]')
      if (checkbox && checkbox.checked) {
        this.style.background = "rgba(16, 185, 129, 0.1)"
        this.style.transform = "translateX(5px)"
      } else {
        this.style.background = "transparent"
        this.style.transform = "translateX(0)"
      }
    })
  })
}

function applyFilters() {
  console.log("Applying filters:", currentFilters)

  filteredEVs = completeEVDatabase.filter((ev) => {
    // Search filter - check make, model, and full name
    if (currentFilters.search) {
      const searchTerm = currentFilters.search.toLowerCase()
      const matchesSearch =
        ev.make.toLowerCase().includes(searchTerm) ||
        ev.model.toLowerCase().includes(searchTerm) ||
        ev.fullName.toLowerCase().includes(searchTerm) ||
        ev.features.some((feature) => feature.toLowerCase().includes(searchTerm))

      if (!matchesSearch) {
        return false
      }
    }

    // Price filter - convert to lakhs for Indian vehicles
    const vehiclePrice = ev.priceMin
    if (vehiclePrice > currentFilters.maxPrice) {
      return false
    }

    // Make filter - exact match comparison
    if (currentFilters.makes.length > 0) {
      if (!currentFilters.makes.includes(ev.make)) {
        return false
      }
    }

    // Body type filter - include new types
    if (currentFilters.bodyTypes.length > 0) {
      if (!currentFilters.bodyTypes.includes(ev.bodyType)) {
        return false
      }
    }

    // Range filter
    if (ev.maxRange < currentFilters.minRange) {
      return false
    }

    // Battery capacity filter
    if (currentFilters.batteryTypes.length > 0) {
      const maxBatteryCapacity = Math.max(...ev.batteryOptions.map((b) => b.capacity))
      let matchesBattery = false

      currentFilters.batteryTypes.forEach((type) => {
        if (type === "small" && maxBatteryCapacity < 5) matchesBattery = true
        if (type === "medium" && maxBatteryCapacity >= 5 && maxBatteryCapacity <= 15) matchesBattery = true
        if (type === "large" && maxBatteryCapacity > 15) matchesBattery = true
      })

      if (!matchesBattery) return false
    }

    return true
  })

  console.log(`Filtered results: ${filteredEVs.length} vehicles`)
  applySort()
  updateResultsCount()
  displayResults()
}

function applySort() {
  switch (currentSort) {
    case "price-low":
      filteredEVs.sort((a, b) => a.priceMin - b.priceMin)
      break
    case "price-high":
      filteredEVs.sort((a, b) => b.priceMax - a.priceMax)
      break
    case "range":
      filteredEVs.sort((a, b) => b.maxRange - a.maxRange)
      break
    case "battery":
      filteredEVs.sort((a, b) => {
        const maxBatteryA = Math.max(...a.batteryOptions.map((opt) => opt.capacity))
        const maxBatteryB = Math.max(...b.batteryOptions.map((opt) => opt.capacity))
        return maxBatteryB - maxBatteryA
      })
      break
    case "make":
      filteredEVs.sort((a, b) => a.make.localeCompare(b.make))
      break
    default: // name
      filteredEVs.sort((a, b) => a.model.localeCompare(b.model))
  }
}

function updateResultsCount() {
  const resultsCount = document.getElementById("resultsCount")
  if (resultsCount) {
    resultsCount.textContent = `${filteredEVs.length} vehicles found`
  }
}

function displayResults() {
  const resultsGrid = document.getElementById("resultsGrid")
  const noResults = document.getElementById("noResults")

  if (!resultsGrid || !noResults) {
    console.error("Results grid or no results element not found")
    return
  }

  if (filteredEVs.length === 0) {
    resultsGrid.style.display = "none"
    noResults.style.display = "block"
    return
  }

  resultsGrid.style.display = "grid"
  noResults.style.display = "none"

  resultsGrid.innerHTML = filteredEVs.map((ev) => createEVCard(ev)).join("")
}

function createEVCard(ev) {
  const maxBattery = Math.max(...ev.batteryOptions.map((b) => b.capacity))
  const priceRange = ev.priceMin === ev.priceMax ? `₹${ev.priceMin} Lakh` : `₹${ev.priceMin} - ₹${ev.priceMax} Lakh`
  const statusBadge =
    ev.status === "Coming Soon"
      ? '<div style="position: absolute; top: 10px; right: 10px; background: #f59e0b; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: 600;">Coming Soon</div>'
      : ""

  // Brand color coding
  const brandColors = {
    Tata: "#1e40af",
    Mahindra: "#dc2626",
    MG: "#059669",
    Citroën: "#7c3aed",
    Tesla: "#c4a35b",
    Kia: "#1e40af",
    "Mercedes-Benz": "#0ea5e9",
  }

  const brandColor = brandColors[ev.make] || "#6b7280"

  return `
        <div class="ev-card" style="position: relative;">
            ${statusBadge}
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                <div style="width: 4px; height: 20px; background: ${brandColor}; border-radius: 2px;"></div>
                <h3 style="margin: 0; color: ${brandColor};">${ev.make}</h3>
            </div>
            <div class="model-name">${ev.model}</div>
            <div class="price-range">${priceRange}</div>
            
            <div class="ev-specs">
                <div class="spec-item">
                    <div class="spec-label">Range</div>
                    <div class="spec-value">${ev.maxRange} km</div>
                </div>
                <div class="spec-item">
                    <div class="spec-label">Battery</div>
                    <div class="spec-value">${maxBattery} kWh</div>
                </div>
                <div class="spec-item">
                    <div class="spec-label">Power</div>
                    <div class="spec-value">${ev.motorPower} PS</div>
                </div>
                <div class="spec-item">
                    <div class="spec-label">Body Type</div>
                    <div class="spec-value">${ev.bodyType}</div>
                </div>
            </div>
            
            <div class="ev-actions">
                <button class="btn btn-primary" onclick="viewDetails(${ev.id})">
                    View Details
                </button>
                <button class="btn btn-secondary" onclick="addToCompare(${ev.id})" ${ev.status === "Coming Soon" ? "disabled" : ""}>
                    Compare
                </button>
            </div>
        </div>
    `
}

function clearAllFilters() {
  console.log("Clearing all filters...")

  // Reset filter values
  currentFilters = {
    search: "",
    maxPrice: 35,
    makes: [],
    bodyTypes: [],
    minRange: 150,
    batteryTypes: [],
  }

  // Reset form elements
  const searchInput = document.getElementById("searchInput")
  if (searchInput) searchInput.value = ""

  const priceRange = document.getElementById("priceRange")
  if (priceRange) {
    priceRange.value = 35
    const maxPriceLabel = document.getElementById("maxPrice")
    if (maxPriceLabel) maxPriceLabel.textContent = "₹35L"
  }

  const rangeFilter = document.getElementById("rangeFilter")
  if (rangeFilter) {
    rangeFilter.value = 150
    const maxRangeLabel = document.getElementById("maxRange")
    if (maxRangeLabel) maxRangeLabel.textContent = "150+ km"
  }

  // Uncheck all checkboxes and reset styles
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')
  const checkboxItems = document.querySelectorAll(".checkbox-item")

  checkboxes.forEach((checkbox) => (checkbox.checked = false))
  checkboxItems.forEach((item) => {
    item.style.background = "transparent"
    item.style.transform = "translateX(0)"
  })

  // Reset sort
  const sortSelect = document.getElementById("sortSelect")
  if (sortSelect) sortSelect.value = "name"
  currentSort = "name"

  // Apply filters
  applyFilters()

  // Add success animation to clear button
  const clearBtn = document.querySelector(".clear-filters")
  if (clearBtn) {
    clearBtn.style.transform = "scale(0.95)"
    clearBtn.innerHTML = "✅ Filters Cleared"

    setTimeout(() => {
      clearBtn.style.transform = "scale(1)"
      clearBtn.innerHTML = "✨ Clear Filters"
    }, 500)
  }
}

function viewDetails(evId) {
  const ev = completeEVDatabase.find((vehicle) => vehicle.id === evId)
  if (ev) {
    // Store selected EV in localStorage for details page
    localStorage.setItem("selectedEV", JSON.stringify(ev))

    // Create detailed info string
    const batteryInfo = ev.batteryOptions.map((b) => `${b.capacity} kWh (${b.range} km)`).join(", ")
    const detailsText = `
${ev.fullName}

💰 Price: ₹${ev.priceMin} - ₹${ev.priceMax} Lakh
🔋 Battery Options: ${batteryInfo}
⚡ Power: ${ev.motorPower} PS / ${ev.torque} Nm
🏃 Range: ${ev.maxRange} km
🔌 Charging: ${ev.chargingType}
🚗 Body Type: ${ev.bodyType}
👥 Seating: ${ev.seating}
📏 Dimensions: ${ev.dimensions}
🛡️ Warranty: ${ev.warranty}

✨ Key Features: ${ev.features.join(", ")}
🎯 Variants: ${ev.variants.join(", ")}
    `

    alert(detailsText)
  }
}

function addToCompare(evId) {
  const ev = completeEVDatabase.find((vehicle) => vehicle.id === evId)
  if (ev) {
    // Get existing comparison list
    const compareList = JSON.parse(localStorage.getItem("compareList") || "[]")

    // Check if already in comparison
    if (compareList.find((item) => item.id === evId)) {
      alert(`${ev.fullName} is already in your comparison list!`)
      return
    }

    // Check if comparison list is full (max 3)
    if (compareList.length >= 3) {
      alert("You can compare maximum 3 vehicles. Please remove one to add another.")
      return
    }

    // Add to comparison
    compareList.push(ev)
    localStorage.setItem("compareList", JSON.stringify(compareList))

    alert(`${ev.fullName} added to comparison! (${compareList.length}/3)`)
  }
}

// Export for use in other files
window.completeEVDatabase = completeEVDatabase

// Debug function to test filters
window.debugFilters = () => {
  console.log("Current filters:", currentFilters)
  console.log("Filtered EVs:", filteredEVs.length)
  console.log("All EVs:", completeEVDatabase.length)
}
