const floorsSection = document.querySelector('#floors-section')

const floors = 3;
const lifts = 3;

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

for (let i = 1; i <= floors; i++) {
	floorsSection.insertAdjacentHTML('afterbegin', floorMarkup(i))
}

for (let i = 1; i <= lifts; i++) {
	document.querySelector('#floor-1').insertAdjacentHTML('beforeend', liftMarkup(i))
}

document.querySelector('#up-btn-2').addEventListener('click', (e) => {
	e.preventDefault()
	console.log("btn clicked")
	const lift = document.querySelector('#lift-1')
	lift.style.transition = 'transform 2s'
	lift.style.transform = 'translateY(-152px)'
})

document.querySelector('#up-btn-3').addEventListener('click', (e) => {
	e.preventDefault()
	console.log("btn clicked")
	const lift = document.querySelector('#lift-2')
	lift.style.transition = 'transform 2s'
	lift.style.transform = 'translateY(-292px)'
})

document.querySelector('#down-btn-3').addEventListener('click', (e) => {
	e.preventDefault()
	console.log("btn clicked")
	const lift = document.querySelector('#lift-2')
	lift.style.transition = 'transform 2s'
	lift.style.transform = 'translateY(0px)'
})

const allBtns = document.querySelector('.btns')
allBtns.addEventListener('click', (e) => {
	console.log(e.target.closest('.btn'))
})