import React, { useState, useEffect } from 'react';
import { collection, query, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import { useFirebase } from '../contexts/FirebaseContext';
import { motion } from 'framer-motion';
import { Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

function ItemList() {
  const [items, setItems] = useState([]);
  const { db } = useFirebase();

  useEffect(() => {
    const q = query(collection(db, 'pantryItems'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const itemsList = [];
      querySnapshot.forEach((doc) => {
        itemsList.push({ id: doc.id, ...doc.data() });
      });
      setItems(itemsList);
    });
    return () => unsubscribe();
  }, [db]);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'pantryItems', id));
    } catch (error) {
      console.error('Error removing document: ', error);
    }
  };

  return (
    <Box component={motion.div} variants={containerVariants} initial="hidden" animate="visible" p={2}>
      <Typography variant="h4" gutterBottom>
        Pantry Items
      </Typography>
      <List>
        {items.map((item) => (
          <motion.div key={item.id} variants={itemVariants}>
            <ListItem
              secondaryAction={
                <Button 
                  variant="outlined" 
                  color="error" 
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </Button>
              }
            >
              <ListItemText
                primary={`${item.name} - ${item.quantity}`}
                secondary={`Expires: ${new Date(item.expiryDate.seconds * 1000).toDateString()}`}
              />
            </ListItem>
          </motion.div>
        ))}
      </List>
    </Box>
  );
}

export default ItemList;
