// Compare page functionality
let selectedVehicles = [null, null, null];
let currentSelectorIndex = 0;

// Declare evData variable
const evData = [
    { id: 1, make: 'Tesla', model: 'Model S', price: 80000, range: 358, efficiency: 130, bodyType: 'Sedan', acceleration: 2.4, topSpeed: 155, seating: 5, chargingSpeed: '250 kW' },
    { id: 2, make: 'Chevrolet', model: 'Bolt EV', price: 37490, range: 259, efficiency: 118, bodyType: 'Hatchback', acceleration: 6.5, topSpeed: 125, seating: 5, chargingSpeed: '190 kW' },
    { id: 3, make: 'Nissan', model: 'Leaf', price: 31980, range: 150, efficiency: 126, bodyType: 'Hatchback', acceleration: 9.9, topSpeed: 90, seating: 5, chargingSpeed: '60 kW' }
];

// Declare formatCurrency function
function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value);
}

// Initialize compare page
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('compare.html')) {
        initializeComparePage();
    }
});

function initializeComparePage() {
    setupVehicleSelectors();

    // Load comparison from URL parameters if available
    const urlParams = new URLSearchParams(window.location.search);
    const vehicles = urlParams.get('vehicles');
    if (vehicles) {
        const vehicleNames = vehicles.split(',');
        loadComparisonFromNames(vehicleNames);
    }
}

function setupVehicleSelectors() {
    const selectors = document.querySelectorAll('.vehicle-selector');
    selectors.forEach((selector, index) => {
        selector.addEventListener('click', () => {
            currentSelectorIndex = index;
            showVehicleModal();
        });
    });
}

function showVehicleModal() {
    const modal = document.getElementById('vehicleModal');
    if (!modal) return;

    const vehicleList = document.getElementById('vehicleList');
    if (vehicleList) {
        vehicleList.innerHTML = evData.map(ev => `
      <div class="vehicle-option" onclick="selectVehicle(${ev.id})">
        <div class="vehicle-option-content">
          <img src="${ev.image}" alt="${ev.make} ${ev.model}" style="width: 60px; height: 40px; object-fit: cover; border-radius: 4px;">
          <div>
            <div class="vehicle-option-name">${ev.make} ${ev.model}</div>
            <div class="vehicle-option-price">${formatCurrency(ev.price)}</div>
          </div>
        </div>
      </div>
    `).join('');
    }

    // Setup search
    const vehicleSearch = document.getElementById('vehicleSearch');
    if (vehicleSearch) {
        vehicleSearch.addEventListener('input', (e) => {
            filterVehicleList(e.target.value);
        });
    }

    modal.style.display = 'block';
}

