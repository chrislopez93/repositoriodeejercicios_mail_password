function validacion(){
    const mail = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;
    if(mail == "a@gmail.com" && password == "password"){
        let span = document.querySelector('.span');
        span.innerHTML = " " + "correctas"
    }else{
        let span = document.querySelector('.span');
        span.innerHTML = " " + "incorrectas"
    }
}

function salario(){
    const salarioActual = document.querySelector('.actual').value;
    const salarioAnterior = document.querySelector('.anterior').value;
    if (salarioActual != ' ' || salarioAnterior != ' '){
        spanSalario = document.querySelector('.spanSalario');
        spanSalario.innerHTML = " " + "Correcto";
    }else{
        spanSalario = document.querySelector('.spanSalario');
        spanSalario.innerHTML = "Incorrecto";
    }
}