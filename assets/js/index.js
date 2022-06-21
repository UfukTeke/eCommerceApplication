const apikey = '30bf3f5c'
let cartLocalArray = JSON.parse(sessionStorage.getItem('cartArray')) || [];
var total = 0;
$(document).ready(function(){
    $('.dynamic-showcase').each(function(i, item) {
        const movieName = $(item).attr('data-load');
        loadMovies(movieName);
    });
    cartQtyControl();
    if (sessionStorage.getItem('cartArray') != null) {
        loadCart();
    }
    loadSwiper(1, false, false, true, true, true);
    loadSwiper(2, 3, 30, true, false, false);
    loadSwiper(3, 3, 30, true, false, false);
    loadSwiper(4, 4, 30, true, false, false);
    loadSwiper(5, 4, 30, true, false, false);
    loadSwiper(6, 4, 30, true, false, false);
    loadSwiper(7, 4, 30, true, false, false);
});
$(document).on('click', '.h-search', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).addClass('active');
    $('.search-all-wrap').addClass('active');
});
$(document).on('click', '.search-close', function(e) {
    $('.h-search').removeClass('active');
    $('.search-all-wrap').removeClass('active');
});
$(document).on('click', '.h-cart', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.cart-wrapper').addClass('active');
});
$(document).on('click', '.cart-close', function(e) {
    $('.cart-wrapper').removeClass('active');
});
function loadMovies(movie) {
    const URL = `https://omdbapi.com/?s=${movie}&page=1&apikey=${apikey}`;
    fetch(URL, {
    method: 'GET',
    }).then(response => response.json())
    .then(data => {
    if(data.Response == "True") displayMovieList(data.Search, movie);
    })
}
function loadSearchMovies(movie) {
    const URL = `https://omdbapi.com/?s=${movie}&page=1&apikey=${apikey}`;
    fetch(URL, {
        method: 'GET',
    }).then(response => response.json())
        .then(data => {
    if(data.Response == "True") displaySearchList(data.Search);
    })
}
function displayMovieList(movies, wrap){
    // searchList.innerHTML = "";
    const loadWrap = $('[data-load="' + wrap + '"]');
    for(let idx = 0; idx < movies.length; idx++){
        let movieListItem = document.createElement('div');
        movieListItem.className = "swiper-slide";
        movieListItem.dataset.id = movies[idx].imdbID;
        if(movies[idx].Poster != "N/A")
            moviePoster = movies[idx].Poster;

        movieListItem.innerHTML = `
            <div class="product-item position-relative border">
            <div class="position-relative">
                <div class="position-absolute product-symbol left">
                    <span class="new-badge bg-danger text-white px-3 py-1">YENİ</span>
                    <span class="discounted-badge bg-success text-white px-3 py-1">%37</span>
                </div>
                <div class="position-absolute product-symbol right">
                    <a href="#" class="pr-fav">
                        <?xml version="1.0" encoding="iso-8859-1"?>
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 471.701 471.701" style="enable-background:new 0 0 471.701 471.701;" xml:space="preserve">
                        <g>
                            <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
                                c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
                                l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
                                C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
                                s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
                                c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
                                C444.801,187.101,434.001,213.101,414.401,232.701z"/>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        </svg>
                    </a>
                    <span class="skin-badge bg-primary text-white px-2 py-1">${movies[idx].Type}</span>
                </div>
                <a onclick="loadPrDetail('${movies[idx].imdbID}');" class="product-image-wrapper">
                    <figure class="product-image-figure">
                        <img src="${moviePoster}" alt="${movies[idx].Title}" class="img-fluid" />
                    </figure>
                </a>
            </div>
            <div class="product-cart-detail position-relative pt-4 pb-3">
                <a onclick="loadPrDetail('${movies[idx].imdbID}');" class="product-title text-center text-uppercase text-dark mb-4">${movies[idx].Title}</a>
                <div class="product-price d-flex align-items-center justify-content-center mb-3">
                    <span class="price-not-discounted text-delete text-gray">${movies[idx].Year} TL</span>
                    <span class="product-sale font-weight-bold text-dark ml-2">499,90 TL</span>
                </div>
                <div class="product-price-cart text-center text-danger font-weight-bold">Sepette 299,00 TL</div>
            </div>
        </div>
        `;
        $(loadWrap).append(movieListItem);
    }
    // loadMovieDetails();
}
function displaySearchList(movies){
    // searchList.innerHTML = "";
    const loadWrap = $('.search-pr-loader');
    let movieQty = '';
    $(loadWrap).html(' ');
    movies.length > 4 ? movieQty = 4 : movieQty = movies.length;
    for(let idx = 0; idx < movieQty; idx++){
        let movieListItem = document.createElement('div');
        movieListItem.className = "col-6 col-lg-3 product-item product-item-search";
        movieListItem.dataset.id = movies[idx].imdbID;
        if(movies[idx].Poster != "N/A")
            moviePoster = movies[idx].Poster;

        movieListItem.innerHTML = `
            <div class="product-s-border border d-flex flex-column">
                <a onclick="loadPrDetail('${movies[idx].imdbID}');" class="product-image-wrapper">
                    <figure class="product-image-figure">
                    <img src="${moviePoster}" alt="${movies[idx].Title}" class="img-fluid" />
                    </figure>
                </a>
                <div class="position-relative product-search-other d-flex flex-column">
                    <a onclick="loadPrDetail(${movies[idx].imdbID});" class="product-title text-left text-dark mb-1">${movies[idx].Title}</a>
                    <span class="search-not-disc price-not-discounted text-delete text-gray">${movies[idx].Year} TL</span>
                    <span class="search-sale product-sale font-weight-bold text-dark">299,90 TL</span>
                </div>
            </div>
        `;
        $(loadWrap).append(movieListItem);
    }
    // loadMovieDetails();
}
function loadSwiper(e, qty, between, arrow, pagin, each) {
    const container = '[data-swiper="' + e + '"]';
    const slider = new Swiper(container, {
        slidesPerView: qty == false ? 1 : qty,
        spaceBetween: between == false ? 0 : between,
        loop: each == true ? true : false,
        breakpoints: {
            0: {
                slidesPerView: qty == false ? 1 : 1,
                spaceBetween: between == false ? 0 : 20,
            },
            992: {
                slidesPerView: qty == false ? 1 : 2,
                spaceBetween: between == false ? 0 : 20,
            },
            1170: {
                slidesPerView: qty == false ? 1 : qty,
                spaceBetween: between == false ? 0 : between,
            },
        },
        autoplay: {
            delay:  '4000',
        },
        navigation: {
            nextEl: arrow == true ? '.swiper-button-next[data-arrow="' + e + '"]' : '',
            prevEl: arrow == true ? '.swiper-button-prev[data-arrow="' + e + '"]' : '',
        },
        pagination: {
            el: pagin == true ? '.swiper-pagination[data-pag="' + e + '"]' : '',
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
          },        
    });
}
function searchMovies() {
    let searchKey = $('#input-search').val().trim();
    if(searchKey.length > 0){
        $('.search-pr-loader').innerHTML = "";
        $('.search-title').text('Arama Sonuçları');
        loadSearchMovies(searchKey);
    }
}
function loadPrDetail(imdbParam) {
    const addCartService = `http://www.omdbapi.com/?i=${imdbParam}&apikey=${apikey}`;
    fetch(addCartService, {
        method: 'GET',
    }).then(response => response.json())
        .then(data => {
    if(data.Response == "True") {
        cartLocalArray = JSON.parse(sessionStorage.getItem('cartArray')) || [];
        cartLocalArray.push(data.imdbID);
        sessionStorage.setItem('cartArray', JSON.stringify(cartLocalArray))
        loadCart();
    }
    })
}
function cartQtyControl() {
    if (sessionStorage.getItem('cartArray') == null || sessionStorage.getItem('cartArray') == '[]') {
        $('.cart-soft-count').text('0');
        $('.cart-wrapper').addClass('empty').removeClass('full');
    } else {
        const cartQty = JSON.parse(sessionStorage.getItem('cartArray'));
        const cartQty2 = listArray(cartQty);
        $('.cart-soft-count').text(cartQty2.length);
        $('.cart-wrapper').addClass('full').removeClass('empty');
    }
}
function loadCart() {
    let cartPrService = '';
    const storedArray = JSON.parse(sessionStorage.getItem("cartArray"));
    const storedArray2 = listArray(storedArray);
    $('.cart-full').html(' ');
    for (let y = 0; y < storedArray2.length; y++) {
        cartPrService = `http://www.omdbapi.com/?i=${storedArray2[y][1]}&apikey=${apikey}`;     
        fetch(cartPrService, {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            if(data.Response == "True") {
                const loadWrap = $('.cart-full');
                let movieListItem = document.createElement('div');
                movieListItem.className = "cart-product col-12 px-0";
                movieListItem.dataset.id = data.imdbID;
                movieListItem.dataset.class = storedArray2[y][0];
                if(data.Poster != "N/A")
                    moviePoster = data.Poster;

                movieListItem.innerHTML = `
                <div class="row d-flex align-items-center">
                    <div class="col-6 cart-pr-image">
                        <a href="#" class="product-image-wrapper">
                            <figure class="product-image-figure">
                                <img src="${moviePoster}" alt="${data.Title}" class="img-fluid" />
                            </figure>
                        </a>
                    </div>
                    <div class="col-6">
                        <a onclick="cartDelete('${data.imdbID}');" class="d-flex cart-pr-remove">Ürünü Sil</a>
                    </div>
                </div>
                <div class="row d-flex flex-direction-column cart-pr-other">
                    <span class="d-flex align-items-center cart-pr-name">${data.Title}</span>
                    <span class="d-flex align-items-center cart-prices-wrap">
                        <span class="cart-not-disc price-not-discounted text-delete text-gray">${data.Year} TL</span>
                        <span data-price="299,90" class="cart-sale product-sale font-weight-bold text-danger ml-2">299,90 TL</span>
                    </span>
                    <span class="d-flex align-items-center cart-color">Renk: ${data.Rated}</span>
                    <span class="d-flex align-items-center cart-size">Beden: ${data.Metascore}</span>
                    <div class="w-100 d-flex align-items-center cart-pr-qty">
                        <span class="cart-qty-title">Adet</span>
                        <div class="cart-qty-box">
                            <span class="qty-minus" onclick="qtyMinus('${data.imdbID}')">-</span>
                            <span class="qty-number">${storedArray2[y][0]}</span>
                            <span class="qty-plus" onclick="loadPrDetail('${data.imdbID}')">+</span>
                        </div>
                    </div>
                </div>
                `;
                $(loadWrap).append(movieListItem);
                priceCalculator();
            }
        })
    }
    cartQtyControl();
}
function listArray(arr){
    var itemCount = [];
    arr.forEach(function (x) { itemCount[x] = (itemCount[x] || 0) + 1; });
    var countsSortable = [];
    for (var i in itemCount) {
      countsSortable.push([ itemCount[i],i])
    }
    countsSortable.sort(function (a, b) {
        return b[0] - a[0];
    });
    return countsSortable;
}
function cartDelete(movieImdb) {
    var storedArray = JSON.parse(sessionStorage.getItem("cartArray"));
    var filteredArray = storedArray.filter(e => e !== movieImdb)
    sessionStorage.setItem('cartArray', JSON.stringify(filteredArray));
    loadCart();
} 
function priceCalculator() {
    var total = 0;
    $('.cart-product').each(function(i, item){
        var x = parseFloat($(item).find('.cart-sale').attr('data-price').replace(',', '.')).toFixed(2);
        var y = $(item).find('.qty-number').text();
        var z = parseFloat(x) * y;
        total = total + parseFloat(z);
    });
    $('.cart-total-load').text(total.toFixed(2) + ' TL');
}
function qtyMinus(movieImdb) {
    let storedArray = JSON.parse(sessionStorage.getItem("cartArray"));
    for( let i = 0; i < storedArray.length; i++){
       if ( storedArray[i] === movieImdb) {
        console.log('if içine girdi');
         const newArray = storedArray.splice(i, 1);
         sessionStorage.setItem('cartArray', JSON.stringify(storedArray));
         i = storedArray.length;
       }
    }
    loadCart();
}