// Scroll Percentage to draw svg line
let svg = document.getElementById('svg');
let line = document.getElementById('theLine');
let length = line.getTotalLength();
let dot1 = document.getElementById('dot1');
let dot2 = document.getElementById('dot2');
let dot3 = document.getElementById('dot3');
let dot4 = document.getElementById('dot4');
let dot5 = document.getElementById('dot5');
let dot6 = document.getElementById('dot6');
let dot7 = document.getElementById('dot7');

let sec1 = document.getElementById('section1');
let sec2 = document.getElementById('section2');
let sec3 = document.getElementById('section3');
let sec4 = document.getElementById('section4');
let sec5 = document.getElementById('section5');
let sec6 = document.getElementById('section6');
let sec7 = document.getElementById('section7');

line.style.strokeDasharray = length;

$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		items: 1,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		dots: false,
	});
	$('.owl-carousel').on('mousewheel', '.owl-stage', function (e) {
		console.log(e.deltaY);
		if (e.deltaY > 0) {
			$('.owl-carousel').trigger('next.owl');
		} else {
			$('.owl-carousel').trigger('prev.owl');
		}
		e.preventDefault();
	});
});

var owl = $('.owl-carousel');
owl.on('changed.owl.carousel', function (e) {
	console.log('current: ', e.relatedTarget.current());
	const current = e.relatedTarget.current();
	if (current === 0) {
		line.style.strokeDashoffset = 815.8134155273438;

		dot1.style.fill = 'rgb(0, 146, 255)';
		dot2.style.fill = 'rgba(255, 253, 253, 0.349)';
		dot3.style.fill = 'rgba(255, 253, 253, 0.349)';
		dot4.style.fill = 'rgba(255, 253, 253, 0.349)';
		dot5.style.fill = 'rgba(255, 253, 253, 0.349)';
		dot6.style.fill = 'rgba(255, 253, 253, 0.349)';
		dot7.style.fill = 'rgba(255, 253, 253, 0.349)';

		dot1.style.strokeWidth = '10px';
		dot1.style.stroke = 'rgb(0, 146, 255)';
		dot2.style.stroke = 'none';
		dot3.style.stroke = 'none';
		dot4.style.stroke = 'none';
		dot5.style.stroke = 'none';
		dot6.style.stroke = 'none';
		dot7.style.stroke = 'none';

		svg.style.background = '#5C00A0';
	} else if (current === 1) {
		line.style.strokeDashoffset = 682.6874990844726;

		dot2.style.fill = 'rgb(0, 146, 255)';
		dot3.style.fill = 'rgba(255, 253, 253, 0.349)';
		dot4.style.fill = 'rgba(255, 253, 253, 0.349)';
		dot5.style.fill = 'rgba(255, 253, 253, 0.349)';
		dot6.style.fill = 'rgba(255, 253, 253, 0.349)';
		dot7.style.fill = 'rgba(255, 253, 253, 0.349)';

		dot2.style.strokeWidth = '10px';
		dot2.style.stroke = 'rgb(0, 146, 255)';
		dot3.style.stroke = 'none';
		dot4.style.stroke = 'none';
		dot5.style.stroke = 'none';
		dot6.style.stroke = 'none';
		dot7.style.stroke = 'none';

		svg.style.background = '#4918C5';
	} else if (current === 2) {
		line.style.strokeDashoffset = 540.2909756469727;

		dot2.style.fill = 'rgb(0, 146, 255)';
		dot3.style.fill = 'rgb(0, 146, 255)';
		dot4.style.fill = 'rgba(255, 253, 253, 0.349)';
		dot5.style.fill = 'rgba(255, 253, 253, 0.349)';
		dot6.style.fill = 'rgba(255, 253, 253, 0.349)';
		dot7.style.fill = 'rgba(255, 253, 253, 0.349)';

		dot3.style.strokeWidth = '10px';
		dot3.style.stroke = 'rgb(0, 146, 255)';
		dot4.style.stroke = 'none';
		dot5.style.stroke = 'none';
		dot6.style.stroke = 'none';
		dot7.style.stroke = 'none';

		svg.style.background = '#162539';
	} else if (current === 3) {
		line.style.strokeDashoffset = 404.56928924560543;

		dot2.style.fill = 'rgb(0, 146, 255)';
		dot3.style.fill = 'rgb(0, 146, 255)';
		dot4.style.fill = 'rgb(0, 146, 255)';
		dot5.style.fill = 'rgba(255, 253, 253, 0.349)';
		dot6.style.fill = 'rgba(255, 253, 253, 0.349)';
		dot7.style.fill = 'rgba(255, 253, 253, 0.349)';

		dot4.style.strokeWidth = '10px';
		dot4.style.stroke = 'rgb(0, 146, 255)';
		dot5.style.stroke = 'none';
		dot6.style.stroke = 'none';
		dot7.style.stroke = 'none';

		svg.style.background = '#1A57BB';
	} else if (current === 4) {
		line.style.strokeDashoffset = 280.3431555175781;

		dot2.style.fill = 'rgb(0, 146, 255)';
		dot3.style.fill = 'rgb(0, 146, 255)';
		dot4.style.fill = 'rgb(0, 146, 255)';
		dot5.style.fill = 'rgb(0, 146, 255)';
		dot6.style.fill = 'rgba(255, 253, 253, 0.349)';
		dot7.style.fill = 'rgba(255, 253, 253, 0.349)';

		dot5.style.strokeWidth = '10px';
		dot5.style.stroke = 'rgb(0, 146, 255)';
		dot6.style.stroke = 'none';
		dot7.style.stroke = 'none';

		svg.style.background = '#05298D';
	} else if (current === 5) {
		line.style.strokeDashoffset = 144.62146911621096;

		dot2.style.fill = 'rgb(0, 146, 255)';
		dot3.style.fill = 'rgb(0, 146, 255)';
		dot4.style.fill = 'rgb(0, 146, 255)';
		dot5.style.fill = 'rgb(0, 146, 255)';
		dot6.style.fill = 'rgb(0, 146, 255)';
		dot7.style.fill = 'rgba(255, 253, 253, 0.349)';

		dot6.style.strokeWidth = '10px';
		dot6.style.stroke = 'rgb(0, 146, 255)';
		dot7.style.stroke = 'none';

		svg.style.background = '#DC3545';
	} else if (current === 6) {
		line.style.strokeDashoffset = 0;

		dot2.style.fill = 'rgb(0, 146, 255)';
		dot3.style.fill = 'rgb(0, 146, 255)';
		dot4.style.fill = 'rgb(0, 146, 255)';
		dot5.style.fill = 'rgb(0, 146, 255)';
		dot6.style.fill = 'rgb(0, 146, 255)';
		dot7.style.fill = 'rgb(0, 146, 255)';
		dot7.style.strokeWidth = '10px';
		dot7.style.stroke = 'rgb(0, 146, 255)';

		svg.style.background = '#0B944D';
	}
});
