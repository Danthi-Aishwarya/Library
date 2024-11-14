document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.getElementById("dialog");
  const newBookButton = document.getElementById("newbook");
  const closeDialogButton = document.getElementById("close_dialog");

  newBookButton.addEventListener("click", () => {
    dialog.showModal();
  });

  closeDialogButton.addEventListener("click", () => {
    dialog.close();
  });

  document.getElementById("book").addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const page = document.getElementById("page").value;
    const readStatus = document.querySelector(
      'input[name="readstatus"]:checked'
    ).value;

    const tbody = document.querySelector("tbody");
    const row = tbody.insertRow();
    row.innerHTML = `
      <td>${title}</td>
      <td>${author}</td>
      <td>${page}</td>
      <td>${readStatus}</td>
      <td><button class="remove">Remove</button></td>
    `;

    row.querySelector(".remove").addEventListener("click", () => {
      row.remove();
    });

    dialog.close();
  });
});
