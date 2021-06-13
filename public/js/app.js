const rangeSlider = document.querySelector('.range')
const slideValue = document.querySelector('.sliderValue')
const rangeInput = document.querySelector('#range-input')
const peopleListEl = document.querySelector('.people-list')
const selectedRange = document.querySelector('.selected-range')


const getData = async (value) => {
    const response = await fetch(`/range-filter?range=${value}`)
    if (response.status !== 200) {
        throw new Error('Unable to fetch data!!')
    }
    return response.json()
}

selectedRange.textContent = `Selected Range: $0`

rangeInput.oninput = (() => {

    var value = rangeInput.value || 0;

    selectedRange.textContent = `Selected Range: $${value}`

    getData(value).then((people) => {
        peopleListEl.innerHTML = ''
        people.forEach((person) => {
            const peopleEl = document.createElement('div')
            peopleEl.classList.add('people-span')
            const personName = document.createElement('span')
            personName.classList.add('name')
            const personBalance = document.createElement('span')
            personBalance.classList.add('balance')

            personName.textContent = person.name
            personBalance.textContent = person.balance

            peopleEl.appendChild(personName)
            peopleEl.appendChild(personBalance)
            peopleListEl.appendChild(peopleEl)

        })
    })

});

