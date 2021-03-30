const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
  /*---- Action ----*/
btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  /*---- Do ----*/
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
  /*---- function ----*/
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
