import React, { useState } from "react";

const Notification = ({ message, type }) => {
  return <div className={`notification ${type}`}>{message}</div>;
};
