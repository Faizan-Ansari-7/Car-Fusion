/* =========================================
   1. CAR DATA MASTER LIST & ROUTING CONFIG
   ========================================= */

// Multi-Page Dynamic Path Resolution
const isSubpage = window.location.pathname.includes('/pages/') || window.location.pathname.includes('\\pages\\');
const rootPrefix = isSubpage ? '../' : './';
const pagePrefix = isSubpage ? '' : 'pages/';

// Bootstrap Alert Helper Function
function showBootstrapAlert(message, type = 'info') {
    // Remove any existing alerts
    const existingAlert = document.querySelector('.bootstrap-alert-container');
    if (existingAlert) {
        existingAlert.remove();
    }

    // Create alert container
    const alertContainer = document.createElement('div');
    alertContainer.className = 'bootstrap-alert-container';
    alertContainer.style.cssText = 'position: fixed; top: 100px; left: 50%; transform: translateX(-50%); z-index: 9999; width: 90%; max-width: 500px;';

    // Create alert
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show shadow-lg`;
    alertDiv.setAttribute('role', 'alert');
    alertDiv.innerHTML = `
        <i class="bi bi-${type === 'success' ? 'check-circle-fill' : type === 'warning' ? 'exclamation-triangle-fill' : type === 'danger' ? 'x-circle-fill' : 'info-circle-fill'} me-2"></i>
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    alertContainer.appendChild(alertDiv);
    document.body.appendChild(alertContainer);

    // Auto-dismiss after 5 seconds
    setTimeout(() => {
        if (alertContainer && alertContainer.parentNode) {
            alertContainer.remove();
        }
    }, 5000);
}

