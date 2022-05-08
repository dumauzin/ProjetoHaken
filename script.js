const iconesSolLua = document.querySelector('.icones-sol-lua')

document.getElementById('checkbox').addEventListener('change', () => {
  document.body.classList.toggle('dark-mode')
  const rotacaoAtual = parseInt(getComputedStyle(iconesSolLua).getPropertyValue('--rotacao'))
  iconesSolLua.style.setProperty('--rotacao', rotacaoAtual + 180)
})

function checarTema() {
  if (document.getElementById("checkbox").checked == true) {
    document.getElementById("texto-dark-mode").innerHTML = "✦ Dark mode ✦"
  } else {
    document.getElementById("texto-dark-mode").innerHTML = "✦ Light mode ✦"
  }
}