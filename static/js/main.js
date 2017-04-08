jQuery(document).ready(function ($) {

    // jQuery sticky Menu

    $(".mainmenu-area").sticky({topSpacing: 0});


    $('.product-carousel').owlCarousel({
        loop: true,
        nav: true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    $('.related-products-carousel').owlCarousel({
        loop: true,
        nav: true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    $('.brand-list').owlCarousel({
        loop: true,
        nav: true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });


    // Bootstrap Mobile Menu fix
    $(".navbar-nav li a").click(function () {
        $(".navbar-collapse").removeClass('in');
    });

    // jQuery Scroll effect
    $('.navbar-nav li a, .scroll-to-up').bind('click', function (event) {
        var $anchor = $(this);
        var headerH = $('.header-area').outerHeight();
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    });

    // Bootstrap ScrollPSY
    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 95
    });

    console.info(
'     _____             _    _       _      \n' +
'    |  __ \\           | |  | |     | |    \n' +
'    | |  | | _____   _| |__| |_   _| |__  \n' +
'    | |  | |/ _ \\ \\ / /  __  | | | | \'_ \\ \n' +
'    | |__| |  __/\\ V /| |  | | |_| | |_) |   \n' +
'    |_____/ \\___| \\_/ |_|  |_|\\__,_|_.__/ \n' +
'    --------------------------------------\n' +
'                         https://devhub.io      ');

    $("span.line").peity("line");
});


window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', 'UA-35989028-4', 'auto');
ga('require', 'GTM-T37PMGT');
ga('send', 'pageview');

if (typeof ga !== "undefined" && ga !== null) {
  $(document).ajaxSend(function (event, xhr, settings) {
    ga('send', 'pageview', settings.url);
  });

  (function (window) {
    var undefined,
      link = function (href) {
        var a = window.document.createElement('a');
        a.href = href;
        return a;
      };
    window.onerror = function (message, file, line, column) {
      var host = link(file).hostname;
      ga('send', {
        'hitType': 'event',
        'eventCategory': (host == window.location.hostname || host == undefined || host == '' ? '' : 'external ') + 'error',
        'eventAction': message,
        'eventLabel': (file + ' LINE: ' + line + (column ? ' COLUMN: ' + column : '')).trim(),
        'nonInteraction': 1
      });
    };
  }(window));

  $(function () {
    var isDuplicateScrollEvent,
      scrollTimeStart = new Date,
      $window = $(window),
      $document = $(document),
      scrollPercent;

    $window.scroll(function () {
      scrollPercent = Math.round(100 * ($window.height() + $window.scrollTop()) / $document.height());
      if (scrollPercent > 90 && !isDuplicateScrollEvent) { //page scrolled to 90%
        isDuplicateScrollEvent = 1;
        ga('send', 'event', 'scroll',
          'Window: ' + $window.height() + 'px; Document: ' + $document.height() + 'px; Time: ' + Math.round((new Date - scrollTimeStart ) / 1000, 1) + 's'
        );
      }
    });
  });

  if (window.performance) {
    var timeSincePageLoad = Math.round(performance.now());
    ga('send', 'timing', 'JS Dependencies', 'load', timeSincePageLoad);
  }
}

window.doorbellOptions = {
  appKey: 'akmfqdy1fBgL1corAEydarDdZdwk4P55B94bk8vMbIvnXUTD7mxxYsXKrHeY96fG'
};
(function(w, d, t) {
  var hasLoaded = false;
  function l() { if (hasLoaded) { return; } hasLoaded = true; window.doorbellOptions.windowLoaded = true; var g = d.createElement(t);g.id = 'doorbellScript';g.type = 'text/javascript';g.async = true;g.src = 'https://embed.doorbell.io/button/5155?t='+(new Date().getTime());(d.getElementsByTagName('head')[0]||d.getElementsByTagName('body')[0]).appendChild(g); }
  if (w.attachEvent) { w.attachEvent('onload', l); } else if (w.addEventListener) { w.addEventListener('load', l, false); } else { l(); }
  if (d.readyState == 'complete') { l(); }
}(window, document, 'script'));
