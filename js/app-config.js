require.config({
    paths: {
        TweenLite: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenLite.min',
        TimelineLite: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TimelineLite.min',
        TweenMax: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min',
        TimelineMax: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TimelineMax.min',
        EasePack: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/easing/EasePack.min',
        BezierPlugin: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/plugins/BezierPlugin.min',
        ScrollMagic: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min',
        ScrollMagicAddIndicators: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min',
        ScrollMagicJquery: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/jquery.ScrollMagic.min',
        ScrollMagicGSAP: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.min',
        'slick-carousel': 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.8/slick.min',
        JKSizeClassEventHandler: 'ford-gt/bower_components/JKSizeClassEventHandler/js/JKSizeClassEventHandler.min',
        SupportsContinuousScrollEvents: 'ford-gt/bower_components/SupportsContinuousScrollEvents/js/SupportsContinuousScrollEvents.min',
        d3: 'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.12/d3.min',
        fastclick: 'ford-gtcopy/bower_components/fastclick/lib/fastclick',
        Swiper: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/js/swiper.min',

        utils: PaidPost.assets + 'js/lib/utils',
        cjs_loader: PaidPost.assets + 'js/lib/cjs_loader'

        // 'createjs':'https://code.createjs.com/createjs-2015.11.26.min',
    },
    packages: [

    ],
    shim: {
        // 'ani_name':['createjs']
    }
});

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                    callback(currTime + timeToCall);
                },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

var G = G || {};
var ua = window.navigator.userAgent.toLowerCase();
var projectDetails = 'Shire - ',
    deviceType = (ua.match(/iphone|android/i) !== null) ? 'mobile' : 'desktop';
G.track = function(action, opt_label, opt_value, opt_noninteraction) {
    if (typeof window.ga !== 'undefined') {
        console.log('ga.track :: send, track,', projectDetails + deviceType, action, opt_label);
        window.ga('send', 'event', projectDetails + deviceType, action, opt_label, opt_value);
    }
};
window.G = G;
