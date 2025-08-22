document.addEventListener("DOMContentLoaded", () => {
  const userTypeSelect = document.getElementById("user-type");
  const lostItemsList = document.getElementById("lostItemsList");

  // Pre-filled lost items
  const lostItems = [
    {
      name: "Black Backpack",
      date: "15 July 2025",
      location: "Library 2nd Floor",
      description: "Contains books and a laptop charger.",
      contact: "arif@student.edu"
    },
    {
      name: "Water Bottle",
      date: "18 July 2025",
      location: "Cafeteria",
      description: "Blue steel bottle with a “Stay Cool” sticker.",
      contact: "mehedi@student.edu"
    },
    {
      name: "Calculator",
      date: "20 July 2025",
      location: "Engineering Lab",
      description: "Casio fx-991ES scientific calculator.",
      contact: "sadia@student.edu"
    },
    {
      name: "Red Umbrella",
      date: "21 July 2025",
      location: "Bus Stop near Main Gate",
      description: "Compact red umbrella, metal handle.",
      contact: "raihan@student.edu"
    }
  ];

  function populateLostItems() {
    lostItemsList.innerHTML = "";
    lostItems.forEach(item => {
      const div = document.createElement("div");
      div.classList.add("item-card");
      div.innerHTML = `
        <h3>${item.name}</h3>
        <p><strong>Lost Date:</strong> ${item.date}</p>
        <p><strong>Location:</strong> ${item.location}</p>
        <p><strong>Description:</strong> ${item.description}</p>
        <p><strong>Contact:</strong> ${item.contact}</p>
      `;
      lostItemsList.appendChild(div);
    });
  }

  function toggleView() {
    const role = userTypeSelect.value;
    if (role === "librarian") {
      lostItemsList.classList.remove("hidden");
      populateLostItems();
    } else {
      lostItemsList.classList.add("hidden");
    }
  }

  userTypeSelect.addEventListener("change", toggleView);

  // Show by default for Librarian
  toggleView();
});
