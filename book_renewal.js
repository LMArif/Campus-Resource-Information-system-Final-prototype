document.addEventListener("DOMContentLoaded", () => {
  const userTypeSelect = document.getElementById("user-type");
  const renewalForm = document.getElementById("renewalForm");

  // Show form by default since student is selected
  renewalForm.classList.remove("hidden");

  // Show/hide form based on role
  userTypeSelect.addEventListener("change", () => {
    const userType = userTypeSelect.value;
    if (userType === "student" || userType === "faculty") {
      renewalForm.classList.remove("hidden");
    } else {
      renewalForm.classList.add("hidden");
    }
  });

  // Handle form submission
  renewalForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("studentName").value;
    const id = document.getElementById("studentId").value;
    const title = document.getElementById("bookTitle").value;
    const dueDate = document.getElementById("dueDate").value;
    const reason = document.getElementById("reason").value;

    alert(`Book Renewal Request Submitted!\n\nName: ${name}\nID: ${id}\nBook: ${title}\nCurrent Due Date: ${dueDate}\nReason: ${reason}`);

    // Reset form
    renewalForm.reset();
  });
});
