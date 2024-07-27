import React, { createContext, useContext } from 'react';
import { db } from '../utils/firebaseConfig'; // Import the Firestore instance

const FirebaseContext = createContext();

export function FirebaseProvider({ children }) {
  return (
    <FirebaseContext.Provider value={{ db }}>
      {children}
    </FirebaseContext.Provider>
  );
}

export const useFirebase = () => useContext(FirebaseContext);