const cars = [
    // --- AUDI ---
    {
        id: 1, brand: 'Audi', model: 'A4', price: 4600000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '17.4 kmpl',
        engine: '2.0L TFSI', power: '188 bhp', torque: '320 Nm', topSpeed: '241 km/h', bootSpace: '460 L',
        status: 'Luxury', image: 'cars/audi_a4.jpg'
    },
    {
        id: 2, brand: 'Audi', model: 'A5', price: 5600000,
        fuel: 'Diesel', transmission: 'Automatic', mileage: '17.0 kmpl',
        engine: '2.0L TDI', power: '188 bhp', torque: '400 Nm', topSpeed: '235 km/h', bootSpace: '480 L',
        status: 'Sportback', image: 'cars/audi_a5.jpg'
    },
    {
        id: 3, brand: 'Audi', model: 'A6', price: 6200000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '14.0 kmpl',
        engine: '2.0L Turbo', power: '241 bhp', torque: '370 Nm', topSpeed: '250 km/h', bootSpace: '530 L',
        status: 'Premium', image: 'cars/audi_a6.jpg'
    },
    {
        id: 4, brand: 'Audi', model: 'A8 L', price: 13400000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '11.7 kmpl',
        engine: '3.0L V6', power: '335 bhp', torque: '500 Nm', topSpeed: '250 km/h', bootSpace: '505 L',
        status: 'Flagship', image: 'cars/audi_a8.jpg'
    },
    {
        id: 5, brand: 'Audi', model: 'Q3', price: 4400000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '16.0 kmpl',
        engine: '2.0L TFSI', power: '190 bhp', torque: '320 Nm', topSpeed: '222 km/h', bootSpace: '530 L',
        status: 'SUV', image: 'cars/audi_q3.jpg'
    },
    {
        id: 6, brand: 'Audi', model: 'Q5', price: 6500000,
        fuel: 'Diesel', transmission: 'Automatic', mileage: '13.5 kmpl',
        engine: '2.0L TDI', power: '201 bhp', torque: '400 Nm', topSpeed: '237 km/h', bootSpace: '550 L',
        status: 'SUV', image: 'cars/audi_q5.jpg'
    },
    {
        id: 7, brand: 'Audi', model: 'Q7', price: 8800000,
        fuel: 'Diesel', transmission: 'Automatic', mileage: '11.2 kmpl',
        engine: '3.0L V6', power: '335 bhp', torque: '500 Nm', topSpeed: '250 km/h', bootSpace: '865 L',
        status: 'Luxury SUV', image: 'cars/audi_q7.jpg'
    },
    {
        id: 8, brand: 'Audi', model: 'Q8', price: 10700000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '9.8 kmpl',
        engine: '3.0L V6 TFSI', power: '340 bhp', torque: '500 Nm', topSpeed: '250 km/h', bootSpace: '605 L',
        status: 'Flagship', image: 'cars/audi_q8.jpg'
    },
    {
        id: 9, brand: 'Audi', model: 'e-tron', price: 10200000,
        fuel: 'Electric', transmission: 'Automatic', mileage: '484 km',
        engine: 'Dual Motor', power: '402 bhp', torque: '664 Nm', topSpeed: '200 km/h', bootSpace: '660 L',
        status: 'Electric', image: 'cars/audi_etron.jpg'
    },
    {
        id: 10, brand: 'Audi', model: 'e-tron GT', price: 17000000,
        fuel: 'Electric', transmission: 'Automatic', mileage: '500 km',
        engine: 'Dual Motor', power: '523 bhp', torque: '630 Nm', topSpeed: '245 km/h', bootSpace: '405 L',
        status: 'Supercar', image: 'cars/audi_etrongt.jpg'
    },

    // --- BMW ---
    {
        id: 11, brand: 'BMW', model: '2 Series', price: 4300000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '14.8 kmpl',
        engine: '2.0L Turbo', power: '189 bhp', torque: '280 Nm', topSpeed: '233 km/h', bootSpace: '430 L',
        status: 'Coupe', image: 'cars/bmw_2series.jpg'
    },
    {
        id: 12, brand: 'BMW', model: '3 Series', price: 4800000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '16.1 kmpl',
        engine: '2.0L Turbo', power: '255 bhp', torque: '400 Nm', topSpeed: '250 km/h', bootSpace: '480 L',
        status: 'Sedan', image: 'cars/bmw_3series.jpg'
    },
    {
        id: 13, brand: 'BMW', model: 'M340i', price: 7200000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '13.0 kmpl',
        engine: '3.0L Inline-6', power: '369 bhp', torque: '500 Nm', topSpeed: '250 km/h', bootSpace: '480 L',
        status: 'Performance', image: 'cars/bmw_340i.jpg'
    },
    {
        id: 14, brand: 'BMW', model: '740i', price: 18000000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '12.0 kmpl',
        engine: '3.0L Inline-6', power: '375 bhp', torque: '520 Nm', topSpeed: '250 km/h', bootSpace: '540 L',
        status: 'Luxury', image: 'cars/bmw_740i.jpg'
    },
    {
        id: 15, brand: 'BMW', model: 'X1', price: 4900000,
        fuel: 'Diesel', transmission: 'Automatic', mileage: '20.3 kmpl',
        engine: '2.0L Diesel', power: '148 bhp', torque: '360 Nm', topSpeed: '208 km/h', bootSpace: '476 L',
        status: 'SUV', image: 'cars/bmw_x1.jpg'
    },
    {
        id: 16, brand: 'BMW', model: 'X3', price: 6800000,
        fuel: 'Diesel', transmission: 'Automatic', mileage: '16.5 kmpl',
        engine: '2.0L Diesel', power: '188 bhp', torque: '400 Nm', topSpeed: '213 km/h', bootSpace: '550 L',
        status: 'SUV', image: 'cars/bmw_x3.jpg'
    },
    {
        id: 17, brand: 'BMW', model: 'X5', price: 9600000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '12.0 kmpl',
        engine: '3.0L Inline-6', power: '335 bhp', torque: '450 Nm', topSpeed: '243 km/h', bootSpace: '650 L',
        status: 'Luxury SUV', image: 'cars/bmw_x5.jpg'
    },
    {
        id: 18, brand: 'BMW', model: 'X7', price: 13000000,
        fuel: 'Diesel', transmission: 'Automatic', mileage: '13.3 kmpl',
        engine: '3.0L Quad-Turbo', power: '394 bhp', torque: '760 Nm', topSpeed: '250 km/h', bootSpace: '326 L',
        status: 'Flagship', image: 'cars/bmw_x7.jpg'
    },
    {
        id: 19, brand: 'BMW', model: 'i4', price: 7700000,
        fuel: 'Electric', transmission: 'Automatic', mileage: '590 km',
        engine: 'Electric Motor', power: '335 bhp', torque: '430 Nm', topSpeed: '190 km/h', bootSpace: '470 L',
        status: 'Electric', image: 'cars/bmw_i4.jpg'
    },
    {
        id: 20, brand: 'BMW', model: 'i5', price: 16000000,
        fuel: 'Electric', transmission: 'Automatic', mileage: '516 km',
        engine: 'Dual Motor', power: '601 bhp', torque: '820 Nm', topSpeed: '230 km/h', bootSpace: '490 L',
        status: 'Electric', image: 'cars/bmw_i5.jpg'
    },
    {
        id: 21, brand: 'BMW', model: 'i7', price: 21000000,
        fuel: 'Electric', transmission: 'Automatic', mileage: '625 km',
        engine: 'Dual Motor', power: '536 bhp', torque: '745 Nm', topSpeed: '240 km/h', bootSpace: '500 L',
        status: 'Electric Luxury', image: 'cars/bmw_i7.jpg'
    },
    {
        id: 22, brand: 'BMW', model: 'iX', price: 12000000,
        fuel: 'Electric', transmission: 'Automatic', mileage: '425 km',
        engine: 'Dual Motor', power: '322 bhp', torque: '630 Nm', topSpeed: '200 km/h', bootSpace: '500 L',
        status: 'Electric SUV', image: 'cars/bmw_ix.jpg'
    },
    {
        id: 23, brand: 'BMW', model: 'M2', price: 9800000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '10.0 kmpl',
        engine: '3.0L Inline-6', power: '453 bhp', torque: '550 Nm', topSpeed: '250 km/h', bootSpace: '390 L',
        status: 'Sport', image: 'cars/bmw_m2.jpg'
    },
    {
        id: 24, brand: 'BMW', model: 'M4', price: 15300000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '9.8 kmpl',
        engine: '3.0L TwinTurbo', power: '503 bhp', torque: '650 Nm', topSpeed: '290 km/h', bootSpace: '440 L',
        status: 'Sport', image: 'cars/bmw_m4.jpg'
    },
    {
        id: 25, brand: 'BMW', model: 'M5', price: 17500000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '8.5 kmpl',
        engine: '4.4L V8', power: '617 bhp', torque: '750 Nm', topSpeed: '305 km/h', bootSpace: '530 L',
        status: 'Super Sedan', image: 'cars/bmw_m5.jpg'
    },
    {
        id: 26, brand: 'BMW', model: 'M8', price: 22000000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '8.0 kmpl',
        engine: '4.4L V8', power: '617 bhp', torque: '750 Nm', topSpeed: '305 km/h', bootSpace: '420 L',
        status: 'Supercar', image: 'cars/bmw_m8.jpg'
    },
    {
        id: 27, brand: 'BMW', model: 'XM', price: 26000000,
        fuel: 'Hybrid', transmission: 'Automatic', mileage: '62 kmpl (Hybrid)',
        engine: '4.4L V8 + Motor', power: '644 bhp', torque: '800 Nm', topSpeed: '270 km/h', bootSpace: '527 L',
        status: 'Hyper SUV', image: 'cars/bmw_xm.jpg'
    },
    {
        id: 28, brand: 'BMW', model: 'Z4', price: 9000000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '12.0 kmpl',
        engine: '3.0L Inline-6', power: '335 bhp', torque: '500 Nm', topSpeed: '250 km/h', bootSpace: '281 L',
        status: 'Convertible', image: 'cars/bmw_z4.jpg'
    },

    // --- MERCEDES-BENZ ---
    {
        id: 29, brand: 'Mercedes', model: 'A-Class', price: 4400000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '17.5 kmpl',
        engine: '1.3L Turbo', power: '161 bhp', torque: '250 Nm', topSpeed: '230 km/h', bootSpace: '405 L',
        status: 'Hatchback', image: 'cars/mercedes_aclass.jpg'
    },
    {
        id: 30, brand: 'Mercedes', model: 'A45 AMG', price: 9300000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '12.0 kmpl',
        engine: '2.0L Turbo', power: '415 bhp', torque: '500 Nm', topSpeed: '270 km/h', bootSpace: '370 L',
        status: 'Performance', image: 'cars/mercedes_a45.jpg'
    },
    {
        id: 31, brand: 'Mercedes', model: 'C-Class', price: 6000000,
        fuel: 'Diesel', transmission: 'Automatic', mileage: '23.0 kmpl',
        engine: '2.0L Diesel', power: '197 bhp', torque: '440 Nm', topSpeed: '245 km/h', bootSpace: '455 L',
        status: 'Luxury', image: 'cars/mercedes_cclass.jpg'
    },
    {
        id: 32, brand: 'Mercedes', model: 'E-Class', price: 7500000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '16.0 kmpl',
        engine: '2.0L Inline-4', power: '194 bhp', torque: '320 Nm', topSpeed: '240 km/h', bootSpace: '540 L',
        status: 'Executive', image: 'cars/mercedes_eclass.jpg'
    },
    {
        id: 33, brand: 'Mercedes', model: 'S-Class', price: 17000000,
        fuel: 'Diesel', transmission: 'Automatic', mileage: '12.8 kmpl',
        engine: '3.0L Inline-6', power: '362 bhp', torque: '500 Nm', topSpeed: '250 km/h', bootSpace: '550 L',
        status: 'Flagship', image: 'cars/mercedes_sclass.jpg'
    },
    {
        id: 34, brand: 'Mercedes', model: 'GLB', price: 6500000,
        fuel: 'Diesel', transmission: 'Automatic', mileage: '16.0 kmpl',
        engine: '2.0L Diesel', power: '188 bhp', torque: '400 Nm', topSpeed: '220 km/h', bootSpace: '570 L',
        status: 'SUV', image: 'cars/mercedes_glb.jpg'
    },
    {
        id: 35, brand: 'Mercedes', model: 'GLE', price: 9600000,
        fuel: 'Diesel', transmission: 'Automatic', mileage: '14.0 kmpl',
        engine: '3.0L V6', power: '325 bhp', torque: '700 Nm', topSpeed: '247 km/h', bootSpace: '630 L',
        status: 'Luxury SUV', image: 'cars/mercedes_gle.jpg'
    },
    {
        id: 36, brand: 'Mercedes', model: 'G-Wagon', price: 25500000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '8.5 kmpl',
        engine: '4.0L V8 Biturbo', power: '577 bhp', torque: '850 Nm', topSpeed: '220 km/h', bootSpace: '667 L',
        status: 'Icon', image: 'cars/mercedes_gwagon.jpg'
    },
    {
        id: 37, brand: 'Mercedes', model: 'Maybach', price: 32000000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '7.8 kmpl',
        engine: '6.0L V12', power: '621 bhp', torque: '900 Nm', topSpeed: '250 km/h', bootSpace: '500 L',
        status: 'Royal', image: 'cars/mercedes_maybach.jpg'
    },
    {
        id: 38, brand: 'Mercedes', model: 'EQS', price: 16200000,
        fuel: 'Electric', transmission: 'Automatic', mileage: '857 km',
        engine: 'Electric Motor', power: '516 bhp', torque: '855 Nm', topSpeed: '210 km/h', bootSpace: '610 L',
        status: 'Electric', image: 'cars/mercedes_eqs.jpg'
    },
    {
        id: 39, brand: 'Mercedes', model: 'SL', price: 24000000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '9.0 kmpl',
        engine: '4.0L V8', power: '469 bhp', torque: '700 Nm', topSpeed: '295 km/h', bootSpace: '240 L',
        status: 'Roadster', image: 'cars/mercedes_sl.jpg'
    },
    {
        id: 40, brand: 'Mercedes', model: 'V-Class', price: 11000000,
        fuel: 'Diesel', transmission: 'Automatic', mileage: '11.0 kmpl',
        engine: '2.0L Diesel', power: '160 bhp', torque: '380 Nm', topSpeed: '195 km/h', bootSpace: '1030 L',
        status: 'Van', image: 'cars/mercedes_vclass.jpg'
    },

    // --- TATA MOTORS ---
    {
        id: 41, brand: 'Tata', model: 'Nexon', price: 815000,
        fuel: 'Petrol', transmission: 'Manual', mileage: '17.4 kmpl',
        engine: '1.2L Turbo', power: '118 bhp', torque: '170 Nm', topSpeed: '180 km/h', bootSpace: '350 L',
        status: 'Popular', image: 'cars/tata_nexon.jpg'
    },
    {
        id: 42, brand: 'Tata', model: 'Nexon EV', price: 1450000,
        fuel: 'Electric', transmission: 'Automatic', mileage: '453 km',
        engine: 'Perm. Magnet', power: '141 bhp', torque: '250 Nm', topSpeed: '140 km/h', bootSpace: '350 L',
        status: 'Electric', image: 'cars/tata_nexonev.jpg'
    },
    {
        id: 43, brand: 'Tata', model: 'Harrier', price: 1540000,
        fuel: 'Diesel', transmission: 'Automatic', mileage: '16.3 kmpl',
        engine: '2.0L Kryotec', power: '168 bhp', torque: '350 Nm', topSpeed: '190 km/h', bootSpace: '425 L',
        status: 'SUV', image: 'cars/tata_harrier.jpg'
    },
    {
        id: 44, brand: 'Tata', model: 'Safari', price: 1610000,
        fuel: 'Diesel', transmission: 'Automatic', mileage: '16.1 kmpl',
        engine: '2.0L Kryotec', power: '168 bhp', torque: '350 Nm', topSpeed: '190 km/h', bootSpace: '73 L',
        status: '7-Seater', image: 'cars/tata_safari.jpg'
    },
    {
        id: 45, brand: 'Tata', model: 'Punch', price: 613000,
        fuel: 'Petrol', transmission: 'Manual', mileage: '20.0 kmpl',
        engine: '1.2L Revotron', power: '84 bhp', torque: '113 Nm', topSpeed: '150 km/h', bootSpace: '366 L',
        status: 'Compact', image: 'cars/tata_punch.jpg'
    },
    {
        id: 46, brand: 'Tata', model: 'Punch EV', price: 1099000,
        fuel: 'Electric', transmission: 'Automatic', mileage: '315 km',
        engine: 'Perm. Magnet', power: '80 bhp', torque: '114 Nm', topSpeed: '110 km/h', bootSpace: '366 L',
        status: 'Electric', image: 'cars/tata_punchev.jpg'
    },
    {
        id: 47, brand: 'Tata', model: 'Tiago', price: 565000,
        fuel: 'Petrol', transmission: 'Manual', mileage: '20.0 kmpl',
        engine: '1.2L Revotron', power: '84 bhp', torque: '113 Nm', topSpeed: '150 km/h', bootSpace: '242 L',
        status: 'Hatchback', image: 'cars/tata_tiago.jpg'
    },
    {
        id: 48, brand: 'Tata', model: 'Tiago EV', price: 869000,
        fuel: 'Electric', transmission: 'Automatic', mileage: '315 km',
        engine: 'Perm. Magnet', power: '74 bhp', torque: '114 Nm', topSpeed: '120 km/h', bootSpace: '240 L',
        status: 'Electric', image: 'cars/tata_tiagoev.jpg'
    },
    {
        id: 49, brand: 'Tata', model: 'Tigor', price: 630000,
        fuel: 'Petrol', transmission: 'Manual', mileage: '19.6 kmpl',
        engine: '1.2L Revotron', power: '84 bhp', torque: '113 Nm', topSpeed: '150 km/h', bootSpace: '419 L',
        status: 'Sedan', image: 'cars/tata_tigor.jpg'
    },
    {
        id: 50, brand: 'Tata', model: 'Curvv', price: 1000000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '16.0 kmpl',
        engine: '1.2L Turbo', power: '123 bhp', torque: '225 Nm', topSpeed: '170 km/h', bootSpace: '422 L',
        status: 'Coupe', image: 'cars/tata_curvv.jpg'
    },
    {
        id: 51, brand: 'Tata', model: 'Curvv EV', price: 1749000,
        fuel: 'Electric', transmission: 'Automatic', mileage: '500 km',
        engine: 'Perm. Magnet', power: '165 bhp', torque: '215 Nm', topSpeed: '160 km/h', bootSpace: '500 L',
        status: 'Electric', image: 'cars/tata_curvvev.jpg'
    },
    {
        id: 52, brand: 'Tata', model: 'Hexa', price: 1300000,
        fuel: 'Diesel', transmission: 'Manual', mileage: '14.0 kmpl',
        engine: '2.2L Varicor', power: '154 bhp', torque: '400 Nm', topSpeed: '180 km/h', bootSpace: '128 L',
        status: 'MUV', image: 'cars/tata_hexa.jpg'
    },
    {
        id: 53, brand: 'Tata', model: 'Sierra', price: 1400000,
        fuel: 'Electric', transmission: 'Automatic', mileage: '450 km',
        engine: 'EV Motor', power: '170 bhp', torque: '250 Nm', topSpeed: '160 km/h', bootSpace: '450 L',
        status: 'Upcoming', image: 'cars/tata_seirra.jpg'
    },

    // --- MAHINDRA ---
    {
        id: 54, brand: 'Mahindra', model: 'Thar', price: 1125000,
        fuel: 'Diesel', transmission: 'Manual', mileage: '15.2 kmpl',
        engine: '2.2L mHawk', power: '130 bhp', torque: '300 Nm', topSpeed: '155 km/h', bootSpace: '220 L',
        status: 'Off-road', image: 'cars/mahindra_thar.jpg'
    },
    {
        id: 55, brand: 'Mahindra', model: 'Thar Roxx', price: 1299000,
        fuel: 'Diesel', transmission: 'Automatic', mileage: '14.5 kmpl',
        engine: '2.2L mHawk', power: '150 bhp', torque: '330 Nm', topSpeed: '160 km/h', bootSpace: '447 L',
        status: '5-Door', image: 'cars/mahindra_tharroxx.jpg'
    },
    {
        id: 56, brand: 'Mahindra', model: 'Scorpio N', price: 1360000,
        fuel: 'Diesel', transmission: 'Manual', mileage: '14.0 kmpl',
        engine: '2.2L mHawk', power: '172 bhp', torque: '400 Nm', topSpeed: '165 km/h', bootSpace: '460 L',
        status: 'SUV', image: 'cars/mahindra_scropion.jpg'
    },
    {
        id: 57, brand: 'Mahindra', model: 'Scorpio Classic', price: 1350000,
        fuel: 'Diesel', transmission: 'Manual', mileage: '15.0 kmpl',
        engine: '2.2L mHawk', power: '130 bhp', torque: '300 Nm', topSpeed: '160 km/h', bootSpace: '460 L',
        status: 'Classic', image: 'cars/mahindra_scropios11.jpg'
    },
    {
        id: 58, brand: 'Mahindra', model: 'XUV700', price: 1400000,
        fuel: 'Diesel', transmission: 'Automatic', mileage: '15.0 kmpl',
        engine: '2.2L mHawk', power: '182 bhp', torque: '450 Nm', topSpeed: '200 km/h', bootSpace: '220 L',
        status: 'Bestseller', image: 'cars/mahindra_xuv700.jpg'
    },
    {
        id: 59, brand: 'Mahindra', model: 'XUV500', price: 1250000,
        fuel: 'Diesel', transmission: 'Manual', mileage: '15.1 kmpl',
        engine: '2.2L mHawk', power: '153 bhp', torque: '360 Nm', topSpeed: '185 km/h', bootSpace: '220 L',
        status: 'SUV', image: 'cars/mahindra_xuv500.jpg'
    },
    {
        id: 60, brand: 'Mahindra', model: 'Bolero', price: 980000,
        fuel: 'Diesel', transmission: 'Manual', mileage: '16.7 kmpl',
        engine: '1.5L Diesel', power: '75 bhp', torque: '210 Nm', topSpeed: '125 km/h', bootSpace: '384 L',
        status: 'Rugged', image: 'cars/mahindra_bolero.jpg'
    },
    {
        id: 61, brand: 'Mahindra', model: '3XO', price: 749000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '18.2 kmpl',
        engine: '1.2L Turbo', power: '110 bhp', torque: '200 Nm', topSpeed: '170 km/h', bootSpace: '295 L',
        status: 'Compact', image: 'cars/mahindra_3x0.jpg'
    },
    {
        id: 62, brand: 'Mahindra', model: 'XUV400', price: 1549000,
        fuel: 'Electric', transmission: 'Automatic', mileage: '456 km',
        engine: 'Perm. Magnet', power: '147 bhp', torque: '310 Nm', topSpeed: '150 km/h', bootSpace: '378 L',
        status: 'Electric', image: 'cars/mahindra_xuv400.jpg'
    },
    {
        id: 63, brand: 'Mahindra', model: 'Alturas G4', price: 3000000,
        fuel: 'Diesel', transmission: 'Automatic', mileage: '12.0 kmpl',
        engine: '2.2L Diesel', power: '178 bhp', torque: '420 Nm', topSpeed: '180 km/h', bootSpace: '240 L',
        status: 'Premium', image: 'cars/mahindra_alturasg4.jpg'
    },
    {
        id: 64, brand: 'Mahindra', model: 'BE.6', price: 1800000,
        fuel: 'Electric', transmission: 'Automatic', mileage: '450 km',
        engine: 'EV Motor', power: '200 bhp', torque: '350 Nm', topSpeed: '160 km/h', bootSpace: '400 L',
        status: 'Concept', image: 'cars/mahindra_be6.jpg'
    },
    {
        id: 65, brand: 'Mahindra', model: 'XEV 9e', price: 2000000,
        fuel: 'Electric', transmission: 'Automatic', mileage: '500 km',
        engine: 'EV Motor', power: '230 bhp', torque: '380 Nm', topSpeed: '180 km/h', bootSpace: '450 L',
        status: 'Concept', image: 'cars/mahindra_xev9.jpg'
    },

    // --- MARUTI SUZUKI ---
    {
        id: 66, brand: 'Maruti', model: 'Swift', price: 649000,
        fuel: 'Petrol', transmission: 'Manual', mileage: '24.8 kmpl',
        engine: '1.2L Z-Series', power: '80 bhp', torque: '111 Nm', topSpeed: '165 km/h', bootSpace: '265 L',
        status: 'Hatchback', image: 'cars/maruti_swift.jpg'
    },
    {
        id: 67, brand: 'Maruti', model: 'Baleno', price: 666000,
        fuel: 'Petrol', transmission: 'Manual', mileage: '22.3 kmpl',
        engine: '1.2L DualJet', power: '88 bhp', torque: '113 Nm', topSpeed: '170 km/h', bootSpace: '318 L',
        status: 'Premium', image: 'cars/maruti_baleno.jpg'
    },
    {
        id: 68, brand: 'Maruti', model: 'Brezza', price: 834000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '19.8 kmpl',
        engine: '1.5L K15C', power: '102 bhp', torque: '136 Nm', topSpeed: '170 km/h', bootSpace: '328 L',
        status: 'SUV', image: 'cars/maruti_brezza.jpg'
    },
    {
        id: 69, brand: 'Maruti', model: 'Ertiga', price: 869000,
        fuel: 'Petrol', transmission: 'Manual', mileage: '20.5 kmpl',
        engine: '1.5L K15C', power: '102 bhp', torque: '136 Nm', topSpeed: '165 km/h', bootSpace: '209 L',
        status: 'MPV', image: 'cars/maruti_ertiga.jpg'
    },
    {
        id: 70, brand: 'Maruti', model: 'Dzire', price: 656000,
        fuel: 'Petrol', transmission: 'Manual', mileage: '22.4 kmpl',
        engine: '1.2L DualJet', power: '89 bhp', torque: '113 Nm', topSpeed: '165 km/h', bootSpace: '378 L',
        status: 'Sedan', image: 'cars/maruti_swiftdzire.jpg'
    },
    {
        id: 71, brand: 'Maruti', model: 'Wagon R', price: 554000,
        fuel: 'Petrol', transmission: 'Manual', mileage: '24.3 kmpl',
        engine: '1.0L K10C', power: '66 bhp', torque: '89 Nm', topSpeed: '150 km/h', bootSpace: '341 L',
        status: 'Hatchback', image: 'cars/maruti_wagonr.jpg'
    },
    {
        id: 72, brand: 'Maruti', model: 'Alto K10', price: 399000,
        fuel: 'Petrol', transmission: 'Manual', mileage: '24.4 kmpl',
        engine: '1.0L K10C', power: '66 bhp', torque: '89 Nm', topSpeed: '145 km/h', bootSpace: '214 L',
        status: 'Budget', image: 'cars/maruti_altok10.jpg'
    },
    {
        id: 73, brand: 'Maruti', model: 'Alto 800', price: 350000,
        fuel: 'Petrol', transmission: 'Manual', mileage: '22.0 kmpl',
        engine: '0.8L F8D', power: '47 bhp', torque: '69 Nm', topSpeed: '140 km/h', bootSpace: '177 L',
        status: 'Budget', image: 'cars/maruti_alto800.jpg'
    },
    {
        id: 74, brand: 'Maruti', model: 'Celerio', price: 536000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '26.0 kmpl',
        engine: '1.0L K10C', power: '66 bhp', torque: '89 Nm', topSpeed: '150 km/h', bootSpace: '313 L',
        status: 'Hatchback', image: 'cars/maruti_celerio.jpg'
    },
    {
        id: 75, brand: 'Maruti', model: 'Ciaz', price: 940000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '20.0 kmpl',
        engine: '1.5L K15B', power: '103 bhp', torque: '138 Nm', topSpeed: '175 km/h', bootSpace: '510 L',
        status: 'Sedan', image: 'cars/maruti_ciaz.jpg'
    },
    {
        id: 76, brand: 'Maruti', model: 'Fronx', price: 751000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '21.8 kmpl',
        engine: '1.0L Turbo', power: '99 bhp', torque: '147 Nm', topSpeed: '170 km/h', bootSpace: '308 L',
        status: 'Crossover', image: 'cars/maruti_fronx.jpg'
    },
    {
        id: 77, brand: 'Maruti', model: 'S-Presso', price: 426000,
        fuel: 'Petrol', transmission: 'Manual', mileage: '24.1 kmpl',
        engine: '1.0L K10C', power: '66 bhp', torque: '89 Nm', topSpeed: '145 km/h', bootSpace: '270 L',
        status: 'Micro SUV', image: 'cars/maruti_spresso.jpg'
    },
    {
        id: 78, brand: 'Maruti', model: 'eVX', price: 1500000,
        fuel: 'Electric', transmission: 'Automatic', mileage: '550 km',
        engine: 'EV Motor', power: '150 bhp', torque: '300 Nm', topSpeed: '160 km/h', bootSpace: '400 L',
        status: 'Concept', image: 'cars/maruti_ev.jpg'
    },

    // --- HYUNDAI ---
    {
        id: 79, brand: 'Hyundai', model: 'Creta', price: 1099000,
        fuel: 'Diesel', transmission: 'Automatic', mileage: '18.0 kmpl',
        engine: '1.5L CRDi', power: '113 bhp', torque: '250 Nm', topSpeed: '190 km/h', bootSpace: '433 L',
        status: 'Top Seller', image: 'cars/hyundai_creta.jpg'
    },
    {
        id: 80, brand: 'Hyundai', model: 'Verna', price: 1100000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '18.6 kmpl',
        engine: '1.5L Turbo', power: '158 bhp', torque: '253 Nm', topSpeed: '210 km/h', bootSpace: '528 L',
        status: 'Sedan', image: 'cars/hyundai_verna.jpg'
    },
    {
        id: 81, brand: 'Hyundai', model: 'i20', price: 704000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '20.0 kmpl',
        engine: '1.2L Kappa', power: '82 bhp', torque: '114 Nm', topSpeed: '165 km/h', bootSpace: '311 L',
        status: 'Hatchback', image: 'cars/hyundai_i20.jpg'
    },
    {
        id: 82, brand: 'Hyundai', model: 'Venue', price: 794000,
        fuel: 'Petrol', transmission: 'DCT', mileage: '18.1 kmpl',
        engine: '1.0L Turbo', power: '118 bhp', torque: '172 Nm', topSpeed: '180 km/h', bootSpace: '350 L',
        status: 'Compact', image: 'cars/hyundai_venue.jpg'
    },
    {
        id: 83, brand: 'Hyundai', model: 'Alcazar', price: 1677000,
        fuel: 'Diesel', transmission: 'Automatic', mileage: '18.1 kmpl',
        engine: '1.5L Diesel', power: '113 bhp', torque: '250 Nm', topSpeed: '185 km/h', bootSpace: '180 L',
        status: '7-Seater', image: 'cars/hyundai_alcazar.jpg'
    },
    {
        id: 84, brand: 'Hyundai', model: 'Aura', price: 648000,
        fuel: 'CNG', transmission: 'Manual', mileage: '28.0 km/kg',
        engine: '1.2L Kappa', power: '82 bhp', torque: '113 Nm', topSpeed: '160 km/h', bootSpace: '402 L',
        status: 'Compact', image: 'cars/hyundai_aura.jpg'
    },
    {
        id: 85, brand: 'Hyundai', model: 'Eon', price: 350000,
        fuel: 'Petrol', transmission: 'Manual', mileage: '21.1 kmpl',
        engine: '0.8L MPi', power: '55 bhp', torque: '75 Nm', topSpeed: '140 km/h', bootSpace: '215 L',
        status: 'Used', image: 'cars/hyundai_eon.jpg'
    },
    {
        id: 86, brand: 'Hyundai', model: 'i20 Active', price: 775000,
        fuel: 'Petrol', transmission: 'Manual', mileage: '19.0 kmpl',
        engine: '1.2L Kappa', power: '82 bhp', torque: '114 Nm', topSpeed: '160 km/h', bootSpace: '285 L',
        status: 'Used', image: 'cars/hyundai_i20active.jpg'
    },

    // --- HONDA ---
    {
        id: 87, brand: 'Honda', model: 'City', price: 1180000,
        fuel: 'Petrol', transmission: 'CVT', mileage: '18.4 kmpl',
        engine: '1.5L i-VTEC', power: '119 bhp', torque: '145 Nm', topSpeed: '180 km/h', bootSpace: '506 L',
        status: 'Sedan', image: 'cars/honda_city.jpg'
    },
    {
        id: 88, brand: 'Honda', model: 'Amaze', price: 720000,
        fuel: 'Petrol', transmission: 'CVT', mileage: '18.3 kmpl',
        engine: '1.2L i-VTEC', power: '89 bhp', torque: '110 Nm', topSpeed: '160 km/h', bootSpace: '420 L',
        status: 'Sedan', image: 'cars/honda_amaze.jpg'
    },
    {
        id: 89, brand: 'Honda', model: 'Elevate', price: 1190000,
        fuel: 'Petrol', transmission: 'CVT', mileage: '16.9 kmpl',
        engine: '1.5L i-VTEC', power: '119 bhp', torque: '145 Nm', topSpeed: '175 km/h', bootSpace: '458 L',
        status: 'SUV', image: 'cars/honda_wrv.jpg'
    },
    {
        id: 90, brand: 'Honda', model: 'Civic', price: 1800000,
        fuel: 'Petrol', transmission: 'CVT', mileage: '16.5 kmpl',
        engine: '1.8L i-VTEC', power: '140 bhp', torque: '174 Nm', topSpeed: '200 km/h', bootSpace: '430 L',
        status: 'Used', image: 'cars/honda_civic.jpg'
    },
    {
        id: 91, brand: 'Honda', model: 'CR-V', price: 2800000,
        fuel: 'Diesel', transmission: 'Automatic', mileage: '19.5 kmpl',
        engine: '1.6L i-DTEC', power: '118 bhp', torque: '300 Nm', topSpeed: '195 km/h', bootSpace: '522 L',
        status: 'Used', image: 'cars/honda_crv.jpg'
    },
    {
        id: 92, brand: 'Honda', model: 'Jazz', price: 800000,
        fuel: 'Petrol', transmission: 'CVT', mileage: '17.1 kmpl',
        engine: '1.2L i-VTEC', power: '89 bhp', torque: '110 Nm', topSpeed: '165 km/h', bootSpace: '354 L',
        status: 'Used', image: 'cars/honda_jazz.jpg'
    },
    {
        id: 93, brand: 'Honda', model: 'WR-V', price: 900000,
        fuel: 'Diesel', transmission: 'Manual', mileage: '23.7 kmpl',
        engine: '1.5L i-DTEC', power: '98 bhp', torque: '200 Nm', topSpeed: '165 km/h', bootSpace: '363 L',
        status: 'Used', image: 'cars/honda_wrv.jpg'
    },
    {
        id: 94, brand: 'Honda', model: 'Brio', price: 500000,
        fuel: 'Petrol', transmission: 'Manual', mileage: '18.5 kmpl',
        engine: '1.2L i-VTEC', power: '87 bhp', torque: '109 Nm', topSpeed: '150 km/h', bootSpace: '175 L',
        status: 'Used', image: 'cars/honda_brio.jpg'
    },
    {
        id: 95, brand: 'Honda', model: 'BR-V', price: 1000000,
        fuel: 'Petrol', transmission: 'CVT', mileage: '16.0 kmpl',
        engine: '1.5L i-VTEC', power: '117 bhp', torque: '145 Nm', topSpeed: '170 km/h', bootSpace: '223 L',
        status: 'Used', image: 'cars/honda_brv.jpg'
    },

    // --- KIA ---
    {
        id: 96, brand: 'Kia', model: 'Seltos', price: 1090000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '17.0 kmpl',
        engine: '1.5L Turbo', power: '158 bhp', torque: '253 Nm', topSpeed: '190 km/h', bootSpace: '433 L',
        status: 'SUV', image: 'cars/kia_sonet.jpg'
    },
    {
        id: 97, brand: 'Kia', model: 'Sonet', price: 799000,
        fuel: 'Diesel', transmission: 'Automatic', mileage: '19.0 kmpl',
        engine: '1.5L CRDi', power: '114 bhp', torque: '250 Nm', topSpeed: '175 km/h', bootSpace: '392 L',
        status: 'Compact', image: 'cars/kia_sonet.jpg'
    },
    {
        id: 98, brand: 'Kia', model: 'Carens', price: 1052000,
        fuel: 'Diesel', transmission: 'Automatic', mileage: '21.3 kmpl',
        engine: '1.5L Diesel', power: '113 bhp', torque: '250 Nm', topSpeed: '175 km/h', bootSpace: '216 L',
        status: 'MPV', image: 'cars/kia_carens.jpg'
    },
    {
        id: 99, brand: 'Kia', model: 'EV6', price: 6090000,
        fuel: 'Electric', transmission: 'Automatic', mileage: '708 km',
        engine: 'Dual Motor', power: '320 bhp', torque: '605 Nm', topSpeed: '192 km/h', bootSpace: '520 L',
        status: 'Electric', image: 'cars/kia_ev6.jpg'
    },
    {
        id: 100, brand: 'Kia', model: 'Carnival', price: 3500000,
        fuel: 'Diesel', transmission: 'Automatic', mileage: '14.0 kmpl',
        engine: '2.2L Diesel', power: '197 bhp', torque: '440 Nm', topSpeed: '190 km/h', bootSpace: '540 L',
        status: 'Luxury Van', image: 'cars/kia_carnival.jpg'
    },
    {
        id: 101, brand: 'Kia', model: 'Syros', price: 900000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '18.0 kmpl',
        engine: '1.2L Turbo', power: '100 bhp', torque: '170 Nm', topSpeed: '160 km/h', bootSpace: '350 L',
        status: 'Upcoming', image: 'cars/kia_syros.jpg'
    },

    // --- TOYOTA ---
    {
        id: 102, brand: 'Toyota', model: 'Fortuner', price: 3343000,
        fuel: 'Diesel', transmission: 'Automatic', mileage: '10.0 kmpl',
        engine: '2.8L Diesel', power: '201 bhp', torque: '500 Nm', topSpeed: '190 km/h', bootSpace: '296 L',
        status: 'Legend', image: 'cars/toyota_fortuner.jpg'
    },
    {
        id: 103, brand: 'Toyota', model: 'Innova Crysta', price: 1999000,
        fuel: 'Diesel', transmission: 'Manual', mileage: '12.0 kmpl',
        engine: '2.4L Diesel', power: '148 bhp', torque: '343 Nm', topSpeed: '175 km/h', bootSpace: '300 L',
        status: 'Family', image: 'cars/toyota_innovacrysta.jpg'
    },
    {
        id: 104, brand: 'Toyota', model: 'Hycross', price: 1977000,
        fuel: 'Hybrid', transmission: 'Automatic', mileage: '23.2 kmpl',
        engine: '2.0L Hybrid', power: '183 bhp', torque: '206 Nm', topSpeed: '180 km/h', bootSpace: '300 L',
        status: 'Hybrid', image: 'cars/toyota_innovahycross.jpg'
    },
    {
        id: 105, brand: 'Toyota', model: 'Camry', price: 4617000,
        fuel: 'Hybrid', transmission: 'Automatic', mileage: '19.1 kmpl',
        engine: '2.5L Hybrid', power: '215 bhp', torque: '221 Nm', topSpeed: '190 km/h', bootSpace: '524 L',
        status: 'Luxury', image: 'cars/toyota_camry.jpg'
    },
    {
        id: 106, brand: 'Toyota', model: 'Vellfire', price: 12000000,
        fuel: 'Hybrid', transmission: 'Automatic', mileage: '16.3 kmpl',
        engine: '2.5L Hybrid', power: '190 bhp', torque: '240 Nm', topSpeed: '170 km/h', bootSpace: '148 L',
        status: 'VIP', image: 'cars/toyota_vellfire.jpg'
    },
    {
        id: 107, brand: 'Toyota', model: 'Land Cruiser', price: 21000000,
        fuel: 'Diesel', transmission: 'Automatic', mileage: '9.0 kmpl',
        engine: '3.3L V6 Diesel', power: '304 bhp', torque: '700 Nm', topSpeed: '210 km/h', bootSpace: '1131 L',
        status: 'Icon', image: 'cars/toyota_landcruiser.jpg'
    },
    {
        id: 108, brand: 'Toyota', model: 'Glanza', price: 686000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '22.9 kmpl',
        engine: '1.2L K-Series', power: '89 bhp', torque: '113 Nm', topSpeed: '165 km/h', bootSpace: '318 L',
        status: 'Hatchback', image: 'cars/toyota_glanza.jpg'
    },
    {
        id: 109, brand: 'Toyota', model: 'Urban Cruiser', price: 1100000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '20.0 kmpl',
        engine: '1.5L Mild Hybrid', power: '102 bhp', torque: '137 Nm', topSpeed: '170 km/h', bootSpace: '328 L',
        status: 'SUV', image: 'cars/toyota_urbancruiser.jpg'
    },
    {
        id: 110, brand: 'Toyota', model: 'Taisor', price: 774000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '22.8 kmpl',
        engine: '1.0L Turbo', power: '99 bhp', torque: '148 Nm', topSpeed: '170 km/h', bootSpace: '308 L',
        status: 'Crossover', image: 'cars/toyota_taisor.jpg'
    },
    {
        id: 111, brand: 'Toyota', model: 'Rumion', price: 1044000,
        fuel: 'CNG', transmission: 'Manual', mileage: '26.1 km/kg',
        engine: '1.5L K-Series', power: '87 bhp', torque: '121 Nm', topSpeed: '165 km/h', bootSpace: '209 L',
        status: 'MPV', image: 'cars/toyota_rumion.jpg'
    },

    // --- SKODA & VOLKSWAGEN ---
    {
        id: 112, brand: 'Skoda', model: 'Slavia', price: 1163000,
        fuel: 'Petrol', transmission: 'DSG', mileage: '18.7 kmpl',
        engine: '1.5L TSI', power: '148 bhp', torque: '250 Nm', topSpeed: '190 km/h', bootSpace: '521 L',
        status: 'Sedan', image: 'cars/skoda_slavia.jpg'
    },
    {
        id: 113, brand: 'Skoda', model: 'Kushaq', price: 1199000,
        fuel: 'Petrol', transmission: 'DSG', mileage: '18.1 kmpl',
        engine: '1.5L TSI', power: '148 bhp', torque: '250 Nm', topSpeed: '190 km/h', bootSpace: '385 L',
        status: 'SUV', image: 'cars/skoda_kushaq.jpg'
    },
    {
        id: 114, brand: 'Skoda', model: 'Kodiaq', price: 3900000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '13.3 kmpl',
        engine: '2.0L TSI', power: '188 bhp', torque: '320 Nm', topSpeed: '210 km/h', bootSpace: '270 L',
        status: 'Luxury SUV', image: 'cars/skoda_kodiaq.jpg'
    },
    {
        id: 115, brand: 'Skoda', model: 'Superb', price: 5400000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '15.1 kmpl',
        engine: '2.0L TSI', power: '188 bhp', torque: '320 Nm', topSpeed: '240 km/h', bootSpace: '625 L',
        status: 'Luxury', image: 'cars/skoda_superb.jpg'
    },
    {
        id: 116, brand: 'Skoda', model: 'Octavia', price: 3000000,
        fuel: 'Petrol', transmission: 'DSG', mileage: '15.8 kmpl',
        engine: '2.0L TSI', power: '188 bhp', torque: '320 Nm', topSpeed: '240 km/h', bootSpace: '600 L',
        status: 'Used', image: 'cars/skoda_octavia.jpg'
    },
    {
        id: 117, brand: 'Skoda', model: 'Karoq', price: 2500000,
        fuel: 'Petrol', transmission: 'DSG', mileage: '14.5 kmpl',
        engine: '1.5L TSI', power: '148 bhp', torque: '250 Nm', topSpeed: '202 km/h', bootSpace: '521 L',
        status: 'Used', image: 'cars/skoda_karoq.jpg'
    },
    {
        id: 118, brand: 'Volkswagen', model: 'Virtus', price: 1156000,
        fuel: 'Petrol', transmission: 'DSG', mileage: '18.4 kmpl',
        engine: '1.5L TSI', power: '148 bhp', torque: '250 Nm', topSpeed: '190 km/h', bootSpace: '521 L',
        status: 'Performance', image: 'cars/volkswagen_virtus.jpg'
    },
    {
        id: 119, brand: 'Volkswagen', model: 'Taigun', price: 1170000,
        fuel: 'Petrol', transmission: 'DSG', mileage: '18.1 kmpl',
        engine: '1.5L TSI', power: '148 bhp', torque: '250 Nm', topSpeed: '190 km/h', bootSpace: '385 L',
        status: 'SUV', image: 'cars/volkswagen_taigun.jpg'
    },
    {
        id: 120, brand: 'Volkswagen', model: 'Polo', price: 800000,
        fuel: 'Petrol', transmission: 'Manual', mileage: '17.7 kmpl',
        engine: '1.0L TSI', power: '108 bhp', torque: '175 Nm', topSpeed: '190 km/h', bootSpace: '294 L',
        status: 'Legend', image: 'cars/volkswagen_polo.jpg'
    },
    {
        id: 121, brand: 'Volkswagen', model: 'Vento', price: 900000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '17.6 kmpl',
        engine: '1.0L TSI', power: '108 bhp', torque: '175 Nm', topSpeed: '185 km/h', bootSpace: '494 L',
        status: 'Used', image: 'cars/volkswagen_vento.jpg'
    },
    {
        id: 122, brand: 'Volkswagen', model: 'Passat', price: 3000000,
        fuel: 'Diesel', transmission: 'Automatic', mileage: '17.4 kmpl',
        engine: '2.0L TDI', power: '174 bhp', torque: '350 Nm', topSpeed: '230 km/h', bootSpace: '586 L',
        status: 'Used', image: 'cars/volkswagen_passat.jpg'
    },
    {
        id: 123, brand: 'Volkswagen', model: 'Ameo', price: 600000,
        fuel: 'Diesel', transmission: 'Manual', mileage: '21.0 kmpl',
        engine: '1.5L TDI', power: '108 bhp', torque: '250 Nm', topSpeed: '175 km/h', bootSpace: '330 L',
        status: 'Used', image: 'cars/volkswagen_ameo.jpg'
    },

    // --- MG MOTOR ---
    {
        id: 124, brand: 'MG', model: 'Hector', price: 1500000,
        fuel: 'Diesel', transmission: 'Manual', mileage: '14.0 kmpl',
        engine: '2.0L Diesel', power: '168 bhp', torque: '350 Nm', topSpeed: '190 km/h', bootSpace: '587 L',
        status: 'Tech', image: 'cars/mg_hector.jpg'
    },
    {
        id: 125, brand: 'MG', model: 'Comet EV', price: 699000,
        fuel: 'Electric', transmission: 'Automatic', mileage: '230 km',
        engine: 'PMS Motor', power: '41 bhp', torque: '110 Nm', topSpeed: '100 km/h', bootSpace: '0 L',
        status: 'City EV', image: 'cars/mg_ecomet.jpg'
    },
    {
        id: 126, brand: 'MG', model: 'ZS EV', price: 2288000,
        fuel: 'Electric', transmission: 'Automatic', mileage: '461 km',
        engine: 'Electric Motor', power: '174 bhp', torque: '280 Nm', topSpeed: '140 km/h', bootSpace: '448 L',
        status: 'Electric', image: 'cars/mg_zsev.jpg'
    },
    {
        id: 127, brand: 'MG', model: 'Astor', price: 998000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '15.0 kmpl',
        engine: '1.3L Turbo', power: '138 bhp', torque: '220 Nm', topSpeed: '170 km/h', bootSpace: '488 L',
        status: 'AI Inside', image: 'cars/mg_astor.jpg'
    },
    {
        id: 128, brand: 'MG', model: 'Gloster', price: 3880000,
        fuel: 'Diesel', transmission: 'Automatic', mileage: '12.0 kmpl',
        engine: '2.0L TwinTurbo', power: '212 bhp', torque: '480 Nm', topSpeed: '180 km/h', bootSpace: '343 L',
        status: 'Full Size', image: 'cars/mg_gloster.jpg'
    },

    // --- NISSAN ---
    {
        id: 129, brand: 'Nissan', model: 'Magnite', price: 600000,
        fuel: 'Petrol', transmission: 'CVT', mileage: '19.3 kmpl',
        engine: '1.0L Turbo', power: '99 bhp', torque: '160 Nm', topSpeed: '170 km/h', bootSpace: '336 L',
        status: 'Budget SUV', image: 'cars/nissan_magnite.jpg'
    },
    {
        id: 130, brand: 'Nissan', model: 'Kicks', price: 950000,
        fuel: 'Petrol', transmission: 'Manual', mileage: '14.2 kmpl',
        engine: '1.3L Turbo', power: '154 bhp', torque: '254 Nm', topSpeed: '180 km/h', bootSpace: '400 L',
        status: 'Used', image: 'cars/nissan_kicks.jpg'
    },
    {
        id: 131, brand: 'Nissan', model: 'Sunny', price: 700000,
        fuel: 'Diesel', transmission: 'Manual', mileage: '22.7 kmpl',
        engine: '1.5L dCi', power: '85 bhp', torque: '200 Nm', topSpeed: '175 km/h', bootSpace: '490 L',
        status: 'Used', image: 'cars/nissan_sunny.jpg'
    },
    {
        id: 132, brand: 'Nissan', model: 'Terrano', price: 800000,
        fuel: 'Diesel', transmission: 'Manual', mileage: '19.0 kmpl',
        engine: '1.5L dCi', power: '108 bhp', torque: '245 Nm', topSpeed: '175 km/h', bootSpace: '475 L',
        status: 'Used', image: 'cars/nissan_terrano.jpg'
    },
    {
        id: 133, brand: 'Nissan', model: 'Micra', price: 400000,
        fuel: 'Petrol', transmission: 'CVT', mileage: '19.0 kmpl',
        engine: '1.2L Petrol', power: '76 bhp', torque: '104 Nm', topSpeed: '160 km/h', bootSpace: '265 L',
        status: 'Used', image: 'cars/nissan_micra.jpg'
    },

    // --- LAND ROVER ---
    {
        id: 134, brand: 'Land Rover', model: 'Defender', price: 15000000,
        fuel: 'Diesel', transmission: 'Automatic', mileage: '10.0 kmpl',
        engine: '3.0L Diesel', power: '296 bhp', torque: '650 Nm', topSpeed: '191 km/h', bootSpace: '857 L',
        status: 'Off-road', image: 'cars/landrover_defender.jpg'
    },
    {
        id: 135, brand: 'Land Rover', model: 'Range Rover', price: 23900000,
        fuel: 'Petrol', transmission: 'Automatic', mileage: '8.7 kmpl',
        engine: '3.0L LWB', power: '394 bhp', torque: '550 Nm', topSpeed: '242 km/h', bootSpace: '818 L',
        status: 'Royal', image: 'cars/landrover_ranger.jpg'
    }
];

