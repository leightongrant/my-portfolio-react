import { initializeApp } from 'firebase/app'
import {
	getAuth,
	signOut,
	signInWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth'
// import { getAnalytics } from 'firebase/analytics'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APPID,
	measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
// const analytics = getAnalytics(app)

async function logIn(email, password) {
	try {
		await signInWithEmailAndPassword(auth, email, password)
	} catch (error) {
		console.log(error)
		return new Error('Invalid Email or Password')
	}
}

async function logOut() {
	try {
		await signOut(auth)
	} catch (error) {
		console.log(error)
	}
}

async function getUser(setUser) {
	onAuthStateChanged(auth, user => {
		if (user) {
			setUser(user)
			return
		}
		setUser(null)
	})
}

export { logIn, logOut, app, auth, getUser }
