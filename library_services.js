document.addEventListener("DOMContentLoaded", () => {
  const userTypeSelect = document.getElementById("user-type");
  const requestStatusCard = document.getElementById("requestStatusCard");

  // Hide "View Request Status" by default
  requestStatusCard.classList.add("hidden");

  userTypeSelect.addEventListener("change", () => {
    const userType = userTypeSelect.value;

    if (userType === "librarian") {
      requestStatusCard.classList.remove("hidden");
    } else {
      requestStatusCard.classList.add("hidden");
    }
  });
});
