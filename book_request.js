document.addEventListener("DOMContentLoaded", () => {
  const userTypeSelect = document.getElementById("user-type");
  const requestForm = document.getElementById("requestForm");

  // Set default user to student
  userTypeSelect.value = "student";
  requestForm.classList.remove("hidden"); // Show form by default

  // Show/hide form based on role
  userTypeSelect.addEventListener("change", () => {
    const userType = userTypeSelect.value;

    if (userType === "student" || userType === "faculty") {
      requestForm.classList.remove("hidden");
    } else {
      requestForm.classList.add("hidden");
    }
  });

  // Handle form submission
  requestForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload

    const name = document.getElementById("studentName").value;
    const id = document.getElementById("studentId").value;
    const title = document.getElementById("bookTitle").value;
    const author = document.getElementById("author").value;
    const publisher = document.getElementById("publisher").value;
    const reason = document.getElementById("reason").value;

    // For demo: show confirmation alert
    alert(`Book Request Submitted!\n\nName: ${name}\nID: ${id}\nBook: ${title}\nAuthor: ${author}\nReason: ${reason}`);

    // Reset form
    requestForm.reset();
  });
});
