import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCpw6S9jjvZuijewMA93M39sZG4MdAhT0c",
    authDomain: "academicoapp-4256e.firebaseapp.com",
    projectId: "academicoapp-4256e",
    storageBucket: "academicoapp-4256e.appspot.com",
    messagingSenderId: "843092938007",
    appId: "1:843092938007:web:3e3329da1e490fa1147b52",
    measurementId: "G-L9H7MWCNMF"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const auth = getAuth(app)
