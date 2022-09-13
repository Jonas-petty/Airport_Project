import { createUserWithEmailAndPassword } from 'firebase/auth'

import { auth } from './app'

document.getElementById('signInButton').addEventListener('click', (event) => {
    event.preventDefault()
    
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    
    if (email != '' && password != '') {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user

                alert('Você foi cadastrado com sucesso!')
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                if (errorCode === 'auth/email-already-in-use') {
                    alert("Essa conta já existe!")
                }
                
            })
    } else {
        alert("Por favor, preencha todos os campos!")
    }
})