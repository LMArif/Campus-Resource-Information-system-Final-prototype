document.addEventListener("DOMContentLoaded", () => {
  const userTypeSelect = document.getElementById("user-type");
  const lostForm = document.getElementById("lostForm");

  // Show form by default (student selected)
  lostForm.classList.remove("hidden");

  // Show/hide form based on role
  userTypeSelect.addEventListener("change", () => {
    const userType = userTypeSelect.value;
    if (userType === "student" || userType === "faculty") {
      lostForm.classList.remove("hidden");
    } else {
      lostForm.classList.add("hidden");
    }
  });

  // Handle form submission
  lostForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const itemName = document.getElementById("item-name").value;
    const lostDate = document.getElementById("lost-date").value;
    const location = document.getElementById("lost-location").value;
    const description = document.getElementById("description").value;
    const contact = document.getElementById("contact").value;

    alert(`Lost Item Report Submitted!\n\nItem: ${itemName}\nDate Lost: ${lostDate}\nLocation: ${location}\nDescription: ${description}\nContact: ${contact}`);

    lostForm.reset();
  });
});
