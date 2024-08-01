const hum = document.getElementById("hum");
const nav = document.getElementById("nav");
const art = document.getElementById("alert");

let early = 0;

hum.addEventListener("click", function () {
  nav.classList.toggle("humdown");
  early = (early + 1) % 2;
  hum.setAttribute("src", `./images/${early === 0 ? "menu" : "x"}.svg`);
});

document.querySelector("button").addEventListener("click", function () {
  const nameInput = document.getElementById("name");
  const gmailInput = document.getElementById("gmail");
  const msg = document.getElementById("msg");

  const successAlert = `<p><span id="t">Terimakasih! </span>pesan anda sudah terkirim</p>`;
  const errAlert = `<p><span id="t">Error! </span>Tolong lengkapi kolom di bawah</p>`;

  setTimeout(() => {
    if (!nameInput.value && !gmailInput.value && !msg.value) {
      art.innerHTML = errAlert;
      art.style.backgroundColor = "rgba(231, 12, 12, 0.638)";
    } else {
      art.innerHTML = successAlert;
      art.style.backgroundColor = "rgba(27, 239, 27, 0.437)";
    }

    const input = document.querySelectorAll("input");
    input.forEach((result) => {
      result.value = "";
    });

    setTimeout(() => {
      art.innerHTML = "";
    }, 5000);
  }, 500);
});

const persen = [
  { t: "HTML", p: 60 },
  { t: "Css", p: 56 },
  { t: "Javascript", p: 65 },
  { t: "Typescript", p: 43 },
  { t: "PHP", p: 43 },
  { t: "Java", p: 27 },
  { t: "React-Js", p: 67 },
  { t: "Next-Js", p: 66 },
  { t: "Express-Js", p: 65 },
  { t: "React-Native", p: 82 },
  { t: "TailwindCss", p: 84 },
  { t: "Bootstrap", p: 15 },
];
const skill = document.querySelectorAll("div.skill");
const containerSkills = document.querySelector("div.skills-container");
let color = "";
let ui = ``;

persen.forEach(function (el, i) {
  if (el.p >= 80) color = "#007bff";
  if (el.p < 80 && el.p >= 55) color = "#28a745";
  if (el.p < 54) color = "#da373d";

  ui += `
   <div class="skill-container flex items-center" style="display: flex; align-items: center;">
      <div class="skill bg-red" style="background-color: ${color};">
        <p>${el.t}</p>
      </div>
      <p class="p-3">${el.p}%</p>
    </div>
  `;
});

containerSkills.innerHTML = ui;
// containerSkills.innerHTML = ui;
// 45
