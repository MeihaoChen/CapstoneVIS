$(document).ready(init);

function init() {
	drawCloud(d3.select('#word-cloud'));
	showReel(d3.select('#showReel'));
	drawDash(d3.select('#dashboard'));
	drawHier(d3.select('#hier'));
	drawSunburst();
	drawPie('data/hashCount.csv', d3.select('#pie1'));

	$('.btn').click(function() {
		$('.btn').removeClass('active');
		$(this).addClass('active');
	});
}