function filterVehicleList(searchTerm) {
    const vehicleList = document.getElementById('vehicleList');
    if (!vehicleList) return;

    const filteredVehicles = evData.filter(ev =>
        ev.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ev.model.toLowerCase().includes(searchTerm.toLowerCase())
    );

    vehicleList.innerHTML = filteredVehicles.map(ev => `
    <div class="vehicle-option" onclick="selectVehicle(${ev.id})">
      <div class="vehicle-option-content">
        <img src="${ev.image}" alt="${ev.make} ${ev.model}" style="width: 60px; height: 40px; object-fit: cover; border-radius: 4px;">
        <div>
          <div class="vehicle-option-name">${ev.make} ${ev.model}</div>
          <div class="vehicle-option-price">${formatCurrency(ev.price)}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function selectVehicle(vehicleId) {
    const vehicle = evData.find(ev => ev.id === vehicleId);
    if (!vehicle) return;

    selectedVehicles[currentSelectorIndex] = vehicle;
    updateVehicleSelector(currentSelectorIndex, vehicle);
    closeVehicleModal();
    updateComparisonTable();
}

function updateVehicleSelector(index, vehicle) {
    const selector = document.getElementById(`selector${index + 1}`);
    if (!selector) return;

    selector.innerHTML = `
    <div class="selected-vehicle">
      <img src="${vehicle.image}" alt="${vehicle.make} ${vehicle.model}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 12px;">
      <div class="selected-vehicle-name">${vehicle.make} ${vehicle.model}</div>
      <div class="selected-vehicle-price">${formatCurrency(vehicle.price)}</div>
      <button class="remove-vehicle-btn" onclick="removeVehicle(${index})">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `;
}

function removeVehicle(index) {
    selectedVehicles[index] = null;
    const selector = document.getElementById(`selector${index + 1}`);
    if (selector) {
        selector.innerHTML = `
      <div class="selector-placeholder">
        <i class="fas fa-plus"></i>
        <span>Select ${index === 0 ? 'First' : index === 1 ? 'Second' : 'Third'} Vehicle</span>
      </div>
    `;
    }
    updateComparisonTable();
}

function updateComparisonTable() {
    const hasVehicles = selectedVehicles.some(v => v !== null);
    const comparisonTable = document.getElementById('comparisonTable');

    if (!hasVehicles) {
        comparisonTable.style.display = 'none';
        return;
    }

    comparisonTable.style.display = 'block';

    // Update headers
    selectedVehicles.forEach((vehicle, index) => {
        const header = document.getElementById(`vehicle${index + 1}Header`);
        if (header) {
            header.innerHTML = vehicle ? `
        <div>
          <div style="font-weight: 600; margin-bottom: 4px;">${vehicle.make} ${vehicle.model}</div>
          <div style="color: #667eea; font-size: 14px;">${formatCurrency(vehicle.price)}</div>
        </div>
      ` : '';
        }
    });

    // Generate comparison rows
    const comparisonBody = document.getElementById('comparisonBody');
    if (comparisonBody) {
        const specs = [
            { label: 'Starting Price', key: 'price', format: 'currency' },
            { label: 'Range', key: 'range', format: 'miles' },
            { label: 'Efficiency', key: 'efficiency', format: 'mpge' },
            { label: 'Body Type', key: 'bodyType', format: 'text' },
            { label: '0-60 mph', key: 'acceleration', format: 'seconds' },
            { label: 'Top Speed', key: 'topSpeed', format: 'mph' },
            { label: 'Seating', key: 'seating', format: 'people' },
            { label: 'Charging Speed', key: 'chargingSpeed', format: 'text' }
        ];

        comparisonBody.innerHTML = specs.map(spec => `
      <div class="comparison-row">
        <div class="spec-label">${spec.label}</div>
        ${selectedVehicles.map(vehicle => `
          <div class="spec-value">
            ${vehicle ? formatSpecValue(vehicle[spec.key], spec.format) : '—'}
          </div>
        `).join('')}
      </div>
    `).join('');
    }
}

function formatSpecValue(value, format) {
    switch (format) {
        case 'currency':
            return formatCurrency(value);
        case 'miles':
            return `${value} miles`;
        case 'mpge':
            return `${value} MPGe`;
        case 'seconds':
            return `${value}s`;
        case 'mph':
            return `${value} mph`;
        case 'people':
            return `${value} ${value === 1 ? 'person' : 'people'}`;
        default:
            return value;
    }
}

function closeVehicleModal() {
    const modal = document.getElementById('vehicleModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function loadComparison(vehicleNames) {
    vehicleNames.forEach((name, index) => {
        if (index < 3) {
            const vehicle = evData.find(ev => `${ev.make} ${ev.model}` === name);
            if (vehicle) {
                selectedVehicles[index] = vehicle;
                updateVehicleSelector(index, vehicle);
            }
        }
    });
    updateComparisonTable();
}

function loadComparisonFromNames(vehicleNames) {
    loadComparison(vehicleNames);
}

// Add CSS for vehicle options
const style = document.createElement('style');
style.textContent = `
  .vehicle-option {
    padding: 12px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 8px;
  }

  .vehicle-option:hover {
    border-color: #667eea;
    background: #f7fafc;
  }

  .vehicle-option-content {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .vehicle-option-name {
    font-weight: 500;
    color: #2d3748;
  }

  .vehicle-option-price {
    font-size: 14px;
    color: #667eea;
    font-weight: 600;
  }

  .selected-vehicle {
    text-align: center;
    position: relative;
  }

  .selected-vehicle-name {
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 4px;
  }

  .selected-vehicle-price {
    color: #667eea;
    font-size: 14px;
    font-weight: 600;
  }

  .remove-vehicle-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    background: rgba(0,0,0,0.5);
    color: white;
    border: none;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }

  .remove-vehicle-btn:hover {
    background: rgba(0,0,0,0.7);
  }

  .vehicle-search {
    margin-bottom: 16px;
  }

  .vehicle-search input {
    width: 100%;
    padding: 12px;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 14px;
  }

  .vehicle-search input:focus {
    outline: none;
    border-color: #667eea;
  }

  .vehicle-list {
    max-height: 400px;
    overflow-y: auto;
  }
`;
document.head.appendChild(style);
