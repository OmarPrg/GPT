import  { useState, useEffect } from 'react';
import { RiArrowUpLine } from 'react-icons/ri';
import './ScrollToTop.css';

const ScrollToTop = () => {
  // 1. We define the state as a boolean
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // TypeScript requires the cleanup function to return void
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop} className="scroll-icon-container">
          <RiArrowUpLine size={27} color="#fff" />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;