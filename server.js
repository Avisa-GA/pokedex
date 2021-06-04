
// IMPORT EXPRESS
const express = require('express')
const app = express()
const port = 3000

// ROUTE TO START
app.get('/', (req, res) => {
    res.send('Welcome to Pokedex')
})



// LISTEN TO ROUTE
app.listen(port, () => {
    console.log('listening to port: ', port)
})