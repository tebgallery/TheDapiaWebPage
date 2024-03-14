import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';

const Contact = () => {
    return (
        <>
        <Navbar/>
        <div className='w-full h-full py-20 px-56 bg-contactBg'>
            <div className='flex items-center justify-center p-8 rounded-2xl bg-white'>
            <ContactForm/>
            <ContactMap/>
            </div>
        </div>
        <Footer/>
        </>
    );
};


export default Contact;