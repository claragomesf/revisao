function inserirNome (){
  let nomeUsuario = prompt("Qual o se nome");
  let elemento = document. querySelector("#nome-usuario");
  elemento.textContent = nomeUsuario;
}

inserirNome();