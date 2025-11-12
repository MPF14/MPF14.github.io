function navbar() {
    fetch("../assets/html/navbar.html")
    .then(response => response.text())
    .then(html => document.getElementById("navbar").innerHTML = html)
    .catch(err => console.error("Failed to load navbar:", err));
}
    navbar();