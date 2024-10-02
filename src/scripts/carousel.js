document.addEventListener('DOMContentLoaded', function() {
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
})