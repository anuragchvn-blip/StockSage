import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { useFirebase } from '../contexts/FirebaseContext';

function AddItemForm() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const { db } = useFirebase();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'pantryItems'), {
        name,
        quantity,
        expiryDate: new Date(expiryDate),
      });
      setName('');
      setQuantity('');
      setExpiryDate('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <Container>
      <Box sx={{ mt: 4, mb: 2 }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Add Pantry Item
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Item Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Expiry Date"
            type="date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
          <Button type="submit" variant="contained" color="secondary" sx={{ mt: 2 }}>
            Add Item
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default AddItemForm;
