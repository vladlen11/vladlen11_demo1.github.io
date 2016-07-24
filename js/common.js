$(document).ready(function() {

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({type:"inline",midClick: true});

	$(".top_text h1").animated("fadeInDown","fadeOutUp");

	$(".top_text p, .section_header").animated("fadeInUp","fadeOutDown");

	$(".animation_1").animated("flipInY","flipOutY");
	//equalheight - одинаковая высота колонок
	//Пример списка элементов:
	//var eqElement = ".cat_container > div, .home_news > div"
	var eqElement = ".list_content>ul>li, .item_steps"
	$(window).load(function(){equalheight(eqElement);}).resize(function(){equalheight(eqElement);});



		function heightDetect(){
		$(".main_head").css("height", $(window).height());
	};
		heightDetect();
	$(window).resize(function(){
		heightDetect();
	});

	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href","#work_" + i);
		$(this).find(".podrt_descr").attr("id","work_" + i);
	});

	$("input, select, textarea").not("[type=submit]").jqBootstrapValidation();

	$("top_mnu ul a").mPageScroll2id();

	$(document).ready(function() { function heightDetect() { 
		$(".main_head").css("height", $(window).height(100%));
		$(".top_wrapper").css("height", $(window).height()); // вот эту строку вставте так же 
	}; heightDetect(); 
		$(window).resize(function() 
	{ 
		heightDetect(); 
	}); 
});

});





$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});