import { auth } from './app'
import './signIn'
import './login'

auth.onAuthStateChanged((user) => {
    if (user) {
        //alert('Conectado')
        window.location.href = '../pages/main.html'
    } else {
        //alert('Desconectado')
    }
})

