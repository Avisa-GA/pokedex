
// IMPORT EXPRESS
const express = require('express')
const app = express()
const port = 3000
const methodOverride = require('method-override')

// MIDDLEWARE
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(methodOverride('_method'))

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
app.post('/pokemon' ,(req, res) => {
     let name = req.body.name
     let image = req.body.img
     let type = req.body.type
     let hp = req.body.hp
     let attack = req.body.attack
     let defence = req.body.defence
     let spattack = req.body.spattack
     let spdefense = req.body.spdefense

     stats = {
        'hp': req.body.hp,
        'attack': req.body.attack,
        'defense': defence,
        'spattack': spattack,
        'spdefense': spdefense,
        'speed': speed
     }
 
      pokemons.push({
          'name': name,
          'image': image,
          'type': [type],
          'stats': {
              'hp': hp,
              'attack': attack,
              'defense': defence,
              'spattack': spattack,
              'spdefense': spdefense,
              'speed': speed
              
          }
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