// Dynamically normalize car asset images for root or subpage location
cars.forEach(car => {
    if (car.image && !car.image.startsWith('http') && !car.image.startsWith('../') && !car.image.startsWith('assets/')) {
        car.image = `${rootPrefix}assets/images/${car.image}`;
    }
});

//2. GLOBAL INITIALIZATION (Runs on Every Page)
document.addEventListener('DOMContentLoaded', () => {
    // 1. Auth Check (Sabse pehle run hoga)
    checkLoginStatus();

    // 2. Redirect if on Login Page and already logged in
    redirectIfLoggedIn();

    // 3. Setup OTP Form (Agar page par hai)
    const otpForm = document.getElementById('otpAuthForm');
    if (otpForm) otpForm.addEventListener('submit', handleOtpLogin);

    // 4. Initialize Location
    initializeLocation();

    // 5. Load Other Features
    if (document.getElementById('inventoryTabs')) { displayHomeTabs(); initializeHomeSearch(); }
    if (document.getElementById('carGrid')) { initializeInventoryPage(); }
    initializeGlobalSearch();
    initializeChatBot();
});


/* =========================================
   3. UNIFIED SEARCH & FILTER SYSTEM
   ========================================= */

// --- Logic for Home Page (Redirects) ---
function initializeGlobalSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    function redirectToInventory() {
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `${pagePrefix}new_cars.html?search=${encodeURIComponent(query)}`;
        }
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            redirectToInventory();
        });
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                redirectToInventory();
            }
        });
    }
}

