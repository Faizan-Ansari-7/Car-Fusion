// 1. CONFIGURATION
const API_KEY = 'dd347ed5d7c66c6a3ec3d32feb2b3a8d';
const API_URL = 'https://gnews.io/api/v4/search';

// 2. STATIC FALLBACK DATA
const fallbackNews = [
    {
        title: 'The Porsche 911 S/T: Pure Driving Nirvana?',
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070',
        publishedAt: '2026-02-10T10:00:00Z',
        source: { name: 'Car Fusion Editorial' },
        description: 'We took the limited-edition anniversary model to the twisty roads of the Black Forest to see if it lives up to the hype.',
        url: '#'
    }
];

// 3. EXPERT REVIEWS — 12 CARS → 6 COMPARISONS
const expertReviews = [

    // -------- 1 --------
    {
        id: 1,
        title: "Best Compact SUV Under ₹15L",
        comparison: "Creta vs Brezza",

        carA_name: "Hyundai Creta",
        carA_image: "cars/hyundai_creta.jpg",
        carA_points: [
            "Better safety tech",
            "More features",
            "Better ride comfort",
            "Higher resale value"
        ],

        carB_name: "Maruti Brezza",
        carB_image: "cars/maruti_brezza.jpg",
        carB_points: [
            "Better mileage",
            "Lower maintenance",
            "Wider service network",
            "Lower price"
        ],

        winner: "Hyundai Creta",
        verdict: "Better overall family SUV."
    },

    // -------- 2 --------
    {
        id: 2,
        title: "Best Safe Indian SUV",
        comparison: "Harrier vs XUV700",

        carA_name: "Mahindra XUV700",
        carA_image: "cars/mahindra_xuv700.jpg",
        carA_points: [
            "ADAS safety",
            "Powerful engine",
            "Premium cabin",
            "Better performance"
        ],

        carB_name: "Tata Harrier",
        carB_image: "cars/tata_harrier.jpg",
        carB_points: [
            "Strong build",
            "Comfortable ride",
            "Stable on highways",
            "Reliable diesel"
        ],

        winner: "Mahindra XUV700",
        verdict: "Best mix of safety + performance."
    },

    // -------- 3 --------
    {
        id: 3,
        title: "Best Hybrid SUV",
        comparison: "Hyryder vs City Hybrid",

        carA_name: "Toyota Hyryder Hybrid",
        carA_image: "cars/toyota_hyryder.jpg",
        carA_points: [
            "Best mileage",
            "Low running cost",
            "Strong hybrid tech",
            "Good city drive"
        ],

        carB_name: "Honda City Hybrid",
        carB_image: "cars/honda_city_hybrid.jpg",
        carB_points: [
            "Smooth engine",
            "Comfortable ride",
            "Reliable brand",
            "Good handling"
        ],

        winner: "Toyota Hyryder Hybrid",
        verdict: "Best value for fuel savings."
    },

    // -------- 4 --------
    {
        id: 4,
        title: "Best Mid-Size SUV",
        comparison: "Seltos vs Astor",

        carA_name: "Kia Seltos",
        carA_image: "cars/kia_seltos.jpg",
        carA_points: [
            "Better performance",
            "More features",
            "Better resale",
            "Wider service"
        ],

        carB_name: "MG Astor",
        carB_image: "cars/mg_astor.jpg",
        carB_points: [
            "Nice interiors",
            "Good safety",
            "Comfortable ride",
            "Modern tech"
        ],

        winner: "Kia Seltos",
        verdict: "Best all-round mid SUV."
    },

    // -------- 5 (SPECIAL IMAGE RULE) --------
    {
        id: 5,
        title: "Best Premium Hatchback",
        comparison: "Baleno vs i20",

        carA_name: "Maruti Baleno",
        carA_image: "cars/maruti_baleno.jpg",
        carA_points: [
            "Better mileage",
            "Lower maintenance",
            "Spacious cabin",
            "Good resale"
        ],

        carB_name: "Hyundai i20",
        carB_image: "cars/hyundai_i20.jpg",
        carB_points: [
            "Premium interiors",
            "Better features",
            "Safer build",
            "Better ride"
        ],

        winner: "Hyundai i20",
        verdict: "More premium overall."
    },

    // -------- 6 --------
    {
        id: 6,
        title: "Best Budget SUV",
        comparison: "Nexon vs Venue",

        carA_name: "Tata Nexon",
        carA_image: "cars/tata_nexon.jpg",
        carA_points: [
            "5-star safety",
            "Strong build",
            "Comfortable ride",
            "Good mileage"
        ],

        carB_name: "Hyundai Venue",
        carB_image: "cars/hyundai_venue.jpg",
        carB_points: [
            "Better features",
            "Good tech",
            "Smooth engine",
            "City friendly"
        ],

        winner: "Tata Nexon",
        verdict: "Safest and most balanced."
    }
];

// Multi-Page Dynamic Path Resolution for News Comparisons
const isNewsSubpage = window.location.pathname.includes('/pages/') || window.location.pathname.includes('\\pages\\');
const newsRootPrefix = isNewsSubpage ? '../' : './';

expertReviews.forEach(item => {
    if (item.carA_image && !item.carA_image.startsWith('http') && !item.carA_image.startsWith('../') && !item.carA_image.startsWith('assets/')) {
        item.carA_image = `${newsRootPrefix}assets/images/${item.carA_image}`;
    }
    if (item.carB_image && !item.carB_image.startsWith('http') && !item.carB_image.startsWith('../') && !item.carB_image.startsWith('assets/')) {
        item.carB_image = `${newsRootPrefix}assets/images/${item.carB_image}`;
    }
});

