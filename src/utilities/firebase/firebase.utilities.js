import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDBuzXHNFtSoOR7B94b9amszpVVWURNJFA",
    authDomain: "crown-db-bc6c1.firebaseapp.com",
    projectId: "crown-db-bc6c1",
    storageBucket: "crown-db-bc6c1.appspot.com",
    messagingSenderId: "811051379484",
    appId: "1:811051379484:web:03d92d33f2931a61aa68d9",
    measurementId: "G-1P7ST1W34T"
};
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error message')
        }
    } 
    return userDocRef;

}

