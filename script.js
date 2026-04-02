const navAnim = () => {
  const nav = document.querySelector("nav");
  const nav4 = document.querySelector("#nav4");

  nav.addEventListener("mouseenter", () => {
    nav4.style.display = "block";
    nav4.style.display = "flex";
  });
  nav.addEventListener("mouseleave", () => {
    nav4.style.display = "none";
  });
};

navAnim();

const page2Anim = () => {
  const p2Img = document.querySelector(".p2-img");
  const p2RightElem1 = document.querySelector("#p2-right-elem1");
  const p2RightElem2 = document.querySelector("#p2-right-elem2");
  const p2RightElem3 = document.querySelector("#p2-right-elem3");
  const p2RightElem4 = document.querySelector("#p2-right-elem4");

  const mouseMove = (e) => {
    p2Img.style.opacity = 1;
    p2Img.style.left = e.x + "px";
    p2Img.style.top = e.y + "px";
  };

  const mouseLeave = () => {
    p2Img.style.opacity = 0;
  };

  p2RightElem1.addEventListener("mousemove", (e) => {
    p2Img.src = "images & videos/page2-img1.webp";
    p2Img.style.borderRadius = "50%";
    mouseMove(e);
  });

  p2RightElem1.addEventListener("mouseleave", () => {
    mouseLeave();
  });

  p2RightElem2.addEventListener("mousemove", (e) => {
    p2Img.src = "images & videos/page2-img2.jpg";
    p2Img.style.borderRadius = "30% 30% 80% 80%";
    mouseMove(e);
  });

  p2RightElem2.addEventListener("mouseleave", () => {
    mouseLeave();
  });

  p2RightElem3.addEventListener("mousemove", (e) => {
    p2Img.src = "images & videos/page2-img3.jpg";
    p2Img.style.borderRadius = "60px 70px 40px 140px";
    mouseMove(e);
  });

  p2RightElem3.addEventListener("mouseleave", () => {
    mouseLeave();
  });

  p2RightElem4.addEventListener("mousemove", (e) => {
    p2Img.src = "images & videos/page2-img4.jpg";
    p2Img.style.borderRadius = "10px 40px 5px 5px";
    mouseMove(e);
  });

  p2RightElem4.addEventListener("mouseleave", () => {
    mouseLeave();
  });
};

page2Anim();

const page3Anim = () => {
  const playBtn = document.querySelector("#play-btn");
  const video = document.querySelector("#page-3 video");

  playBtn.addEventListener("click", () => {
    video.play();
    video.style.transform = "scaleX(1) scaleY(1)";
    video.style.opacity = 1;
  });
  video.addEventListener("click", () => {
    video.pause();
    video.style.transform = "scaleX(0.7) scaleY(0)";
    video.style.opacity = 0;
  });
};

page3Anim();

const page7Anim = () => {
  const p7Video1 = document.querySelector("#p7-em1 video");
  const p7Video2 = document.querySelector("#p7-em2 video");
  const circle = document.querySelector(".circle");

  p7Video1.addEventListener("mouseenter", () => {
    p7Video1.play();
  });

  p7Video1.addEventListener("mousemove", (e) => {
    circle.style.opacity = 1;
    circle.style.left = e.x + "px";
    circle.style.top = e.y + "px";
  });

  p7Video1.addEventListener("mouseleave", () => {
    p7Video1.pause();
    circle.style.opacity = 0;
  });

  p7Video2.addEventListener("mouseenter", () => {
    p7Video2.play();
  });

  p7Video2.addEventListener("mousemove", (e) => {
    circle.style.opacity = 1;
    circle.style.left = e.x + "px";
    circle.style.top = e.y + "px";
  });

  p7Video2.addEventListener("mouseleave", () => {
    p7Video2.pause();
    circle.style.opacity = 0;
  });
};

page7Anim();

const page8Anim = () => {
  const p8Video1 = document.querySelector("#p8-v1");
  const p8Video2 = document.querySelector("#p8-v2");
  const p8Para1 = document.querySelector("#p8-p1");
  const p8Para2 = document.querySelector("#p8-p2");
  const p8H3_1 = document.querySelector("#p8-h3-1");
  const p8H3_2 = document.querySelector("#p8-h3-2");

  p8Video1.addEventListener("mouseenter", () => {
    p8Para1.style.display = "none";
    p8Video1.play();
    p8H3_1.style.marginBottom = "2rem";
    p8Video1.style.height = "70vh";
  });

  p8Video1.addEventListener("mouseleave", () => {
    p8Para1.style.display = "block";
    p8Video1.pause();
    p8H3_1.style.marginBottom = "4.5rem";
    p8Video1.style.height = "40vh";
  });

  p8Video2.addEventListener("mouseenter", () => {
    p8Para2.style.display = "none";
    p8Video2.play();
    p8H3_2.style.marginBottom = "2rem";
    p8Video2.style.height = "70vh";
  });

  p8Video2.addEventListener("mouseleave", () => {
    p8Para2.style.display = "block";
    p8Video2.pause();
    p8H3_2.style.marginBottom = "4.5rem";
    p8Video2.style.height = "40vh";
  });
};

page8Anim();

