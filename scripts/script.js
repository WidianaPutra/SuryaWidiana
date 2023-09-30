const hum = document.getElementById("hum");
const nav = document.getElementById("nav");
const art = document.getElementById('alert');

let early = 0;

hum.addEventListener('click', function () {
  nav.classList.toggle("humdown");
  early = (early + 1) % 2;
  hum.setAttribute('src', `./images/${early === 0  ? 'menu' : 'x'}.svg`);
});

document.querySelector('button').addEventListener('click', function () {
  const nameInput = document.getElementById('name');
  const gmailInput = document.getElementById('gmail');
  const msg = document.getElementById('msg');

  const successAlert = `<p><span id="t">Terimakasih! </span>pesan anda sudah terkirim</p>`;
  const errAlert = `<p><span id="t">Error! </span>Tolong lengkapi kolom di bawah</p>`;

  setTimeout(() => {
    if (!nameInput.value && !gmailInput.value && !msg.value) {
      art.innerHTML = errAlert;
      art.style.backgroundColor = 'rgba(231, 12, 12, 0.638)';
    } else {
      art.innerHTML = successAlert;
      art.style.backgroundColor = 'rgba(27, 239, 27, 0.437)';
    }

    const input = document.querySelectorAll('input')
    input.forEach((result) => {
      result.value = '';
    })

    setTimeout(() => {
      art.innerHTML = '';
    }, 5000)
  }, 500);
});