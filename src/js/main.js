import $ from 'jquery'; // jQuery import
window.jQuery = $;
import addFlexSlider from './jquery.flexslider'
import {amazonScroller} from './jquery.flexslider'

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

amazonScroller($)
$(function() {

	$("#amazon_scroller2").amazon_scroller({
		scroller_title_show: 'disable',
		scroller_time_interval: '3000',
		scroller_window_background_color: "none",
		scroller_window_padding: '10',
		scroller_border_size: '0',
		scroller_border_color: '#CCC',
		scroller_images_width: '100',
		scroller_images_height: '80',
		scroller_title_size: '12',
		scroller_title_color: 'black',
		scroller_show_count: '20',
		directory: 'images'
	});

});