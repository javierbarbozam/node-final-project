import { postCard, loadCards } from "./getData.js";
import { createForm } from "./modules/form.js";

$(document).ready(function () {

  loadCards();

  $('#add-card-btn').on('click', () => {
    createForm(postCard)
  })
});