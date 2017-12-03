$(document).ready(function(){
    $('.js-paginationSlider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.js-descriptionSlider',
        focusOnSelect: true,
        arrows:false,
        responsive: [{

            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                infinite: true
            }

        }, {

            breakpoint: 780,
            settings: {
                slidesToShow: 2
            }

        }, {

            breakpoint: 400,
            settings: {
                slidesToShow: 1
            }

        }]
    });

    $('.js-descriptionSlider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.js-paginationSlider',
        arrows: true,
        prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>'
    });
    // range
    $('.rangeslider').rangeslider({
        polyfill: false,
        rangeClass: 'rangeslider',
        disabledClass: 'rangeslider--disabled',
        horizontalClass: 'rangeslider--horizontal',
        fillClass: 'rangeslider__fill',
        handleClass: 'rangeslider__handle',

        onInit: function() {
            $rangeEl = this.$range;
            // add value label to handle
            var $handle = $rangeEl.find('.rangeslider__handle');
            var handleValue = '<div class="rangeslider__handle__value">' + this.value +',000'+ '</div>';
            $handle.append(handleValue);
        },

        onSlide: function (position, value) {
            var $handle = this.$range.find('.rangeslider__handle__value');
            if (this.value === 0) {
                $handle.text(this.value);
            } else {
                $handle.text(this.value + ',000');
            }
        },
    });





});

// counter

var $status = $('.counter');
var $slickElement = $('.js-descriptionSlider');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
});

