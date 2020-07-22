$('button.toggle').bind('click', function(event) {
	/* Act on the event */
	event.preventDefault();
	$('.bar').toggleClass('open');
});
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
