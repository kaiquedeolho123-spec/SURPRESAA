const botao = document.getElementById("btnSurpresa");
const mensagem = document.getElementById("mensagem");
const confetesContainer = document.getElementById("confetes");

botao.addEventListener("click", () => {
  botao.style.display = "none"; // esconde o botão
  mensagem.classList.remove("escondido");
  soltarConfetes();
});

function soltarConfetes() {
  for (let i = 0; i < 100; i++) {
    const confete = document.createElement("div");
    confete.classList.add("confete");

    confete.style.left = Math.random() * 100 + "vw";
    confete.style.animationDuration = Math.random() * 3 + 2 + "s";
    confete.style.backgroundColor = coresAleatorias();

    confetesContainer.appendChild(confete);

    setTimeout(() => {
      confete.remove();
    }, 5000);
  }
}

function coresAleatorias() {
  const cores = ["#ff4d6d", "#ffd166", "#06d6a0", "#4d96ff", "#c77dff"];
  return cores[Math.floor(Math.random() * cores.length)];
}
