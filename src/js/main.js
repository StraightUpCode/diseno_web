import $ from 'jquery'; // jQuery import
window.jQuery = $;
import addFlexSlider from './jquery.flexslider'

addFlexSlider($)

$(document).ready(function(){

	$('.flexslider').flexslider({
		prevText: "",
		nextText: "",
		pauseOnAction: false,
		slideshowSpeed: 3000,
		touch: true
	});

});