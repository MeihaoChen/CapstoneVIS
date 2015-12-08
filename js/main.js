$(document).ready(init);

function init() {

	// var dashFile = {
	// 	'WhyImNotVotingForHillary': 'WhyImNotVotingForHillary',
	// 	'Hillary2016':'Hillary2016',
	// 	'HillaryClinton':'HillaryClinton',
	// 	'Hillary':'Hillary',
	// 	'tcot': 'tcot'
	// }

	drawCloud(d3.select('#word-cloud'));
	showReel(d3.select('#showReel'));
	checkBoxes(d3.select('#dashboard'));
	drawDash(d3.select('#dashboard'));
	drawHier(d3.select('#hier'));
	drawSunburst();
	lineGraph(d3.select('#lineGraph'));
	stackedArea(d3.select('#horizonGraph svg'));

	var pieFiles = {'hashtag':'data/hashCount.csv',
	                'geolocation':'data/locaCount.csv',
	                'source':'data/sourceCount.csv',
	                'user':'data/userCount.csv'}
	
	selectPie(pieFiles, d3.select('#pie1'));
	
	drawTable('data/result_tweet.txt',d3.select('#table'));
	slide(d3.select('#slider'),d3.select('#table'),d3.select('#sliderText'));

	$('.nav-sidebar').click(function() {
		$('.nav-sidebar').removeClass('active');
		$(this).addClass('active');
	});
}
