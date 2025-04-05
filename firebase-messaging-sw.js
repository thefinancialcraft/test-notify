importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBcbc5HEqoB3T6iXFsuKu2l25FJEgJSwGw",
  authDomain: "tfc-connect.firebaseapp.com",
  projectId: "tfc-connect",
  storageBucket: "tfc-connect.firebasestorage.app",
  messagingSenderId: "259719401882",
  appId: "1:259719401882:web:9d1c8418e7baea37ff2a23",
  measurementId: "G-L6NX6YYCNB"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});


