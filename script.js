const username = "sunjulyq"; 
const container = document.getElementById("repo-container");

fetch(`https://api.github.com/users/sunjulyq/repos?sort=updated`)
  .then(response => response.json())
  .then(repos => {
    repos.slice(0, 5).forEach(repo => {
      const item = document.createElement("div");
      item.innerHTML = `
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        <p>${repo.description || "No description provided."}</p>
      `;
      container.appendChild(item);
    });
  })
  .catch(error => console.error("Error fetching repos:", error));
