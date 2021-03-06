const container = document.querySelector('.container')

const getData = async () => {
    const response = await fetch('/friends-list')
    if (response.status !== 200) {
        throw new Error('Unable to fetch friends list.')
    }
    return response.json()
}


getData().then((friends) => {
    friends.forEach((friend) => {
        const friendEl = document.createElement('span')
        friendEl.classList.add('friend')
        friendEl.textContent = friend
        container.appendChild(friendEl)
    }).catch((e) => {
        console.log(e)
    })
})