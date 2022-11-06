const floorsSection = document.querySelector('#floors-section')

const floors = 3;
const lifts = 3;

const floorMarkup = (i) => {
	const ml = 130 * i;
	console.log(ml)
	return `
			<h3>FLOOR: ${i}</h3>
			<div class="floor">
				<div class="btns">
					<button class="btn btn-yellow" id="up">Up</button>
					<button class="btn btn-blue" id="down">Down</button>
				</div>

				<div class="lifts">
					<div class="lift" style="margin-left: ${ml}px;">
						<div class="door">
							
						</div>
					</div>
				</div>
			</div>
		`
}

for (let i = 1; i <= floors; i++) {
	floorsSection.insertAdjacentHTML('afterbegin', floorMarkup(i))
}