// --- Logic for Inventory Page (Filters Data) ---
function initializeInventoryPage() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    // Sidebar Filters
    const brandFilter = document.getElementById('brandFilter');
    const fuelFilter = document.getElementById('fuelFilter');
    const priceFilter = document.getElementById('priceFilter');

    // Loader Elements
    const brandLoader = document.getElementById('brandLoader');
    const loaderLogo = document.getElementById('loaderLogo');
    const loaderText = document.getElementById('loaderText');

    // 1. DEFINE LOGO MAPPING (Updated with Local Paths)
    const logoMap = {
        'Audi': `${rootPrefix}assets/images/cars_logo/audi_logo.jpg`,
        'BMW': `${rootPrefix}assets/images/cars_logo/bmw_logo.jpg`,
        'Honda': `${rootPrefix}assets/images/cars_logo/honda_logo.jpg`,
        'Hyundai': `${rootPrefix}assets/images/cars_logo/hyundai_logo.jpg`,
        'Kia': `${rootPrefix}assets/images/cars_logo/kia_logo.jpg`,
        'Land Rover': `${rootPrefix}assets/images/cars_logo/land_rover_logo.jpg`,
        'Mahindra': `${rootPrefix}assets/images/cars_logo/mahindra_logo.jpg`,
        'Maruti': `${rootPrefix}assets/images/cars_logo/maruti_suzuki_logo.jpg`,
        'Mercedes': `${rootPrefix}assets/images/cars_logo/mercedes_logo.jpg`,
        'MG': `${rootPrefix}assets/images/cars_logo/mg_motor_logo.jpg`,
        'Nissan': `${rootPrefix}assets/images/cars_logo/nissan_logo.jpg`,
        'Skoda': `${rootPrefix}assets/images/cars_logo/skoda_logo.jpg`,
        'Tata': `${rootPrefix}assets/images/cars_logo/tata.jpg`,
        'Toyota': `${rootPrefix}assets/images/cars_logo/toyota_logo.jpg`,
        'Volkswagen': `${rootPrefix}assets/images/cars_logo/volkswagen_logo.jpg`,
        'default': `${rootPrefix}assets/images/car_fusion_logo.png`
    };

    // 2. The Master Filter Function
    function applyFilters() {
        // Gather all values
        const query = searchInput ? searchInput.value.toLowerCase() : '';
        const brand = brandFilter ? brandFilter.value : '';
        const fuel = fuelFilter ? fuelFilter.value : '';
        const price = priceFilter ? priceFilter.value : '';

        console.log('=== APPLYING FILTERS ===');
        console.log('Query:', query);
        console.log('Brand:', brand);
        console.log('Fuel:', fuel);
        console.log('Price:', price);

        // Filter the main 'cars' array
        const filtered = cars.filter(car => {
            const matchesSearch = (car.brand.toLowerCase() + ' ' + car.model.toLowerCase()).includes(query);
            const matchesBrand = brand === '' || car.brand === brand;
            const matchesFuel = fuel === '' || car.fuel === fuel;

            let matchesPrice = true;
            if (price && price !== '') {
                if (price === '100+') {
                    matchesPrice = car.price >= 10000000; // Above 1 Cr
                } else {
                    const parts = price.split('-');
                    if (parts.length === 2) {
                        const min = parts[0];
                        const max = parts[1];
                        const minPrice = parseFloat(min) * 100000; // Convert lakhs to rupees
                        const maxPrice = parseFloat(max) * 100000;
                        matchesPrice = car.price >= minPrice && car.price <= maxPrice;

                        // Debug logging for price filtering
                        if (brand && price) {
                            const carPriceLakhs = (car.price / 100000).toFixed(2);
                            const minLakhs = (minPrice / 100000).toFixed(2);
                            const maxLakhs = (maxPrice / 100000).toFixed(2);
                            console.log(`${car.brand} ${car.model}: ${carPriceLakhs}L (Range: ${minLakhs}L-${maxLakhs}L) = ${matchesPrice ? 'PASS' : 'FAIL'}`);
                        }
                    }
                }
            }

            const matches = matchesSearch && matchesBrand && matchesFuel && matchesPrice;

            return matches;
        });

        console.log(`=== FILTER RESULTS: ${filtered.length} cars from ${cars.length} total ===`);

        // Show alert if no results found with active filters
        if (filtered.length === 0 && (brand || fuel || price || query)) {
            console.log('No cars match the selected filters');
        }

        displayCars(filtered);
    }

    // 3. THE "CRAZY LOADER" FUNCTION
    function handleBrandChange() {
        const selectedBrand = brandFilter.value;

        // A. Clear Search Bar (Flexible Mode)
        if (searchInput) searchInput.value = '';

        // B. Determine which Logo to show
        let logoSrc = logoMap['default']; // Default
        if (selectedBrand && logoMap[selectedBrand]) {
            logoSrc = logoMap[selectedBrand];
        }

        // C. Update Loader UI
        if (loaderLogo) loaderLogo.src = logoSrc;
        if (loaderText) loaderText.textContent = selectedBrand ? `Loading ${selectedBrand} Inventory...` : 'Loading All Cars...';

        // D. SHOW Loader
        if (brandLoader) brandLoader.classList.remove('d-none');

        // E. WAIT 1.5 Seconds, then Filter & Hide
        setTimeout(() => {
            applyFilters(); // Filter the cars behind the screen

            // Hide Loader
            if (brandLoader) brandLoader.classList.add('d-none');
        }, 1500); // 1500ms = 1.5 seconds delay
    }

    // 4. Attach Listeners

    // Brand Filter -> Triggers Animation
    if (brandFilter) brandFilter.addEventListener('change', handleBrandChange);

    // Other Filters -> Instant Update (No Animation needed usually, or add if you want)
    if (fuelFilter) {
        fuelFilter.addEventListener('change', () => {
            if (searchInput) searchInput.value = '';
            applyFilters();
        });
    }
    if (priceFilter) {
        priceFilter.addEventListener('change', () => {
            if (searchInput) searchInput.value = '';
            applyFilters();
        });
    }

    // Search Bar
    if (searchBtn) searchBtn.addEventListener('click', (e) => { e.preventDefault(); applyFilters(); });
    if (searchInput) searchInput.addEventListener('keyup', applyFilters);

    // 5. Initial Load Check (URL Params)
    const urlParams = new URLSearchParams(window.location.search);
    const initialQuery = urlParams.get('search');
    const initialBrand = urlParams.get('brand');
    const initialFuel = urlParams.get('fuel');
    const initialPrice = urlParams.get('price') || urlParams.get('budget'); // Dono ko handle karega

    // Handle home page search parameters
    if (initialBrand || initialFuel || initialPrice) {
        console.log('Setting filters from URL...');

        // Set all filter values first
        if (initialBrand && brandFilter) brandFilter.value = initialBrand;
        if (initialFuel && fuelFilter) fuelFilter.value = initialFuel;
        if (initialPrice && priceFilter) priceFilter.value = initialPrice;

        // Show filter info alert
        const filterInfo = [];
        if (initialBrand) filterInfo.push(`Brand: ${initialBrand}`);
        if (initialFuel) filterInfo.push(`Fuel: ${initialFuel}`);
        if (initialPrice) {
            const budgetText = initialPrice === '100+' ? 'Above ₹1Cr' :
                '₹' + initialPrice.replace('-', 'L - ₹') + 'L';
            filterInfo.push(`Budget: ${budgetText}`);
        }

        if (filterInfo.length > 0) {
            setTimeout(() => {
                showBootstrapAlert(`Filters Applied: ${filterInfo.join(', ')}`, 'success');
            }, 500);
        }

        // Apply filters with brand animation if brand is selected
        if (initialBrand && brandFilter && brandLoader && loaderLogo && loaderText) {
            const logoSrc = logoMap[initialBrand] || logoMap['default'];
            loaderLogo.src = logoSrc;
            loaderText.textContent = `Loading ${initialBrand} Inventory...`;
            brandLoader.classList.remove('d-none');

            // Apply filters after animation
            setTimeout(() => {
                applyFilters();
                brandLoader.classList.add('d-none');
            }, 1500);
        } else {
            applyFilters();
        }
    } else if (initialQuery && searchInput) {
        searchInput.value = initialQuery;
        applyFilters();
    } else {
        applyFilters();
    }
}

