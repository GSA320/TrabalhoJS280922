function reajuste(){
    var salario = parseInt(document.getElementById('salario').value);
    var final = null;
    
    if(salario <= 280){
        var vlrAumento = salario * 0.2;
        var novo_sal = salario  * 1.20;
        var perc = 20;
    }
    if(salario >= 281 && salario <=700){
        var vlrAumento = salario * 0.15;
        var novo_sal = salario  * 1.15;
        var perc = 15;
    }
    if(salario >= 701 && salario <=1500){
        var vlrAumento = salario * 0.1;
        var novo_sal = salario  * 1.1;
        var perc = 10;
    }
    if(salario >= 1501){
        var vlrAumento = salario * 0.05;
        var novo_sal = salario  * 1.05;
        var perc = 5;
    }
    document.getElementById('a').innerHTML = 'Salário antes do reajuste: R$' + salario;
    document.getElementById('b').innerHTML = 'Percentual de aumento: ' + perc + '%';
    document.getElementById('c').innerHTML = 'Valor do aumento: R$' + vlrAumento;
    document.getElementById('resultado').innerHTML = 'O novo salário é igual a: R$' + novo_sal;
}

///////////////////////////////////////////////////////////////////////////////////////////////

function validar(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var cnpj = document.getElementById('CNPJ').value;
    var cep = document.getElementById('CEP').value;
    if (!nome) {
        document.getElementById('erro').style.display = 'block';
        document.getElementById('erro').innerHTML = 'Erro desconhecido no campo "Nome"'
        return false;
    }
    if(!email){
        document.getElementById('erro').style.display = 'block';
        document.getElementById('erro').innerHTML = 'Erro desconhecido no campo "Email"'
        document.getElementById('email').focus()
        return false;
    }
    if(!telefone){
        document.getElementById('erro').style.display = 'block';
        document.getElementById('erro').innerHTML = 'Erro desconhecido no campo "Telefone"'
        return false;
    }
    if(!cnpj){
        document.getElementById('erro').style.display = 'block';
        document.getElementById('erro').innerHTML = 'Erro desconhecido no campo "CNPJ"'
        return false;
    }
    if(!cep){
        document.getElementById('erro').style.display = 'block';
        document.getElementById('erro').innerHTML = 'Erro desconhecido no campo "CEP"'
        return false;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////

const toggle1 = document.getElementById("toggle1");
const toggle2 = document.getElementById("toggle2");
const toggle3 = document.getElementById("toggle3");
const toggle4 = document.getElementById("toggle4");
const refresh = document.getElementById("refresh");
const theme = window.localStorage.getItem("theme");
if (theme === "verde") document.body.classList.add("verde");
if (theme === "azul") document.body.classList.add("azul");
if (theme === "amarelo") document.body.classList.add("amarelo");
if (theme === "vermelho") document.body.classList.add("vermelho");
toggle1.addEventListener("click", () => {
  document.body.classList.toggle1("verde");
  if (theme === "verde") {
    window.localStorage.setItem("theme", "verde");
  }
});
toggle2.addEventListener("click", () => {
    document.body.classList.toggle("azul");
    if (theme === "azul") {
      window.localStorage.setItem("theme", "azul");
    }
  });
  toggle3.addEventListener("click", () => {
    document.body.classList.toggle("amarelo");
    if (theme === "amarelo") {
      window.localStorage.setItem("theme", "amarelo");
    }
  });
  toggle4.addEventListener("click", () => {
    document.body.classList.toggle("vermelho");
    if (theme === "vermelho") {
      window.localStorage.setItem("theme", "vermelho");
    }
  });

refresh.addEventListener("click", () => {
  window.location.reload();
});