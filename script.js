const inputForm = document.querySelector('#input-form')
const generateBtn = document.querySelector('#generate-btn')
const inputFloors = document.querySelector('#input-floors')
const inputLifts = document.querySelector('#input-lifts')
const floorsSection = document.querySelector('#floors-section')

generateBtn.addEventListener('click', (e) => {
	e.preventDefault()
	const totalFloors = parseInt(inputFloors.value)
	const totalLifts = parseInt(inputLifts.value)

	if(!totalFloors || !totalLifts) return alert("Invalid input for Lifts or Floors")

	inputForm.classList.add('hidden')
	floorsSection.classList.remove('hidden')


	//generating markup for floors
	const floorMarkup = (i) => {
		return `
				<h3>FLOOR: ${i}</h3>
				<div class="floor" id="floor-${i}">
					<div class="btns">
						<button class="btn " id="up-btn-${i}">Call</button>
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
						<div class="door" id="door-left-${i}"></div>	
						<div class="door" id="door-right-${i}"></div>	
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

				if(freeLifts.length){
					const liftNumber = freeLifts.shift()
					busyLifts.push(liftNumber) //-empty

					console.log("after pushing busyLifts: ", busyLifts)

					const lift = document.querySelector(`#lift-${liftNumber}`)
					const leftDoor = document.querySelector(`#door-left-${liftNumber}`)
					const rightDoor = document.querySelector(`#door-right-${liftNumber}`)

					lift.style.transition = 'transform 2.5s ease'
					lift.style.transform = `translateY(-${115 * btnId}px)`

					setTimeout(() => {
						leftDoor.style.transform = `translateX(-40px)`
						rightDoor.style.transform = `translateX(40px)`
					}, 2000)



					setTimeout(()=> {
						busyLifts.length ? freeLifts.push(busyLifts.shift()) :  console.log("bah blah")
						
						console.log('Busy lifts: ', busyLifts)
						console.log('Free lifts: ', freeLifts)

						leftDoor.style.transform = `translateX(0px)`
						rightDoor.style.transform = `translateX(0px)`
					}, 5000)
				}
				else if(!freeLifts.length && !busyLifts.length < 1) {

					alert('All lifts are busy, please wait for a while')
					freeLifts.push(busyLifts.shift())
				}

			}
		})
	})

})
