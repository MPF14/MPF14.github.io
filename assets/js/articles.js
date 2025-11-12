window.articles = [
  {
    title: "ICE - Overview",
    authors: ["Maddie F"],
    date: "03/10/2025",
    tags: ["ICE"],
    link: "articles/ICE-Overview.html",
    image: "assets/images/ice.jpg"
  },
  {
    title: "Interview with Geoffrey Fletcher",
    authors: ["Maddie F"],
    date: "11/02/2025",
    tags: ["Film"],
    link: "articles/Geoffrey-Fletcher.html",
    image: "assets/images/Geoffrey-Fletcher.jpg"
  },
  {
    title: "Defining Equity Today",
    authors: ["Maddie F", "Maddie Fle"],
    date: "09/12/2025",
    tags: ["Equity"],
    link: "articles/equity-essay.html",
    image: "assets/images/equity.jpg"
  }
];

// --- Autogenerate dropdowns ---
function populateFilters() {
  const tagsSelect = document.getElementById("filter-tags");
  const authorselect = document.getElementById("filter-authors");

  // protect against missing HTML elements
  if (!tagsSelect || !authorselect) {
    console.error("Missing one of the filter dropdowns in HTML.");
    return;
  }

  const alltags = new Set();
  const allauthors = new Set();

  // ✅ Make sure property names match (authors, not authors)
  window.articles.forEach(article => {
    article.tags.forEach(tag => alltags.add(tag));
    article.authors.forEach(authors => allauthors.add(authors));
  });

  tagsSelect.innerHTML =
    '<option value="all">All</option>' +
    Array.from(alltags)
      .sort()
      .map(tag => `<option value="${tag}">${tag}</option>`)
      .join("");

  authorselect.innerHTML =
    '<option value="all">All</option>' +
    Array.from(allauthors)
      .sort()
      .map(authors => `<option value="${authors}">${authors}</option>`)
      .join("");
}

// ✅ Run this after the DOM is ready
document.addEventListener("DOMContentLoaded", populateFilters);
