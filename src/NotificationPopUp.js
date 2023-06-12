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

  const AddProduct = () => {
    setNotification({
      message: "Product added successfully.",
      type: "success",
    });
    setNotification({ message: "Error adding product.", type: "error" });
  };

  const EditProduct = () => {
    setNotification({
      message: "Product edited successfully.",
      type: "success",
    });
    setNotification({ message: "Error editing product.", type: "error" });
  };

  const DeleteProduct = () => {
    setNotification({
      message: "Product deleted successfully.",
      type: "success",
    });
    setNotification({ message: "Error deleting product.", type: "error" });
  };

  return (
    <div>
      {notification && (
        <Notification message={notification.message} type={notification.type} />
      )}
      <button onClick={AddProduct}>Add Product</button>
      <button onClick={() => EditProduct}>Edit Product</button>
      <button onClick={() => DeleteProduct}>Delete Product</button>
    </div>
  );
};

export default NotificationPopup;
