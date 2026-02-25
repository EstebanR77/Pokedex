import Pokemon from "../models/Pokemon.js";

const API_URL = "https://pokeapi.co/api/v2/pokemon/";

export async function fetchPokemon(id) {
    try {
        const response = await fetch(`${API_URL}${id}`);
        const data = await response.json();

        const types = data.types.map(t => t.type.name);
        const abilities = data.abilities.map(a => a.ability.name);
        const stats = data.stats.map(s => ({
            name: s.stat.name,
            base: s.base_stat
        }));

        return new Pokemon(
            data.id, data.name, types,
            data.sprites.other["official-artwork"].front_default,
            data.height, data.weight, abilities, stats
        );
    } catch (e) { console.error(e); }
}