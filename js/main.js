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


function showProduct(id = 'productHotDeal', root = 'hotdeal', limit = 20) {
    let arr = ''
    for (let i = 0; i < limit; i++) {
        let idProduct = Math.floor((Math.random() * (data.length - 1)) + 0)
        console.log(idProduct)
        temp = `
        <div class="swiper-slide">
        <a href="./pages/details.html#` + data[idProduct].id + `" style="text-decoration: none;color:black">
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
        </div></div></a>`
        arr += temp
    }
    let swiperWrapper = document.createElement('div')
    swiperWrapper.classList.add("swiper-wrapper")
    swiperWrapper.innerHTML = arr
    document.getElementById(id).appendChild(swiperWrapper);
    var swiper = new Swiper('.' + root, {
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

function showStartRate(params, link = './') {
    var rating = "";
    for (let j = 1; j <= 5; j++) {
        let eli = document.createElement('img');
        eli.width = "14"
        eli.height = "14"
        if (Math.ceil(params) >= j) {
            if (params > j) {
                eli.src = link + "images/icon/start.svg"
                rating += eli.outerHTML;
            } else {
                eli.src = link + "images/icon/start-half.svg"
                rating += eli.outerHTML;
            }
        } else {
            eli.src = link + "images/icon/start-null.svg"
            rating += eli.outerHTML;
        }
    }
    return rating
}

function changerColorBorder(params) {
    if (params) {
        document.getElementById('iconSearch').style = "border-color: #ff2b70;border-bottom-right-radius:0!important;border-top-right-radius:0!important;background: rgb(247, 249, 250)"
    } else {
        document.getElementById('iconSearch').style = "border-color: #ced4da;border-bottom-right-radius:0!important;border-top-right-radius:0!important;background: rgb(247, 249, 250)"
    }
}

function getData(params) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == params) {
            return data[i];
        }

    }
}

function detail(params) {
    let hash = location.hash;
    let id = hash.split("#");
    let dataa = getData(id[1])
    console.log(data)
    document.getElementById('detail').innerHTML = ` <div class="top-overview row">
    <div class="col-md-8">
      <img src="../images/` + dataa.image + `" width="100%" height="495px" alt="" />
    </div>
    <div class="col-md-4">
      <h2>` + dataa.name + `</h2>
      <div class="row">
        <div class="col-4"><h2>` + numberWithDots(dataa.price) + `</h2></div>
        <div class="col-4">
          <p
            class="text-center"
            style="margin: 8px; text-decoration: line-through"
          >
          ` + numberWithDots(dataa.original) + `
          </p>
        </div>
      </div>
      <div class="row">
        <p class="col-6">` + showStartRate(dataa.rate, '../') + ` ` + dataa.comment + ` đánh giá</p>
        <p class="col-1">/</p>
        <p class="col-5">
          <i style="color:#ff3333" class="fas fa-heart"></i> ` + dataa.like + `  lovers
        </p>
      </div>
      <div
        class="pay-ship"
        style="border-top:1px solid rgb(229, 231, 234); border-left:1px solid rgb(229, 231, 234); border-bottom: 1px solid rgb(229, 231, 234);border-right:1px solid rgb(229, 231, 234);border-radius: 3px"
      >
        <div style="border-bottom: 1px solid rgb(229, 231, 234);">
          <div class="col-1" style="float:left; padding: 10px">$</div>
          <div class="col-11" style="font-size:14px;padding:5px;">
            Nhận ngay
            <span style="font-weight:bold">350 Lixicoins </span> khi mua sản
            phẩm này
          </div>
        </div>

        <div style="border-bottom: 1px solid rgb(229, 231, 234);">
          <div class="col-1" style="float:left; padding: 15px 20px 20px 8px">
          <span class="ti-truck"></span>
          </div>
          <div class="col-11" style="padding:5px;font-size:15px">
            <span style="font-weight:bold">Miễn phí vận chuyển</span> đơn hàng từ 800.000 đ
          </div>
          <div class="clearfix"></div>
        </div>

        <div style="border-bottom: 1px solid rgb(229, 231, 234);">
          <div class="col-1" style="float:left;padding: 0px 10px 0px 5px">
          <span class="ti-time"></span>
          </div>
          <div class="col-11" style="padding:5px; font-size:14px">
            <span style="font-weight:bold">Xem thời gian và phí vận chuyển </span>
          </div>
          <div class="clearfix"></div>
        </div>
        
      </div>
      <div class="row mt-4">
            <div class="col-6 pr-1" id="buttonAddProduct">
                 `+checkProduct(dataa.id)+`
                
            </div>
            <div class="col-6 pl-1">
                <button type="button" class="btn btn-light btn-block ">Yêu thích</button>
            </div>
        </div>
    </div>
  </div>`
}
function checkProduct(params = 1){
    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem('cart') == null) {
            localStorage.setItem('cart', JSON.stringify([]));
        }
        let temp = JSON.parse(localStorage.getItem('cart'));
        for (let i = 0; i < temp.length; i++) {
            if (temp[i]==params) {
                return '<button type="button" class="btn btn-danger btn-block" disabled >Đã thêm</button>'
            }            
        }
        let str = '<button type="button" class="btn btn-danger btn-block" onclick="addProduct('+params+')">Thêm vào giỏ</button>'
        return str;
    } 
}
function addProduct(params = 1) {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem('cart') == null) {
            localStorage.setItem('cart', JSON.stringify([]));
        }
        let temp = JSON.parse(localStorage.getItem('cart'));
        temp.push(params);
        localStorage.setItem('cart', JSON.stringify(temp));
        location.reload();
    } 
}
function deleteLocal() {
    if (typeof (Storage) !== "undefined") {
        console.log(localStorage.getItem('cart'))
        if (JSON.parse( localStorage.getItem('cart')).length>0) {
            localStorage.setItem('cart', JSON.stringify([]));
            alert('Cám ơn bạn đã mua hàng!')
            location.reload();
            return;
        }
        alert('Bạn vui lòng thêm sản phẩm!')
        return;
    } 
}

function showCart(link='./') {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem('cart') == null) {
            localStorage.setItem('cart', JSON.stringify([]));
        }
        let temp = JSON.parse(localStorage.getItem('cart'));
        for (let i = 0; i < temp.length; i++) {
            let divc = document.createElement('div')
            divc.classList.add("media")
            let dataa = getData(temp[i])
            divc.innerHTML = `<img src="`+link+`images/`+dataa.image+`" class="mr-3" alt="..." width="74px" height="74px">
            <div class="media-body">
              <a href="./pages/details.html#`+dataa.id+`" style="text-decoration: none">
                <h5 class="mt-0">`+dataa.name+`</h5>
              </a>
              `+numberWithDots(dataa.price) +` <span style="font-size: 13px;text-decoration: line-through">`+numberWithDots(dataa.original)+`</span>
            </div>`
            document.getElementById('cart-popup').appendChild(divc);
        }
    } 
 
}
function updateCart() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem('cart') == null) {
            localStorage.setItem('cart', JSON.stringify([]));
        }
        let temp = JSON.parse(localStorage.getItem('cart'));
        document.getElementById('cartNumber').innerHTML=  temp.length
    } 
}