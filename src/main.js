import { fetchPokemon } from "./services/api.js";
import { showPokemon } from "./ui/ui.js";

let currentId = 1;

async function load(id) {
    const pokemon = await fetchPokemon(id);
    if (pokemon) showPokemon(pokemon);
}

document.getElementById("next-btn").onclick = () => load(++currentId);
document.getElementById("prev-btn").onclick = () => {
    if (currentId > 1) load(--currentId);
};

load(currentId);