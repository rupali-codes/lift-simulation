const inputForm = document.querySelector('#input-form')
const generateBtn = document.querySelector('#generate-btn')
const inputFloors = document.querySelector('#input-floors')
const inputLifts = document.querySelector('#input-lifts')
const floorsSection = document.querySelector('#floors-section')

generateBtn.addEventListener('click', (e) => {
	e.preventDefault()
	const totalFloors = parseInt(inputFloors.value)
	const totalLifts = parseInt(inputLifts.value)

	inputForm.classList.add('hidden')
	floorsSection.classList.remove('hidden')


	//generating markup for floors
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

	//generating markup for lifts
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

	//putting floors 
	for (let i = 0; i < totalFloors; i++) {
		floorsSection.insertAdjacentHTML('afterbegin', floorMarkup(i))
	}

	//putting lifts
	for (let i = 0; i < totalLifts; i++) {
		document.querySelector('#floor-0').insertAdjacentHTML('beforeend', liftMarkup(i))
	}

	//picking and moving lifts
	const freeLifts = []
	const busyLifts = []

	for (i = 0; i < totalLifts; i++) {
		freeLifts[i] = i
	}

	const allBtns = document.querySelectorAll('.btns')
	allBtns.forEach(btn => {
		btn.addEventListener('click', (e) => {
			e.preventDefault()
			const btn = e.target.closest('.btn')
			const btnId = btn.id[btn.id.length-1];
			if (btn.id.includes('up')) {

				const liftNumber = freeLifts.shift()
				busyLifts.push(liftNumber)

				const lift = document.querySelector(`#lift-${liftNumber}`)
				lift.style.transition = 'transform 2s'
				lift.style.transform = `translateY(-${145 * btnId}px)`

			} else if (btn.id.includes('down')) {
				const liftNumber = busyLifts.shift()
				freeLifts.push(liftNumber)

				const lift = document.querySelector(`#lift-${liftNumber}`)
				lift.style.transition = 'transform 2s'
				lift.style.transform = `translateY(${0}px)`
			}
		})
	})

})
