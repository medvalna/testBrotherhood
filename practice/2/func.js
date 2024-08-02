async function fetchAndDisplayPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const posts = await response.json();

    const tbody = document.querySelector("#postsTable tbody");

    tbody.innerHTML = "";

    posts.forEach((post) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                    <td>${post.userId}</td>
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                    <td>${post.body}</td>
                `;
      tbody.appendChild(row);
    });
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  }
}

window.onload = fetchAndDisplayPosts;
