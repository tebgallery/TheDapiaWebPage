import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';

const Contact = () => {
    return (
        <>
        <Navbar/>
        <div className='w-full h-full py-20 px-56 flex items-center justify-center mb-20'>
            <ContactForm/>
            <ContactMap/>
        </div>
        <Footer/>
        </>
    );
};


export default Contact;