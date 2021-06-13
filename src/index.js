const { rangeFilter, listFriends } = require('./utils')
const path = require('path')
const express = require('express')

const app = express()
const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, '../public/')

app.use(express.static(publicPath))

//Range-filter API
app.get('/range-filter', (req, res) => {
    const range = req.query.range
    res.send(rangeFilter(range))
})

// Friends-List API 
app.get('/friends-list', (req, res) => {
    res.send(listFriends())
})


app.listen(port, () => {
    console.log('Serving on', port);
})
