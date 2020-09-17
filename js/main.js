
$(function () {


    // preloader
    $(window).on("load", function () {
        $('#loader').css({ 'display': 'none', 'opacity': 'none' })
    });

    // ScrollTo
    $('.scroll-arrow').click(function () {
        $('html, body').animate({
            scrollTop: $('.map').offset().top
        }, 750);
    });

    $('.menu-surf').click(function () {
        $('html, body').animate({
            scrollTop: $('.map').offset().top
        }, 750);
    });
    $('.menu-travel').click(function () {
        $('html, body').animate({
            scrollTop: $('.travel').offset().top
        }, 750);
    });
    $('.menu-sleep').click(function () {
        $('html, body').animate({
            scrollTop: $('.sleep').offset().top
        }, 750);
    });
    $('.menu-shop').click(function () {
        $('html, body').animate({
            scrollTop: $('.shop').offset().top
        }, 750);
    });

    $('.header-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrow__left" src="img/arrow-left.svg" alt="">',
        nextArrow: '<img class="slider-arrow__right" src="img/arrow-right.svg" alt="">',
        asNavFor: '.header-dots',
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 6000,

    })
    $('.header-dots').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true,
        asNavFor: '.header-slider',
        responsive: [
            {
                breakpoint: 1056,
                settings: {
                    slidesToShow: 1,
                    fade: true,
                    cssEase: 'linear',
                }
            }
        ]

    });
    $('.map-dots').slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
        asNavFor: '.surf-slider',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            }
        ]
    });

    $('.surf-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        centerMode: true,
        asNavFor: '.map-dots',
        prevArrow: '<img class="slider-arrow__left" src="img/arrow-left.svg" alt="">',
        nextArrow: '<img class="slider-arrow__right" src="img/arrow-right.svg" alt="">',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            }

        ]
    });

    $(".main-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrow__left" src="img/arrow-left.svg" alt="">',
        nextArrow: '<img class="slider-arrow__right" src="img/arrow-right.svg" alt="">',
        fade: true,
        cssEase: 'linear',
        asNavFor: '.travel-slider-info',
    });

    $('.main-slider-info').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.travel-slider',
        fade: true,
        cssEase: 'linear',
        arrows: false,
    });






    //  calculator


    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function () {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });

    // calc function #1
    $('.quantity-button').on('click', function () {
        let summ = ($('.guests').val() - 1) * $('.summ').data('guests') + $('.nights').val() * $('.summ').data('nights');
        $('.summ').html('$' + summ);
    })
    let summ = ($('.guests').val() - 1) * $('.summ').data('guests') + $('.nights').val() * $('.summ').data('nights');
    $('.summ').html('$' + summ);




    //Shop info buttons

    $('.circle-plus').on('click', function () {
        $(this).toggleClass('opened');
    })

    // Adaptive menu

    $('.ham-btn').on('click', function () {
        $('section, .header-blur').toggleClass('blur');
        $('.menu').toggleClass('opened');
    })





});




// Tilt effect


$('.3d-animate').mouseover(function () {
    $('.3d-animate').mousemove(function (e) {
        var x = e.pageX - $(this).offset().left,
            y = e.pageY - $(this).offset().top;

        var px = x / $(this).width(),
            py = y / $(this).height();

        var xx = -15 + (30 * px),
            yy = 15 - (30 * py);

        //TweenMax.killTweensOf($(this));
        TweenMax.to($(this), 0.5, { rotationY: xx, rotationX: yy, rotationZ: 0, transformPerspective: 1000, ease: Quad.easeOut });
    });
}).mouseout(function () {
    $(this).unbind('mousemove');
    //TweenMax.killTweensOf($(this));
    TweenMax.to($(this), 0.5, { rotationY: 0, rotationX: 0, rotationZ: 0, transformPerspective: 1000, ease: Quad.easeOut });
});

if ($(window).width() < 490) {
    $('.board-body').removeClass('3d-animate');
}


$('.buy-btn').on('click', function (e) {
    e.preventDefault();
    $('.wrapper').addClass('active');

    $(document).on('keydown', function (event) {
        if (event.key == "Escape") {
            $('.wrapper').removeClass('active');
        }
    });
    if ($('.wrapper').hasClass('active')) {
        $('.close-btn').on('click', function () {

            $('.wrapper').removeClass('active');
        })
    }
})




new Vue({
    el: "#app",
    data() {
        return {
            currentCardBackground: Math.floor(Math.random() * 25 + 1), // just for fun :D
            cardName: "",
            cardNumber: "",
            cardMonth: "",
            cardYear: "",
            cardCvv: "",
            minCardYear: new Date().getFullYear(),
            amexCardMask: "#### ###### #####",
            otherCardMask: "#### #### #### ####",
            cardNumberTemp: "",
            isCardFlipped: false,
            focusElementStyle: null,
            isInputFocused: false
        };
    },
    mounted() {
        this.cardNumberTemp = this.otherCardMask;
        document.getElementById("cardNumber").focus();
    },
    computed: {
        getCardType() {
            let number = this.cardNumber;
            let re = new RegExp("^4");
            if (number.match(re) != null) return "visa";

            re = new RegExp("^(34|37)");
            if (number.match(re) != null) return "amex";

            re = new RegExp("^5[1-5]");
            if (number.match(re) != null) return "mastercard";

            re = new RegExp("^6011");
            if (number.match(re) != null) return "discover";

            re = new RegExp('^9792')
            if (number.match(re) != null) return 'troy'

            return "visa"; // default type
        },
        generateCardNumberMask() {
            return this.getCardType === "amex" ? this.amexCardMask : this.otherCardMask;
        },
        minCardMonth() {
            if (this.cardYear === this.minCardYear) return new Date().getMonth() + 1;
            return 1;
        }
    },
    watch: {
        cardYear() {
            if (this.cardMonth < this.minCardMonth) {
                this.cardMonth = "";
            }
        }
    },
    methods: {
        flipCard(status) {
            this.isCardFlipped = status;
        },
        focusInput(e) {
            this.isInputFocused = true;
            let targetRef = e.target.dataset.ref;
            let target = this.$refs[targetRef];
            this.focusElementStyle = {
                width: `${target.offsetWidth}px`,
                height: `${target.offsetHeight}px`,
                transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`
            }
        },
        blurInput() {
            let vm = this;
            setTimeout(() => {
                if (!vm.isInputFocused) {
                    vm.focusElementStyle = null;
                }
            }, 300);
            vm.isInputFocused = false;
        }
    }
});
