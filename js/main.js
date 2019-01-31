$(document).ready(function(){
	$('[name="phone"]').mask("+375 (99) 999-99-99");
	
	$('[data-modal]').click(function(event){
		event.preventDefault();
		$("#" + $(this).attr("data-modal")).addClass("modal-active");
	});
	$(".close").click(function(event){
		event.preventDefault();
		$('.modal-container').removeClass("modal-active")
	});

	var windowHeight = $(window).height();
	var pageHeight = $("body").height();
	var sectNumber = $("section").size();

	if($(window).width()<769){
		$("#Parade").smoothDivScroll("stopAutoScrolling");
	}
	$(window).resize(function(){
		windowHeight = $(window).height();
		pageHeight = $("body").height();
	});

	$(".scroll").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});
	var slideNow = 1;
	var slidePrev = 1;
	window.onscroll = function() {
		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		slideNow = Math.ceil((scrolled-50)/windowHeight+1);
		slidePrev = slideNow - 2;
		if(slidePrev<0){
			slidePrev = 0;	
		}

		$(".dots li").removeClass("active");
		$(".dots li:nth-child("+ slideNow +")").addClass("active");
		$(".prev-arrow").attr("href","section:eq("+ slidePrev +")");
		$(".next-arrow").attr("href","section:eq("+ slideNow +")");
	}
	function addHandler(object, event, handler) {
		if (object.addEventListener) {
			object.addEventListener(event, handler, false);
		} else if (object.attachEvent) {
			object.attachEvent('on' + event, handler);
		}
	}
	addHandler(window, 'DOMMouseScroll', wheel);
	addHandler(window, 'mousewheel', wheel);
	addHandler(document, 'mousewheel', wheel);
	var startTime = new Date();
	function wheel(event) {
		var delta; 
		event = event || window.event;
		if (event.wheelDelta) {
			delta = event.wheelDelta / 120;
			if (window.opera)
				delta = -delta; 
		} else if (event.detail) {
			delta = -event.detail / 3;
		}
		if (event.preventDefault)
			event.preventDefault();
		event.returnValue = false;

		var endTime = new Date();
		var slideToScroll = slideNow;
		if(delta == 1){
			slideToScroll = slidePrev;	
		}else{
			slideToScroll = slideNow;
		}
		if (endTime - startTime > 600) {
			var top = $("section:eq("+ slideToScroll +")").offset().top;
			if(slideNow-1 == 0){

				$('body,html').animate({
					scrollTop: top
				}, {
					duration: 1100,
					specialEasing: {
						scrollTop: "easeInOutCirc"
					}

				});

			}else{
				$('body,html').animate({scrollTop: top}, 600);
			}
		}


		startTime = endTime;

	};

	$("#Parade").smoothDivScroll({
		touchScrolling: true,
		manualContinuousScrolling: true,
		hotSpotScrolling: false,
		autoScrollingMode: "always",
		mousewheelScrolling: false,
		autoScrollingStep: 1,
		autoScrollingInterval: 25 
	});
	$("#Parade").bind("mouseover", function () {
		$(this).smoothDivScroll("stopAutoScrolling");
	}).bind("mouseout", function () {
		$(this).smoothDivScroll("startAutoScrolling");
	});
	var isOpen = true;
	$(".poup-up").click(function(){
		$(".poup-up").removeClass("active");
		$(this).addClass("active");
	});


});


particlesJS('particles-js',

{
	"particles": {
		"number": {
			"value": 60,
			"density": {
				"enable": true,
				"value_area": 800
			}
		},
		"color": {
			"value": "#f140fc"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#000000"
			},
			"polygon": {
				"nb_sides": 5
			},
			"image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			}
		},
		"opacity": {
			"value": 1,
			"random": true,
			"anim": {
				"enable": true,
				"speed": 1,
				"opacity_min": 0,
				"sync": false
			}
		},
		"size": {
			"value": 3,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 4,
				"size_min": 0.3,
				"sync": false
			}
		},
		"line_linked": {
			"enable": false,
			"distance": 150,
			"color": "#ffffff",
			"opacity": 0.4,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 1,
			"direction": "none",
			"random": true,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 600
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": true,
				"mode": "bubble"
			},
			"onclick": {
				"enable": true,
				"mode": "repulse"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 400,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 250,
				"size": 0,
				"duration": 2,
				"opacity": 0,
				"speed": 3
			},
			"repulse": {
				"distance": 400,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
}

);

particlesJS('particles-js-footer',

{
	"particles": {
		"number": {
			"value": 60,
			"density": {
				"enable": true,
				"value_area": 800
			}
		},
		"color": {
			"value": "#f140fc"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#000000"
			},
			"polygon": {
				"nb_sides": 5
			},
			"image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			}
		},
		"opacity": {
			"value": 1,
			"random": true,
			"anim": {
				"enable": true,
				"speed": 1,
				"opacity_min": 0,
				"sync": false
			}
		},
		"size": {
			"value": 3,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 4,
				"size_min": 0.3,
				"sync": false
			}
		},
		"line_linked": {
			"enable": false,
			"distance": 150,
			"color": "#ffffff",
			"opacity": 0.4,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 1,
			"direction": "none",
			"random": true,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 600
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": true,
				"mode": "bubble"
			},
			"onclick": {
				"enable": true,
				"mode": "repulse"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 400,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 250,
				"size": 0,
				"duration": 2,
				"opacity": 0,
				"speed": 3
			},
			"repulse": {
				"distance": 400,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
}

);