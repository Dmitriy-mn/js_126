import axios from "axios";

import './style.css'

/**
 * Використовуємо https://pokeapi.co/ та створимо сторінку перегляду покемонів
 *
 */

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';


const form = document.querySelector(".search-form");
const container = document.querySelector(".card-container");
const loader = document.querySelector(".loader");

form.addEventListener("submit", onSearch);

async function fetchPokemon(pokemonName) {
    const { data } = await axios(`${BASE_URL}${pokemonName}`);
    return data;
}

async function onSearch(event) {
    event.preventDefault();
    const searchQuery = event.currentTarget.elements.query.value.trim();

    if(!searchQuery) {
        alert("Введіть покемона");
        return;
    }

    loader.classList.remove("hidden");
    container.innerHTML = "";

    try {
        const data = await fetchPokemon(searchQuery);
        console.log(data);
        container.innerHTML = renderPokemonCard(data);
    } catch(error) {
        console.log(error.message);
        container.innerHTML = "Ууупс, спробуйте пізніше";
    } finally {
        loader.classList.add("hidden");
    }
}

function renderPokemonCard({ name, weight, height, abilities, sprites }) {
    const abilitiesList = abilities.map(({ ability }) => `
        <li class="list-group-item">${ability.name}</li>
    `).join("");

    return `
        <div class="card">
            <div class="img-card-top">
                <img src="${sprites.front_default}" alt="${name}"/>
            </div>
            <div class="card-body">
                <h2 class="card-title">Ім'я: ${name}</h2>
                <p class="card-text">Вага: ${weight}</p>
                <p class="card-text">Зріст: ${height}</p>

                <p class="card-text">
                    <h4>Вміння:</h4>
                    <ul>${abilitiesList}</ul>
                </p>
            </div>
        </div>
    `
}




