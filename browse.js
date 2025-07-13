// Browse page functionality
let currentFilters = {
    search: '',
    maxPrice: 150000,
    makes: [],
    bodyTypes: [],
    minRange: 100
};

let currentSort = 'name';
let filteredEVs = [];
let evData = []; // Assuming evData is an array of EV objects
let currentPage = 1;

function formatCurrency(amount) {
    return `$${amount.toLocaleString('en-US')}`;
}

function createEVCard(ev) {
    return `
      <div class="ev-card">
        <h2>${ev.make} ${ev.model}</h2>
        <p>Price: ${formatCurrency(ev.price)}</p>
        <p>Range: ${ev.range} miles</p>
        <p>Efficiency: ${ev.efficiency} kWh/100mi</p>
      </div>
    `;
}

// Initialize browse page
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('browse.html')) {
        initializeBrowsePage();
    }
});

function initializeBrowsePage() {
    setupFilters();
    loadResults();
    updateResultsCount();
}

function setupFilters() {
    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentFilters.search = e.target.value.toLowerCase();
            applyFilters();
        });
    }

    // Price range
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.addEventListener('input', (e) => {
            currentFilters.maxPrice = parseInt(e.target.value);
            document.getElementById('maxPrice').textContent = formatCurrency(currentFilters.maxPrice);
            applyFilters();
        });
    }

    // Range filter
    const rangeFilter = document.getElementById('rangeFilter');
    if (rangeFilter) {
        rangeFilter.addEventListener('input', (e) => {
            currentFilters.minRange = parseInt(e.target.value);
            document.getElementById('maxRange').textContent = `${currentFilters.minRange}+ miles`;
            applyFilters();
        });
    }

    // Make filters
    const makeFilters = document.getElementById('makeFilters');
    if (makeFilters) {
        makeFilters.addEventListener('change', (e) => {
            if (e.target.type === 'checkbox') {
                if (e.target.checked) {
                    currentFilters.makes.push(e.target.value);
                } else {
                    currentFilters.makes = currentFilters.makes.filter(make => make !== e.target.value);
                }
                applyFilters();
            }
        });
    }

    // Body type filters
    const bodyTypeFilters = document.getElementById('bodyTypeFilters');
    if (bodyTypeFilters) {
        bodyTypeFilters.addEventListener('change', (e) => {
            if (e.target.type === 'checkbox') {
                if (e.target.checked) {
                    currentFilters.bodyTypes.push(e.target.value);
                } else {
                    currentFilters.bodyTypes = currentFilters.bodyTypes.filter(type => type !== e.target.value);
                }
                applyFilters();
            }
        });
    }

    // Sort select
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            applySort();
        });
    }
}

function applyFilters() {
    filteredEVs = evData.filter(ev => {
        // Search filter
        if (currentFilters.search &&
            !ev.make.toLowerCase().includes(currentFilters.search) &&
            !ev.model.toLowerCase().includes(currentFilters.search)) {
            return false;
        }

        // Price filter
        if (ev.price > currentFilters.maxPrice) {
            return false;
        }

        // Make filter
        if (currentFilters.makes.length > 0 && !currentFilters.makes.includes(ev.make)) {
            return false;
        }

        // Body type filter
        if (currentFilters.bodyTypes.length > 0 && !currentFilters.bodyTypes.includes(ev.bodyType)) {
            return false;
        }

        // Range filter
        if (ev.range < currentFilters.minRange) {
            return false;
        }

        return true;
    });

    applySort();
    updateResultsCount();
}

function applySort() {
    switch (currentSort) {
        case 'price-low':
            filteredEVs.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredEVs.sort((a, b) => b.price - a.price);
            break;
        case 'range':
            filteredEVs.sort((a, b) => b.range - a.range);
            break;
        case 'efficiency':
            filteredEVs.sort((a, b) => b.efficiency - a.efficiency);
            break;
        default:
            filteredEVs.sort((a, b) => `${a.make} ${a.model}`.localeCompare(`${b.make} ${b.model}`));
    }

    loadResults();
}

function loadResults() {
    const resultsGrid = document.getElementById('resultsGrid');
    if (!resultsGrid) return;

    const resultsToShow = filteredEVs.slice(0, currentPage * 8);
    resultsGrid.innerHTML = resultsToShow.map(ev => createEVCard(ev)).join('');
}

function updateResultsCount() {
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        resultsCount.textContent = `${filteredEVs.length} vehicles found`;
    }
}

function clearFilters() {
    // Reset filters
    currentFilters = {
        search: '',
        maxPrice: 150000,
        makes: [],
        bodyTypes: [],
        minRange: 100
    };

    // Reset form elements
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';

    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.value = 150000;
        document.getElementById('maxPrice').textContent = '$150,000';
    }

    const rangeFilter = document.getElementById('rangeFilter');
    if (rangeFilter) {
        rangeFilter.value = 100;
        document.getElementById('maxRange').textContent = '100+ miles';
    }

    // Uncheck all checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);

    // Reset sort
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) sortSelect.value = 'name';
    currentSort = 'name';

    // Apply filters
    applyFilters();
}

function loadMoreResults() {
    currentPage++;
    loadResults();
}
  