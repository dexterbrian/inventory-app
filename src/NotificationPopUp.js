import React, { useState } from "react";

const Notification = ({ message, type }) => {
  return <div className={`notification ${type}`}>{message}</div>;
};

const NotificationPopup = () => {
    const [notification, setNotification] = useState(null);
  
    const handleDeleteProduct = () => {
      setNotification({ message: 'Product deleted successfully!', type: 'success' });
      setNotification({ message: 'Error deleting product.', type: 'error' });
    };

    const handleAddProduct = () => {
        setNotification({ message: 'Product added successfully!', type: 'success' });
        setNotification({ message: 'Error adding product.', type: 'error' });
      };
    
    

export default NotificationPopup;