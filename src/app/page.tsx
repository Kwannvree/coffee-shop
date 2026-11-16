import { Layout } from 'antd';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import MenuSection from '@/components/MenuSection/MenuSection';
import Features from '@/components/Features/Features';
import Experience from '@/components/Experience/Experience';
import Testimonials from '@/components/Testimonials/Testimonials';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function HomePage() {
  return (
    <Layout>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Features />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </Layout>
  );
}
