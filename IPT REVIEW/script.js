document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('.swiper-slide').forEach(function (slide) {

        slide.querySelectorAll('.custom-star-rating').forEach(function (starRating) {
            starRating.addEventListener('click', function (event) {
                const clickedStar = event.target;
                if (clickedStar.classList.contains('fa-star')) {
                    const rating = parseInt(clickedStar.getAttribute('data-rating'));
                    const stars = starRating.querySelectorAll('.fa-star');
                    stars.forEach((star, index) => {
                        if (index < rating) {
                            star.classList.add('checked');
                        } else {
                            star.classList.remove('checked');
                        }
                    });
                }
            });
        });
    });
});
