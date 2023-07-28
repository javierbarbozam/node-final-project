import { postData, loadData } from "./getData.js";
import { createForm } from "./modules/form.js";

$(document).ready(function () {

  loadData();

  $('#add-card-btn').on('click', () => {
    createForm(postData)
  })
});

function deleteCard(id) {
  console.log(id);
  $.ajax({
    url: "/api/cards/" + id,
    type: "DELETE",
    success: function () {
      loadCards();
    },
  });
}

function renderEditForm(data) {
  const [element] = data;

  const editWrapper = $("#editFormWrapper");
  editWrapper.empty();
  const form = $("<form>");

  for (const value in element) {
    if (value !== "__v" && value !== "_id") {
      const label = $("<label>")
        .attr({ for: `edit-${value}` })
        .text(`${value}`);
      form.append(label);

      const input = $("<input>").attr({
        type: typeof element[value] === "number" ? "number" : "text",
        id: `edit-${value}`,
        value: element[value],
      });
      form.append(input);
    }
  }
  editWrapper.append(form);
}

function editCard(id) {
  // console.log(id)

  $.get("/api/cards/" + id, function (data) {
    renderEditForm(data);
    // product.name = data.name;

    // // Crear un formulario de edición con el nombre actual del producto
    // const editForm = $("<form>").addClass("edit-form");
    // const productNameInput = $("<input>")
    //   .attr({
    //     type: "text",
    //     id: "editProductName",
    //     value: product.name,
    //   })
    //   .addClass("edit-input");
    // const updateButton = $("<button>")
    //   .attr("type", "button")
    //   .text("Actualizar")
    //   .addClass("update-button")
    //   .click(function () {
    //     product.name = $("#editProductName").val();
    //     updateProduct(product);
    //   });
    // editForm.append(productNameInput);
    // editForm.append(updateButton);

    // // Reemplazar el elemento de la lista con el formulario de edición
    // const listItem = $('li:contains("' + product.name + '")');
    // listItem.html(editForm);
  });
}

function updateProduct(product) {
  $.ajax({
    url: "/api/cards/" + product.id,
    type: "PUT",
    data: product,
    success: function (updatedProduct) {
      loadProducts();
    },
  });
}
