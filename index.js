 $(function(){

 	// banner trang chu
 		// slick carousel
 	$('.banner .slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1000,
  });

// home-nd2
 	// slick carousel
  $('.home-nd2 .slider').slick({
	    vertical: true,
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    verticalSwiping: true,
	    autoplay: true,
	    speed: 1000,
  });	

  	// slick carousel-mobile
  $('.home-nd2 .slider-mobile, .home-nd3 .slider-mobile, .home-nd4 .slider-mobile').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    autoplay: true,
	    speed: 1000,
  });
 	// slick carousel
	$('.home-nd3 .slider,.home-nd4 .slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1000,
  });
	// carousel of tuyensinh-nd2
	$('.tuyensinh-nd2 .slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    autoplay: true,
	    speed: 1000,
  });
// --------END carousel---------

// hieu ung menu bien doi khi cuon chuot
 	$(window).scroll(function(event) {
 		if ($('body').scrollTop()>=70) {
 			$('header').addClass('menu-hienthi');
 		}
 		else {
 			$('header').removeClass('menu-hienthi');
 		}
 		
 	});
 	// ----END----

 	// hieu ung phong to anh
 	$('.home-nd5 ul.khoi-anh li a').fancybox();
 	$('.thuvien-nd1 .khoi-anh .album a').fancybox();
 	$('.thuvien-nd2 .khoi-video .album a').fancybox();
 	$('.home-nd3 .content .khoi-nd .anh a').fancybox();
 	// -----END------

 	// Hieu ung click chuot trang chuong trinh.html - trang gioi thieu.html - trang cham soc.html
 	$('nav.menu-con ul li a').click(function(event) {
 		$('nav.menu-con ul li a').removeClass('active');
 		$(this).addClass('active');
 		return false;
 	});

 	$('nav.menu-con ul li:nth-child(1) a').click(function(event) {
 		$('.tinchitiet').removeClass('hienthi');
 		$('.tinchitiet:nth-child(1)').addClass('hienthi');
 	});
 	$('nav.menu-con ul li:nth-child(2) a').click(function(event) {
 		$('.tinchitiet').removeClass('hienthi');
 		$('.tinchitiet:nth-child(2)').addClass('hienthi');
 	});
 	$('nav.menu-con ul li:nth-child(3) a').click(function(event) {
 		$('.tinchitiet').removeClass('hienthi');
 		$('.tinchitiet:nth-child(3)').addClass('hienthi');
 	});
 	$('nav.menu-con ul li:nth-child(4) a').click(function(event) {
 		$('.tinchitiet').removeClass('hienthi');
 		$('.tinchitiet:nth-child(4)').addClass('hienthi');
 	});
 	$('nav.menu-con ul li:nth-child(5) a').click(function(event) {
 		$('.tinchitiet').removeClass('hienthi');
 		$('.tinchitiet:nth-child(5)').addClass('hienthi');
 	});
 	$('nav.menu-con ul li:nth-child(6) a').click(function(event) {
 		$('.tinchitiet').removeClass('hienthi');
 		$('.tinchitiet:nth-child(6)').addClass('hienthi');
 	});
 	// ----END-----

 	// Hieu ung click chuot trang tuyen sinh.html
 	$('.tuyensinh-nd1 .card:nth-child(1) h5').click(function(event) {
 		$('.tuyensinh-nd1 #accordion .card:nth-child(1) a img').toggleClass('xoay');		
 	});
 	$('.tuyensinh-nd1 .card:nth-child(2) h5').click(function(event) {
 		$('.tuyensinh-nd1 #accordion .card:nth-child(2) a img').toggleClass('xoay');		
 	});
 	$('.tuyensinh-nd1 .card:nth-child(3) h5').click(function(event) {
 		$('.tuyensinh-nd1 #accordion .card:nth-child(3) a img').toggleClass('xoay');		
 	});
 	$('.tuyensinh-nd1 .card:nth-child(4) h5').click(function(event) {
 		$('.tuyensinh-nd1 #accordion .card:nth-child(4) a img').toggleClass('xoay');		
 	});
 	// ----END-----

 	// Hieu ung click chuot trang tuyen dung.html
 	$('.tuyendung-nd1 .card:nth-child(1) h5').click(function(event) {
 		$('.tuyendung-nd1 #accordion .card:nth-child(1) a img').toggleClass('xoay');		
 	});
 	$('.tuyendung-nd1 .card:nth-child(2) h5').click(function(event) {
 		$('.tuyendung-nd1 #accordion .card:nth-child(2) a img').toggleClass('xoay');		
 	});
 	$('.tuyendung-nd1 .card:nth-child(3) h5').click(function(event) {
 		$('.tuyendung-nd1 #accordion .card:nth-child(3) a img').toggleClass('xoay');		
 	});
 	$('.tuyendung-nd1 .card:nth-child(4) h5').click(function(event) {
 		$('.tuyendung-nd1 #accordion .card:nth-child(4) a img').toggleClass('xoay');		
 	});
 	// ----END-----

 	// khoi ngay sinh cua trang tuyen sinh.html
 	var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

	for (i = new Date().getFullYear(); i > 1900; i--){
	    $('.years').append($('<option />').val(i).html(i));
	}
	    
	for (i = 1; i < 13; i++){
	    $('.months').append($('<option />').val(i).html(i));
	}
	 updateNumberOfDays(); 
	    
	$('.years, .months').on("change", function(){
	    updateNumberOfDays(); 
	});

	function updateNumberOfDays(){
	    $('.days').html('');
	    month=$('.months').val();
	    year=$('.years').val();
	    days=daysInMonth(month, year);

	    for(i=1; i < days+1 ; i++){
	            $('.days').append($('<option />').val(i).html(i));
	    }
	    $('#message').html(monthNames[month-1]+" in the year "+year+" has <b>"+days+"</b> days");
	}

	function daysInMonth(month, year) {
	    return new Date(year, month, 0).getDate();
	}
 	// ---END---

 	// Hieu ung click chuot nut "dang ky hoc thu"
 	$('.home-nd1 .nut-to, .home-nd3 .nut-to').click(function(event) {
        $('body').animate({scrollTop: $('.home-nd6').offset().top-70}, 1500);
        return false;
    });

})  
 