import React from 'react';
import "./Service.css";
import { FaTruck, FaClipboardList, FaChartLine, FaBell, FaBarcode, FaUserCog } from 'react-icons/fa';

function Service() {
  return (
    <div className='services' id='services'>
        <div className='services-heading'>
            <h2>Our Services</h2>
            <p>These are the services we offer</p>
        </div>

        <div className='service-container'>
            <div className='service-row'>
            <div className='service'>
                <FaTruck className='service-icon'/>
                <h3>Inventory Tracking</h3>
                <p>Keep track of your stock levels and easily monitor inventory movements.</p>
            </div>
            <div className='service'>
                <FaClipboardList className='service-icon'/>
                <h3>Order Management</h3>
                <p>Efficiently process and manage customer orders, from creation to fulfillment.</p>
            </div>
            <div className='service'>
                <FaChartLine className='service-icon'/>
                <h3>Reporting</h3>
                <p>Generate detailed reports on inventory status, sales, and performance.</p>
            </div>
            <div className='service'>
                <FaBell className='service-icon'/>
                <h3>Alerts and Notifications</h3>
                <p>Receive automated alerts and notifications for low stock levels or critical inventory events.</p>
            </div>
            <div className='service'>
                <FaBarcode className='service-icon'/>
                <h3>Barcode Labeling</h3>
                <p>Easily create and print barcode labels for efficient product identification.</p>
            </div>
            <div className='service'>
                <FaUserCog className='service-icon'/>
                <h3>User Management</h3>
                <p>Control access and permissions for different users within the inventory management system.</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Service;