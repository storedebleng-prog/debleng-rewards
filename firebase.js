
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCTHm8pRMrVYk-YSn8TSGZInQTtW5Rx5OY",
    authDomain: "debleng-rewards.firebaseapp.com",
    projectId: "debleng-rewards",
    storageBucket: "debleng-rewards.firebasestorage.app",
    messagingSenderId: "390149265696",
    appId: "1:390149265696:web:f064bce9e09eeebfe79f45"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
