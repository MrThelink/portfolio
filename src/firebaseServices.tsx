import { initializeApp, FirebaseApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

// firebase configs
const firebaseConfig = {
    apiKey: "AIzaSyAN9srnZp3mcRyU1YJJ_pGnFo4O6azAl5I",
    authDomain: "portfolio-34f30.firebaseapp.com",
    projectId: "portfolio-34f30",
    storageBucket: "portfolio-34f30.appspot.com",
    messagingSenderId: "1091863046335",
    appId: "1:1091863046335:web:3628dfd883cfe6c30d7e0a",
    measurementId: "G-R3ET40RW8C"
  };

  // unique instance of firebase app
  let appInstance: FirebaseApp;

  // init firebase instance
  const InitializeApp = (): FirebaseApp => {
      if (!appInstance) appInstance = initializeApp(firebaseConfig);

      return appInstance;
  }

  // get analytics instance
  const GetAnalytics = () => {
      const appInstance = InitializeApp();
      return getAnalytics(appInstance);
  }

  // all our firebase services we use
  const FirebaseServices = {
    getAnalytics: GetAnalytics,
  }

  export default FirebaseServices;
