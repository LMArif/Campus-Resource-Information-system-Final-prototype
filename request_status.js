document.addEventListener("DOMContentLoaded", () => {
  const userTypeSelect = document.getElementById("user-type");
  const statusSection = document.getElementById("statusSection");
  const statusTableBody = document.querySelector("#statusTable tbody");

  // Example request data (for demo)
  const requests = [
    { id: "REQ12346", book: "Introduction to Algorithms", requester: "John Doe", date: "2025-07-15", status: "Approved" },
    { id: "REQ12348", book: "Clean Code", requester: "Jane Smith", date: "2025-07-20", status: "Pending" },
    { id: "REQ12350", book: "Digital Design", requester: "Ali Khan", date: "2025-07-22", status: "Rejected" }
  ];

  // Populate table dynamically
  function populateTable() {
    statusTableBody.innerHTML = "";
    requests.forEach(req => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${req.id}</td>
        <td>${req.book}</td>
        <td>${req.requester}</td>
        <td>${req.date}</td>
        <td><span class="status ${req.status.toLowerCase()}">${req.status}</span></td>
      `;
      statusTableBody.appendChild(tr);
    });
  }

  // Show/hide section based on role
  function toggleView() {
    const role = userTypeSelect.value;
    if (role === "librarian") {
      statusSection.classList.remove("hidden");
      populateTable();
    } else {
      statusSection.classList.add("hidden");
    }
  }

  userTypeSelect.addEventListener("change", toggleView);

  // Initialize view
  toggleView();
});
