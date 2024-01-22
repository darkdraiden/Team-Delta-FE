import React from 'react'
import AdminNavbar from '../components/Navbar/AdminNavbar';

const AdminLayoutHoc = 
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <AdminNavbar />
        <Component {...props} />
        <div>Footer</div>
      </div>
    );
  }


export default AdminLayoutHoc
