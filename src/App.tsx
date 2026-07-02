import { useState } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Stats from './components/Stats';
import Clients from './components/Clients';
import Company from './components/Company';
import Milestones from './components/Milestones';
import Capabilities from './components/Capabilities';
import Products from './components/Products';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Industries from './components/Industries';
import FAQ from './components/FAQ';
import CTABand from './components/CTABand';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactDock from './components/ContactDock';
import RFQModal from './components/RFQModal';

export default function App() {
  const [rfqOpen, setRfqOpen] = useState(false);

  return (
    <div>
      <TopBar />
      <Navbar onRFQ={() => setRfqOpen(true)} />
      <main>
        <Hero onRFQ={() => setRfqOpen(true)} />
        <Ticker />
        <Stats />
        <Clients />
        <Company />
        <Milestones />
        <Capabilities />
        <Products onRFQ={() => setRfqOpen(true)} />
        <Process />
        <Gallery />
        <Testimonials />
        <Industries />
        <FAQ />
        <CTABand onRFQ={() => setRfqOpen(true)} />
        <Contact />
      </main>
      <Footer />
      <ContactDock onRFQ={() => setRfqOpen(true)} />
      <RFQModal open={rfqOpen} onClose={() => setRfqOpen(false)} />
    </div>
  );
}
