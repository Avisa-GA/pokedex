
// IMPORT EXPRESS
const express = require('express')
const app = express()
const port = 3000

// DATABASE
const pokemons = require('./models/pokemon.js')

// ROUTE TO START
app.get('/', (req, res) => {
    res.send('Welcome to Pokedex')
})

// INDEX
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
        allPokemon: pokemons
    })
})

// NEW

// CREATE

// SHOW
app.get('/pokemon/:index', (req, res) => {
    res.render('show.ejs', {
        pokemon: pokemons[req.params.index]
    })
})

// DELETE

// EDIT

// LISTEN TO ROUTE
app.listen(port, () => {
    console.log('listening to port: ', port)
})