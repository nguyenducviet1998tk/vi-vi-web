var swiper = new Swiper('.slide-banner', {
    autoplay: {
        delay: 5000,
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});
var swiper = new Swiper('.hotdeal', {
    slidesPerView: 5,
    spaceBetween: 10,
    slidesPerGroup: 5,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});