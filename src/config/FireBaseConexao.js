import firebase from 'firebase'

console.disableYellowBox = true;
    let config = {
        apiKey: "AIzaSyAIAoAjBiLlVMVrQcAJA_aA_juGWlVOuB0",
        authDomain: "meuapp-7bf9f.firebaseapp.com",
        databaseURL: "https://meuapp-7bf9f.firebaseio.com",
        projectId: "meuapp-7bf9f",
        storageBucket: "meuapp-7bf9f.appspot.com",
        messagingSenderId: "311568439060"
      };
    firebase.initializeApp(config);

    export default firebase;