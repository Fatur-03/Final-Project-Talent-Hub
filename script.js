// Toggle class active
const navbarnav = document.querySelector(".navbar-nav");
// Ketika Hamburger menu di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

// klik di luar slidebar menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addeventlistener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.claslist.remove("active");
  }
});
