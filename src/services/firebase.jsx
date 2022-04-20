// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyB2n9iYy7gObKuHFyx3niI_IPuwDYsZvCI',
  authDomain: 'esp32-d2fc6.firebaseapp.com',
  databaseURL: 'https://esp32-d2fc6-default-rtdb.firebaseio.com',
  projectId: 'esp32-d2fc6',
  storageBucket: 'esp32-d2fc6.appspot.com',
  messagingSenderId: '538335535923',
  appId: '1:538335535923:web:1ffd48ba281af0e8bc1446',
}

const app = initializeApp(firebaseConfig)

const database = getDatabase(app)

export { database }
