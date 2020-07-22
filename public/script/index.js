$('button.toggle').bind('click', function(event) {
	/* Act on the event */
	event.preventDefault();
	$('.bar').toggleClass('open');
	$('button.toggle').toggleClass('active');

	//change icon when click open Menu bar
	if($('.bar').hasClass('open')){
		$('button.toggle i').css('opacity', '0').remove();
		$('button.toggle')
		.append(`<i class="fa fa-times" aria-hidden="true"></i>`)
		.find('i')
		.css({'opacity' : 0})
		.animate({opacity : 1}, 500)
	}else{
		$('button.toggle i').css('opacity', '0').remove();
		$('button.toggle')
		.append(`<i class="fa fa-bars" aria-hidden="true"></i>`)
		.find('i')
		.css({'opacity' : 0})
		.animate({opacity : 1}, 500)
	}
});

//active item on Menu
$('ul.list-menu li.nav-item[id]').on('click', function(event) {
	$('ul.list-menu li.nav-item[id]').removeClass('active')
	$(this).addClass('active');
	//toggle Class actice on li#news
	if($('li.nav-item#news').hasClass('active')){
		$('ul.list-news-menu').addClass('open');
	}else{
		$('ul.list-news-menu').removeClass('open');
	}
});

//function pause or play video
$('#myBtn').bind('click', function() {
	let video = $('#myVideo');
	let remote = $('#myBtn');
	if(video[0].paused){
		video[0].play();
		remote.text('Pause');
	}else{
		video[0].pause();
		remote.text('Play');
	}
});

//scrollUp button
if($(window).scrollTop() <= 200){
	$('#scrollUp').css({
		opacity: 0,
		transition: '0.3s',
		'pointerEvents' : 'none'
	});
}else{
	$('#scrollUp').css({
		opacity: 1,
		transition: '0.3s',
		'pointerEvents' : 'visible'
	});
}

//hide or display scrollUp button when screen move
$(window).scroll(function(event) {
	if($(window).scrollTop() <= 200){
		$('#scrollUp').css({
			opacity: 0,
			transition: '0.3s',
			'pointerEvents' : 'none'
		});
	}else{
		$('#scrollUp').css({
			opacity: 1,
			transition: '0.3s',
			'pointerEvents' : 'visible'
		});
	}
});
//function of scrollUp button
$('#scrollUp').click(function(event) {
	//move to top
	$('html').stop().animate({
		scrollTop: 0
	}, 1000);
});