function trigger(){
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