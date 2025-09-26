import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Timeline } from './components/WhyUs';
import { motion, useScroll, useTransform } from "framer-motion";
import Customers from './components/Customers';
import YemenMap from './components/YemenMap';

// export  function App() {
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     // this section is the scroll area
//     target: sectionRef,
//     offset: ["start end", "end start"], 
//   });

//   // Map scroll progress (0 → 1) to path length (0 → 1)
//   const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   console.log(pathLength);

//   return (
//     <div>
//       <div className='h-[150vh]'></div>
//     <section
//       ref={sectionRef}
//       className="h-[150vh] flex items-center justify-center bg-gray-100"
//     >
//       <svg width="100" height="100%" viewBox="0 0 100 100%">
//         <motion.line
//           x1="50"
//           y1="0"
//           x2="50"
//           y2="100%"
//           stroke="black"
//           strokeWidth="4"
//           style={{ pathLength }}
//         />
//       </svg>
//     </section>
//     <div className='h-[150vh]'></div>
//     </div>
//   );
// }


function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      {/* <YemenMap/> */}
      <WhyUs />
      {/* <Customers/> */}
      {/* <Timeline /> */}
      {/* <Products /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;