// Function to highlight the active nav link
function highlightActiveNavLink() {
    let navLinks = document.querySelectorAll(".nav-links a");
    let currentPage = window.location.pathname.split("/").pop(); // Get current file name

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
}

// Fetch and insert header
fetch('include/header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('header').innerHTML = data;
    highlightActiveNavLink(); // Call function after header is inserted
})
.catch(error => console.error('Header fetch error:', error));

// Fetch and insert footer
fetch('include/footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer').innerHTML = data;
})
.catch(error => console.error('Footer fetch error:', error));
