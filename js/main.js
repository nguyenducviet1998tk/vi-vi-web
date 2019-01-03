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

const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
const numberWithDots = x => {
    if (x == null) {
        return null;
    } else {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
};

showProductHotDeal()

function showProductHotDeal(limit = 20) {
    let arr = ''
    for (let i = 0; i < limit; i++) {
        let idProduct = Math.floor((Math.random() * (data.length - 1)) + 0)
        console.log(idProduct)
        temp = `<div class="swiper-slide">
        <img src="./images/` + data[idProduct].image + `" alt="" width="100%">
        <div class="row">
          <div class="col-10 text-left">
            <span style="font-size: 14px;white-space: pre-wrap;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;height:41px">` + data[idProduct].name + `</span>
            <div class="rate mt-1">
            ` + showStartRate(data[idProduct].rate) + `
                
              <span class="ml-1" style="font-size: 14px;color:rgb(151, 153, 154);">(` + data[idProduct].comment + `)</span>
            </div>
            <div class="price mt-1">
              <span style="font-size: 14px; line-height: 22px; color: rgb(0, 0, 0); font-family: avenir-next-medium, arial; width: 100%; text-align: left;">` + numberWithDots(data[idProduct].price) + `</span>
              <span style="font-size: 13px; color: rgb(77, 78, 79); text-decoration: line-through; margin-left: 5px;">` + numberWithDots(data[idProduct].original) + `</span>
            </div>
          </div>
          <div class="col-2 pl-0">
            <svg viewBox="0 0 100 90" data-radium="true" style="width: 16px; height: 16px;">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-463.000000, -520.000000)" fill="#000">
                  <path d="M562.271669,543.820982 C559.423998,529.441771 549.241416,520.173244 536.12487,520.173244 C528.789959,520.173244 520.850997,523.205005 513.084621,528.92204 C505.231952,523.031761 497.29299,520 489.871786,520 C476.75524,520 466.486365,529.355149 463.724987,543.907603 C459.58292,565.47642 472.872052,594.148219 511.790225,609.740135 C512.22169,609.913378 512.653156,610 513.084621,610 C513.516086,610 513.947552,609.913378 514.379017,609.740135 C553.210897,593.801732 566.413736,565.216554 562.271669,543.820982 L562.271669,543.820982 Z M513.084621,602.637151 C478.912567,588.431184 467.090416,563.657363 470.628432,545.20693 C472.699466,534.205967 480.293256,527.016362 489.871786,527.016362 C496.343766,527.016362 503.592384,530.134745 510.841001,536.111646 C512.135397,537.151107 513.947552,537.151107 515.241948,536.111646 C522.490565,530.307988 529.65289,527.276227 536.12487,527.276227 C545.7034,527.276227 553.210897,534.292589 555.368223,545.20693 C558.906239,563.484119 547.170382,588.171319 513.084621,602.637151 L513.084621,602.637151 Z"></path>
                </g>
              </g>
            </svg>
          </div>
        </div></div>`
        arr += temp
    }
    let swiperWrapper = document.createElement('div')
    swiperWrapper.classList.add("swiper-wrapper")
    swiperWrapper.innerHTML = arr
    document.getElementById('productHotDeal').appendChild(swiperWrapper);
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
}

function showStartRate(params) {
    var rating = "";
    for (let j = 1; j <= 5; j++) {
        let eli = document.createElement('img');
        eli.width = "14"
        eli.height = "14"
        if (Math.ceil(params) >= j) {
            if (params > j) {
                eli.src = "./images/icon/start.svg"
                rating += eli.outerHTML;
            } else {
                eli.src = "./images/icon/start-half.svg"
                rating += eli.outerHTML;
            }
        } else {
            eli.src = "./images/icon/start-null.svg"
            rating += eli.outerHTML;
        }
    }
    return rating
}