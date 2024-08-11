const table = document.querySelector(".postsTable");
const searchBox = document.querySelector(".search");
let posts = [];
let filteredPosts = [];
let sortDirection = "asc";
let sortColumn = "id";

async function fetchAndDisplayPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    posts = await response.json();
    filteredPosts = posts;
    renderTable(filteredPosts);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function renderTable(data) {
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = "";
  data.forEach((post) => {
    const row = document.createElement("tr");
    row.innerHTML = `
                  <td>${post.userId}</td>
                  <td>${post.id}</td>
                  <td>${post.title}</td>
                  <td>${post.body}</td>
              `;
    tbody.appendChild(row);
  });
}

function sortTable(column) {
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (a[column] < b[column]) return sortDirection === "asc" ? -1 : 1;
    if (a[column] > b[column]) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });
  sortDirection = sortDirection === "asc" ? "desc" : "asc";
  document.querySelectorAll("th").forEach((th) => {
    th.classList.remove("sorted-asc", "sorted-desc");
  });
  const header = table.querySelector(`th[data-column="${column}"]`);
  header.classList.add(sortDirection === "asc" ? "sorted-asc" : "sorted-desc");
  renderTable(sortedPosts);
}

function filterTable(query) {
  filteredPosts = posts.filter(
    (post) =>
      post.userId.toString().includes(query) ||
      post.id.toString().includes(query) ||
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.body.toLowerCase().includes(query.toLowerCase())
  );
  sortDirection = "asc";
  sortColumn = "id";
  renderTable(filteredPosts);
}

table.querySelectorAll("th").forEach((th) => {
  th.addEventListener("click", () => {
    const column = th.getAttribute("data-column");
    sortTable(column);
  });
});

searchBox.addEventListener("input", (e) => {
  const query = e.target.value;
  if (query.length >= 3 || query.length === 0) {
    filterTable(query);
  }
});

window.onload = fetchAndDisplayPosts;
