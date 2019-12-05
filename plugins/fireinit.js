import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/storage'

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  }
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const auth2 = firebase.auth
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const facebookProvider = new firebase.auth.FacebookAuthProvider()
export const db = firebase.firestore()
export const storage = firebase.storage()
export const functions = firebase.functions()
export const FieldValue = firebase.firestore.FieldValue
export default firebase
