let boton=document.getElementById("miBoton");;
-boton.addEventListener("click", function() { alert("¡hola! Haz hecho clic en el botón!"); });
const miBoton = document.getElementById('miBoton');
function handleclick(){
    alert(' ¡hola! haz hecho clicen el boton')
}

function showAlerte(){ 
    alert("¡hola, esta es una alerta desde javaScript!")
}

const form=document.getElementById("myfrom") 


function validateEmail(email){
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}

function validateForm(){
    const input=document.getElementById("email")
    const inputvalue = input.value
   
    if(validateEmail(inputvalue)){
        alert('por favor ingrese un correo electronico valido')
    } else{
        alert('correo enviado corectamente.')
    }
}


form.addEventlistener("submit", function(lala){ 
    lala.preventdefault()
    validateform();
    })