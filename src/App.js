// src/App.js
import React from 'react';
import { FirebaseProvider } from './contexts/FirebaseContext';
import AddItemForm from './components/AddItemForm';
import ItemList from './components/ItemList';
import Notification from './components/Notification';

function App() {
  return (
    <FirebaseProvider>
      <div>
        <h1 style={{ marginLeft: '60px' }}>Pantry Tracker</h1>
        <AddItemForm />
        <Notification />
        <ItemList />
      </div>
    </FirebaseProvider>
  );
}

export default App;

