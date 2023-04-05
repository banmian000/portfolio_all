// JavaScript Document
$.fn.animate2 = function (properties, duration, ease) {
    ease = ease || 'ease';
    var $this = this;
    var cssOrig = { transition: $this.css('transition') };
    return $this.queue(next => {
        properties['transition'] = 'all ' + duration + 'ms ' + ease;
        $this.css(properties);
        setTimeout(function () {
            $this.css(cssOrig);
            next();
        }, duration);
    });
};
$('.select-sad_text')
    .css({ left: "100vw" })
    .animate2({ left: 0 }, 1000)
;
$('.select-denpa_text')
    .css({ left: "150vw" })
    .animate2({ left: 0 }, 1500)
;
$('.select-ruru_text')
    .css({ left: "220vw" })
    .animate2({ left: "20vw" }, 2000)
;