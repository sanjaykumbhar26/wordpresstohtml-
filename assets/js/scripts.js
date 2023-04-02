
  AOS.init({
    easing: 'ease-out-back',
    duration: 1000,
    disable: function () {
        var maxWidth = 1280;
        return window.innerWidth < maxWidth;
      }
  });

$(document).ready(function() {

  function toggleSidebar() {
    $(".button").toggleClass("active");
    $("body").toggleClass("move-to-left");
    $(".sidebar-item").toggleClass("active");
  }

  $(".button").on("click tap", function() {
    toggleSidebar();
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      toggleSidebar();
    }
  });

});


  jQuery("#carousel").owlCarousel({
  autoplay: false,
  lazyLoad: true,
  loop: true,
  margin: 20,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    100: {
      items: 2
    },
    1024: {
      items: 3
    },
    1366: {
      items: 5
    }
  }
  });


  jQuery("#houseItems").owlCarousel({
  autoplay: false,
  lazyLoad: true,
  loop: true,
  margin: 20,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: false,
  responsive: {
    100: {
      items: 1
    },
    1024: {
      items: 1
    },
    1366: {
      items: 2
    }
  }
  });


  // youtube
$(document).ready(function() {
const tag = document.createElement('script');
const firstScriptTag = document.getElementsByTagName('script')[0];
const videoID = document.querySelector('.video-bg-player').getAttribute('data-video');
const videoOverlay = document.querySelector('.video-bg-overlay');
const playerOptions = {
    autohide: 1,
    autoplay: 1,
    controls: 0,
    disablekb: 1,
    enablejsapi: 1,
    iv_load_policy: 3,
    loop: 1,
    modestbranding: 1,
    mute: 1,
    playlist: videoID,
    rel: 0,
    showinfo: 0
};

tag.src = "https://www.youtube.com/iframe_api";
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let ytPlayer;

function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player('yt-player', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        },
        height: '720',
        playerVars: playerOptions,
        width: '1280',
        videoId: videoID
    });
}

function onPlayerReady(event) {
    event.target.playVideo();

    const videoDuration = event.target.getDuration();

    setInterval(function() {
        const videoCurrentTime = event.target.getCurrentTime();
        const timeDifference = videoDuration - videoCurrentTime;

        if (2 > timeDifference > 0) {
            event.target.seekTo(0);
        }
    }, 1000);
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        videoOverlay.classList.add('video-bg-overlay--fadeOut');
    }
}
});

// Back top
  if ($('#back-to-top').length) {
      var scrollTrigger = 100, // px
          backToTop = function () {
              var scrollTop = $(window).scrollTop();
              if (scrollTop > scrollTrigger) {
                  $('#back-to-top').addClass('show');
              } else {
                  $('#back-to-top').removeClass('show');
              }
          };
      backToTop();
      $(window).on('scroll', function () {
          backToTop();
      });
      $('#back-to-top').on('click', function (e) {
          e.preventDefault();
          $('html,body').animate({
              scrollTop: 0
          }, 100);
      });
}

// Prepend back button to sub menu(s)
$('.nav__sub').prepend('<li class="nav__item"><a class="nav__link sub__close" href="#"><i class="fas fa-chevron-left"></i> Back</a></li>');

// Close out sub menu
$('.sub__close').click(function(e) {
	e.preventDefault();
	
	$(this).parent().parent().removeClass('is-active');
});

// Trigger sub menu
$('.nav__link').click(function(e) {
	e.preventDefault();
	
	$(this).siblings().addClass('is-active');
});


var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5.27,
        center: new google.maps.LatLng(38.19, -90.20),
        mapTypeId: 'roadmap'
    });


    function addMarker(feature) {
        var marker = new google.maps.Marker({
            position: feature.position,
            // icon: icons[feature.type].icon,
            icon: {
                size: new google.maps.Size(35, 35),
                url: feature.icon,
                scaledSize: new google.maps.Size(35, 35),
            },
            map: map
        });

        marker.addListener('click', function () {
            window.location.href = feature.url;
        });

        var myoverlay = new google.maps.OverlayView();

        myoverlay.draw = function () {
            // add an id to the layer that includes all the markers so you can use it in CSS
            this.getPanes().markerLayer.id = 'markerLayer';
        };
        myoverlay.setMap(map);


    }
    // I wrote this - don't know if it works...
    function addInfoWindow(feature) {
        var infowindow = new google.maps.InfoWindow({
            content: features.content
        });
    }

    // defines locations
    var features = [
        {
            position: new google.maps.LatLng(41.899232, -87.6382897),
            url: 'https://goo.gl/maps/Zyjfk65mRnRfcMmc7',
        }, {
            position: new google.maps.LatLng(32.8061208, -96.8063768),
            url: 'https://goo.gl/maps/RZ26zE3AtvMBxcsB8',
        }
    ];

    // adds markers via the features table
    for (var i = 0, feature; feature = features[i]; i++) {
        addMarker(feature);
        addInfoWindow(feature);
    }


    // marker variable is only defined within the addMarker function

}




function scrollNav() {
  $('a.anchor').click(function(){
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 145
    }, 300);
    return false;
  });
}
scrollNav();