/* =========================================
   4. DISPLAY & COMPARE LOGIC
   ========================================= */
function displayCars(carsToDisplay) {
    const carGrid = document.getElementById('carGrid');
    const noRes = document.getElementById('noResults');
    if (!carGrid) return;

    carGrid.innerHTML = '';

    if (carsToDisplay.length === 0) {
        if (noRes) noRes.style.display = 'block';
        return;
    }
    if (noRes) noRes.style.display = 'none';

    // Get current favorites to show initial state
    const userJson = localStorage.getItem('currentUser');
    const favs = userJson ? (JSON.parse(userJson).favorites || []) : [];

    carsToDisplay.forEach(car => {
        const isFav = favs.includes(car.id);
        const imageSrc = car.image ? car.image : 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=600';

        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4';

        col.innerHTML = `
            <div class="euro-card h-100 feature-card position-relative"> 
                <button class="btn btn-light rounded-circle position-absolute top-0 end-0 m-3 shadow-sm fav-btn" 
                        data-id="${car.id}" 
                        onclick="toggleFavorite(${car.id})"
                        style="z-index: 10; width: 40px; height: 40px; display:flex; align-items:center; justify-content:center;">
                    <i class="bi ${isFav ? 'bi-heart-fill text-danger' : 'bi-heart'} fs-5"></i>
                </button>

                <div class="position-relative">
                    <div class="car-image bg-light d-flex align-items-center justify-content-center" style="height:220px; overflow:hidden;">
                        <img src="${imageSrc}" alt="${car.brand} ${car.model}" style="width:100%; height:100%; object-fit:cover; transition:0.5s;">
                    </div>
                    <span class="badge bg-black text-gold position-absolute bottom-0 start-0 m-0 rounded-0 px-3 py-2">${car.status}</span>
                </div>
                <div class="p-3">
                    <h5 class="fw-bold mb-1">${car.brand} ${car.model}</h5>
                    <div class="mb-3 text-secondary small">
                        <span><i class="bi bi-fuel-pump"></i> ${car.fuel}</span> | 
                        <span><i class="bi bi-gear"></i> ${car.transmission}</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="fw-bold">₹${(car.price / 100000).toFixed(2)} Lakh</span>
                        <a href="${pagePrefix}car_details.html?id=${car.id}" class="btn btn-outline-dark btn-sm rounded-0">View Details</a>
                    </div>
                </div>
            </div>
        `;
        carGrid.appendChild(col);
    });
}

