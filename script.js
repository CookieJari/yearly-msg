const button = document.getElementById("start");

const bg = document.querySelector(".message-container");

const msgParent = document.querySelector(".message-container");
const msgDivs = msgParent.querySelectorAll("div");

function StartAll() {
  console.log(bg);
  bg.classList.add("start-anim");

  msgDivs.forEach((element) => {
    element.classList.add("start-anim-2");
  });
  button.remove();
}
