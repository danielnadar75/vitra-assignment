const fs = require('fs')
const currency = require('currency.js')

// Load file from JSON data
function loadFile() {
    try {
        const data = fs.readFileSync('people.json')
        return JSON.parse(data)
    } catch (e) {
        return []
    }
}

// Filter the data by range
function rangeFilter(range) {
    const people = loadFile()

    const filteredPeople = people.filter((person) => {
        return currency(person.balance).value <= range
    })
    return filteredPeople
}


// Filter friends list of people - not active & less then $2k balance
function listFriends() {
    const people = loadFile()
    const friends = []

    const filteredPeople = people.filter((person) => {
        return person.isActive === false && currency(person.balance).value <= 2000
    })

    filteredPeople.forEach((person) => {
        person.friends.forEach((friend) => {
            friends.push(friend.name)
        })
    });

    return friends
}


module.exports = { rangeFilter, listFriends }