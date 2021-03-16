import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBbip3noGuvFzsY6-FFwIfOa38yyie595U",
  authDomain: "monicaleonard-react.firebaseapp.com",
  projectId: "monicaleonard-react",
  storageBucket: "monicaleonard-react.appspot.com",
  messagingSenderId: "1011201813009",
  appId: "1:1011201813009:web:eb808a53605e7468f5dfb0"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;