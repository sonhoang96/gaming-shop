$('button.toggle').bind('click', function(event) {
	/* Act on the event */
	$('.bar').toggleClass('open');
});
const brand = document.querySelectorAll('#brand path');
for(let i = 0; i < brand.length; i++){
	console.log(`Letter ${i} is ${brand[i].getTotalLength()}`)
}