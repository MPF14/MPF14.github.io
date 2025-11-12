function footer() {
    fetch("../assets/html/footer.html")
    .then(response => response.text())
    .then(html => document.getElementById("footer").innerHTML = html)
    .catch(err => console.error("Failed to load navbar:", err));
}
footer();