// JavaScript to highlight the active navigation link
const currentPage = location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".navbar_list ul li a");

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});
