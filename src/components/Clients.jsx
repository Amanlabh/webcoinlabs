import React, { useState } from 'react';
import Section from './Section';
import Heading from './Heading';

const Clients = () => {
  const [logosToShow, setLogosToShow] = useState(8); // Initial number of logos to display
  const logos = [ // Replace with your actual logo data (image paths and alt texts)
    { src: '/path/to/logo1.png', alt: 'Logo 1' },
    { src: '/path/to/logo2.png', alt: 'Logo 2' },
    { src: '/path/to/logo3.png', alt: 'Logo 3' },
    { src: '/path/to/logo4.png', alt: 'Logo 4' },
    { src: '/path/to/logo5.png', alt: 'Logo 5' },
    { src: '/path/to/logo6.png', alt: 'Logo 6' },
    { src: '/path/to/logo7.png', alt: 'Logo 7' },
    { src: '/path/to/logo8.png', alt: 'Logo 8' },
    { src: '/path/to/logo9.png', alt: 'Logo 9' },
    { src: '/path/to/logo10.png', alt: 'Logo 10' },
    { src: '/path/to/logo11.png', alt: 'Logo 11' },
    { src: '/path/to/logo12.png', alt: 'Logo 12' },
    { src: '/path/to/logo13.png', alt: 'Logo 13' },
    { src: '/path/to/logo14.png', alt: 'Logo 14' },
    { src: '/path/to/logo15.png', alt: 'Logo 15' },
    { src: '/path/to/logo16.png', alt: 'Logo 16' },
    { src: '/path/to/logo17.png', alt: 'Logo 17' },
    { src: '/path/to/logo18.png', alt: 'Logo 18' },
    { src: '/path/to/logo19.png', alt: 'Logo 19' },
    { src: '/path/to/logo20.png', alt: 'Logo 20' },
    { src: '/path/to/logo21.png', alt: 'Logo 21' },
    { src: '/path/to/logo22.png', alt: 'Logo 22' },
    { src: '/path/to/logo23.png', alt: 'Logo 23' },
  ];

  const handleLoadMore = () => {
    setLogosToShow(Math.min(logos.length, logosToShow + 10)); // Update with desired number of logos per load
  };

  const displayedLogos = logos.slice(0, logosToShow); // Slice to display only a subset of logos

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading className="" title="Clients and VC's" />

        <div className="grid grid-cols-3 gap-6 mt-10"> {/* Change to 3 columns */}
          {displayedLogos.map((logo, index) => (
            <div key={index} className="client-logo rounded-lg bg-n-7 shadow-md p-4 flex justify-center items-center">
              {/* Increase width and height for logos */}
              <img src={logo.src} alt={logo.alt} width={200} height={100} /> {/* Adjust size as needed */}
            </div>
          ))}

          {logosToShow < logos.length && ( // Only show button if there are more logos to display
            <button className="mt-6 text-center px-4 py-2 rounded-md bg-n-8 text-white hover:bg-n-9" onClick={handleLoadMore}>
              Load More
            </button>
          )}
        </div>
        
      </div>
    </Section>
  );
};

export default Clients;
