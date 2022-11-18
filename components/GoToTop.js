import { useEffect, useState } from 'react';
import Link from 'next/link';

const GoToTop = ({ ruta }) => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 500) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  return (
    <Link
      href={ruta}
      passHref
      style={{
        position: 'fixed' /* Fixed/sticky position */,
        bottom: '20px' /* Place the button at the bottom of the page */,
        right: '30px' /* Place the button 30px from the right */,
        zIndex: '99' /* Make sure it does not overlap */,
        border: 'none' /* Remove borders */,
        outline: 'none' /* Remove outline */,
        backgroundColor: 'red' /* Set a background color */,
        color: 'white' /* Text color */,
        cursor: 'pointer' /* Add a mouse pointer on hover */,
        padding: '15px' /* Some padding */,
        borderRadius: '10px' /* Rounded corners */,
        fontSize: '18px' /* Increase font size */,
      }}
      className={scroll ? 'd-block' : 'd-none'}
    >
      TOP
    </Link>
  );
};

export default GoToTop;
