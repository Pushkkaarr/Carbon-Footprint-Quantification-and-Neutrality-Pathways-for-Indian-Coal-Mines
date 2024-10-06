import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Companies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '0px' }); // Changed once to false

  const images = [
    { src: "vale.png", alt: "Vale" },
    { src: "gf.png", alt: "Gold" },
    { src: "baloc.webp", alt: "BALOC" },
    { src: "hzz.webp", alt: "HZZ" },
    { src: "cil.webp", alt: "CIL" },
    { src: "Cemex.webp", alt: "Cemex" },
  ];

  return (
    <div className="lg:h-[250px] from-[#301f61] to-[#301f61] bg-gradient-to-r ">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-[#d3dbe8] font-bold text-center lg:pt-6 pt-6 whitespace-nowrap text-lg lg:text-xl leading-relaxed tracking-wider">
          Trusted by Companies.
        </p>

        <motion.div
          className="lg:flex lg:justify-evenly grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-16"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.3, // Cascading effect
              },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Animate based on scroll position
        >
          {images.map((company, index) => (
            <motion.img
              key={index}
              src={company.src}
              alt={company.alt}
              className="w-full max-w-[120px] lg:max-w-[120px] h-[150px] object-contain mx-auto pt-10"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Companies;