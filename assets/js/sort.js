document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("articles-list");
  const sortSelect = document.getElementById("sort-select");
  const filtertags = document.getElementById("filter-tags");
  const filterauthors = document.getElementById("filter-authors");
  const controls = document.getElementById("controls");
  const toggleBtn = document.getElementById("toggle-filters");

  // --- Toggle visibility of filters ---
  toggleBtn.addEventListener("click", () => {
    const visible = controls.classList.toggle("visible");
    toggleBtn.textContent = visible ? "Hide Filters" : "Show Filters";
  });

  // --- Render articles ---
  function renderarticles(filteredarticles) {
    list.innerHTML = "";
    filteredarticles.forEach(a => {
      const articlesDiv = document.createElement("div");
      articlesDiv.className = "articles";
      articlesDiv.dataset.date = a.date;
      articlesDiv.dataset.authors = a.authors;
      articlesDiv.dataset.tags = a.tags;
      articlesDiv.innerHTML = `
        <a href="${a.link}" class="article-link">
        <img src="${a.image}" alt="${a.title}">
        <p class="articles-title">${a.title}</p>
        <small>By ${a.authors.join(", ")}</small>
        <small>${a.date} </small>
        <div class="tag">
        ${a.tags.map(tags => `<span class="tags">${tags}</span>`).join(" ")}
        </div>
        </a>
      `;
      list.appendChild(articlesDiv);
    });
  }

  // --- Apply Filters and Sorting ---
  function applyFiltersAndSort() {
    let filtered = [...window.articles];

    const tags = filtertags.value;
    const authors = filterauthors.value;
    const sortBy = sortSelect.value;

    // Filter
    if (tags !== "all") filtered = filtered.filter(a => a.tags.includes(tags));
    if (authors !== "all") filtered = filtered.filter(a => a.authors.includes(authors));

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date) - new Date(a.date); // newest first
      } else {
        return a[sortBy].localeCompare(b[sortBy]);
      }
    });

    renderarticles(filtered);
  }

    document.addEventListener("DOMContentLoaded", () => {
        populateFilters();
        applyFiltersAndSort();
    });

  // --- Initial Render ---
  applyFiltersAndSort();

  // --- Event Listeners ---
  sortSelect.addEventListener("change", applyFiltersAndSort);
  filtertags.addEventListener("change", applyFiltersAndSort);
  filterauthors.addEventListener("change", applyFiltersAndSort);
});
