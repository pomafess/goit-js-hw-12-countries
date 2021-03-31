import './styles.css';
import fetchCountries from './searchQuery.js';
import cardCreate from './templates/oneCountry.hbs';
import cardList from './templates/manyCountry.hbs';
import _ from 'lodash';
import '@pnotify/core/dist/BrightTheme.css';
const { error } = require('@pnotify/core');

const countryList = document.querySelector(".js-country-list");
const countryCard = document.querySelector(".js-country-card");
const myInput = document.querySelector(".js-form-control");

myInput.addEventListener("input", _.debounce(onFetchCoutries, 500));
function onFetchCoutries(e) {
    e.preventDefault();
    const searchValue = e.target.value;
    
fetchCountries(searchValue).then(result => {
    onRenderCountry(result)
        })
        .catch(error => {
            countryCard.innerHTML = '';
        })
    countryList.innerHTML = "";
    countryCard.innerHTML = "";
}
function onRenderCountry(result) {
    if (result.length === 1) {
        countryCard.innerHTML = cardCreate(result);
    } else if (result.length <= 10) {
        countryList.innerHTML = cardList(result);
    } else {
        error({
            text: "Ввели слишком много стран!",
            delay: 600,
            hide: true,
        })
    }
}
