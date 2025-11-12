function navbar() {
  fetch("../assets/html/navbar.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("navbar").innerHTML = html;

      // Highlight current page
      const currentPage = window.location.pathname.split("/").pop();
      console.log("Current page:", currentPage); // for debugging

      const navLinks = document.querySelectorAll("#navbar .nav-left ul li a");

      navLinks.forEach(link => {
        const linkHref = link.getAttribute("href").split("/").pop(); // strip any folder
        const page = currentPage || "index.html"; // treat root as index
        if (linkHref === page) {
          link.classList.add("active");
        }
      });

      // Burger menu toggle
      const burger = document.getElementById("burger");
      const navList = document.getElementById("nav-links");

      if (burger && navList) {
        burger.addEventListener("click", function() {
          navList.classList.toggle("show");
        });
      }

    })
    .catch(err => console.error("Failed to load navbar:", err));
}

// Load navbar
navbar();
