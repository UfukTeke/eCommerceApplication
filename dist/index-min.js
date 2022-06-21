const apikey="30bf3f5c";let cartLocalArray=JSON.parse(sessionStorage.getItem("cartArray"))||[];var total=0;function loadMovies(e){fetch(`https://omdbapi.com/?s=${e}&page=1&apikey=${apikey}`,{method:"GET"}).then(e=>e.json()).then(t=>{"True"==t.Response&&displayMovieList(t.Search,e)})}function loadSearchMovies(e){fetch(`https://omdbapi.com/?s=${e}&page=1&apikey=${apikey}`,{method:"GET"}).then(e=>e.json()).then(e=>{"True"==e.Response&&displaySearchList(e.Search)})}function displayMovieList(e,t){const a=$('[data-load="'+t+'"]');for(let t=0;t<e.length;t++){let n=document.createElement("div");n.className="swiper-slide",n.dataset.id=e[t].imdbID,"N/A"!=e[t].Poster&&(moviePoster=e[t].Poster),n.innerHTML=`\n            <div class="product-item position-relative border">\n            <div class="position-relative">\n                <div class="position-absolute product-symbol left">\n                    <span class="new-badge bg-danger text-white px-3 py-1">YENİ</span>\n                    <span class="discounted-badge bg-success text-white px-3 py-1">%37</span>\n                </div>\n                <div class="position-absolute product-symbol right">\n                    <a href="#" class="pr-fav">\n                        <?xml version="1.0" encoding="iso-8859-1"?>\n                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n                            viewBox="0 0 471.701 471.701" style="enable-background:new 0 0 471.701 471.701;" xml:space="preserve">\n                        <g>\n                            <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1\n                                c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3\n                                l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4\n                                C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3\n                                s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4\n                                c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3\n                                C444.801,187.101,434.001,213.101,414.401,232.701z"/>\n                        </g>\n                        <g>\n                        </g>\n                        <g>\n                        </g>\n                        <g>\n                        </g>\n                        <g>\n                        </g>\n                        <g>\n                        </g>\n                        <g>\n                        </g>\n                        <g>\n                        </g>\n                        <g>\n                        </g>\n                        <g>\n                        </g>\n                        <g>\n                        </g>\n                        <g>\n                        </g>\n                        <g>\n                        </g>\n                        <g>\n                        </g>\n                        <g>\n                        </g>\n                        <g>\n                        </g>\n                        </svg>\n                    </a>\n                    <span class="skin-badge bg-primary text-white px-2 py-1">${e[t].Type}</span>\n                </div>\n                <a onclick="loadPrDetail('${e[t].imdbID}');" class="product-image-wrapper">\n                    <figure class="product-image-figure">\n                        <img src="${moviePoster}" alt="${e[t].Title}" class="img-fluid" />\n                    </figure>\n                </a>\n            </div>\n            <div class="product-cart-detail position-relative pt-4 pb-3">\n                <a onclick="loadPrDetail('${e[t].imdbID}');" class="product-title text-center text-uppercase text-dark mb-4">${e[t].Title}</a>\n                <div class="product-price d-flex align-items-center justify-content-center mb-3">\n                    <span class="price-not-discounted text-delete text-gray">${e[t].Year} TL</span>\n                    <span class="product-sale font-weight-bold text-dark ml-2">499,90 TL</span>\n                </div>\n                <div class="product-price-cart text-center text-danger font-weight-bold">Sepette 299,00 TL</div>\n            </div>\n        </div>\n        `,$(a).append(n)}}function displaySearchList(e){const t=$(".search-pr-loader");let a="";$(t).html(" "),a=e.length>4?4:e.length;for(let n=0;n<a;n++){let a=document.createElement("div");a.className="col-6 col-lg-3 product-item product-item-search",a.dataset.id=e[n].imdbID,"N/A"!=e[n].Poster&&(moviePoster=e[n].Poster),a.innerHTML=`\n            <div class="product-s-border border d-flex flex-column">\n                <a onclick="loadPrDetail('${e[n].imdbID}');" class="product-image-wrapper">\n                    <figure class="product-image-figure">\n                    <img src="${moviePoster}" alt="${e[n].Title}" class="img-fluid" />\n                    </figure>\n                </a>\n                <div class="position-relative product-search-other d-flex flex-column">\n                    <a onclick="loadPrDetail(${e[n].imdbID});" class="product-title text-left text-dark mb-1">${e[n].Title}</a>\n                    <span class="search-not-disc price-not-discounted text-delete text-gray">${e[n].Year} TL</span>\n                    <span class="search-sale product-sale font-weight-bold text-dark">299,90 TL</span>\n                </div>\n            </div>\n        `,$(t).append(a)}}function loadSwiper(e,t,a,n,s,r){new Swiper('[data-swiper="'+e+'"]',{slidesPerView:0==t?1:t,spaceBetween:0==a?0:a,loop:1==r,breakpoints:{0:{slidesPerView:1,spaceBetween:0==a?0:20},992:{slidesPerView:0==t?1:2,spaceBetween:0==a?0:20},1170:{slidesPerView:0==t?1:t,spaceBetween:0==a?0:a}},autoplay:{delay:"4000"},navigation:{nextEl:1==n?'.swiper-button-next[data-arrow="'+e+'"]':"",prevEl:1==n?'.swiper-button-prev[data-arrow="'+e+'"]':""},pagination:{el:1==s?'.swiper-pagination[data-pag="'+e+'"]':"",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'"></span>'}}})}function searchMovies(){let e=$("#input-search").val().trim();e.length>0&&($(".search-pr-loader").innerHTML="",$(".search-title").text("Arama Sonuçları"),loadSearchMovies(e))}function loadPrDetail(e){fetch(`http://www.omdbapi.com/?i=${e}&apikey=${apikey}`,{method:"GET"}).then(e=>e.json()).then(e=>{"True"==e.Response&&((cartLocalArray=JSON.parse(sessionStorage.getItem("cartArray"))||[]).push(e.imdbID),sessionStorage.setItem("cartArray",JSON.stringify(cartLocalArray)),loadCart())})}function cartQtyControl(){if(null==sessionStorage.getItem("cartArray")||"[]"==sessionStorage.getItem("cartArray"))$(".cart-soft-count").text("0"),$(".cart-wrapper").addClass("empty").removeClass("full");else{const e=listArray(JSON.parse(sessionStorage.getItem("cartArray")));$(".cart-soft-count").text(e.length),$(".cart-wrapper").addClass("full").removeClass("empty")}}function loadCart(){let e="";const t=listArray(JSON.parse(sessionStorage.getItem("cartArray")));$(".cart-full").html(" ");for(let a=0;a<t.length;a++)e=`http://www.omdbapi.com/?i=${t[a][1]}&apikey=${apikey}`,fetch(e,{method:"GET"}).then(e=>e.json()).then(e=>{if("True"==e.Response){const n=$(".cart-full");let s=document.createElement("div");s.className="cart-product col-12 px-0",s.dataset.id=e.imdbID,s.dataset.class=t[a][0],"N/A"!=e.Poster&&(moviePoster=e.Poster),s.innerHTML=`\n                <div class="row d-flex align-items-center">\n                    <div class="col-6 cart-pr-image">\n                        <a href="#" class="product-image-wrapper">\n                            <figure class="product-image-figure">\n                                <img src="${moviePoster}" alt="${e.Title}" class="img-fluid" />\n                            </figure>\n                        </a>\n                    </div>\n                    <div class="col-6">\n                        <a onclick="cartDelete('${e.imdbID}');" class="d-flex cart-pr-remove">Ürünü Sil</a>\n                    </div>\n                </div>\n                <div class="row d-flex flex-direction-column cart-pr-other">\n                    <span class="d-flex align-items-center cart-pr-name">${e.Title}</span>\n                    <span class="d-flex align-items-center cart-prices-wrap">\n                        <span class="cart-not-disc price-not-discounted text-delete text-gray">${e.Year} TL</span>\n                        <span data-price="299,90" class="cart-sale product-sale font-weight-bold text-danger ml-2">299,90 TL</span>\n                    </span>\n                    <span class="d-flex align-items-center cart-color">Renk: ${e.Rated}</span>\n                    <span class="d-flex align-items-center cart-size">Beden: ${e.Metascore}</span>\n                    <div class="w-100 d-flex align-items-center cart-pr-qty">\n                        <span class="cart-qty-title">Adet</span>\n                        <div class="cart-qty-box">\n                            <span class="qty-minus" onclick="qtyMinus('${e.imdbID}')">-</span>\n                            <span class="qty-number">${t[a][0]}</span>\n                            <span class="qty-plus" onclick="loadPrDetail('${e.imdbID}')">+</span>\n                        </div>\n                    </div>\n                </div>\n                `,$(n).append(s),priceCalculator()}});cartQtyControl()}function listArray(e){var t=[];e.forEach(function(e){t[e]=(t[e]||0)+1});var a=[];for(var n in t)a.push([t[n],n]);return a.sort(function(e,t){return t[0]-e[0]}),a}function cartDelete(e){var t=JSON.parse(sessionStorage.getItem("cartArray")).filter(t=>t!==e);sessionStorage.setItem("cartArray",JSON.stringify(t)),loadCart()}function priceCalculator(){var e=0;$(".cart-product").each(function(t,a){var n=parseFloat($(a).find(".cart-sale").attr("data-price").replace(",",".")).toFixed(2),s=$(a).find(".qty-number").text(),r=parseFloat(n)*s;e+=parseFloat(r)}),$(".cart-total-load").text(e.toFixed(2)+" TL")}function qtyMinus(e){let t=JSON.parse(sessionStorage.getItem("cartArray"));for(let a=0;a<t.length;a++)if(t[a]===e){console.log("if içine girdi");t.splice(a,1);sessionStorage.setItem("cartArray",JSON.stringify(t)),a=t.length}loadCart()}$(document).ready(function(){$(".dynamic-showcase").each(function(e,t){loadMovies($(t).attr("data-load"))}),cartQtyControl(),null!=sessionStorage.getItem("cartArray")&&loadCart(),loadSwiper(1,!1,!1,!0,!0,!0),loadSwiper(2,3,30,!0,!1,!1),loadSwiper(3,3,30,!0,!1,!1),loadSwiper(4,4,30,!0,!1,!1),loadSwiper(5,4,30,!0,!1,!1),loadSwiper(6,4,30,!0,!1,!1),loadSwiper(7,4,30,!0,!1,!1)}),$(document).on("click",".h-search",function(e){e.preventDefault(),e.stopPropagation(),$(this).addClass("active"),$(".search-all-wrap").addClass("active")}),$(document).on("click",".search-close",function(e){$(".h-search").removeClass("active"),$(".search-all-wrap").removeClass("active")}),$(document).on("click",".h-cart",function(e){e.preventDefault(),e.stopPropagation(),$(".cart-wrapper").addClass("active")}),$(document).on("click",".cart-close",function(e){$(".cart-wrapper").removeClass("active")});