import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth'; 


const firebaseConfig = {
  apiKey: "AIzaSyCIOMHZ_benqAbKvP-641nUf5NB8Cn0KXE",
  authDomain: "cldomversel.firebaseapp.com",
  databaseURL: "https://cldomversel-default-rtdb.firebaseio.com",
  projectId: "cldomversel",
  storageBucket: "cldomversel.appspot.com",
  messagingSenderId: "195354932368",
  appId: "1:195354932368:web:c44b87d0a67cd551d55415",
  measurementId: "G-TPLMSYB14S"
};

// Inicialize o Firebase
// Delete o Firebase App existente, se existir
if (firebase.apps.length) {
  firebase.apps[0].delete()
    .then(() => {
      console.log('Firebase App excluído com sucesso');
      // Inicialize o Firebase com a nova configuração
      firebase.initializeApp(firebaseConfig);
    })
    .catch(error => {
      console.error('Erro ao excluir o Firebase App:', error);
    });
} else {
  console.log('Nenhum Firebase App encontrado para excluir');
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
