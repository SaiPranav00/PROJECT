// Compare page functionality with complete EV database
let selectedVehicles = [null, null, null]
let currentSelectorIndex = 0

// Declare the completeEVDatabase variable
let completeEVDatabase

// Load the complete EV database from browse.js
function loadEVDatabase() {
  // First try to load from browse.js
  if (typeof completeEVDatabase !== "undefined" && completeEVDatabase.length > 0) {
    return completeEVDatabase
  }

  // If browse.js hasn't loaded yet, try to load it dynamically
  if (window.completeEVDatabase && window.completeEVDatabase.length > 0) {
    return window.completeEVDatabase
  }

  // Complete fallback database with all your vehicles
  return [
    // Tata Motors EVs
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
      seating: 5,
      dimensions: "3993 x 1677 x 1537 mm",
      warranty: "8 years/1,60,000 km battery",
      features: ["Entry Level", "City Friendly", "Compact Design"],
      status: "Available",
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
      seating: 5,
      dimensions: "3993 x 1811 x 1606 mm",
      warranty: "8 years/1,60,000 km battery",
      features: ["Compact SUV", "High Ground Clearance", "Spacious Interior"],
      status: "Available",
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
      seating: 5,
      dimensions: "3993 x 1811 x 1606 mm",
      warranty: "8 years/1,60,000 km battery",
      features: ["Most Popular", "Fast Charging", "Premium Features"],
      status: "Available",
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
      seating: 5,
      dimensions: "4308 x 1810 x 1637 mm",
      warranty: "8 years/1,60,000 km battery",
      features: ["Coupe Design", "Premium Styling", "Latest Launch"],
      status: "Available",
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
      seating: 5,
      dimensions: "4598 x 1894 x 1706 mm",
      warranty: "8 years/1,60,000 km battery",
      features: ["Premium SUV", "Long Range", "Luxury Interior"],
      status: "Available",
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
      seating: 7,
      dimensions: "4661 x 1894 x 1786 mm",
      warranty: "8 years/1,60,000 km battery",
      features: ["7-Seater", "Family SUV", "Premium Features"],
      status: "Available",
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
      seating: 5,
      dimensions: "3993 x 1677 x 1532 mm",
      warranty: "8 years/1,60,000 km battery",
      features: ["Fleet Focused", "Sedan Comfort", "Commercial Use"],
      status: "Available",
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
      seating: 5,
      dimensions: "4371 x 1907 x 1627 mm",
      warranty: "Lifetime battery warranty",
      features: ["INGLO Platform", "Advanced ADAS", "Premium Interior"],
      status: "Available",
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
      seating: 5,
      dimensions: "4789 x 1907 x 1690 mm",
      warranty: "Lifetime battery warranty",
      features: ["Triple Display", "7 Airbags", "360° Camera"],
      status: "Available",
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
      seating: 5,
      dimensions: "4323 x 1809 x 1649 mm",
      warranty: "8 years/1,50,000 km battery",
      features: ["i-SMART Technology", "Premium Interior", "Advanced Safety"],
      status: "Available",
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
      seating: 4,
      dimensions: "2974 x 1505 x 1640 mm",
      warranty: "8 years/1,50,000 km battery",
      features: ["Ultra Compact", "City Friendly", "55+ Connected Features"],
      status: "Available",
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
      seating: 5,
      dimensions: "4295 x 1850 x 1677 mm",
      warranty: "Lifetime battery warranty",
      features: ["Aero-Lounge Seats", "Infinity View Glass Roof", "BaaS Program"],
      status: "Available",
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
      seating: 5,
      dimensions: "3981 x 1733 x 1669 mm",
      warranty: "7 years/1,40,000 km battery",
      features: ["10.2-inch Touchscreen", "Eco Mode", "Regenerative Braking"],
      status: "Available",
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
      seating: 5,
      dimensions: "4352 x 1765 x 1593 mm",
      warranty: "8 years/1,60,000 km battery",
      features: ["SUV Coupe Design", "Modern Connectivity", "Advanced Safety"],
      status: "Coming Soon",
    },
  ]
}

function formatCurrency(value) {
  return `₹${value} Lakh`
}

