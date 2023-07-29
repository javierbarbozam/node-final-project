function createForm(callback) {
  const container = $("#form-wrapper");
  container.css("display", "initial")
  container.empty();

  const form = $("<form>").addClass("card-form");
  form.html(`
  <div class="form-box">
    <div>
      <label class="form-label" for="name">Insert card name</label>
      <input id="name" type="text" name="name" />
    </div>
    <div>
      <label class="form-label" for="attack">Insert attack points</label>
      <input type="number" id="attack" name="attack" />
    </div>
    <div>
      <label class="form-label" for="defense">insert defense points</label>
      <input type="number" name="defense" id="defense" />
    </div>
    <div>
      <label class="form-label" for="type">Select a card type</label>
      <select name="type">
        <option value="monster">Monster</option>
        <option value="magic">Magic</option>
        <option value="trap">Trap</option>
      </select>
    </div>
  </div>
  <label class="form-label" for="description">Add the card description</label>
  <textarea name="description" cols="10" rows="10"></textarea>`
  );

  const closeBtn = $("<button>")
    .attr("type", "button")
    .text("Close")
    .addClass("close-form-btn")
    .on("click", () => {
      container.empty();
      container.css("display", "none")
    });

  const submitBtn = $("<button>")
    .attr("type", "submit")
    .text("Send")
    .addClass("submit-form-btn")
    .on("click", (e) => {
      e.preventDefault()
      container.css("display", "none")
      callback()
    });

  const resetBtn = $("<button>")
    .attr("type", "reset")
    .text("Reset")
    .addClass("submit-form-btn")
  
  form.append(submitBtn, resetBtn, closeBtn)
  container.append(form);
}

export { createForm };
