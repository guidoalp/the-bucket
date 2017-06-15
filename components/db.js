import firebase from 'firebase'

export default async function loadDB() {

  try {
    firebase.initializeApp({
      databaseURL: 'https://the-bucket-47dfc.firebaseio.com/'
    })
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)
    }
  }

  const ref = firebase.database().ref('ideas')
  return ref
}