// --- Comparison Logic (Kept as is) ---
function initializeCompare() {
    const selects = ['car1Select', 'car2Select', 'car3Select'];
    selects.forEach(selectId => {
        const select = document.getElementById(selectId);
        if (!select) return;
        cars.forEach(car => {
            const option = document.createElement('option');
            option.value = car.id;
            option.textContent = `${car.brand} ${car.model}`;
            select.appendChild(option);
        });
    });
}

function compareNow() {
    const car1Id = parseInt(document.getElementById('car1Select').value);
    const car2Id = parseInt(document.getElementById('car2Select').value);
    const car3Id = parseInt(document.getElementById('car3Select')?.value);
    const car4Id = parseInt(document.getElementById('car4Select')?.value);

    // Check if at least 2 cars are selected
    const selectedIds = [car1Id, car2Id, car3Id, car4Id].filter(id => !isNaN(id) && id > 0);

    if (selectedIds.length < 2) {
        showBootstrapAlert('Please select at least 2 cars to compare!', 'warning');
        return;
    }

    // Check for duplicate selections
    const uniqueIds = new Set(selectedIds);
    if (uniqueIds.size !== selectedIds.length) {
        showBootstrapAlert('Please choose different cars to compare! You have selected the same car multiple times.', 'danger');
        return;
    }

    const car1 = cars.find(c => c.id === car1Id);
    const car2 = cars.find(c => c.id === car2Id);
    const car3 = car3Id ? cars.find(c => c.id === car3Id) : null;
    const car4 = car4Id ? cars.find(c => c.id === car4Id) : null;

    displayComparison(car1, car2, car3, car4);
}

function displayComparison(car1, car2, car3) {
    const section = document.getElementById('comparisonSection');
    section.style.display = 'block';

    // Toggle 3rd column visibility
    const show3rd = car3 !== null;
    const elements3 = ['car3Header', 'car3Price', 'car3Fuel', 'car3Trans', 'car3Mileage', 'car3Status'];
    elements3.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = show3rd ? '' : 'none';
    });

    // Update Headers
    document.getElementById('car1Header').textContent = `${car1.brand} ${car1.model}`;
    document.getElementById('car2Header').textContent = `${car2.brand} ${car2.model}`;
    if (car3) document.getElementById('car3Header').textContent = `${car3.brand} ${car3.model}`;

    updateComparisonData('car1', car1);
    updateComparisonData('car2', car2);
    if (car3) updateComparisonData('car3', car3);

    section.scrollIntoView({ behavior: 'smooth' });
}

function updateComparisonData(prefix, car) {
    if (!car) return;
    const set = (id, html) => {
        const el = document.getElementById(prefix + id);
        if (el) el.innerHTML = html;
    };

    set('Price', `<strong class="text-danger">₹${(car.price / 100000).toFixed(2)} Lakh</strong>`);
    set('Fuel', car.fuel);
    set('Trans', car.transmission);
    set('Mileage', car.mileage);
    set('Status', `<span class="badge bg-black text-gold border border-warning">${car.status}</span>`);
}

function resetComparison() {
    document.getElementById('car1Select').value = '';
    document.getElementById('car2Select').value = '';
    document.getElementById('car3Select').value = '';
    document.getElementById('comparisonSection').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('brandFilter').value = '';
    document.getElementById('fuelFilter').value = '';
    document.getElementById('priceFilter').value = '';
    displayCars(cars);
}

/* =========================================
   5. OTP AUTHENTICATION SYSTEM (Replaces Old Login)
   ========================================= */

// Global Variables
let generatedOtp = null;
let isNewUser = false;

// EmailJS Configuration - Replace with your actual credentials
const EMAIL_CONFIG = {
    serviceId: 'YOUR_SERVICE_ID',      // Get from EmailJS dashboard
    templateId: 'YOUR_TEMPLATE_ID',    // Get from EmailJS dashboard
    publicKey: 'YOUR_PUBLIC_KEY'       // Already initialized in login.html
};

function sendOtp() {
    const loginMethod = document.querySelector('input[name="loginMethod"]:checked')?.value || 'email';
    const email = document.getElementById('emailInput')?.value;
    const mobile = document.getElementById('mobileInput')?.value;
    const alertBox = document.getElementById('alertBox');
    const successBox = document.getElementById('successBox');
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2-new-user');
    const step3 = document.getElementById('step3-otp');
    const formTitle = document.getElementById('formTitle');

    // Clear Alerts
    alertBox.classList.add('d-none');
    successBox.classList.add('d-none');

    // Validation based on login method
    if (loginMethod === 'email') {
        if (!email || !email.includes('@')) {
            alertBox.textContent = "Please enter a valid email address.";
            alertBox.classList.remove('d-none');
            return;
        }
    } else {
        if (!mobile || mobile.length !== 10 || isNaN(mobile)) {
            alertBox.textContent = "Please enter a valid 10-digit mobile number.";
            alertBox.classList.remove('d-none');
            return;
        }
    }

    // Check LocalStorage
    const users = JSON.parse(localStorage.getItem('carFusionUsers') || '[]');
    const identifier = loginMethod === 'email' ? email : mobile;
    const existingUser = users.find(u =>
        loginMethod === 'email' ? u.email === email : u.mobile === mobile
    );

    if (existingUser) {
        isNewUser = false;
        formTitle.textContent = `Welcome Back, ${existingUser.name.split(' ')[0]}`;
        step2.classList.add('d-none');
    } else {
        isNewUser = true;
        formTitle.textContent = "Create Account";
        step2.classList.remove('d-none');
    }

    // Generate OTP
    generatedOtp = Math.floor(1000 + Math.random() * 9000);

    // Send OTP based on method
    if (loginMethod === 'email' && typeof emailjs !== 'undefined') {
        // Send via EmailJS
        const templateParams = {
            user_name: existingUser ? existingUser.name : 'User',
            user_email: email,
            otp_code: generatedOtp,
            to_email: email
        };

        emailjs.send(EMAIL_CONFIG.serviceId, EMAIL_CONFIG.templateId, templateParams)
            .then(function (response) {
                console.log('Email sent successfully!', response.status, response.text);
                showBootstrapAlert(`OTP sent to ${email}. Please check your inbox (and spam folder).`, 'success');

                // Update UI
                step1.classList.add('d-none');
                step3.classList.remove('d-none');
                successBox.textContent = `OTP Sent to ${email}`;
                successBox.classList.remove('d-none');
                setTimeout(() => document.getElementById('otpInput').focus(), 100);
            }, function (error) {
                console.error('Email send failed:', error);
                // Fallback to showing OTP in alert
                showBootstrapAlert(`Email service not configured. Your OTP is: ${generatedOtp}`, 'warning');

                step1.classList.add('d-none');
                step3.classList.remove('d-none');
                successBox.textContent = `OTP Generated (Check console or alert)`;
                successBox.classList.remove('d-none');
            });
    } else {
        // Mobile OTP or fallback
        setTimeout(() => {
            showBootstrapAlert(`Car Fusion OTP: ${generatedOtp}<br><br>(Enter this code to verify)`, 'info');
        }, 500);

        // Update UI
        step1.classList.add('d-none');
        step3.classList.remove('d-none');
        const displayIdentifier = loginMethod === 'email' ? email : `+91 ${mobile}`;
        successBox.textContent = `OTP Sent to ${displayIdentifier}`;
        successBox.classList.remove('d-none');
        setTimeout(() => document.getElementById('otpInput').focus(), 100);
    }
}

