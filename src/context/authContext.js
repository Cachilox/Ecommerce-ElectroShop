import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth, database } from "../firebase/firebase";
import {collection, addDoc} from "firebase/firestore";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is not auth provider");
  return context;
};

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  const createPurchaseOrder = async (client, date, preTotal, items) => {
    try {
      const buyOrder = await addDoc(collection(database, "orders"), {
        name: `${user ? user.displayName : client.name}`,
        email: `${user ? user.email : client.email}`,
        dni: client.dni,
        address: client.address,
        date: date,
        totalPrice: preTotal,
        items: items,
      })
      return buyOrder
    } catch (error) {
      console.error(error);
    }
  }


  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider
      value={{ signup, login, user, logout, loading, loginWithGoogle, createPurchaseOrder }}
    >
      {props.children}
    </authContext.Provider>
  );
}
