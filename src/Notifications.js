import React, { useState, useEffect } from 'react';

const HandleNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNotifications([]);
      setErrors([]);
    }, 7500);

    return () => clearTimeout(timeout);
  }, [notifications, errors]);

 
  const addError = (message) => {
    setErrors([...errors, message]);
  };

  useEffect(() => {
    const handleNetworkError = () => {
      addError('A network error occurred. Please try again.');
    };

    window.addEventListener('offline', handleNetworkError);
    window.addEventListener('online', handleNetworkError);

    return () => {
      window.removeEventListener('offline', handleNetworkError);
      window.removeEventListener('online', handleNetworkError);
    };
}, );

  return (
    <div>
      {notifications.map((message, index) => (
        <div key={`notification-${index}`} className="notification">
          {message}
        </div>
      ))}
      {errors.map((message, index) => (
        <div key={`error-${index}`} className="error">
          {message}
         
        </div>
      ))}
    </div>
  );
};

export default HandleNotifications;
