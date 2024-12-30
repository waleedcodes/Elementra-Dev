"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useTheme } from "next-themes";

export const ContainerScroll = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[90rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-0 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

// import { motion } from "framer-motion"; // Ensure framer-motion is imported

export const Card = ({ rotate, scale, children }) => {
  const { theme } = useTheme(); // Removed setTheme as it's not used
  const boxShadow =
    theme === "dark"
      ? "0 0px 80px rgba(255, 255, 255, 0.6), 0 1px 60px rgba(255, 255, 255, 0.3)"
      : "0 0px 80px rgba(128, 0, 128, 0.6), 0 1px 60px rgba(128, 0, 128, 0.3)";

  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow,
      }}
      className="max-w-5xl -mt-12 mx-auto h-[21rem] md:h-[43rem] w-full border-4 border-white p-2 md:p-6 bg-primary dark:bg-gray-800 md:rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden bg-gray-100 md:rounded-2xl md:p-4">
        {children}
      </div>
    </motion.div>
  );
};
