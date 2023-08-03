import { createCard, loadCards } from "../getData.js";

const getValue = () => {
  const formDataArray = $("#search-form").serializeArray();
  const formDataObject = formDataArray.reduce((result, current) => {
    result[current.name] = current.value;
    return result;
  }, {});
  return formDataObject;
};

function getCard(data) {
  if (data.name !== "") {
    $.get("/api/cards/name/" + data.name, function (data) {
      $("#cardWrapper").empty();
      const card = createCard(data);
      $("#cardWrapper").append(card);
    });
  } else {
    $.get("/api/cards/type/" + data.type, function (data) {
      $("#cardWrapper").empty();
      if(data.length) {
        data.forEach((element) => {
          const card = createCard(element);
          $("#cardWrapper").append(card);
        });
      } else {
        const message = $('<p>')
          .addClass('not-found')
          .text('No cards registered')
        $("#cardWrapper").append(message)
      }
    });
  }
  const resetBtn = $("<button>")
    .addClass("btn")
    .addClass("btn-reset")
    .text("Reset")
    .on("click", () => {
      loadCards();
    });

  $(".searchbar-wrapper").append(resetBtn);
}

const searchCard = () => {
  const data = getValue();
  getCard(data);
};

export { searchCard };