const page13Anim = () => {
  const page13 = document.querySelector("#page-13");
  let lists = document.querySelectorAll(".p13-list ul li");

  page13.addEventListener("mouseenter", () => {
    lists[1].style.transform = "translateX(15%)";
    lists[2].style.transform = "translateX(30%)";
    lists[3].style.transform = "translateX(45%)";
    lists[4].style.transform = "translateX(60%)";
    lists[5].style.transform = "translateX(75%)";
    lists[7].style.transform = "translateX(20%)";
    lists[9].style.transform = "translateX(20%)";
    lists[10].style.transform = "translateX(40%)";
  });

  page13.addEventListener("mouseleave", () => {
    lists[1].style.transform = "translateX(0%)";
    lists[2].style.transform = "translateX(0%)";
    lists[3].style.transform = "translateX(0%)";
    lists[4].style.transform = "translateX(0%)";
    lists[5].style.transform = "translateX(0%)";
    lists[7].style.transform = "translateX(0%)";
    lists[9].style.transform = "translateX(0%)";
    lists[10].style.transform = "translateX(0%)";
  });
};

page13Anim();

const page15Anim = () => {
  let FaqBtn = document.querySelectorAll(".faq-btn");
  let Answer = document.querySelectorAll(".answer");
  let p15Elem = document.querySelectorAll(".p15-elem");
  let FQ = document.querySelectorAll(".fq");

  let click = 0;

  p15Elem[0].addEventListener("click", () => {
    click++;
    if (click % 2 !== 0) {
      Answer[0].style.display = "block";
      FaqBtn[0].innerHTML = `<i class="fa-solid fa-angle-up"></i
              >`;
      p15Elem[0].style.borderTop = "1.5px solid #dfdfdf";
      FQ[0].style.color = "white";
      FQ[0].style.fontWeight = "550";
    } else {
      Answer[0].style.display = "none";
      FaqBtn[0].innerHTML = `<i class="fa-solid fa-angle-down"></i
              >`;
      p15Elem[0].style.borderTop = "1px solid #333";
      FQ[0].style.color = "rgb(164, 164, 164)";
      FQ[0].style.fontWeight = "400";
    }
  });

  p15Elem[1].addEventListener("click", () => {
    click++;
    if (click % 2 !== 0) {
      Answer[1].style.display = "block";
      FaqBtn[1].innerHTML = `<i class="fa-solid fa-angle-up"></i
              >`;
      p15Elem[1].style.borderTop = "1.5px solid #dfdfdf";
      FQ[1].style.color = "white";
      FQ[1].style.fontWeight = "550";
    } else {
      Answer[1].style.display = "none";
      FaqBtn[1].innerHTML = `<i class="fa-solid fa-angle-down"></i
              >`;
      p15Elem[1].style.borderTop = "1px solid #333";
      FQ[1].style.color = "rgb(164, 164, 164)";
      FQ[1].style.fontWeight = "400";
    }
  });

  p15Elem[2].addEventListener("click", () => {
    click++;
    if (click % 2 !== 0) {
      Answer[2].style.display = "block";
      FaqBtn[2].innerHTML = `<i class="fa-solid fa-angle-up"></i
              >`;
      p15Elem[2].style.borderTop = "1.5px solid #dfdfdf";
      FQ[2].style.color = "white";
      FQ[2].style.fontWeight = "550";
    } else {
      Answer[2].style.display = "none";
      FaqBtn[2].innerHTML = `<i class="fa-solid fa-angle-down"></i
              >`;
      p15Elem[2].style.borderTop = "1px solid #333";
      FQ[2].style.color = "rgb(164, 164, 164)";
      FQ[2].style.fontWeight = "400";
    }
  });

  p15Elem[3].addEventListener("click", () => {
    click++;
    if (click % 2 !== 0) {
      Answer[3].style.display = "block";
      FaqBtn[3].innerHTML = `<i class="fa-solid fa-angle-up"></i
              >`;
      p15Elem[3].style.borderTop = "1.5px solid #dfdfdf";
      FQ[3].style.color = "white";
      FQ[3].style.fontWeight = "550";
    } else {
      Answer[3].style.display = "none";
      FaqBtn[3].innerHTML = `<i class="fa-solid fa-angle-down"></i
              >`;
      p15Elem[3].style.borderTop = "1px solid #333";
      FQ[3].style.color = "rgb(164, 164, 164)";
      FQ[3].style.fontWeight = "400";
    }
  });

  p15Elem[4].addEventListener("click", () => {
    click++;
    if (click % 2 !== 0) {
      Answer[4].style.display = "block";
      FaqBtn[4].innerHTML = `<i class="fa-solid fa-angle-up"></i
              >`;
      p15Elem[4].style.borderTop = "1.5px solid #dfdfdf";
      FQ[4].style.color = "white";
      FQ[4].style.fontWeight = "550";
    } else {
      Answer[4].style.display = "none";
      FaqBtn[4].innerHTML = `<i class="fa-solid fa-angle-down"></i
              >`;
      p15Elem[4].style.borderTop = "1px solid #333";
      FQ[4].style.color = "rgb(164, 164, 164)";
      FQ[4].style.fontWeight = "400";
    }
  });
};

page15Anim();
