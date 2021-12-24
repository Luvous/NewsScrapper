import React from 'react';
import SourceChoice from '../components/SourceChoice';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <NavBar header="WebScrapper"/>
            <SourceChoice />
            <Footer />
        </div>
    );
};
export default Home;