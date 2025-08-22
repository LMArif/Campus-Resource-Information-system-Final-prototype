document.addEventListener("DOMContentLoaded", () => {
  const userTypeSelect = document.getElementById("user-type");
  const addBookForm = document.getElementById("addBookForm");
  const addBookBtn = document.getElementById("addBookBtn");
  const requestButtons = document.querySelectorAll(".role-request");
  const searchInput = document.getElementById("searchInput");
  const booksTable = document.getElementById("booksTable").getElementsByTagName("tbody")[0];

  // Toggle features based on user type
  userTypeSelect.addEventListener("change", () => {
    const userType = userTypeSelect.value;

    if (userType === "librarian") {
      addBookForm.style.display = "block";
      requestButtons.forEach(btn => btn.style.display = "none");
    } else if (userType === "student" || userType === "faculty") {
      addBookForm.style.display = "none";
      requestButtons.forEach(btn => btn.style.display = "inline");
    } else {
      addBookForm.style.display = "none";
      requestButtons.forEach(btn => btn.style.display = "none");
    }
  });

  // Add new book (only librarian)
  addBookBtn.addEventListener("click", () => {
    const title = document.getElementById("bookTitle").value;
    const author = document.getElementById("bookAuthor").value;
    const genre = document.getElementById("bookGenre").value;

    if (title && author && genre) {
      const newRow = booksTable.insertRow();
      newRow.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${genre}</td>
        <td>Available</td>
        <td><a href="book_request.html?title=${encodeURIComponent(title)}" class="btn-request role-request">Request</a></td>
      `;

      // Reset form
      document.getElementById("bookTitle").value = "";
      document.getElementById("bookAuthor").value = "";
      document.getElementById("bookGenre").value = "";
    } else {
      alert("Please fill out all fields!");
    }
  });

  // Search books
  searchInput.addEventListener("keyup", () => {
    const input = searchInput.value.toLowerCase();
    const rows = booksTable.querySelectorAll("tr");

    rows.forEach(row => {
      const title = row.cells[0].textContent.toLowerCase();
      const author = row.cells[1].textContent.toLowerCase();
      row.style.display = (title.includes(input) || author.includes(input)) ? "" : "none";
    });
  });
});
