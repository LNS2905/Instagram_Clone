// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0v0cYmaFZbLYU6v1xBmJFbN426sq93CI",
    authDomain: "instagram-clone-cf482.firebaseapp.com",
    projectId: "instagram-clone-cf482",
    storageBucket: "instagram-clone-cf482.appspot.com",
    messagingSenderId: "175560615257",
    appId: "1:175560615257:web:10f709d43e593faee51848",
    measurementId: "G-5HYPYHSWE6"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
async function loginGoogle() {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const response = await firebase.auth().signInWithPopup(googleProvider);
    console.log(response.user.displayName);
    console.log(response.user.email);

    window.location = "home.html";
}
