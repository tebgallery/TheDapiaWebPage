import React from "react";
import { useNavigate } from 'react-router-dom'
import img from "../../img/portada.jpg";

const Coverlayout = () => {
    const navigate = useNavigate();
    const handleNavigateToHome = () => {
        navigate('/');
    };

    return (
        <div className="w-full h-48 mb-12 flex justify-center bg-emerald-500 hover:opacity-60 hover:cursor-pointer" onClick={handleNavigateToHome}>
            <img src={img} alt="portada.jpg" />
        </div>
    );
};

export default Coverlayout;