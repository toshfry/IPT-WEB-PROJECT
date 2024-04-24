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






window.addEventListener('scroll', function() {
    var header1 = document.querySelector('.header-1');
    var header2 = document.querySelector('.header-2');
    var headerHeight = header1.offsetHeight;
    if (window.pageYOffset > headerHeight) {
        header2.classList.add('active');
    } else {
        header2.classList.remove('active');
    }
});

