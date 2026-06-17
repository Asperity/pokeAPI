import express from "express";

async function main(){
    const pokemonID = Math.floor(Math.random()*1024)+1;
    const app = express();
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
    const data = await res.json();
    const pokemon = data;
    console.log(pokemon);

    app.get("/new" , (req,res) => {
        console.log("NEW GAME!!! You have 5 correct guesses!!");
    })
    
    app.get("/:hint", (req,res) => {
        const {hint} = req.params;
        const h = Number(hint);
    })

}
main();


