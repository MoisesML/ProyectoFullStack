import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBr1Tf6UAnFsxcZEVnFzKhoqyNCJARwyvY",
  authDomain: "sistema-inventarios-35fb2.firebaseapp.com",
  databaseURL: "https://sistema-inventarios-35fb2.firebaseio.com",
  projectId: "sistema-inventarios-35fb2",
  storageBucket: "sistema-inventarios-35fb2.appspot.com",
  messagingSenderId: "408317430735",
  appId: "1:408317430735:web:5c64c5890350cde95920ba",
};

const fire = firebase.initializeApp(config);

export { fire as default, firebase }