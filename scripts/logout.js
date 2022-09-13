import { auth } from './app'

document.getElementById('logOut').addEventListener('click', () => {
    auth.signOut()
    alert('Usuário Desconectado!')
    window.location.href = '../index.html'
})

