import React, { useEffect, useState } from 'react';
import { useFirebase } from '../contexts/FirebaseContext';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

function Notification() {
  const [notifications, setNotifications] = useState([]);
  const { db } = useFirebase();

  useEffect(() => {
    const today = new Date();
    const q = query(collection(db, 'pantryItems'), where('expiryDate', '<=', today));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const alerts = [];
      querySnapshot.forEach((doc) => {
        alerts.push({ id: doc.id, ...doc.data() });
      });
      setNotifications(alerts);
    });
    return () => unsubscribe();
  }, [db]);

  return (
    <Box component={motion.div} variants={containerVariants} initial="hidden" animate="visible" p={2}>
      {notifications.length > 0 ? (
        <>
          <Typography variant="h6" gutterBottom>
            Expiring Soon:
          </Typography>
          <List>
            {notifications.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <ListItem>
                  <ListItemText
                    primary={item.name}
                    secondary={`Expires: ${new Date(item.expiryDate.seconds * 1000).toDateString()}`}
                  />
                </ListItem>
              </motion.div>
            ))}
          </List>
        </>
      ) : (
        <Typography variant="body1">No items expiring soon.</Typography>
      )}
    </Box>
  );
}

export default Notification;