// 4. INITIAL LOAD
document.addEventListener('DOMContentLoaded', () => {
    fetchNews('supercars');
});

// 5. FETCH LIVE NEWS (YOUR ORIGINAL LOGIC)
async function fetchNews(query) {
    const grid = document.getElementById('newsGrid');
    if (!grid) return;

    grid.innerHTML = `
      <div class="text-center w-100 py-5">
        <div class="spinner-border text-gold" role="status"></div>
        <p class="mt-2 text-secondary">Fetching latest automotive news...</p>
      </div>
    `;

    try {
        const url = `${API_URL}?q=${query}&lang=en&max=9&apikey=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok && data.articles && data.articles.length > 0) {
            renderNews(data.articles);
        } else {
            renderNews(fallbackNews);
        }

    } catch (error) {
        renderNews(fallbackNews);
    }
}

// 6. FILTER CONTROLLER
function filterNews(category, btnElement) {

    document.querySelectorAll('.category-btn')
        .forEach(btn => btn.classList.remove('active'));

    if (btnElement) btnElement.classList.add('active');

    if (category === 'review') {
        renderExpertReviews();
        return;
    }

    let searchQuery = 'luxury cars supercars';

    if (category === 'news')
        searchQuery = 'automotive industry news';

    else if (category === 'tech')
        searchQuery = 'electric vehicle battery technology';

    fetchNews(searchQuery);
}

// 7. RENDER LIVE NEWS
function renderNews(articles) {
    const grid = document.getElementById('newsGrid');
    grid.innerHTML = '';

    articles.forEach(item => {
        const imageUrl =
            item.image ||
            item.urlToImage ||
            'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000';

        const date = new Date(item.publishedAt)
            .toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4 fade-in';

        col.innerHTML = `
            <div class="card news-card h-100 bg-white shadow-sm rounded-0">
                <div class="news-img-wrapper">
                    <img src="${imageUrl}">
                </div>
                <div class="card-body p-4 d-flex flex-column">
                    <div class="d-flex justify-content-between mb-2">
                        <small class="text-gold fw-bold text-uppercase">${item.source.name}</small>
                        <small class="text-secondary">${date}</small>
                    </div>
                    <h5 class="card-title fw-bold mb-3">${item.title}</h5>
                    <p class="card-text text-secondary small flex-grow-1">
                        ${item.description || 'No description available.'}
                    </p>
                    <div class="mt-3 border-top pt-3">
                        <a href="${item.url}" target="_blank"
                           class="small text-black fw-bold text-uppercase text-decoration-none">
                            Read Full Story →
                        </a>
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(col);
    });
}

// 8. RENDER EXPERT REVIEWS (WINNER IMAGE ON TOP FOR #5)
function renderExpertReviews() {
    const grid = document.getElementById('newsGrid');
    grid.innerHTML = '';

    expertReviews.forEach(item => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4 fade-in';

        // SPECIAL RULE FOR ID = 5 → show WINNER image
        let topImage = item.carA_image;
        if (item.id === 5) {
            topImage =
              (item.winner === item.carA_name)
                ? item.carA_image
                : item.carB_image;
        }

        col.innerHTML = `
        <div class="card news-card h-100 bg-white shadow-sm rounded-0"
             onclick="openComparison(${item.id})"
             style="cursor:pointer;">

            <div class="news-img-wrapper">
                <img src="${topImage}" class="w-100">
            </div>

            <div class="card-body p-4">
                <span class="badge bg-black text-gold mb-2">EXPERT REVIEW</span>
                <h5 class="fw-bold mb-2">${item.title}</h5>
                <p class="small text-secondary">
                    <strong>Match:</strong> ${item.comparison}
                </p>
                <h6 class="text-success fw-bold">
                    Winner: ${item.winner}
                </h6>
                <p class="fw-bold text-dark">${item.verdict}</p>
                <p class="small text-primary mt-2">
                    Click to compare details →
                </p>
            </div>
        </div>
        `;

        grid.appendChild(col);
    });
}

// 9. COMPARISON MODAL
function openComparison(id) {
    const item = expertReviews.find(e => e.id === id);
    if (!item) return;

    const modalHTML = `
    <div class="modal fade" id="compareModal" tabindex="-1">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content rounded-0">
          <div class="modal-header bg-black text-white">
            <h5 class="modal-title text-gold">
              ${item.comparison}
            </h5>
            <button type="button" class="btn-close btn-close-white"
                    data-bs-dismiss="modal"></button>
          </div>

          <div class="modal-body">

            <div class="row g-4">
              <div class="col-md-6 text-center">
                <img src="${item.carA_image}" class="img-fluid mb-3">
                <h5>${item.carA_name}</h5>
                <ul class="text-start">
                  ${item.carA_points.map(p => `<li>${p}</li>`).join('')}
                </ul>
              </div>

              <div class="col-md-6 text-center">
                <img src="${item.carB_image}" class="img-fluid mb-3">
                <h5>${item.carB_name}</h5>
                <ul class="text-start">
                  ${item.carB_points.map(p => `<li>${p}</li>`).join('')}
                </ul>
              </div>
            </div>

            <hr>
            <h5 class="text-success text-center">
              Winner: ${item.winner}
            </h5>
            <p class="text-center fw-bold">${item.verdict}</p>

          </div>
        </div>
      </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = new bootstrap.Modal(document.getElementById('compareModal'));
    modal.show();

    document.getElementById('compareModal')
        .addEventListener('hidden.bs.modal', function () {
            this.remove();
        });
}