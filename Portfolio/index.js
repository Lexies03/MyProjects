document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");

  function updateSidebar() {
    if (window.scrollY > 20) {
      container.style.boxShadow = "1px 1px 3px 0px #fdbe34";
    } else {
      container.style.boxShadow = "0px 0px 0px 0px black";
    }
  }

  window.addEventListener("scroll", updateSidebar);

  updateSidebar();
});
