import { useState, useEffect } from 'react';
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { useFirebase } from '../contexts/FirebaseContext';

export function useFirestore(collectionName) {
  const [items, setItems] = useState([]);
  const { db } = useFirebase();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, collectionName), (snapshot) => {
      const itemsList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setItems(itemsList);
    });

    return () => unsubscribe();
  }, [db, collectionName]);

  const addItem = (item) => {
    return addDoc(collection(db, collectionName), item);
  };

  const updateItem = (id, updatedItem) => {
    return updateDoc(doc(db, collectionName, id), updatedItem);
  };

  const deleteItem = (id) => {
    return deleteDoc(doc(db, collectionName, id));
  };

  return { items, addItem, updateItem, deleteItem };
}
