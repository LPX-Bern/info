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
  // Inject Google Analytics after loading header
  let script = document.createElement('script');
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-MJ1YXDR16Q";
  document.head.appendChild(script);

  let inlineScript = document.createElement('script');
  inlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-MJ1YXDR16Q');
  `;
  document.head.appendChild(inlineScript);
})
.catch(error => console.error('Header fetch error:', error));

// Fetch and insert footer
fetch('include/footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer').innerHTML = data;
})
.catch(error => console.error('Footer fetch error:', error));