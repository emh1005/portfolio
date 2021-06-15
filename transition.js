$(document).ready(function () {
/*	var animat = function (callback) {
	$('.img').animate({transform: 4}, {duration:500 ,easing:'linear',
		step: function(now, fx) {
			$(this).css('transform','scale('+now+')')}
		})
	$('.tag, .title, .line, .view').animate({
			opacity: '0'
		}, 300);

	$('.header').animate({
			opacity: '0'
		}, 1000);

	$('.img').animate({
			opacity: '0'
		}, 300);
	if(!!callback) callback();
};*/


$('.sep>a').click(function(e) {
	e.preventDefault();
	//var url = $(e.currentTarget).attr('href');
	var url = $(this).attr('href');
	$(this).find('.img').animate({transform: 4}, {duration:500 ,easing:'linear',
		step: function(now, fx) {
			$(this).css('transform','scale('+now+')')}
		})
	$(this).find('.tag, .title, .line, .view').animate({
			opacity: '0'
		}, 300);

	$('.header').fadeOut(1000);
	/*animate({
			opacity: '0'
		}, 1000);*/

	$(this).find('.img').animate({
			opacity: '0'
		}, 300);

	setTimeout(function() {
	window.location.href= url';
	}, 1200);
	
});
  	});
