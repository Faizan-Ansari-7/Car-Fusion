# 🚗 Car Fusion — Luxury & Certified Pre-Owned Automotive Portal

[![Code Standards: HTML5 / CSS3 / Vanilla JS](https://img.shields.io/badge/Frontend-HTML5%20%7C%20CSS3%20%7C%20JS%20ES6%2B-gold)](https://carfusion.com)
[![Framework: Bootstrap 5](https://img.shields.io/badge/UI-Bootstrap%205.3-purple)](https://getbootstrap.com)
[![Architecture: Clean Multi--Page](https://img.shields.io/badge/Architecture-Scalable%20MPA-blue)](https://carfusion.com)
[![SEO: Technical & Semantic](https://img.shields.io/badge/SEO-Schema.org%20JSON--LD-brightgreen)](https://schema.org)

Car Fusion is an enterprise-grade multi-page automotive marketplace frontend designed for luxury and certified pre-owned vehicles across India. Built without heavy SPA framework overhead, it leverages semantic HTML5, modern CSS3 styling with gold accents (`#D4AF37`), robust Vanilla JavaScript (ES6+), and Bootstrap 5.

---

## 📁 Standardized Folder Architecture

The project has been refactored from a flat, cluttered root directory into an industry-standard, scalable multi-page application structure:

```
Car-Fusion/
├── index.html                  # Homepage (Main Entrance / Curated Showcases)
├── sitemap.xml                 # XML Sitemap for Search Engines
├── README.md                   # Comprehensive Architecture & Interview Documentation
├── pages/                      # Internal Subpages
│   ├── new_cars.html           # Full Inventory (130+ Cars with Multi-facet Filtering)
│   ├── electric-cars.html      # Sustainable & EV Showcase
│   ├── brands.html             # Elite Partner Directory (15 Marques with JSON-LD)
│   ├── compare.html            # 2-Car Side-by-Side Head-to-Head Comparison
│   ├── modify.html             # Fusion Lab (Interactive Vehicle Customizer)
│   ├── reviews_news.html       # Editorial Reviews, Live GNews & Comparisons
│   ├── car_details.html        # Dynamic Detail Page (On-Road Pricing, EMI, Specs)
│   ├── about_us.html           # Brand Legacy, Standards, and Leadership
│   ├── contact.html            # Experience Centers Directory & Consultation
│   ├── login.html              # Authentication & Session Login
│   ├── signup.html             # User Registration
│   ├── profile.html            # User Dashboard (Garage, Bookings, Favorites)
│   └── aa.html                 # Automotive Culture Spotlight
├── assets/
│   ├── css/
│   │   ├── main_interface.css  # Core Global Design System, Navbars & Footers
│   │   ├── new_cars.css        # Inventory Filter Layouts & Hero Styles
│   │   └── about_us.css        # Legacy Timeline & Brand Presentation Styles
│   ├── js/
│   │   ├── main.js             # Master Inventory Data (133 Cars), Auth, Search & AI Bot
│   │   ├── news_data.js        # Editorial Comparisons, Reviews & News API Integration
│   │   └── main_interface.js   # Header Search Panel Validation & Counter Animations
│   ├── images/
│   │   ├── car_fusion_logo.png # High-Resolution Brand Logo
│   │   ├── cars/               # 133 Vehicle Inspection Showcase Photos
│   │   └── cars_logo/          # 15 High-Resolution Brand Emblems
│   └── icons/
│       └── car_fusion_favicon.ico # Official Site Favicon
└── tests/
    ├── test_fusion_lab.html    # Fusion Lab Calculation Unit Tests
    └── test_login.html         # Auth Validation & Session Mocking Tests
```

---

## 🛠️ Technology Stack & Engineering Choices

| Layer | Technology | Rationale |
|---|---|---|
| **Structure** | HTML5 Semantic Elements | Enhanced accessibility (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<footer>`) and improved crawlability. |
| **Styling** | CSS3 + Bootstrap 5.3 | High-performance CSS without bundler overhead; custom dark luxury palette with metallic gold accents (`#D4AF37`). |
| **Interactivity** | JavaScript (ES6+) | Zero runtime dependencies; high execution speed; dynamic path resolution for subpage routing. |
| **Icons** | Bootstrap Icons (CDN) | Lightweight SVG-based icon font. |
| **Storage** | Browser `localStorage` | Client-side user persistence (favorites, test drive bookings, and Fusion Lab projects). |

---

## 🧠 Key Architectural Innovations

### 1. Dynamic Base-Path Resolution (`main.js` & `news_data.js`)
To support both root (`index.html`) and subpages (`pages/*.html`) with a single shared JavaScript codebase without broken image URLs or navigation links, a dynamic prefix resolver was engineered:

```javascript
const isSubpage = window.location.pathname.includes('/pages/') || window.location.pathname.includes('\\pages\\');
const rootPrefix = isSubpage ? '../' : './';
const pagePrefix = isSubpage ? '' : 'pages/';

// Dynamically normalize car images upon loading
cars.forEach(car => {
    if (car.image && !car.image.startsWith('http') && !car.image.startsWith('../') && !car.image.startsWith('assets/')) {
        car.image = `${rootPrefix}assets/images/${car.image}`;
    }
});
```

### 2. Dynamic SEO & Schema Injection (`car_details.html`)
Vehicle specification pages dynamically construct Schema.org `Car` metadata and populate OpenGraph / Twitter tags based on the query parameter (`?id=X`), allowing dynamic SEO evaluation without server-side rendering:

```javascript
const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Car",
    "name": `${car.brand} ${car.model}`,
    "offers": {
        "@type": "Offer",
        "price": car.price,
        "priceCurrency": "INR"
    }
};
```

### 3. Financial Calculation Engine
- **On-Road Price Breakdown:** State RTO registration calculation (individual vs company rates), insurance tiers, TCS, and handling charges.
- **EMI Amortization:** Dynamic tenure (12–84 months) and interest rate calculations with instantaneous UI updates.

---
