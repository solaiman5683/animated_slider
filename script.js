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

// The start position of the drawing
line.style.strokeDasharray = length;

// Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
line.style.strokeDashoffset = length;

const leftSection = document.getElementById('sec_left');
const contentSection = document.getElementById('sec_right');
const text = document.getElementById('scrollText');
contentSection.addEventListener('scroll', () => {
	const scrollPercent =
		contentSection.scrollTop /
		(contentSection.scrollHeight - contentSection.clientHeight);

	const draw = length - length * scrollPercent;
	console.log(draw);
	// Reverse the drawing (when scrolling upwards)
	line.style.strokeDashoffset = draw;

	// Change the position of the SVG Image (when scrolling)
	if (draw <= 815.8134155273438 && draw > 682.6874990844726) {
		text.className = ' ';
		text.classList.add('sec1');
		leftSection.className = 'col-md-5 sec-left1';

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
		leftSection.style.background = '#5C00A0';

		sec1.classList.add('active');
		sec2.classList.remove('active');
		sec3.classList.remove('active');
		sec4.classList.remove('active');
		sec5.classList.remove('active');
		sec6.classList.remove('active');
		sec7.classList.remove('active');

		text.innerHTML = `
				<h2>2.5M Downloads</h2>
				<h5>on AppStore and PlayStore</h5>`;

		leftSection.innerHTML = `
		<div class="h-100 d-md-flex align-items-end p-5 text-light">
		<div>
			<img src="images/awards.png" alt="" class="w-50 mb-3" />
			<h1 class="text-bolder display-1">ABC 123</h1>
			<h3 class="text-dim w-75">
				We are the best Web Developer company in the world!
			</h3>
			<div
				class="
					mt-5
					d-md-flex
					justify-content-between
					align-items-center
				"
			>
				<p>
					<a href="#" class="text-decoration-none text-light">
						<span>View Case Studies </span>
						<i class="fas fa-long-arrow-alt-right ms-2"></i>
					</a>
				</p>
				<p>
					<a
						href="#section2"
						class="text-decoration-none text-light fs-5"
					>
						<span>Skip</span>
					</a>
				</p>
			</div>
		</div>
	</div>`;
	} else if (draw <= 682.6874990844726 && draw > 543.8756103515625) {
		text.className = ' ';
		text.classList.add('sec2');
		leftSection.className = 'col-md-5 sec-left2';

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
		leftSection.style.background = '#4918C5';

		sec1.classList.remove('active');
		sec2.classList.add('active');
		sec3.classList.remove('active');
		sec4.classList.remove('active');
		sec5.classList.remove('active');
		sec6.classList.remove('active');
		sec7.classList.remove('active');

		text.innerHTML = `
				<h4>The Next Big</h4>
				<h2>Block Chain </h2>
				<h5>Revolution</h5>`;

		leftSection.innerHTML = `
				<div class="h-100 d-md-flex align-items-end p-5 text-light">
				<div>
					<img src="images/awards.png" alt="" class="w-50 mb-3" />
					<h1 class="text-bolder display-1">ABC 456</h1>
					<h3 class="text-dim w-75">
						We are the best Web Developer company in the world!
					</h3>
					<div
						class="
							mt-5
							d-md-flex
							justify-content-between
							align-items-center
						"
					>
						<p>
							<a href="#" class="text-decoration-none text-light">
								<span>View Case Studies </span>
								<i class="fas fa-long-arrow-alt-right ms-2"></i>
							</a>
						</p>
						<p>
							<a
								href="#section3"
								class="text-decoration-none text-light fs-5"
							>
								<span>Skip</span>
							</a>
						</p>
					</div>
				</div>
			</div>`;
	} else if (draw <= 543.8756103515625 && draw > 407.9067077636719) {
		text.className = ' ';
		text.classList.add('sec3');
		leftSection.className = 'col-md-5 sec-left3';

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
		leftSection.style.background = '#162539';

		sec1.classList.remove('active');
		sec2.classList.remove('active');
		sec3.classList.add('active');
		sec4.classList.remove('active');
		sec5.classList.remove('active');
		sec6.classList.remove('active');
		sec7.classList.remove('active');

		text.innerHTML = `
				<h4>Redefining</h4>
				<h2>UX Strategy</h2>
				<h5>and UI design</h5>`;

		leftSection.innerHTML = `
				<div class="h-100 d-md-flex align-items-end p-5 text-light">
				<div>
					<h1 class="text-bolder display-1">ABC 789</h1>
					<h3 class="text-dim w-75">
						We are the best Web Developer company in the world!
					</h3>
					<div
						class="
							mt-5
							d-md-flex
							justify-content-between
							align-items-center
						"
					>
						<p>
							<a href="#" class="text-decoration-none text-light">
								<span>View Case Studies </span>
								<i class="fas fa-long-arrow-alt-right ms-2"></i>
							</a>
						</p>
						<p>
							<a
								href="#section4"
								class="text-decoration-none text-light fs-5"
							>
								<span>Skip</span>
							</a>
						</p>
					</div>
				</div>
			</div>`;
	} else if (draw <= 407.9067077636719 && draw > 286.975840485041) {
		text.className = ' ';
		text.classList.add('sec4');
		leftSection.className = 'col-md-5 sec-left4';

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
		leftSection.style.background = '#1A57BB';

		sec1.classList.remove('active');
		sec2.classList.remove('active');
		sec3.classList.remove('active');
		sec4.classList.add('active');
		sec5.classList.remove('active');
		sec6.classList.remove('active');
		sec7.classList.remove('active');

		text.innerHTML = `
				<h4>Stay Connected</h4>
				<h2>With Social Media</h2>
				<h5>and Get Notified</h5>`;

		leftSection.innerHTML = `
				<div class="h-100 d-md-flex align-items-end p-5 text-light">
				<div>
					<h1 class="text-bolder display-1">ABC 1224</h1>
					<h3 class="text-dim w-75">
						We are the best Web Developer company in the world!
					</h3>
					<div
						class="
							mt-5
							d-md-flex
							justify-content-between
							align-items-center
						"
					>
						<p>
							<a href="#" class="text-decoration-none text-light">
								<span>View Case Studies </span>
								<i class="fas fa-long-arrow-alt-right ms-2"></i>
							</a>
						</p>
						<p>
							<a
								href="#section5"
								class="text-decoration-none text-light fs-5"
							>
								<span>Skip</span>
							</a>
						</p>
					</div>
				</div>
			</div>`;
	} else if (draw <= 286.975840485041 && draw > 142.2347506334155) {
		text.className = ' ';
		text.classList.add('sec5');
		leftSection.className = 'col-md-5 sec-left5';

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
		leftSection.style.background = '#05298D';

		sec1.classList.remove('active');
		sec2.classList.remove('active');
		sec3.classList.remove('active');
		sec4.classList.remove('active');
		sec5.classList.add('active');
		sec6.classList.remove('active');
		sec7.classList.remove('active');

		text.innerHTML = `
				<h4>Redefining</h4>
				<h2>UX Strategy</h2>
				<h5>and UI design</h5>`;

		leftSection.innerHTML = `
				<div class="h-100 d-md-flex align-items-end p-5 text-light">
				<div>
					<h1 class="text-bolder display-1">ABC 5586</h1>
					<h3 class="text-dim w-75">
						We are the best Web Developer company in the world!
					</h3>
					<div
						class="
							mt-5
							d-md-flex
							justify-content-between
							align-items-center
						"
					>
						<p>
							<a href="#" class="text-decoration-none text-light">
								<span>View Case Studies </span>
								<i class="fas fa-long-arrow-alt-right ms-2"></i>
							</a>
						</p>
						<p>
							<a
								href="#section6"
								class="text-decoration-none text-light fs-5"
							>
								<span>Skip</span>
							</a>
						</p>
					</div>
				</div>
			</div>`;
	} else if (draw <= 142.2347506334155 && draw > 0) {
		text.className = ' ';
		text.classList.add('sec6');
		leftSection.className = 'col-md-5 sec-left6';

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
		leftSection.style.background = '#DC3545';

		sec1.classList.remove('active');
		sec2.classList.remove('active');
		sec3.classList.remove('active');
		sec4.classList.remove('active');
		sec5.classList.remove('active');
		sec6.classList.add('active');
		sec7.classList.remove('active');

		text.innerHTML = `
				<h4>Redefining</h4>
				<h2>UX Strategy</h2>
				<h5>and UI design</h5>`;

		leftSection.innerHTML = `
				<div class="h-100 d-md-flex align-items-end p-5 text-light">
				<div>
					<h1 class="text-bolder display-1">ABC 786</h1>
					<h3 class="text-dim w-75">
						We are the best Web Developer company in the world!
					</h3>
					<div
						class="
							mt-5
							d-md-flex
							justify-content-between
							align-items-center
						"
					>
						<p>
							<a href="#" class="text-decoration-none text-light">
								<span>View Case Studies </span>
								<i class="fas fa-long-arrow-alt-right ms-2"></i>
							</a>
						</p>
						<p>
							<a
								href="#section7"
								class="text-decoration-none text-light fs-5"
							>
								<span>Skip</span>
							</a>
						</p>
					</div>
				</div>
			</div>`;
	} else if (draw === 0) {
		text.className = ' ';
		text.classList.add('sec7');
		leftSection.className = 'col-md-5 sec-left7';

		dot2.style.fill = 'rgb(0, 146, 255)';
		dot3.style.fill = 'rgb(0, 146, 255)';
		dot4.style.fill = 'rgb(0, 146, 255)';
		dot5.style.fill = 'rgb(0, 146, 255)';
		dot6.style.fill = 'rgb(0, 146, 255)';
		dot7.style.fill = 'rgb(0, 146, 255)';
		dot7.style.strokeWidth = '10px';
		dot7.style.stroke = 'rgb(0, 146, 255)';

		svg.style.background = '#0B944D';
		leftSection.style.background = '#0B944D';

		sec1.classList.remove('active');
		sec2.classList.remove('active');
		sec3.classList.remove('active');
		sec4.classList.remove('active');
		sec5.classList.remove('active');
		sec6.classList.remove('active');
		sec7.classList.add('active');

		text.innerHTML = `
				<h4>World</h4>
				<h2>Biggest Classified </h2>
				<h5>East Asia Countries</h5>`;

		leftSection.innerHTML = `
				<div class="h-100 d-md-flex align-items-end p-5 text-light">
				<div>
					<img src="images/entrepreneur.png" alt="" class="w-50 mb-3" />
					<h1 class="text-bolder display-1">ABC 999</h1>
					<h3 class="text-dim w-75">
						We are the best Web Developer company in the world!
					</h3>
					<div
						class="
							mt-5
							d-md-flex
							justify-content-between
							align-items-center
						"
					>
						<p>
							<a href="#" class="text-decoration-none text-light">
								<span>View Case Studies </span>
								<i class="fas fa-long-arrow-alt-right ms-2"></i>
							</a>
						</p>
						<p>
							<a
								href="#section1"
								class="text-decoration-none text-light fs-5"
							>
								<span>Skip</span>
							</a>
						</p>
					</div>
				</div>
			</div>`;
	}
});
