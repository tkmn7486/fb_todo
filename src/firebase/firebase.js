import { initializeApp } from 'firebase/app'

const config = {
    apiKey: 'AAAAG26AO1A:APA91bHVifwR-yfjKxTTFAOWPlhmflJ0kDKhMoYotNOqYzhYNmd7b1_6xUOagvtO9odXLFLTC-EQbHVWBZM14ShDu5dHYBd051tttOfo4BAhKTbs7wUiAmWIKnwNNu4cEL3r9imC-KAM',
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: 'long-todo-d16d7',
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: '117818014544',
    appId: '1:117818014544:web:8c850e16dedf49b11aca55',
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}

const firebaseApp = initializeApp(config)

export default firebaseApp