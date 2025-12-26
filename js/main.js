const opening = document.getElementById("opening");
const btn = document.getElementById("startBtn");
const scene = document.getElementById("scene");

const camera = document.getElementById("camera");
const lid = document.querySelector(".lid");
const puppet = document.querySelector(".puppet");
const mouth = document.querySelector(".mouth");
const message = document.querySelector(".message span");
const epilogue = document.querySelector(".epilogue");

const musicBox = document.getElementById("musicBox");
const ambient = document.getElementById("ambient");
const scare = document.getElementById("scare");

btn.onclick = () => {
  opening.style.display = "none";
  scene.style.display = "block";

  musicBox.volume = 0.5;
  ambient.volume = 0.35;
  musicBox.play();
  setTimeout(() => ambient.play(), 1200);

  lid.animate(
    [{ transform: "rotateX(0deg)" }, { transform: "rotateX(-140deg)" }],
    { duration: 2600, delay: 1400, fill: "forwards" }
  );

  puppet.animate(
    [{ bottom: "-180px" }, { bottom: "-100px" }, { bottom: "-80px" }],
    { duration: 3800, delay: 2400, fill: "forwards", easing: "ease-in-out" }
  );

  setTimeout(showText, 6200);
  setTimeout(epilogueScene, 15000);
};

/* TEXT */
function showText() {
  const text = `
🎉 SELAMAT ULANG TAHUN RAFI 🎉

Aku muncul bukan untuk menakutimu,
tetapi untuk mengingatkanmu…

bahwa di balik gelap,
selalu ada cahaya.

Di balik takut,
ada keberanian.

Teruslah melangkah,
kami selalu menjagamu 🖤
`;

  message.innerHTML = "";
  [...text].forEach((c, i) => {
    const s = document.createElement("span");
    s.innerText = c;
    message.appendChild(s);
    s.animate(
      [
        { opacity: 0, transform: "translateY(20px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: 500, delay: i * 38, fill: "forwards" }
    );
  });

  setTimeout(() => {
    mouth.style.width = "36px";
    scare.volume = 0.6;
    scare.play();
  }, 2000);
}

/* EPILOGUE */
function epilogueScene() {
  epilogue.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 3000,
    fill: "forwards",
  });
}

/* EYES FOLLOW CURSOR */
document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".eye").forEach((eye) => {
    const r = eye.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    const a = Math.atan2(y, x);
    eye.style.transform = `translate(${Math.cos(a) * 3}px,${
      Math.sin(a) * 3
    }px)`;
  });
});
