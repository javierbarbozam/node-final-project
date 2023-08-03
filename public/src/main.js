import { postCard, loadCards } from "./getData.js";
import { createForm } from "./modules/form.js";
import { searchCard } from "./modules/searchbar.js";

loadCards();

$('#add-card-btn').on('click', () => {
  createForm(postCard)
})

$('#search-form').on('submit', (e) => {
  e.preventDefault();
  searchCard();
})