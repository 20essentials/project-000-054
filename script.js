console.log(
  "Reference Image",
  "https://www.hiddenone-sprites.com/resource-blog/greasy-goblins-and-upcoming-changes"
);

const d = document,
  $character = d.querySelector(".content");

d.addEventListener("click", (e) => {
  if (e.target.matches(".key")) {
    let $valor = e.target.getAttribute("data-value");
    $character.style.animation = `animate${$valor} 1s steps(9) infinite`;
    d.querySelectorAll(".iluminado").forEach((el) =>
      el.classList.remove("iluminado")
    );
    e.target.classList.add("iluminado");
  }
});
