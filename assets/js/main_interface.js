function toggleSearch() {
    const panel = document.getElementById("luxury-search-panel");
    
    if (panel.classList.contains("active")) {
        panel.classList.remove("active");
    } else {
        panel.classList.add("active");
    }
}

document.addEventListener('click', function(event) {
    const panel = document.getElementById("luxury-search-panel");
    const trigger = document.querySelector(".search-trigger");
    
    if (!panel.contains(event.target) && !trigger.contains(event.target)) {
        panel.classList.remove("active");
    }
});

function validateSearch() {
    const brand = document.getElementById("input-brand").value;
    const type = document.getElementById("input-type").value;
    const price = document.getElementById("input-price").value;
    
    const errorBox = document.getElementById("search-error-msg");
    const panel = document.getElementById("luxury-search-panel");

    if (brand === "" || type === "" || price === "") {
        errorBox.innerText = "Please select all options above!";
        errorBox.classList.add("visible");
        panel.classList.add("shake-animation");
        setTimeout(() => {
            panel.classList.remove("shake-animation");
        }, 400);
        return false; 
    }
    return true; 
}

function toggleSearch() {
    const searchPanel = document.getElementById('luxury-search-panel');
    
    if (searchPanel.style.display === 'block') {
        searchPanel.style.display = 'none';
    } else {
        searchPanel.style.display = 'block';
    }
}

function validateSearch() {
    const brand = document.getElementsByName('brand')[0].value;
    const type = document.getElementsByName('type')[0].value;
    const priceElement = document.getElementsByName('price')[0];
    const price = priceElement ? priceElement.value : "Select Budget"; // Default if element missing

    const errorMsg = document.getElementById('search-error-msg');

    // Check if values are default (Assuming first option is 'Select ...')
    const brandDefault = "Select Brand";
    const typeDefault = "Select Type";
    const priceDefault = "Select Budget";

    // If everything is default, don't submit
    if (brand === brandDefault && type === typeDefault && price === priceDefault) {
        errorMsg.innerText = "Please select at least one filter.";
        return false; // Prevent form submission
    }

    errorMsg.innerText = ""; // Clear error
    return true; // Allow submission
}

// Close search panel when clicking outside
document.addEventListener('click', function(event) {
    const searchPanel = document.getElementById('luxury-search-panel');
    const searchTrigger = document.querySelector('.search-trigger');
    const searchIcon = document.querySelector('.bi-search');

    // If the click was NOT on the panel, NOT on the trigger, and NOT on the icon
    if (!searchPanel.contains(event.target) && 
        event.target !== searchTrigger && 
        event.target !== searchIcon) {
        
        searchPanel.style.display = 'none';
    }
});

// COUNTER ANIMATION
const counters = document.querySelectorAll('.counter');
let started = false;

window.addEventListener('scroll', () => {
    const section = document.getElementById('stats-counter');
    if (!section || started) return;

    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
        counters.forEach(counter => {
            const target = +counter.dataset.target;
            let count = 0;
            const speed = target / 120;

            const update = () => {
                if (count < target) {
                    count += speed;
                    counter.innerText = Math.ceil(count);
                    setTimeout(update, 20);
                } else {
                    counter.innerText = target + "+";
                }
            };
            update();
        });
        started = true;
    }
});
