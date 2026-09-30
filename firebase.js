import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBjJ_SbNo9pA8IE7mP_2v3UnIGkY0IzjF0",
  authDomain: "bodega-seascape.firebaseapp.com",
  projectId: "bodega-seascape",
  storageBucket: "bodega-seascape.firebasestorage.app",
  messagingSenderId: "634162820624",
  appId: "1:634162820624:web:6d67c35de7667fe07efc95"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };