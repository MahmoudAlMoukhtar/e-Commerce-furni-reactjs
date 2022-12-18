import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyARd-ldO0uvcoqwBTbDoFeRJXKhufUHZ88",
  authDomain: "ecommerce-furni.firebaseapp.com",
  databaseURL: "https://ecommerce-furni-default-rtdb.firebaseio.com",
  projectId: "ecommerce-furni",
  storageBucket: "ecommerce-furni.appspot.com",
  messagingSenderId: "565095204500",
  appId: "1:565095204500:web:ec6b14bfc7029979b01681",
};

firebase.initializeApp(config);
const database = firebase.database();

/* database.ref("shippingAddress").on(
  "value",
  snapshot => {
    console.log(snapshot.val());
  },
  e => {
    console.log("error");
  }
); */

/* database.ref("shippingAddress").push({
  city: "test firebase",
  country: "firebase",
}); */

export default database;
