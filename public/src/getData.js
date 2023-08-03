import { createForm } from "./modules/form.js";

const createCard = (element) => {
  const card = $("<li>").addClass("card-item");
  const cardDescription = $("<ul>").addClass("card-item-info");

  const cardImg = $("<img>").attr({
    src: "../../src/assets/card-bg.png",
    class: "card-item__img",
  });

  const cardTitle = $("<span>").text(element.name).addClass("card-item__title");

  const description = $("<p>")
    .addClass("card-item__txt")
    .text(element.description);

  const type = $("<p>")
    .addClass("card-item__txt")
    .text(`Type: ${element.type}`);

  const attackPoints = $("<p>")
    .addClass("card-item__txt")
    .text(`Attack: ${element.attack} pts`);

  const defensePoints = $("<p>")
    .addClass("card-item__txt")
    .text(`Defense: ${element.defense} pts`);

  const btnContainer = $("<div>").addClass("card-item__btn");

  const deleteButton = $("<button>")
    .text("Delete")
    .addClass("btn")
    .on("click", () => deleteCard(element._id));

  const editButton = $("<button>")
    .text("Edit")
    .addClass("btn")
    .on("click", () =>
      createForm(() => {
        updateCard(element._id);
      })
    );

  btnContainer.append(editButton, deleteButton);

  cardDescription.append(
    cardTitle,
    description,
    type,
    attackPoints,
    defensePoints
  );
  card.append(cardImg, cardDescription, btnContainer);

  return card
};

function loadCards() {
  $.get("/api/cards", function (data) {

    const resetBtn = $('.btn-reset');
    if (resetBtn) {
      resetBtn.remove();
    }
    $("#cardWrapper").empty();

    data.forEach(function (element) {
      const card = createCard(element);
      $("#cardWrapper").append(card);
    });
  });
}

function postCard() {
  const formDataArray = $(".card-form").serializeArray();
  const formDataObject = formDataArray.reduce((result, current) => {
    result[current.name] = current.value;
    return result;
  }, {});

  $.post("/api/cards", formDataObject, () => {
    $(".card-form")[0].reset();
    loadCards();
  });
}

function deleteCard(id) {
  $.ajax({
    url: "/api/cards/" + id,
    type: "DELETE",
    success: function () {
      loadCards();
    },
  });
}

function updateCard(id) {
  const formDataArray = $(".card-form").serializeArray();
  const formDataObject = formDataArray.reduce((result, current) => {
    result[current.name] = current.value;
    return result;
  }, {});
  $.ajax({
    url: "/api/cards/" + id,
    type: "PUT",
    data: formDataObject,
    success: function () {
      loadCards();
    },
  });
}

export { postCard, loadCards, createCard };
