// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyANEnYWyvI6Dv8sLeaX5A6WLbFrvZU724k',
  authDomain: 'catalina-bakery.firebaseapp.com',
  projectId: 'catalina-bakery',
  storageBucket: 'catalina-bakery.appspot.com',
  messagingSenderId: '85991522627',
  appId: '1:85991522627:web:09b9458f967f9c6f61aff6'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app;

export async function gFetch({categoryId, itemId}) {
  const db = getFirestore();
  const ref = itemId ? doc(db, 'items', itemId) : categoryId ? query(collection(db, 'items'), where('categoryId', '==', parseInt(categoryId))) : collection(db, 'items');
  const snapshot = itemId ? await getDoc(ref) : await getDocs(ref);
  const items = itemId ? snapshot : snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
  
  return items;
}