const floorsSection = document.querySelector('#floors-section')

const floors = 3;
const totalLifts = 3;

const floorMarkup = (i) => {
	return `
			<h3>FLOOR: ${i}</h3>
			<div class="floor" id="floor-${i}">
				<div class="btns">
					<button class="btn btn-yellow" id="up-btn-${i}">Up</button>
					<button class="btn btn-blue" id="down-btn-${i}">Down</button>
				</div>
			</div>
		`
}

const liftMarkup = (i) => {
	return `
		<div class="lifts">
			<div class="lift" id="lift-${i}">
				<div class="doors">
					<div class="door-left"></div>	
					<div class="door-right"></div>	
				</div>
			</div>
		</div>
	`
}

for (let i = 0; i < floors; i++) {
	floorsSection.insertAdjacentHTML('afterbegin', floorMarkup(i))
}

for (let i = 0; i < totalLifts; i++) {
	document.querySelector('#floor-0').insertAdjacentHTML('beforeend', liftMarkup(i))
}

//-----------------------picking lift-------------------------------
const freeLifts = []
const busyLifts = []

for (i = 0; i < totalLifts; i++) {
	freeLifts[i] = i
}

console.log(freeLifts)

const allBtns = document.querySelectorAll('.btns')
allBtns.forEach(btn => {
	btn.addEventListener('click', (e) => {
		e.preventDefault()
		const btn = e.target.closest('.btn')
		const btnId = btn.id[btn.id.length-1];
		if (btn.id.includes('up')) {

			const liftNumber = freeLifts.shift()
			busyLifts.push(liftNumber)
			console.log(freeLifts, busyLifts)

			const lift = document.querySelector(`#lift-${liftNumber}`)
			lift.style.transition = 'transform 2s'
			lift.style.transform = `translateY(-${152 * btnId}px)`

		} else if (btn.id.includes('down')) {
			console.log("down btn clicked")
			const liftNumber = busyLifts.shift()
			freeLifts.push(liftNumber)
			console.log(btnId)

			const lift = document.querySelector(`#lift-${liftNumber}`)
			lift.style.transition = 'transform 2s'
			lift.style.transform = `translateY(0)`
		}
	})
})
