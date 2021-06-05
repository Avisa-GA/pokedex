// IMPORT EXPRESS
const express = require('express')
const app = express()
const port = 3000
const methodOverride = require('method-override')
const path = require('path');

// MIDDLEWARE
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())
app.use(methodOverride('_method'))
app.use('/static', express.static(path.join(__dirname, 'public')))

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
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs')
})

// CREATE
app.post('/pokemon', (req, res) => {

    pokemons.push({
        'name': req.body.name,
        'image': req.body.img,
        'type': [req.body.type],
        'hp': req.body.hp,
        'attack': req.body.attack,
        'defense': req.body.defence,
        'spattack': req.body.spattack,
        'spdefense': req.body.spdefense,
        'speed': req.body.speed

    })
    res.redirect('/pokemon')
})
// SHOW
app.get('/pokemon/:index', (req, res) => {
    res.render('show.ejs', {
        pokemon: pokemons[req.params.index]
    })
})

// DELETE
app.delete('/pokemon/:index', (req, res) => {
    pokemons.splice(req.params.index, 1)
    res.redirect('/pokemon')
})

// EDIT
app.get('/pokemon/:index/edit', (req, res) => {
    res.render('edit.ejs', {
        pokemon: pokemons[req.params.index],
        x: req.params.index
    })
})

// UPDATE
app.put('/pokemon/:index', (req, res) => {
    pokemons[req.params.index] = req.body
    res.redirect('/pokemon')
})

// LISTEN TO ROUTE
app.listen(port, () => {
    console.log('listening to port: ', port)
})