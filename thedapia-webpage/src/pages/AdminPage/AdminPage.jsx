import React from "react";
import Navbar from '../../components/Admin/Navbar/Navbar';
import AdminProducts from '../AdminProducts/AdminProducts';

const AdminPage = () => {
    return(
        <>
        <Navbar/>
        <AdminProducts/>
        </>
    );
};

export default AdminPage;