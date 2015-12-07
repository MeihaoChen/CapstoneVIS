$(document).ready(init);

function init() {
	drawCloud(d3.select('#word-cloud'));
	showReel(d3.select('#showReel'));
	checkBoxes(d3.select('#dashboard'));
	drawDash(d3.select('#dashboard'));
	drawHier(d3.select('#hier'));
	drawSunburst();
	drawTable('data/result_tweet.txt',d3.select('#table'));
	slide(d3.select('#slider'),d3.select('#table'),d3.select('#sliderText'));

	var pieFiles = {'hashtag':'data/hashCount.csv',
	                'geolocation':'data/locaCount.csv',
	                'source':'data/sourceCount.csv',
	                'user':'data/userCount.csv'}	
	selectPie(pieFiles, d3.select('#pie1'));

	$('#b1').click(function(){
		$('.placeholders').slideUp();
		$('#plot1').slideDown();
	});
	$('#b2').click(function(){
		$('.placeholders').slideUp();
		$('#plot2').slideDown();
	});
	$('#b3').click(function(){
		$('.placeholders').slideUp();
		$('#plot3').slideDown();
	});
	$('#b4').click(function(){
		$('.placeholders').slideUp();
		$('#plot4').slideDown();
	});
	$('#b5').click(function(){
		$('.placeholders').slideUp();
		$('#plot5').slideDown();
	});
	$('#b6').click(function(){
		$('.placeholders').slideUp();
		$('#plot6').slideDown();
	});
	$('#b7').click(function(){
		$('.placeholders').slideUp();
		$('#plot7').slideDown();
	});

	
	

	$('.nav-sidebar').click(function() {
		$('.nav-sidebar').removeClass('active');
		$(this).addClass('active');
	});
}


