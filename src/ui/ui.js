export function showPokemon(pokemon) {
   
    document.getElementById("pokemon-id").textContent = `#${String(pokemon.id).padStart(3, '0')}`;
    
    const img = document.getElementById("pokemon-img");
    img.src = pokemon.sprite;
    img.onclick = () => showModal(pokemon);

    document.getElementById("pokemon-name").textContent = pokemon.name;

    const typesDiv = document.querySelector(".types");
    typesDiv.innerHTML = "";
    pokemon.types.forEach(t => {
        const span = document.createElement("span");
        span.className = `type ${t}`;
        span.textContent = t;
        typesDiv.appendChild(span);
    });
}

function showModal(pokemon) {
    const modal = document.getElementById("pokemon-modal");
    document.getElementById("modal-name").textContent = pokemon.name.toUpperCase();
    document.getElementById("modal-img").src = pokemon.sprite;
    document.getElementById("modal-height").textContent = `${pokemon.height / 10} m`;
    document.getElementById("modal-weight").textContent = `${pokemon.weight / 10} kg`;
    document.getElementById("modal-abilities").textContent = pokemon.abilities.join(", ");

    const container = document.getElementById("modal-stats-container");
    container.innerHTML = "";

    pokemon.stats.forEach(s => {
        const percentage = Math.min((s.base / 150) * 100, 100);
        const row = document.createElement("div");
        row.className = "stat-row";
        row.innerHTML = `
            <span class="stat-label">${s.name}</span>
            <div class="stat-bar-bg">
                <div class="stat-bar-fill" style="width: ${percentage}%"></div>
            </div>
            <span class="stat-num">${s.base}</span>
        `;
        container.appendChild(row);
    });

    modal.classList.remove("hidden");
    document.getElementById("close-modal").onclick = () => modal.classList.add("hidden");
}