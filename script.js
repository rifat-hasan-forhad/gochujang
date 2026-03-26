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
