// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Testimonial Slider
    const testimonialSlider = document.querySelector('.testimonial-slider');

    if (testimonialSlider) {
        const testimonials = testimonialSlider.querySelectorAll('.testimonial');
        const totalTestimonials = testimonials.length;
        let currentIndex = 0;

        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                if (i === index) {
                    testimonial.style.display = 'block';
                } else {
                    testimonial.style.display = 'none';
                }
            });
        }

        function nextTestimonial() {
            currentIndex = (currentIndex + 1) % totalTestimonials;
            showTestimonial(currentIndex);
        }

        function prevTestimonial() {
            currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
            showTestimonial(currentIndex);
        }

        showTestimonial(currentIndex);

        testimonialSlider.addEventListener('click', function(event) {
            if (event.target.classList.contains('next')) {
                nextTestimonial();
            } else if (event.target.classList.contains('prev')) {
                prevTestimonial();
            }
        });
    }
});
