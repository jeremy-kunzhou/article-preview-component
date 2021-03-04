
document.addEventListener("DOMContentLoaded", (event) => {
  var element = document.getElementsByClassName("sharing-icon");
  console.log(element);
  element[0].addEventListener("click", function() {
      document.getElementsByClassName("section-right-bottom")[0].classList.toggle("open");
      document.getElementsByClassName("profile")[0].classList.toggle("open");

      document.getElementsByClassName("sharing")[0].classList.toggle("open");
      document.getElementsByClassName("sharing-icon")[0].classList.toggle("open");

      document.getElementsByClassName("sharing-bar")[0].classList.toggle("open");
      document.getElementsByClassName("sharing-bar-social-icon")[0].classList.toggle("open");

  })
});