// Initialize compare page
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("compare.html")) {
    console.log("Initializing compare page...")

    // Wait a bit for browse.js to load if it's included
    setTimeout(() => {
      initializeComparePage()
    }, 100)
  }
})

function initializeComparePage() {
  const evData = loadEVDatabase()
  console.log(`Loaded ${evData.length} vehicles for comparison`)

  setupVehicleSelectors()
  loadComparisonFromStorage()
  updateEmptyState()

  // Load comparison from URL parameters if available
  const urlParams = new URLSearchParams(window.location.search)
  const vehicles = urlParams.get("vehicles")
  if (vehicles) {
    const vehicleNames = vehicles.split(",")
    loadComparisonFromNames(vehicleNames)
  }
}

function setupVehicleSelectors() {
  const selectors = document.querySelectorAll(".vehicle-selector")
  selectors.forEach((selector, index) => {
    selector.addEventListener("click", () => {
      currentSelectorIndex = index
      showVehicleModal()
    })
  })
}

function loadComparisonFromStorage() {
  const compareList = JSON.parse(localStorage.getItem("compareList") || "[]")
  console.log("Loading comparison from storage:", compareList)

  compareList.forEach((vehicle, index) => {
    if (index < 3 && vehicle) {
      selectedVehicles[index] = vehicle
      updateVehicleSelector(index, vehicle)
    }
  })

  updateComparisonTable()
  updateEmptyState()
}

function showVehicleModal() {
  const modal = document.getElementById("vehicleModal")
  if (!modal) return

  const evData = loadEVDatabase()
  const vehicleList = document.getElementById("vehicleList")

  console.log(`Showing ${evData.length} vehicles in modal`)

  if (vehicleList) {
    const availableVehicles = evData.filter((ev) => ev.status !== "Coming Soon")
    console.log(`${availableVehicles.length} available vehicles (excluding Coming Soon)`)

    vehicleList.innerHTML = availableVehicles.map((ev) => createVehicleOption(ev)).join("")
  }

  // Setup search
  const vehicleSearch = document.getElementById("vehicleSearch")
  if (vehicleSearch) {
    vehicleSearch.value = ""
    vehicleSearch.addEventListener("input", (e) => {
      filterVehicleList(e.target.value)
    })
  }

  modal.style.display = "block"

  // Focus search input
  setTimeout(() => {
    if (vehicleSearch) vehicleSearch.focus()
  }, 100)
}

function createVehicleOption(ev) {
  const maxBattery = Math.max(...ev.batteryOptions.map((b) => b.capacity))

  // Brand color coding
  const brandColors = {
    Tata: "#1e40af",
    Mahindra: "#dc2626",
    MG: "#059669",
    Citroën: "#7c3aed",
  }

  const brandColor = brandColors[ev.make] || "#6b7280"

  return `
    <div class="vehicle-option" onclick="selectVehicle(${ev.id})">
      <div class="vehicle-option-content">
        <div class="vehicle-option-image" style="background: linear-gradient(135deg, ${brandColor}, ${brandColor}dd);">
          <div class="make-badge">${ev.make}</div>
        </div>
        <div class="vehicle-option-details">
          <div class="vehicle-option-name">${ev.make} ${ev.model}</div>
          <div class="vehicle-option-price">${formatCurrency(ev.priceMin)} - ${formatCurrency(ev.priceMax)}</div>
          <div class="vehicle-option-specs">
            <span>${ev.maxRange}km</span> • 
            <span>${maxBattery}kWh</span> • 
            <span>${ev.motorPower}PS</span>
          </div>
        </div>
      </div>
    </div>
  `
}