function handleOtpLogin(e) {
    e.preventDefault();
    const enteredOtp = document.getElementById('otpInput').value;
    const loginMethod = document.querySelector('input[name="loginMethod"]:checked')?.value || 'email';
    const email = document.getElementById('emailInput')?.value;
    const mobile = document.getElementById('mobileInput')?.value;
    const alertBox = document.getElementById('alertBox');

    if (enteredOtp != generatedOtp) {
        alertBox.textContent = "Incorrect OTP. Please try again.";
        alertBox.classList.remove('d-none');
        return;
    }

    // Process User
    const users = JSON.parse(localStorage.getItem('carFusionUsers') || '[]');
    let currentUser;

    if (isNewUser) {
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();

        if (!firstName) {
            alertBox.textContent = "Please enter your Name.";
            alertBox.classList.remove('d-none');
            return;
        }

        const newUser = {
            name: `${firstName} ${lastName}`,
            mobile: loginMethod === 'mobile' ? mobile : '',
            email: loginMethod === 'email' ? email : '',
            joined: new Date().toLocaleDateString(),
            favorites: [],
            bookings: []
        };
        users.push(newUser);
        localStorage.setItem('carFusionUsers', JSON.stringify(users));
        currentUser = newUser;
    } else {
        // Find existing user by email or mobile
        currentUser = users.find(u =>
            (loginMethod === 'email' && u.email === email) ||
            (loginMethod === 'mobile' && u.mobile === mobile)
        );
    }

    // SAVE SESSION (This is important!)
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    // Check for redirect parameter
    const urlParams = new URLSearchParams(window.location.search);
    const redirectUrl = urlParams.get('redirect');

    document.getElementById('successBox').textContent = "Login Successful! Redirecting...";
    setTimeout(() => {
        window.location.href = redirectUrl || (isSubpage ? '../index.html' : 'index.html');
    }, 1000);
}
function checkLoginStatus() {
    const userJson = localStorage.getItem('currentUser');

    console.log('=== CHECK LOGIN STATUS ===');
    console.log('User JSON:', userJson);

    if (!userJson) {
        console.log('No user logged in');
        return; // No user logged in
    }

    let user;
    try {
        user = JSON.parse(userJson);
        console.log('User object:', user);
    } catch (e) {
        console.error("User data corrupted, clearing...");
        localStorage.removeItem('currentUser');
        return;
    }

    // Update all login links on the page
    const loginLinks = document.querySelectorAll('a[href*="login.html"], #loginLink, [data-login-link]');
    const firstName = user.name ? user.name.split(' ')[0] : 'User';

    console.log('Found', loginLinks.length, 'login links to update');
    console.log('User first name:', firstName);

    loginLinks.forEach((link, index) => {
        console.log(`Updating link ${index + 1}:`, link);
        link.href = `${pagePrefix}profile.html`;
        link.style.cursor = 'pointer';
        link.innerHTML = `<i class="bi bi-person-circle me-2 fs-5"></i><span class="small fw-bold">Hi, ${firstName}</span>`;

        // Remove old event listeners by cloning
        const newLink = link.cloneNode(true);
        link.parentNode.replaceChild(newLink, link);
    });

    console.log('Login status check complete. User:', firstName);
}

// Function to require login for protected pages
function requireLogin() {
    const userJson = localStorage.getItem('currentUser');
    if (!userJson) {
        // Save current page URL to redirect back after login
        const currentPage = window.location.pathname + window.location.search;
        window.location.href = `${pagePrefix}login.html?redirect=${encodeURIComponent(currentPage)}`;
        return false;
    }
    return true;
}

// Function to get current logged in user
function getCurrentUser() {
    const userJson = localStorage.getItem('currentUser');
    if (!userJson) return null;

    try {
        return JSON.parse(userJson);
    } catch (e) {
        console.error("User data corrupted");
        localStorage.removeItem('currentUser');
        return null;
    }
}

// --- FIX 2: Redirect if already on Login Page ---
function redirectIfLoggedIn() {
    // Agar hum login.html par hain
    if (window.location.pathname.includes('login.html')) {
        const user = localStorage.getItem('currentUser');
        if (user) {
            // User pehle se logged in hai
            const homeTarget = isSubpage ? '../index.html' : 'index.html';
            document.body.innerHTML = `
                <div style="height:100vh; background:#000; display:flex; flex-direction:column; align-items:center; justify-content:center; color:white;">
                    <h2 style="color:#D4AF37;">You are already logged in!</h2>
                    <p>Redirecting to Home...</p>
                    <a href="${homeTarget}" style="color:white; text-decoration:underline;">Click here if not redirected</a>
                </div>
            `;
            setTimeout(() => window.location.href = homeTarget, 1500);
        }
    }
}

function resendOtp() {
    generatedOtp = Math.floor(1000 + Math.random() * 9000);
    showBootstrapAlert(`Resent OTP: ${generatedOtp}`, 'success');
}

/* =========================================
   6. ADVANCED AI CHATBOT LOGIC
   ========================================= */

