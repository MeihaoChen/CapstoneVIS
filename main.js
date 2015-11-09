$(document).ready(init);

function init() {
	drawCloud(d3.select('#word-cloud'));
	drawHier(d3.select('#hier'));

	$('.btn').click(function() {
		$('.btn').removeClass('active');
		$(this).addClass('active');
	});
}
