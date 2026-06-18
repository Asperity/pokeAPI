import express from "express";

import Pokedex from 'pokedex-promise-v2';
const pokemonGuess = new Pokedex();

let randPokemon;
const PORT = 3000;
    const pokemonID = Math.floor(Math.random()*1024)+1;
    const app = express();
    //const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
    // const data = await res.json();
    // const pokemon = data;
    // console.log(pokemon);
    app.get("/", (req,res) => {
        res.send("Welcome to our Pokemon Guessing game!!")
    })
    app.get("/new" , async  (req,res) => {
        randPokemon = await pokemonGuess.getPokemonByName(pokemonID);
        res.send("NEW GAME!!! You have 5 correct guesses!!");
    })
    app.get("/guess",(req,res) => {
        //Guessing function here?
        res.send("Guess that Pokemon!!");

        //Can guess name (correct name automatically wins, starts new game)
        // Guess type of pokemon
        //Guess generation of pokemon
        //Guess what moves pokemon can know
    } )
    
    app.get("/:hint", (req,res) => {
        const {hint} = req.params;
        const h = Number(hint);
    })

app.listen(PORT, () => {
    console.log("Server started on port: " + PORT)
})


