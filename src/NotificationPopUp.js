import React, { useState } from "react";

const Notification = ({ message, type }) => {
  return <div className={`notification ${type}`}>{message}</div>;
};

const NotificationPopup = () => {
  const [notification, setNotification] = useState(null);

  const handleDeleteProduct = () => {
    setNotification({
      message: "Product deleted successfully!",
      type: "success",
    });
    setNotification({ message: "Error deleting product.", type: "error" });
  };

  const handleAddProduct = () => {
    setNotification({
      message: "Product added successfully!",
      type: "success",
    });
    setNotification({ message: "Error adding product.", type: "error" });
  };

  const handleEditProduct = () => {
    setNotification({
      message: "Product edited successfully!",
      type: "success",
    });
    setNotification({ message: "Error editing product.", type: "error" });
  };

  return (
    <div>
      {notification && (
        <Notification message={notification.message} type={notification.type} />
      )}
      
  );
};

export default NotificationPopup;
