document.addEventListener("DOMContentLoaded", () => {
  const userTypeSelect = document.getElementById("user-type");
  const foundForm = document.getElementById("foundForm");

  // Show form by default (Librarian selected)
  foundForm.classList.remove("hidden");

  // Show/hide form based on role
  userTypeSelect.addEventListener("change", () => {
    const userType = userTypeSelect.value;
    if (userType === "librarian") {
      foundForm.classList.remove("hidden");
    } else {
      foundForm.classList.add("hidden");
    }
  });

  // Handle form submission
  foundForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const itemName = document.getElementById("item-name").value;
    const foundDate = document.getElementById("found-date").value;
    const location = document.getElementById("found-location").value;
    const description = document.getElementById("description").value;
    const contact = document.getElementById("contact").value;

    alert(`Found Item Report Submitted!\n\nItem: ${itemName}\nDate Found: ${foundDate}\nLocation: ${location}\nDescription: ${description}\nContact: ${contact}`);

    foundForm.reset();
  });
});
