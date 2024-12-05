$(function(){

  $('.menu__btn').on('click',function(){
    $('.menu__list').toggleClass('menu__list--active');
  });
  $('.shop__filters-btn').on('click',function(){
    $('.shop__filters').slideToggle();
  });

  $('.blog-page__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg"  width="7px" height="14px" viewBox="0 0 7 14" version="1.1"><g><path  d="M 0.90625 6.382812 C 0.632812 6.722656 0.632812 7.277344 0.90625 7.621094 L 4.40625 11.996094 C 4.679688 12.335938 5.125 12.335938 5.398438 11.996094 C 5.671875 11.652344 5.671875 11.097656 5.398438 10.757812 L 2.390625 7 L 5.394531 3.242188 C 5.667969 2.902344 5.667969 2.347656 5.394531 2.003906 C 5.121094 1.664062 4.675781 1.664062 4.402344 2.003906 L 0.902344 6.378906 Z M 0.90625 6.382812 "/></g></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="7px" height="14px" viewBox="0 0 7 14" version="1.1"><g><path d="M 6.09375 6.382812 C 6.367188 6.722656 6.367188 7.277344 6.09375 7.621094 L 2.59375 11.996094 C 2.320312 12.335938 1.875 12.335938 1.601562 11.996094 C 1.328125 11.652344 1.328125 11.097656 1.601562 10.757812 L 4.609375 7 L 1.605469 3.242188 C 1.332031 2.902344 1.332031 2.347656 1.605469 2.003906 C 1.878906 1.664062 2.324219 1.664062 2.597656 2.003906 L 6.097656 6.378906 Z M 6.09375 6.382812 "/></g></svg></button>',
    infinite: false,

  });

  $('.product-tabs__top-item').on('click', function(e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });
  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable:false,
    responsive:[
      {
        breakpoint:996,
        settings:{
          draggable: true,
        }
      }
    ]
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,

  });


  $('.shop-content__filter-btn').on('click' ,function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });
  $('.button-list').on('click', function () {
    $('.product-item').addClass('product-item--list');
    $('.shop-content__inner').addClass('shop-content__nogrid');
  });

  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item--list');
    $('.shop-content__inner').removeClass('shop-content__nogrid');

  });

  $('.select-style, .product-info__num').styler();

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix:'$',
   
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });
  $('.top-slider__inner').slick({
    dots:true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  })
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $('.star').rateYo({
    readOnly:true, 
    rating:4,
    starWidth: "17px",
    fullStar: true,
    normalFill: "#ccccce",
    ratedFill: "#ffc35b"
  });

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function initializeClock(id, endtime) {
    var clock = document.querySelector('.promo__clock');
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
      var t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

  var deadline = $('.promo__clock').attr('data-time');
  initializeClock('.promo__clock', deadline);


  
})