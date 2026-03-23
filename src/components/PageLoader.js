// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import './PageLoader.css';


// const PageLoader = () => {
//   const [isLoading, setIsLoading] = useState(true); // Start true to block initial load
//   const [isInitialLoad, setIsInitialLoad] = useState(true);
//   const location = useLocation();

//   useEffect(() => {
//     const handleLoad = () => {
//       setIsInitialLoad(false);
//       setIsLoading(false);
//     };

//     if (document.readyState === 'complete') {
//       handleLoad();
//     } else {
//       window.addEventListener('load', handleLoad);
//       return () => window.removeEventListener('load', handleLoad);
//     }
//   }, []);

//   useEffect(() => {
//     if (isInitialLoad) return; // Don't trigger on initial mount (handled above)

//     setIsLoading(true);
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 800);

//     return () => clearTimeout(timer);
//   }, [location, isInitialLoad]);

//   return (
//     <div className={`page-loader-custom ${isLoading ? 'active' : ''}`}>
//       <div className="hero-loader-content">
//         <div className="hero-loader-branding">
//           <span className="loader-tag">EXPERIENCE EXCELLENCE</span>
//           <h1 className="loader-title">BROLICHI</h1>
//           <div className="loader-line-container">
//             <div className="loader-line-progress"></div>
//           </div>
//           <p className="loader-status">Preparing your experience...</p>
//         </div>
        
//         <div className="loader-bg-elements">
//           <div className="bg-circle circle-1"></div>
//           <div className="bg-circle circle-2"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PageLoader;
