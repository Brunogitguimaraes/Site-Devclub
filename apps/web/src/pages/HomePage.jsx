import React from 'react';
import { Helmet } from 'react-helmet';
import Loader from '@/components/devclub/Loader';
import Cursor from '@/components/devclub/Cursor';
import Nav from '@/components/devclub/Nav';
import Hero from '@/components/devclub/Hero';
import SocialStrip from '@/components/devclub/SocialStrip';
import Manifesto from '@/components/devclub/Manifesto';
import Ecosystem from '@/components/devclub/Ecosystem';
import Tracks from '@/components/devclub/Tracks';
import Stories from '@/components/devclub/Stories';
import Companies from '@/components/devclub/Companies';
import Tutors from '@/components/devclub/Tutors';
import FinalCTA from '@/components/devclub/FinalCTA';
import Footer from '@/components/devclub/Footer';
import YouTubeModal from '@/components/devclub/YouTubeModal';
import FloatingActions from '@/components/devclub/FloatingActions';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Helmet>
        <title>DevClub</title>
        <meta
          name="description"
          content="DevClub: escola e comunidade brasileira de tecnologia. Aprenda construindo projetos reais, com mentorias, comunidade ativa e oportunidades de carreira."
        />
      </Helmet>
      <Loader />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <SocialStrip />
        <Manifesto />
        <Ecosystem />
        <Tracks />
        <Stories />
        <Companies />
        <Tutors />
        <FinalCTA />
      </main>
      <Footer />
      <YouTubeModal />
      <FloatingActions />
    </div>
  );
}
