function createForm(callback) {
  const container = $("#form-wrapper");
  container.empty();

  const form = $("<form>").addClass("card-form");
  form.html(`
    <label for="name">Insert card name</label>
    <input id="name" type="text" name="name">
    <label for="description">Add the card description</label>
    <textarea name="description" cols="30" rows="10"></textarea>
    <label for="type">Select a card type</label>
    <select name="type">
      <option value="monster">Monster</option>
      <option value="magic">Magic</option>
      <option value="trap">Trap</option>
    </select>
    <label for="attack">Insert attack points</label>
    <input type="number" id="attack" name="attack">
    <label for="defense">insert defense points</label>
    <input type="number" name="defense" id="defense">
  `);

  const closeBtn = $("<button>")
    .attr("type", "button")
    .text("Close")
    .addClass("close-form-btn")
    .on("click", () => {
      container.empty();
    });

  const submitBtn = $("<button>")
    .attr("type", "submit")
    .text("Send")
    .addClass("submit-form-btn")
    .on("click", (e) => {
      e.preventDefault()
      callback()
    });

  const resetBtn = $("<button>")
    .attr("type", "reset")
    .text("Reset")
    .addClass("submit-form-btn")
  
  form.append(submitBtn, resetBtn, closeBtn)
  container.append(form);
}

function editProduct(id) {
  const product = { id: id, name: "" }; // Objeto de producto vacío con el ID correspondiente

  $.get("/api/products/" + id, function (data) {
    product.name = data.name; // Obtener el nombre del producto existente

    // Crear un formulario de edición con el nombre actual del producto
    const editForm = $("<form>").addClass("edit-form");
    const productNameInput = $("<input>")
      .attr({
        type: "text",
        id: "editProductName",
        value: product.name,
      })
      .addClass("edit-input");
    const updateButton = $("<button>")
      .attr("type", "button")
      .text("Actualizar")
      .addClass("update-button")
      .click(function () {
        product.name = $("#editProductName").val();
        updateProduct(product);
      });
    editForm.append(productNameInput);
    editForm.append(updateButton);

    // Reemplazar el elemento de la lista con el formulario de edición
    const listItem = $('li:contains("' + product.name + '")');
    listItem.html(editForm);
  });
}

function loadProducts() {
  $.get("/api/products", function (products) {
    $("#productList").empty();

    products.forEach(function (product) {
      const listItem = $("<li>");
      const productName = $("<div>").text(product.name);
      const deleteButton = $("<button>")
        .text("Eliminar")
        .addClass("delete-button")
        .click(() => deleteProduct(product.id));
      const editButton = $("<button>")
        .text("Editar")
        .addClass("edit-button")
        .click(() => editProduct(product.id));

      listItem.append(productName, deleteButton, editButton);

      $("#productList").append(listItem);
    });
  });
}

export { createForm };
