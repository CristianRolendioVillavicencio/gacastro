import React, { useEffect } from 'react';

const Reviews = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.setAttribute('data-use-service-core', '');
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      console.log('ElfSight script loaded successfully');
    };

    script.onerror = () => {
      console.error('Error loading ElfSight script');
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ position: 'relative', padding: '25px', marginTop: '50px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', textTransform: 'uppercase' }}>
        What Our Clients Say
      </h2>
      <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '16px' }}>
        Our clients trust us because of the quality of our work and attention to detail. Their feedback and reviews motivate us to keep providing the best service possible.
      </p>
      <div
        className="elfsight-app-8c333e56-e9ed-490c-b7c5-840b855c4314"
        data-elfsight-app-lazy
      ></div>
      <button
        type="button"
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'white',
          color: 'white',
          border: 'none',
          padding: '10px 40px',
          width: '200px',
          borderRadius: '5px',
          cursor: 'default',
          zIndex: 1000,
          textAlign: 'center',
          pointerEvents: 'none',
        }}
      >
        Write Review
      </button>
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '5px',
        background: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0) 100%)',
      }}></div>
    </div>
  );
};

export default Reviews;
