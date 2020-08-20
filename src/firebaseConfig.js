import firebase from "firebase/app";
import "firebase/storage";
var config = {
  apiKey: "AIzaSyAC7qAeiWZALthId50FpbMk6UD-eRtpduw",
  authDomain: "aviation-2020.firebaseapp.com",
  databaseURL: "https://aviation-2020.firebaseio.com",
  projectId: "aviation-2020",
  storageBucket: "aviation-2020.appspot.com",
  messagingSenderId: "174793631183",
  appId: "1:174793631183:web:fabe762c5713fa6d065eba",
  measurementId: "G-E5L2PYWJGP"
};
firebase.initializeApp(config);
const storage = firebase.storage;
export { storage };
