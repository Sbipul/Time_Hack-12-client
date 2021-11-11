import React from 'react';
import Reviews from '../Reviews/Reviews';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import Products from './Products/Products';
import TopBanner from './TopBanner/TopBanner';
const Home = () => {
    return (
        <div>
            <NavBar/>
            <TopBanner/>
            <Products/>
            <Reviews/>
            <Footer/>
        </div>
    );
};

export default Home;