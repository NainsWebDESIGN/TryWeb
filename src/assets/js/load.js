const text = document.querySelector(".text");
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

anime
  .timeline({ loop: true })
  .add({
    targets: ".text span",
    translateX: [72, 0],
    scale: [1, 1],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: anime.stagger(100),
  })
  .add({
    targets: ".text span",
    translateX: [0, -72],
    scale: [1, 1],
    opacity: [1, 0],
    easing: "easeOutExpo",
    duration: 1000,
    delay: anime.stagger(100),
  });