function filterVehicleList(searchTerm) {
  const vehicleList = document.getElementById("vehicleList")
  if (!vehicleList) return

  const evData = loadEVDatabase()
  const filteredVehicles = evData.filter(
    (ev) =>
      ev.status !== "Coming Soon" &&
      (ev.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ev.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ev.fullName.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  console.log(`Filtered to ${filteredVehicles.length} vehicles for search: "${searchTerm}"`)

  vehicleList.innerHTML = filteredVehicles.map((ev) => createVehicleOption(ev)).join("")
}

function selectVehicle(vehicleId) {
  const evData = loadEVDatabase()
  const vehicle = evData.find((ev) => ev.id === vehicleId)
  if (!vehicle) return

  // Check if vehicle is already selected
  if (selectedVehicles.some((v) => v && v.id === vehicleId)) {
    alert(`${vehicle.fullName} is already selected for comparison!`)
    return
  }

  selectedVehicles[currentSelectorIndex] = vehicle
  updateVehicleSelector(currentSelectorIndex, vehicle)
  closeVehicleModal()
  updateComparisonTable()
  updateLocalStorage()
  updateEmptyState()

  console.log("Vehicle selected:", vehicle.fullName)
}

function updateVehicleSelector(index, vehicle) {
  const selector = document.getElementById(`selector${index + 1}`)
  if (!selector) return

  const maxBattery = Math.max(...vehicle.batteryOptions.map((b) => b.capacity))

  // Brand color coding
  const brandColors = {
    Tata: "#1e40af",
    Mahindra: "#dc2626",
    MG: "#059669",
    Citroën: "#7c3aed",
  }

  const brandColor = brandColors[vehicle.make] || "#6b7280"

  selector.innerHTML = `
    <div class="selected-vehicle">
      <div class="selected-vehicle-image" style="background: linear-gradient(135deg, ${brandColor}, ${brandColor}dd);">
        <div class="make-badge">${vehicle.make}</div>
      </div>
      <div class="selected-vehicle-info">
        <div class="selected-vehicle-name">${vehicle.make} ${vehicle.model}</div>
        <div class="selected-vehicle-price">${formatCurrency(vehicle.priceMin)} - ${formatCurrency(vehicle.priceMax)}</div>
        <div class="selected-vehicle-specs">
          <span>${vehicle.maxRange}km</span> • <span>${maxBattery}kWh</span>
        </div>
      </div>
      <button class="remove-vehicle-btn" onclick="removeVehicle(${index})">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `

  selector.classList.add("selected")
}

function removeVehicle(index) {
  selectedVehicles[index] = null
  const selector = document.getElementById(`selector${index + 1}`)

  if (selector) {
    selector.innerHTML = `
      <div class="selector-placeholder">
        <i class="fas fa-plus"></i>
        <span>Select ${index === 0 ? "First" : index === 1 ? "Second" : "Third"} Vehicle</span>
      </div>
    `
    selector.classList.remove("selected")
  }

  updateComparisonTable()
  updateLocalStorage()
  updateEmptyState()

  console.log("Vehicle removed from position:", index)
}

function updateComparisonTable() {
  const hasVehicles = selectedVehicles.some((v) => v !== null)
  const comparisonTable = document.getElementById("comparisonTable")

  if (!hasVehicles || !comparisonTable) {
    if (comparisonTable) comparisonTable.style.display = "none"
    return
  }

  comparisonTable.style.display = "block"

  // Update headers
  selectedVehicles.forEach((vehicle, index) => {
    const header = document.getElementById(`vehicle${index + 1}Header`)
    if (header) {
      header.innerHTML = vehicle
        ? `
          <div class="comparison-header">
            <div class="comparison-vehicle-name">${vehicle.make} ${vehicle.model}</div>
            <div class="comparison-vehicle-price">${formatCurrency(vehicle.priceMin)} - ${formatCurrency(vehicle.priceMax)}</div>
          </div>
        `
        : ""
    }
  })

  // Generate comparison rows with highlighting
  const comparisonBody = document.getElementById("comparisonBody")
  if (comparisonBody) {
    const specs = [
      { label: "Starting Price", key: "priceMin", format: "currency", compare: "lower" },
      { label: "Max Price", key: "priceMax", format: "currency", compare: "lower" },
      { label: "Range", key: "maxRange", format: "km", compare: "higher" },
      { label: "Battery Capacity", key: "batteryOptions", format: "battery", compare: "higher" },
      { label: "Motor Power", key: "motorPower", format: "power", compare: "higher" },
      { label: "Torque", key: "torque", format: "torque", compare: "higher" },
      { label: "Body Type", key: "bodyType", format: "text", compare: "none" },
      { label: "Top Speed", key: "topSpeed", format: "speed", compare: "higher" },
      { label: "Seating", key: "seating", format: "people", compare: "higher" },
      { label: "Charging", key: "chargingType", format: "text", compare: "none" },
      { label: "Warranty", key: "warranty", format: "text", compare: "none" },
    ]

    comparisonBody.innerHTML = specs.map((spec) => generateComparisonRow(spec)).join("")
  }
}

function generateComparisonRow(spec) {
  const values = selectedVehicles.map((vehicle) => {
    if (!vehicle) return null
    return getSpecValue(vehicle[spec.key], spec.format)
  })

  // Find best value for highlighting
  const bestIndices = findBestValues(values, spec.compare, spec.format)

  return `
    <div class="comparison-row">
      <div class="spec-label">${spec.label}</div>
      ${selectedVehicles
        .map(
          (vehicle, index) => `
        <div class="spec-value ${bestIndices.includes(index) ? "best" : ""}">
          ${vehicle ? formatSpecValue(vehicle[spec.key], spec.format) : "—"}
        </div>
      `,
        )
        .join("")}
    </div>
  `
}

function getSpecValue(value, format) {
  if (format === "battery" && Array.isArray(value)) {
    return Math.max(...value.map((b) => b.capacity))
  }
  return value
}

function findBestValues(values, compareType, format) {
  if (compareType === "none") return []

  const numericValues = values
    .map((val, index) => {
      if (val === null) return { value: null, index }

      let numVal = val
      if (format === "battery" && Array.isArray(val)) {
        numVal = Math.max(...val.map((b) => b.capacity))
      }

      return { value: typeof numVal === "number" ? numVal : null, index }
    })
    .filter((item) => item.value !== null)

  if (numericValues.length === 0) return []

  const bestValue =
    compareType === "higher"
      ? Math.max(...numericValues.map((item) => item.value))
      : Math.min(...numericValues.map((item) => item.value))

  return numericValues.filter((item) => item.value === bestValue).map((item) => item.index)
}

function formatSpecValue(value, format) {
  if (value === null || value === undefined) return "—"

  switch (format) {
    case "currency":
      return formatCurrency(value)
    case "km":
      return `${value} km`
    case "battery":
      if (Array.isArray(value)) {
        const maxCapacity = Math.max(...value.map((b) => b.capacity))
        return `${maxCapacity} kWh`
      }
      return `${value} kWh`
    case "power":
      return `${value} PS`
    case "torque":
      return `${value} Nm`
    case "speed":
      return `${value} km/h`
    case "people":
      return `${value} ${value === 1 ? "person" : "people"}`
    default:
      return value || "—"
  }
}

function updateEmptyState() {
  const hasVehicles = selectedVehicles.some((v) => v !== null)
  const emptyComparison = document.getElementById("emptyComparison")

  if (emptyComparison) {
    emptyComparison.style.display = hasVehicles ? "none" : "block"
  }
}

function closeVehicleModal() {
  const modal = document.getElementById("vehicleModal")
  if (modal) {
    modal.style.display = "none"
  }
}

function updateLocalStorage() {
  const compareList = selectedVehicles.filter((v) => v !== null)
  localStorage.setItem("compareList", JSON.stringify(compareList))
  console.log("Updated localStorage with:", compareList.length, "vehicles")
}

function loadPopularComparison(vehicleNames) {
  console.log("Loading popular comparison:", vehicleNames)

  const evData = loadEVDatabase()

  // Clear current selection
  selectedVehicles = [null, null, null]

  vehicleNames.forEach((name, index) => {
    if (index < 3) {
      const vehicle = evData.find((ev) => ev.fullName === name || `${ev.make} ${ev.model}` === name)
      if (vehicle) {
        selectedVehicles[index] = vehicle
        updateVehicleSelector(index, vehicle)
      }
    }
  })

  updateComparisonTable()
  updateLocalStorage()
  updateEmptyState()

  // Scroll to comparison table
  const comparisonTable = document.getElementById("comparisonTable")
  if (comparisonTable && comparisonTable.style.display !== "none") {
    comparisonTable.scrollIntoView({ behavior: "smooth" })
  }
}

function loadComparisonFromNames(vehicleNames) {
  loadPopularComparison(vehicleNames)
}

// Close modal when clicking outside
window.addEventListener("click", (event) => {
  const modal = document.getElementById("vehicleModal")
  if (event.target === modal) {
    closeVehicleModal()
  }
})

// Keyboard shortcuts
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeVehicleModal()
  }
})

console.log("Compare.js loaded successfully with complete EV database")
