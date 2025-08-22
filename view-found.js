document.addEventListener("DOMContentLoaded", () => {
  const userTypeSelect = document.getElementById("user-type");
  const foundItemsList = document.getElementById("foundItemsList");

  // Pre-filled found items
  const foundItems = [
    {
      name: "Smartphone",
      date: "19 July 2025",
      location: "CSE Lab",
      description: "Black Samsung phone, screen cracked slightly.",
      contact: "farhan@student.edu"
    },
    {
      name: "ID Card",
      date: "20 July 2025",
      location: "Auditorium Hall",
      description: "Student ID of 'Nahid Hasan', ID: 222*****",
      contact: "hasib@student.edu"
    },
    {
      name: "Blue Scarf",
      date: "21 July 2025",
      location: "Library 1st Floor",
      description: "Light blue scarf with floral pattern.",
      contact: "tahsin@student.edu"
    },
    {
      name: "Notebook",
      date: "22 July 2025",
      location: "Cafeteria",
      description: "Red notebook with math notes.",
      contact: "sadia@student.edu"
    }
  ];

  function populateFoundItems() {
    foundItemsList.innerHTML = "";
    foundItems.forEach(item => {
      const div = document.createElement("div");
      div.classList.add("item-card");
      div.innerHTML = `
        <h3>${item.name}</h3>
        <p><strong>Found Date:</strong> ${item.date}</p>
        <p><strong>Location:</strong> ${item.location}</p>
        <p><strong>Description:</strong> ${item.description}</p>
        <p><strong>Contact:</strong> ${item.contact}</p>
      `;
      foundItemsList.appendChild(div);
    });
  }

  function toggleView() {
    const role = userTypeSelect.value;
    if (role === "librarian") {
      foundItemsList.classList.remove("hidden");
      populateFoundItems();
    } else {
      foundItemsList.classList.add("hidden");
    }
  }

  userTypeSelect.addEventListener("change", toggleView);

  // Show by default for Librarian
  toggleView();
});