function initializeChatBot() {
    const chatToggleBtn = document.getElementById('chatToggleBtn');
    const chatWindow = document.getElementById('chatWindow');
    const closeChatBtn = document.getElementById('closeChatBtn');
    const sendChatBtn = document.getElementById('sendChatBtn');
    const userInput = document.getElementById('userChatInput');
    const chatBody = document.getElementById('chatMessages');

    if (!chatToggleBtn) return;

    // STATE MACHINE (To remember context)
    let chatState = 'idle'; // idle, asking_name, asking_phone
    let userDetails = { name: '', phone: '' };

    // 1. Toggle Chat
    chatToggleBtn.addEventListener('click', () => {
        if (chatWindow) chatWindow.classList.toggle('d-none');
        // If empty, show welcome buttons
        if (chatBody.children.length <= 1) showWelcomeOptions();
    });

    if (closeChatBtn) {
        closeChatBtn.addEventListener('click', () => {
            if (chatWindow) chatWindow.classList.add('d-none');
        });
    }

    // 2. Send Message
    function sendMessage(text = null) {
        const msgText = text || userInput.value.trim();
        if (msgText === "") return;

        addMessage(msgText, 'user-msg');
        if (userInput) userInput.value = '';

        // Show Typing Indicator
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerText = 'Fusion AI is typing...';
        chatBody.appendChild(typingDiv);
        chatBody.scrollTop = chatBody.scrollHeight;

        // Process Logic (Delay for realism)
        setTimeout(() => {
            // Remove Typing
            const typingEl = document.getElementById('typingIndicator');
            if (typingEl) typingEl.remove();

            handleAdvancedResponse(msgText);
        }, 1000);
    }

    // 3. MAIN BRAIN (Advanced Logic)
    function handleAdvancedResponse(input) {
        const lowerInput = input.toLowerCase();

        // --- SCENARIO A: Lead Generation (Contact Info) ---
        if (chatState === 'asking_name') {
            userDetails.name = input;
            chatState = 'asking_phone';
            botReply(`Nice to meet you, ${input}! Could you share your <b>Phone Number</b> so our team can contact you?`);
            return;
        }

        if (chatState === 'asking_phone') {
            if (input.match(/^\d{10}$/)) { // Simple validation for 10 digits
                userDetails.phone = input;
                chatState = 'idle';
                // Save to LocalStorage (Or send to server)
                const leads = JSON.parse(localStorage.getItem('carLeads') || '[]');
                leads.push(userDetails);
                localStorage.setItem('carLeads', JSON.stringify(leads));

                botReply("Thanks! Your details are saved. Our expert will call you shortly. ✅");
            } else {
                botReply("Please enter a valid 10-digit mobile number.");
            }
            return;
        }

        // --- SCENARIO B: Car Comparison ---
        if (lowerInput.includes('compare')) {
            // Try to find two car names in the sentence
            const foundCars = cars.filter(c => lowerInput.includes(c.brand.toLowerCase()) || lowerInput.includes(c.model.toLowerCase()));

            if (foundCars.length >= 2) {
                const c1 = foundCars[0];
                const c2 = foundCars[1];
                let tableHtml = `
                    <b>Comparison:</b><br>
                    <table class="chat-table">
                        <tr><th>Feature</th><th>${c1.model}</th><th>${c2.model}</th></tr>
                        <tr><td>Price</td><td>₹${(c1.price / 100000).toFixed(2)}L</td><td>₹${(c2.price / 100000).toFixed(2)}L</td></tr>
                        <tr><td>Fuel</td><td>${c1.fuel}</td><td>${c2.fuel}</td></tr>
                        <tr><td>Mileage</td><td>${c1.mileage}</td><td>${c2.mileage}</td></tr>
                    </table>
                `;
                botReply(tableHtml);
            } else {
                botReply("To compare, please mention two car names. Example: <b>'Compare Swift and Creta'</b>");
            }
            return;
        }

        // --- SCENARIO C: Reviews & News ---
        if (lowerInput.includes('news') || lowerInput.includes('review')) {
            botReply(`
                <b>Latest Auto News 📰</b><br>
                • <i>Tata Nexon EV</i> gets 5-star safety rating!<br>
                • <i>New Swift 2026</i> launched with hybrid engine.<br>
                • <a href='${pagePrefix}reviews_news.html'>Read full reviews here</a>.
            `);
            return;
        }

        // --- SCENARIO D: Popular Brands ---
        if (lowerInput.includes('brand') || lowerInput.includes('popular')) {
            botReply("Our Top Selling Brands are:<br>⭐ <b>Maruti Suzuki</b> (Value)<br>⭐ <b>Tata</b> (Safety)<br>⭐ <b>Hyundai</b> (Features)<br>Select a brand from the filter menu to see cars!");
            return;
        }

        // --- SCENARIO E: Contact/Call ---
        if (lowerInput.includes('call') || lowerInput.includes('contact') || lowerInput.includes('book')) {
            chatState = 'asking_name';
            botReply("Sure! I can arrange a callback. What is your <b>Name</b>?");
            return;
        }

        // --- SCENARIO F: General Search (Existing Logic) ---
        if (lowerInput.includes('bmw')) { botReply(`BMWs? Excellent choice. <a href='${pagePrefix}new_cars.html?search=bmw'>View BMW Inventory</a>`); return; }
        if (lowerInput.includes('tata')) { botReply(`Tata cars are known for safety. <a href='${pagePrefix}new_cars.html?search=tata'>View Tata Cars</a>`); return; }
        if (lowerInput.includes('electric') || lowerInput.includes('ev')) { botReply(`Future ready! <a href='${pagePrefix}electric-cars.html'>See Electric Cars</a>`); return; }

        // Default
        botReply("I didn't quite catch that. You can ask me to <b>'Compare Swift and Verna'</b>, show <b>'News'</b>, or <b>'Contact'</b> support.");
        showWelcomeOptions();
    }

    // 4. Helper Functions
    function botReply(htmlText) {
        addMessage(htmlText, 'bot-msg');
    }

    function addMessage(text, className) {
        const div = document.createElement('div');
        div.className = className;
        div.innerHTML = text;
        chatBody.appendChild(div);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function showWelcomeOptions() {
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'chat-options';
        optionsDiv.innerHTML = `
            <button class="chat-btn-option" onclick="triggerChat('Compare Cars')">Compare Cars</button>
            <button class="chat-btn-option" onclick="triggerChat('Latest News')">Latest News</button>
            <button class="chat-btn-option" onclick="triggerChat('Contact Me')">Contact Me</button>
            <button class="chat-btn-option" onclick="triggerChat('Electric Cars')">EVs</button>
        `;
        chatBody.appendChild(optionsDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Expose function to global scope so Buttons can call it
    window.triggerChat = function (text) {
        sendMessage(text);
    }

    // Listeners
    if (sendChatBtn) sendChatBtn.addEventListener('click', () => sendMessage());
    if (userInput) userInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });
}

// --- NEW FUNCTION: Populate Tabs (THIS WAS MISSING/WRONG) ---
function displayHomeTabs() {
    const latestGrid = document.getElementById('latestCarsGrid');
    const bestSellerGrid = document.getElementById('bestSellersGrid');

    if (!latestGrid || !bestSellerGrid) return;

    // Logic: 
    // Latest = Last 4 cars added to the array
    // Best Sellers = First 4 cars in the array (ya specific IDs)

    const latestCars = cars.slice(-4).reverse(); // Last 4 items, reversed so newest is first
    const bestSellerCars = cars.slice(0, 4); // First 4 items

    // Helper function to generate HTML
    const generateCarHTML = (car) => `
        <div class="col-md-3">
            <div class="feature-card h-100 shadow-sm">
                <div style="height: 200px; overflow: hidden; position: relative;">
                    <img src="${car.image}" class="img-fluid w-100 h-100" style="object-fit: cover;" alt="${car.brand}">
                    <span class="badge bg-black text-gold position-absolute top-0 end-0 m-2">${car.status}</span>
                </div>
                <div class="p-3">
                    <h5 class="fw-bold mb-1">${car.brand} ${car.model}</h5>
                    <p class="text-secondary small mb-2">${car.fuel} | ${car.transmission}</p>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <span class="fw-bold text-dark">₹${(car.price / 100000).toFixed(2)} Lakh</span>
                        <a href="${pagePrefix}car_details.html?id=${car.id}" class="btn btn-sm btn-outline-dark rounded-0">Details</a>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Fill Grids
    if (latestGrid) latestGrid.innerHTML = latestCars.map(generateCarHTML).join('');
    if (bestSellerGrid) bestSellerGrid.innerHTML = bestSellerCars.map(generateCarHTML).join('');
}

// --- Home Filter Form Logic ---
function initializeHomeSearch() {
    const form = document.getElementById('homeSearchForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const brand = document.getElementById('homeBrandSelect').value;
            const fuel = document.getElementById('homeFuelSelect').value;
            const budget = document.getElementById('homeBudgetSelect').value;

            // Build URL with all 3 parameters properly
            const params = new URLSearchParams();
            if (brand) params.append('brand', brand);
            if (fuel) params.append('fuel', fuel);
            if (budget) params.append('price', budget); // Hum yahan 'price' use kar rahe hain

            window.location.href = `${pagePrefix}new_cars.html?${params.toString()}`;
        });
    }
}

function toggleFavorite(carId) {
    // 1. Check Login
    const userJson = localStorage.getItem('currentUser');
    if (!userJson) {
        showBootstrapAlert("Please Login to add cars to your Favorites! ❤️", 'warning');
        setTimeout(() => {
            window.location.href = `${pagePrefix}login.html`;
        }, 1500);
        return;
    }

    let user = JSON.parse(userJson);

    // 2. Initialize array if not exists
    if (!user.favorites) user.favorites = [];

    // 3. Add or Remove Logic
    const index = user.favorites.indexOf(carId);
    if (index === -1) {
        user.favorites.push(carId); // Add
        showBootstrapAlert("Added to favorites! ❤️", 'success');
    } else {
        user.favorites.splice(index, 1); // Remove
        showBootstrapAlert("Removed from favorites", 'info');
    }

    // 4. Save Update
    localStorage.setItem('currentUser', JSON.stringify(user));

    // 5. Update UI (Visual Heart Change)
    updateHeartIcons();
}

// Function to update all heart icons on the page based on current status
function updateHeartIcons() {
    const userJson = localStorage.getItem('currentUser');
    if (!userJson) return;

    const user = JSON.parse(userJson);
    const favs = user.favorites || [];

    // Find all heart buttons
    document.querySelectorAll('.fav-btn').forEach(btn => {
        const carId = parseInt(btn.getAttribute('data-id'));
        const icon = btn.querySelector('i');

        if (favs.includes(carId)) {
            icon.classList.remove('bi-heart');
            icon.classList.add('bi-heart-fill', 'text-danger'); // Red Heart
        } else {
            icon.classList.remove('bi-heart-fill', 'text-danger');
            icon.classList.add('bi-heart'); // Empty Heart
        }
    });
}

/* =========================================
   7. FAVORITES SYSTEM (Wishlist Logic)
   ========================================= */

// Favorites are now handled by toggleFavorite() function above

/* =========================================
   8. GLOBAL LOCATION SYSTEM (Auto-Inject)
   ========================================= */

// 1. The Modal HTML (Stored in JS) - GPS Feature Removed
const locationModalHTML = `
<div class="modal fade" id="locationModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-0 border-0">
            <div class="modal-header bg-white border-bottom-0">
                <h5 class="modal-title fw-bold">Select Your City</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body px-4 pb-4">
                <div class="input-group mb-4">
                    <span class="input-group-text bg-light border-end-0"><i class="bi bi-search text-gold"></i></span>
                    <input type="text" id="citySearchInput" class="form-control bg-light border-start-0" placeholder="Search City..." onkeyup="filterCities()">
                </div>

                <p class="small text-secondary fw-bold text-uppercase mb-3">Popular Cities</p>
                <div class="row g-2 text-center" id="citiesGrid">
                    ${['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Pune', 'Chennai', 'Kolkata', 'Jaipur', 'Surat', 'Lucknow', 'Chandigarh'].map(city => `
                        <div class="col-4 city-item" data-city="${city.toLowerCase()}">
                            <div class="p-2 border rounded city-option" onclick="selectCity('${city}')" style="cursor:pointer; transition:0.2s;">
                                <small class="fw-bold">${city}</small>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    </div>
</div>
<style>
    .city-option:hover { 
        border-color: #D4AF37 !important; 
        background: #fffbf0; 
        color: #D4AF37; 
        transform: scale(1.05);
    }
    .hover-bg-light:hover { background-color: #f8f9fa; }
</style>`;

// 2. Global Chatbot HTML (Auto-Inject on all pages)
const chatbotHTML = `
<button id="chatToggleBtn" class="chat-float-btn">
    <i class="bi bi-robot"></i>
</button>

<div id="chatWindow" class="chat-window d-none">
    <div class="chat-header">
        <div class="d-flex align-items-center">
            <img src="${rootPrefix}assets/images/car_fusion_logo.png" alt="Bot" width="30" class="me-2">
            <div>
                <h6 class="mb-0 fw-bold text-gold">Fusion AI</h6>
                <span class="small text-white-50">Online</span>
            </div>
        </div>
        <button id="closeChatBtn" class="btn-close btn-close-white"></button>
    </div>

    <div id="chatMessages" class="chat-body">
        <div class="bot-msg">
            Hello! Welcome to Car Fusion. 🚗<br>
            I can help you find your dream car. Try asking:
            <br><br>
            • "Show me BMWs"
            <br>
            • "Electric cars"
            <br>
            • "Budget under 10 Lakh"
        </div>
    </div>

    <div class="chat-footer">
        <div class="input-group">
            <input type="text" id="userChatInput" class="form-control border-0" placeholder="Type a message...">
            <button id="sendChatBtn" class="btn btn-gold">
                <i class="bi bi-send-fill"></i>
            </button>
        </div>
    </div>
</div>`;

// 3. Initialize Logic on Page Load
document.addEventListener('DOMContentLoaded', () => {

    // A. Inject Location Modal if not present
    if (!document.getElementById('locationModal')) {
        document.body.insertAdjacentHTML('beforeend', locationModalHTML);
    }

    // B. Inject Chatbot if not present
    if (!document.getElementById('chatToggleBtn')) {
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
        // Initialize chatbot after injection
        setTimeout(() => {
            initializeChatBot();
        }, 100);
    }

    // C. Load Saved City
    const savedCity = localStorage.getItem('userLocation') || 'Ahmedabad';
    updateAllLocationLabels(savedCity);

    // D. Make Header Icons Clickable (Global Fix)
    const locIcons = document.querySelectorAll('.bi-geo-alt-fill, .bi-geo-alt');
    locIcons.forEach(icon => {
        const parent = icon.closest('div, a'); // Icon ka container
        if (parent && !parent.hasAttribute('data-bs-toggle')) {
            parent.style.cursor = 'pointer';
            parent.setAttribute('data-bs-toggle', 'modal');
            parent.setAttribute('data-bs-target', '#locationModal');
            // Remove any onclick attributes
            parent.removeAttribute('onclick');
        }
    });
});

// City search filter function
function filterCities() {
    const searchInput = document.getElementById('citySearchInput');
    if (!searchInput) return;

    const searchTerm = searchInput.value.toLowerCase();
    const cityItems = document.querySelectorAll('.city-item');

    cityItems.forEach(item => {
        const cityName = item.getAttribute('data-city');
        if (cityName.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// 3. Helper Functions
// ==========================================
// UNIFIED LOCATION SYSTEM
// ==========================================

function selectCity(city) {
    // Use single key for consistency
    localStorage.setItem('userLocation', city);
    updateAllLocationLabels(city);

    // Close Modal
    const modalEl = document.getElementById('locationModal');
    if (modalEl) {
        const modal = bootstrap.Modal.getInstance(modalEl);
        if (modal) modal.hide();
    }

    // Show success message
    showBootstrapAlert(`Location changed to ${city}`, 'success');

    // Dispatch custom event for car_details.html to listen to
    const event = new CustomEvent('locationChanged', { detail: { location: city } });
    document.dispatchEvent(event);

    // Update city selector on car_details page if it exists
    const citySelector = document.getElementById('citySelector');
    if (citySelector && typeof updateCityPrice === 'function') {
        citySelector.value = city;
        updateCityPrice();
    }
}
function updateAllLocationLabels(city) {
    // Update all location displays across the page
    const selectors = [
        '.location-display',
        '[data-location-display]',
        '#headerCity',
        '#userCityDisplay',
        '#priceCity'
    ];

    selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            if (el) el.textContent = city;
        });
    });

    console.log('Location updated to:', city);
}

function initializeLocation() {
    const savedLocation = localStorage.getItem('userLocation') || 'Ahmedabad';

    console.log('Initializing location:', savedLocation);

    // Update all location displays on the page
    updateAllLocationLabels(savedLocation);
}

// Function to open location modal (for manual triggers)
function openLocationModal() {
    const modalEl = document.getElementById('locationModal');
    if (modalEl) {
        const modal = new bootstrap.Modal(modalEl);
        modal.show();
    }
}

function initializeLoginDisplay() {
    const userJson = localStorage.getItem('currentUser');
    const loginLinks = document.querySelectorAll('#loginLink, [data-login-link]');

    if (userJson) {
        try {
            const user = JSON.parse(userJson);
            loginLinks.forEach(link => {
                link.href = `${pagePrefix}profile.html`;
                const textSpan = link.querySelector('span');
                if (textSpan) {
                    textSpan.textContent = user.name || 'Profile';
                }
            });
        } catch (e) {
            console.error('Error parsing user data');
        }
    }
}

// ==========================================
// FAVORITE FUNCTIONALITY WITH LOGIN CHECK
// ==========================================

function toggleFavorite(carId, element) {
    const userJson = localStorage.getItem('currentUser');

    // Check if user is logged in
    if (!userJson) {
        showBootstrapAlert('Please login to add favorites!', 'warning');
        setTimeout(() => {
            window.location.href = `${pagePrefix}login.html?redirect=` + encodeURIComponent(window.location.href);
        }, 1500);
        return;
    }

    try {
        const user = JSON.parse(userJson);

        // Initialize favorites array if it doesn't exist
        if (!user.favorites) {
            user.favorites = [];
        }

        const car = cars.find(c => c.id === carId);
        if (!car) return;

        const favoriteIndex = user.favorites.findIndex(f => f.id === carId);

        if (favoriteIndex > -1) {
            // Remove from favorites
            user.favorites.splice(favoriteIndex, 1);
            if (element) {
                element.classList.remove('bi-heart-fill');
                element.classList.add('bi-heart');
                element.style.color = '';
            }
            showBootstrapAlert('Removed from favorites!', 'info');
        } else {
            // Add to favorites
            user.favorites.push({
                id: car.id,
                brand: car.brand,
                model: car.model,
                image: car.image,
                price: car.price,
                fuel: car.fuel,
                transmission: car.transmission,
                mileage: car.mileage,
                addedDate: new Date().toISOString()
            });
            if (element) {
                element.classList.remove('bi-heart');
                element.classList.add('bi-heart-fill');
                element.style.color = '#D4AF37';
            }
            showBootstrapAlert('Added to favorites!', 'success');
        }

        // Save updated user data
        localStorage.setItem('currentUser', JSON.stringify(user));

    } catch (e) {
        console.error('Error toggling favorite:', e);
        showBootstrapAlert('Error updating favorites. Please try again.', 'danger');
    }
}

// Check if car is in favorites
function isCarFavorite(carId) {
    const userJson = localStorage.getItem('currentUser');
    if (!userJson) return false;

    try {
        const user = JSON.parse(userJson);
        return user.favorites && user.favorites.some(f => f.id === carId);
    } catch (e) {
        return false;
    }
}


// Helper function to create car card element
function createCarCard(car) {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4 mb-4';

    const isFavorite = isCarFavorite(car.id);
    const heartIcon = isFavorite ? 'bi-heart-fill text-danger' : 'bi-heart';

    col.innerHTML = `
        <div class="card h-100 border-0 shadow-sm">
            <div class="position-relative">
                <img src="${car.image}" class="card-img-top" alt="${car.brand} ${car.model}" style="height: 250px; object-fit: cover;">
                <button class="btn btn-sm btn-light position-absolute top-0 end-0 m-2 fav-btn" 
                        data-id="${car.id}" 
                        onclick="toggleFavorite(${car.id}, this)"
                        style="border-radius: 50%; width: 40px; height: 40px;">
                    <i class="bi ${heartIcon}"></i>
                </button>
            </div>
            <div class="card-body">
                <h5 class="card-title">${car.brand} ${car.model}</h5>
                <p class="text-muted mb-2">${car.status || 'Premium'}</p>
                <h6 class="text-gold mb-3">₹${(car.price / 100000).toFixed(2)} Lakh</h6>
                <div class="d-flex justify-content-between text-muted small mb-3">
                    <span><i class="bi bi-fuel-pump"></i> ${car.fuel}</span>
                    <span><i class="bi bi-speedometer2"></i> ${car.mileage}</span>
                </div>
                <a href="${pagePrefix}car_details.html?id=${car.id}" class="btn btn-outline-dark w-100">View Details</a>
            </div>
        </div>
    `;

    return col;
}
