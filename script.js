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
