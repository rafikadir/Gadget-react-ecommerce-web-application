import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZGIQrUAFI_EsJeIt5ghCUPLjrXKGrnTY",
  authDomain: "gadget-reactjs.firebaseapp.com",
  projectId: "gadget-reactjs",
  storageBucket: "gadget-reactjs.appspot.com",
  messagingSenderId: "1021069680765",
  appId: "1:1021069680765:web:7ec700dad263a8d1629114"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
