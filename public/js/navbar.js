document.querySelector("#home").addEventListener("click", () => {
  alert("test");
});

window.addEventListener("load", function () {
  const navbar = document.getElementById("navigationBar");
  navbar.classList.add("loaded");
  const logo = document.getElementById("logo");
  logo.classList.add("loaded");
  const title = document.getElementById("title");
  title.classList.add("loaded");
});
