document.addEventListener('DOMContentLoaded', function() {
    const allSliders = document.querySelectorAll('.slider-container');
    
    allSliders.forEach((sliderContainer, index) => {
        const track = sliderContainer.querySelector('.slider-track');
        const slides = track.querySelectorAll('.slider-slide');
        const wrapper = sliderContainer.closest('.slider-fullwidth');
        const prevBtn = wrapper.querySelector('.prev-btn');
        const nextBtn = wrapper.querySelector('.next-btn');
        
        let currentIndex = 0;
        let slidesPerView = 3;
        let totalSlides = slides.length;
        
        function updateSlidesPerView() {
            if (window.innerWidth <= 768) {
                slidesPerView = 1;
            } else if (window.innerWidth <= 992) {
                slidesPerView = 2;
            } else {
                slidesPerView = 3;
            }
            updateSlider();
        }
        
        function updateSlider() {
            const slideWidth = slides[0].offsetWidth;
            const gap = 24;
            const offset = currentIndex * (slideWidth + gap);
            track.style.transform = `translateX(-${offset}px)`;
            
            if (prevBtn) {
                prevBtn.disabled = currentIndex <= 0;
            }
            if (nextBtn) {
                nextBtn.disabled = currentIndex >= totalSlides - slidesPerView;
            }
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateSlider();
                }
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (currentIndex < totalSlides - slidesPerView) {
                    currentIndex++;
                    updateSlider();
                }
            });
        }
        
        window.addEventListener('resize', () => updateSlidesPerView());
        updateSlidesPerView();
    });
});