// const saudacao = () => "Olá, mundo!"

// alert(saudacao())

// const dobrar =







// const VerificarIdade = (idade) => {
//     if ( idade >= 18 ) {
//         return "Pode seguir com a inscrição!"
//     }
//     return "Acesso bloqueado!"
//     }
     
//     let idade = prompt("Digite sua idade para verificar o acesso a plataforma: ")
//     alert(verificarIdade(idade))
 

const somar = (a, b) => a + b;
const botaoSomar = document.querySelector("#botaoSomar");

botaoSomar.addEventListener("click", () => {
    const campo1 = document.querySelector("#numero1");
    const campo2 = document.querySelector("#numero2");
    const resultado = document.querySelector("#resultadoSoma");

    if (campo1.value === "" || campo2.value === "") {
        resultado.textContent = "Preencha os dois números.";
        return;
    }
    const numero1 = Number(campo1.value);
    const numero2 = Number(campo2.value);
    resultado.textContent = `Resultado: ${somar(numero1, numero2)}`;
});