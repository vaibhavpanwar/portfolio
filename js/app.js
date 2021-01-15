const accordion = document.getElementsByClassName("skill-label");
const content = document.getElementsByClassName("skill-content");
console.log(accordion, content);

accordion[0].addEventListener("click", () => {
  content[0].classList.toggle("active");
});

accordion[1].addEventListener("click", () => {
  content[1].classList.toggle("active");
});

accordion[2].addEventListener("click", () => {
  content[2].classList.toggle("active");
});
