import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './app'

document.getElementById('logIn').addEventListener('click', (event) => {
    event.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    if (email != '' && password != '') {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user

                alert('Logado com sucesso!')
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
            })
    } else {
        alert("Por favor, preencha todos os campos!")
    }
    
})