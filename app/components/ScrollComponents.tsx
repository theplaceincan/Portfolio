'use client';

import { useEffect, useState } from 'react';

export default function ScrollComponents() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showProgressBar, setShowProgressBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Progress bar logic
      if (window.pageYOffset > 100) {
        setShowProgressBar(true);
      } else {
        setShowProgressBar(false);
      }

      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      // Scroll to top button logic
      if (window.pageYOffset > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Progress Bar */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '4px',
          background: '#f0f0f0',
          zIndex: 9999,
          opacity: showProgressBar ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      >
        <div 
          style={{
            height: '100%',
            background: '#8b0000',
            width: `${scrollProgress}%`,
            transition: 'width 0.1s ease'
          }}
        />
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '50px',
          height: '50px',
          background: '#8b0000',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          fontSize: '1.5rem',
          cursor: 'pointer',
          opacity: showScrollTop ? 1 : 0,
          visibility: showScrollTop ? 'visible' : 'hidden',
          transition: 'all 0.3s ease',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#6b0000';
          e.currentTarget.style.transform = 'translateY(-3px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#8b0000';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
        className="scroll-to-top-mobile"
      >
        ↑
      </button>

      <style jsx>{`
        @media (max-width: 768px) {
          .scroll-to-top-mobile {
            bottom: 20px !important;
            right: 20px !important;
            width: 48px !important;
            height: 48px !important;
            font-size: 1.3rem !important;
          }
        }
      `}</style>
    </>
  );
}