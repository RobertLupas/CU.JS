document.addEventListener("DOMContentLoaded", function () {
  loadCSS();
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

function loadCSS() {
  var head = document.getElementsByTagName("HEAD")[0];

  // Create new link Element
  var link = document.createElement("link");
  // set the attributes for link element
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css";
  // Append link element to HTML head
  head.appendChild(link);
}