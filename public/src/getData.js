function loadData() {
  $.get("/api/cards", function (data) {
    $("#cardWrapper").empty();

    data.forEach(function (card) {
      const cardItem = $("<li>").addClass('card-item');

      const cardImg = $('<img>')
        .attr({
          src: "../../src/assets/card-bg.png"
        })
        
      const cardTitle = $("<span>")
        .text(card.name)
        .addClass('card-item__title')

      const deleteButton = $("<button>")
        .text("Eliminar")
        .addClass("btn")
        .click(() => deleteCard(card._id));

      const editButton = $("<button>")
        .text("Editar")
        .addClass("btn")
        .click(() => console.log(card));

      cardItem.append(cardImg, cardTitle, deleteButton, editButton);
      $("#cardWrapper").append(cardItem);
    });
    // products.forEach(function (product) {
    //   const listItem = $("<li>");
    //   const productName = $("<div>").text(product.name);
    //   const deleteButton = $("<button>")
    //     .text("Eliminar")
    //     .addClass("delete-button")
    //     .click(() => deleteCard(product.id));
    //   const editButton = $("<button>")
    //     .text("Editar")
    //     .addClass("edit-button")
    //     .click(() => editProduct(product.id));

    //   listItem.append(productName, deleteButton, editButton);

    //   $("#productList").append(listItem);
    // });
  });
}

function postData () {
  const formDataArray = $(".card-form").serializeArray();
  const formDataObject = formDataArray.reduce((result, current) => {
    result[current.name] = current.value;
    return result;
  }, {});

  $.post("/api/cards", formDataObject, () => {
    $(".card-form")[0].reset();
    loadData();
  });
}

export {postData, loadData}