import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';
import CartModal from '../../components/CartModal/CartModal';

const Contact = ({cart,cartModal, toggleCartModal}) => {
    return (
        <>
        <Navbar onClickCart={toggleCartModal}/>
        {cartModal && (
      <CartModal cart= {cart} onClose={toggleCartModal}/>
    )}
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