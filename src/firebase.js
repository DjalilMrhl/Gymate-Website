import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYerKafH-VMtTMspE-SoUVeEPTC5pkIE8",
  authDomain: "food-delivery-ad3d9.firebaseapp.com",
  databaseURL: "https://food-delivery-ad3d9-default-rtdb.firebaseio.com",
  projectId: "food-delivery-ad3d9",
  storageBucket: "food-delivery-ad3d9.appspot.com",
  messagingSenderId: "238275693857",
  appId: "1:238275693857:web:f499c72a9ff8dca0b0c260",
  measurementId: "G-S0QDBYTTTT"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAui9fjs71w8y8MQX-w0qYtxGyaOGQquBs",
//   authDomain: "gymate-gym.firebaseapp.com",
//   projectId: "gymate-gym",
//   storageBucket: "gymate-gym.appspot.com",
//   messagingSenderId: "1086911363831",
//   appId: "1:1086911363831:web:8dac101ceb861e5c71b1f2",
// };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);