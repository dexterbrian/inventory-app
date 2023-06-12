import React, { useState, useEffect } from "react";

const Notification = ({ message, type }) => {
  return <div className={`notification ${type}`}>{message}</div>;
};

const NotificationPopup = () => {
  const [notification, setNotification] = useState();

  useEffect(() => {
    if (notification) {
      const timeout = setTimeout(() => {
        setNotification();
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [notification]);

  const handleDeleteProduct = () => {
    setNotification({
      message: "Product deleted successfully.",
      type: "success",
    });
    setNotification({ message: "Error deleting product.", type: "error" });
  };

  const handleAddProduct = () => {
    setNotification({
      message: "Product added successfully.",
      type: "success",
    });
    setNotification({ message: "Error adding product.", type: "error" });
  };

  const handleEditProduct = () => {
    setNotification({
      message: "Product edited successfully.",
      type: "success",
    });
    setNotification({ message: "Error editing product.", type: "error" });
  };

  return (
    <div>
      {notification && (
        <Notification message={notification.message} type={notification.type} />
      )}
      <button onClick={() => handleDeleteProduct}>Delete Product</button>
      <button onClick={handleAddProduct}>Add Product</button>
      <button onClick={() => handleEditProduct}>Edit Product</button>
    </div>
  );
};

export default NotificationPopup;
