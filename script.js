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
    if (salarioActual != '' || salarioAnterior != ''){ /*El espacio en blanco tambien cuenta como un valor*/
        spanSalario = document.querySelector('.spanSalario');
        spanSalario.innerHTML = " " + "Correcto";
    }else{
        spanSalario = document.querySelector('.spanSalario');
        spanSalario.innerHTML = " " + "Incorrecto";
    }
}

function check(){
    const check = document.querySelector('#opt1').checked;
    if(check == true){
        const checked = document.querySelector('.checked');
        checked.innerHTML = " " + "True";
    }else{
        const checked = document.querySelector('.checked');
        checked.innerHTML = " " + "False";
    }
}

function checkedstatus(){
    const checkopt2 = document.querySelector('#opt2').checked;
    const checkopt3 = document.querySelector('#opt3').checked;
    
    if( checkopt2 == true && checkopt3 == true){
        const checkedbox = document.querySelector('.checkedbox');
        checkedbox.innerHTML =" " + "Ambas cajas han sido activadas (valor true)";
    }else{
        const checkedbox = document.querySelector('.checkedbox');
        checkedbox.innerHTML =" " + "Una o ninguna de las cajas han sido activadas (valor false)";
    }
}

function checkedoption(){
    const checkopt4 = document.querySelector('#opt4').checked;
    const checkopt5 = document.querySelector('#opt5').checked;
        if (checkopt4 == true || checkopt5 == true){
            const btn_enviar = document.querySelector('.btn-enviar');
            btn_enviar.disabled = false;
        }else{
            const btn_enviar = document.querySelector('.btn-enviar');
            btn_enviar.disabled = true;
        }
}