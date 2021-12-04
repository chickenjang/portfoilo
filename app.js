// 부드러운 이동
const aTags = document.querySelectorAll(".link");

aTags.forEach((v) => {
  v.addEventListener("click", (e) => {
    e.preventDefault();
    let target = document.querySelector(e.currentTarget.getAttribute("href"));
    window.scrollTo({
      behavior: "smooth",
      top: target.offsetTop,
    });
  });
});

// header 높이 지정
let body = document.querySelector("body");
let slides = document.querySelector("#slides");

slides.style.height = `${String(innerHeight)}px`;
body.onresize = () => {
  slides.style.height = `${String(innerHeight)}px`;
};

// 화면 전환
let backwardButton = document.querySelector("#header>span:nth-of-type(2)");
let forwardButton = document.querySelector("#header>span:nth-of-type(3)");
let position = 0;
backwardButton.onclick = () => {
  if (position == 0) {
    setTimeout(didIt2, 1);
    slides.style.transition = "none";
    position = -300;
  } else {
    position += 100;
  }
  slides.style.left = `${position}%`;
};
forwardButton.onclick = () => {
  if (position == -300) {
    setTimeout(didIt, 1);
    slides.style.transition = "none";
    position = 0;
  } else {
    position -= 100;
  }
  slides.style.left = `${position}%`;
};

function didIt() {
  position -= 100;
  slides.style.transition = "left 0.2s";
  slides.style.left = `${position}%`;
}
function didIt2() {
  position += 100;
  slides.style.transition = "left 0.2s";
  slides.style.left = `${position}%`;
}

// 포트폴리오 hover, click, close
const portfolios = document.querySelectorAll(".hoverBox");
portfolios.forEach((v, i, a) => {
  v.addEventListener("mouseenter", (e) => {
    const hoverBox = e.target;
    hoverBox.style.opacity = 0.6;
  });
  v.addEventListener("mouseleave", (e) => {
    const hoverBox = e.target;
    hoverBox.style.opacity = 0;
  });
  v.addEventListener("click", (e) => {
    const overall = document.querySelector("#overall");
    const modal = document.createElement("DIV");
    const xBtn = document.createElement("BUTTON");
    modal.classList.toggle("modal");
    xBtn.innerText = "X";
    xBtn.classList.add("xBtn");
    modal.appendChild(xBtn);
    overall.appendChild(modal);

    close();
  });
});

function close() {
  const xBtn = document.querySelector(".xBtn");
  xBtn.onclick = () => {
    document.querySelector(".modal").remove();
  };
}

// 햄버거 메뉴
const hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", (e) => {
  e.target.style.visibility = "hidden";
  const nav = document.querySelector("nav");
  nav.style.visibility = "visible";
});
