// src/components/HomePage.js
import React from 'react';
import { Helmet } from 'react-helmet-async';

import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import Testimonials from './Testimonials';
import ServicesSection from './ServicesSection';
import Gallery from './Gallery';
import ContactSection from './ContactSection';
import Footer from './Footer';
import ModalForm from './ModalForm';

import '../styles/templatemo-style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
    const cities = [
        'Lewisville',
        'Coppell',
        'The Colony',
        'Dallas',
        'Plano',
        'Frisco',
        'Flower Mound'
    ];

    const cityList = cities.join(', ');

    return (
        <div>
            <Helmet>
                <title>
                    Tree Removal, Pruning &amp; Trimming, Stump Grinding &amp; Emergency Storm Response
                    in {cityList}
                </title>
                <meta
                    name="description"
                    content={`Texas Best Tree Company provides tree removal, pruning & trimming, stump grinding, and emergency storm response services in ${cityList}.`}
                />
                <meta
                    name="keywords"
                    content={cities
                        .flatMap(city => [
                            `${city} tree removal`,
                            `${city} tree pruning`,
                            `${city} stump grinding`,
                            `${city} storm response`
                        ])
                        .join(', ')}
                />
                <meta property="og:title" content="Texas Best Tree Company" />
                <meta
                    property="og:description"
                    content={`Expert tree removal, pruning, stump grinding & emergency storm response in ${cityList}.`}
                />
            </Helmet>

            {/* SEO Hidden Headings */}
            <h1 className="visually-hidden">
                Tree Removal, Pruning &amp; Trimming, Stump Grinding &amp; Emergency Storm Response
                in {cityList}
            </h1>
            <h2 className="visually-hidden">
                Tree Removal in {cityList}
            </h2>
            <h2 className="visually-hidden">
                Tree Pruning &amp; Trimming in {cityList}
            </h2>
            <h2 className="visually-hidden">
                Stump Grinding in {cityList}
            </h2>
            <h2 className="visually-hidden">
                Emergency Storm Response in {cityList}
            </h2>

            <Navbar />

            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <Gallery />
            <Testimonials />
            <ContactSection />
            <Footer />
            <ModalForm />
        </div>
    );
};

export default HomePage;
