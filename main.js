const form = document.getElementById("test-number");

function testaNumero (primeiroNumero, segundoNumero){
    return segundoNumero > primeiroNumero
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const primeiroNumero = document.getElementById('primeiro-numero');
    const segundoNumero = document.getElementById('segundo-numero');
    
    if (!testaNumero (primeiroNumero.value, segundoNumero.value)){
        alert ("O segundo número não é maior que o primeiro.")
    } else {
        alert ("O segundo número é maior que o primeiro.")
        primeiroNumero.value = ''
        segundoNumero.value = ''
    }

})

console.log(form);