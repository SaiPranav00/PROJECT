// Complete EV Database with all manufacturers
const completeEVDatabase = [
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
        ev.fullName.toLowerCase().includes(searchTerm)

      if (!matchesSearch) {
        return false
      }
    }

    // Price filter
    if (ev.priceMin > currentFilters.maxPrice) {
      return false
    }

    // Make filter - FIXED: exact match comparison
    if (currentFilters.makes.length > 0) {
      if (!currentFilters.makes.includes(ev.make)) {
        return false
      }
    }

    // Body type filter
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
        if (type === "small" && maxBatteryCapacity < 25) matchesBattery = true
        if (type === "medium" && maxBatteryCapacity >= 25 && maxBatteryCapacity <= 40) matchesBattery = true
        if (type === "large" && maxBatteryCapacity > 40) matchesBattery = true
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
