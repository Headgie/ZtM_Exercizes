import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyCJ4Tu8l6tt94iXmnUBDzycF-5n4Onm7QM",
	authDomain: "crwn-db-4529b.firebaseapp.com",
	databaseURL: "https://crwn-db-4529b.firebaseio.com",
	projectId: "crwn-db-4529b",
	storageBucket: "crwn-db-4529b.appspot.com",
	messagingSenderId: "72891924860",
	appId: "1:72891924860:web:cad278f5aec310e1fee4f9"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;