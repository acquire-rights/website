document.addEventListener('DOMContentLoaded', function() {
    // header sticky
    const header = document.querySelector('.sticky-header');
  
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
        header.classList.add('scrolled');
        } else {
        header.classList.remove('scrolled');
        }
    });

    // progress bar
    const raisedAmount = parseFloat(document.getElementById('raisedAmount').textContent.replace('$', '').replace(',', ''));
    const goalAmount = parseFloat(document.getElementById('goalAmount').textContent.replace('$', '').replace(',', ''));
    const progressBar = document.getElementById('donationProgress');

    const percentage = (raisedAmount / goalAmount) * 100;
    progressBar.value = percentage;
    progressBar.textContent = `${percentage.toFixed(2)}%`;

    // Donor list
    const donorsList = document.querySelector('.donors-list');
    const donors = [
        { name: 'Ahmet Hamdi', amount: 2500.00 },
        { name: 'Ahmet Hamdi', amount: 2500.00 },
        { name: 'Ahmet Hamdi', amount: 2500.00 },
        { name: 'Ahmet Hamdi', amount: 2500.00 },
        { name: 'Ahmet Hamdi', amount: 2500.00 },
        { name: 'Ahmet Hamdi', amount: 2500.00 }
    ];

    const leftColumn = document.querySelector('.donors-list .left-column');
    const rightColumn = document.querySelector('.donors-list .right-column');

    donors.forEach((donor, index) => {
        const donorElement = document.createElement('p');
        const dots = '-'; // Nokta sayısını ihtiyaca göre ayarlayabilirsiniz
        donorElement.textContent = `${donor.name} ${dots} ${donor.amount.toFixed(2)}$`;
        donorElement.style.display = 'flex';
        donorElement.style.gap = '24px';
        
        const nameSpan = document.createElement('span');
        const amountSpan = document.createElement('span');
        nameSpan.textContent = donor.name;
        amountSpan.textContent = `${donor.amount.toFixed(2)}$`;
        
        donorElement.innerHTML = '';
        donorElement.appendChild(nameSpan);
        donorElement.appendChild(document.createTextNode(dots));
        donorElement.appendChild(amountSpan);
        
        if (index % 2 === 0) {
            leftColumn.appendChild(donorElement);
        } else {
            rightColumn.appendChild(donorElement);
        }
    });

    // Details table
    const data = [
        { text: "Lorem Ipsum is simply dummy text" },
        { text: "Lorem Ipsum is simply dummy text" },
        { text: "Lorem Ipsum is simply dummy text" },
        { text: "Lorem Ipsum is simply dummy text" }
    ];

    const tableBody = document.getElementById('tableBody');

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="row-title">${item.text}</td>
            <td class="icon cross center-align">✗</td>
            <td class="icon check center-align">✓</td>
        `;
        tableBody.appendChild(row);
    });

    // Product grid
    const productGrid = document.querySelector('.product-grid');
    const productImages = [
        'assets/logos/klant-bww.png',
        'assets/logos/klant-conrad.png',
        'assets/logos/klant-harley.png',
        'assets/logos/klant-kpmg.png',
        'assets/logos/klant-louwman.png',
        'assets/logos/klant-rompslomp.png',
        'assets/logos/klant-springcast.png',
        'assets/logos/klant-ww-2.png',
        'assets/logos/decathlon-logo-png-1.png',
        'assets/logos/kadasterdata-logo-png-1.png', 
    ]
    
    for (let i = 0; i < productImages.length; i++) {
        const productElement = document.createElement('img');
        productElement.className = 'product-image';
        productElement.src = productImages[i];
        productGrid.appendChild(productElement);
    }

    // Carousel
    const testimonials = [
        {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        author: "Peter Wilson - CEO at Facebook",
        date: "17.02.2024"
        },
        {
        text: "Another great testimonial about our amazing products and services.",
        author: "Jane Doe - CTO at Google",
        date: "18.02.2024"
        },
        {
        text: "We've been using this product for years and it never disappoints!",
        author: "John Smith - Founder of StartupX",
        date: "19.02.2024"
        }
    ];

    const carouselInner = document.querySelector('.carousel-inner');
    let currentIndex = 0;

    function createTestimonial(testimonial) {
        return `
        <div class="testimonial">
            <p>"${testimonial.text}"</p>
            <p class="author">${testimonial.author}</p>
            <p class="date">${testimonial.date}</p>
        </div>
        `;
    }

    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Populate carousel with testimonials
    testimonials.forEach(testimonial => {
        carouselInner.innerHTML += createTestimonial(testimonial);
    });

    // Event listeners for next and previous buttons
    document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateCarousel();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateCarousel();
    });
});

function openHamburgerMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
