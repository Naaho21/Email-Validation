function validation(){
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var patteron = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

     if(email.match(patteron)){
         form.classList.add('valid');
         form.classList.remove('invalid');
         text.innerHTML  = "Your Email Address Valid"
         text.style.color = "#00ff00"
     }else{
         form.classList.remove('valid');
         form.classList.add('invalid');
         text.innerHTML  = "Please Enter Valid Email Address";
         text.style.color = "#ff0000";
     }

     if(email == ""){
        form.classList.remove('valid');
        form.classList.remove('invalid');
        text.innerHTML  = ""
        text.style.color = "#00ff00"
    }

}