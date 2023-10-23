const price = document.querySelector('#price')
const people = document.querySelector('#people')
const options = document.querySelectorAll('option')
const button = document.querySelector('.count')
const error = document.querySelector('.error')
const result = document.querySelector('.cost')
const tip = document.querySelector('#tip')
const costInfo = document.querySelector('.cost-info')
const comment = document.querySelector('.comment')

const checkStatus = () => {
	const newPrice = parseFloat(price.value)
	const newPeople = parseInt(people.value)
	const newTip = parseFloat(tip.value)

	if (price.value == '' || people.value == '' || tip.value == 0 ) {
		error.textContent = 'Oops! Uzupełnij wszystkie pola'
		costInfo.style.display = 'none'
		comment.textContent = ''
	} else {
		const calculate = () => {
			let finalPrice = (newPrice + newPrice * newTip) / newPeople

			result.textContent = finalPrice.toFixed(2)
			error.textContent = ''
			costInfo.style.display = 'block'

			const finalComment = () => {
				if (finalPrice <= 50 && finalPrice !== 0){
					comment.style.display = 'block'
					comment.textContent = 'Oh ho, całkiem przystępnie! Można namiary na miejscówke? 😎'
				} else if (finalPrice >= 50 && finalPrice <= 100) {
					comment.style.display = 'block'
					comment.textContent = 'W miare opłacalnie, raz na jakis czas można zaszaleć! 🥳'
				} else if (finalPrice >= 100 && finalPrice <= 200) {
					comment.textContent = 'Ojej, szalona noc! Raz sie żyje 🎉'
					comment.style.display = 'block'
				} else if (finalPrice >200) {
					comment.textContent = 'Oj dużo dużo, można było wziąć tańsze wino 😬'
					comment.style.display = 'block'
				}
			}

			finalComment()
		}

		calculate()
	}
}

button.addEventListener('click', checkStatus)
