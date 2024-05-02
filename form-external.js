function sendForm(e) {
    const email = document.getElementById("inputEmail")
    // console.log(email)
    // console.log("Valor email", email.value)
    if (email.value == "") {
        alert("el email está vacio")
        e.preventDefault() 
        return 
    }
    if (email.value.indexOf("@") == -1) {
        alert("el email no es valido")
        e.preventDefault() // Previene que se haga submit del formulario
        return
    }
    if (email.value.length < 9) {
        alert("el email debe tener al menos 8 caracteres")
        e.preventDefault() // Previene que se haga submit del formulario
        return
    }

    const service = document.getElementById(
        "inputService"
    )

    if (service.value == "") {
        const serviceAlert = service.nextElementSibling;
        serviceAlert.style.display = "block"
        e.preventDefault() // Previene que se haga submit del formulario
        return
    }
}