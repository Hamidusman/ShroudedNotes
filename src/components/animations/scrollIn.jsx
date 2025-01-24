import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const motionVariants = {
  hidden: { opacity: 0, translateY: 100 },
  visible: { opacity: 1, translateY: 0, transition: { duration: 0.6 } },
};

export default function Scroll({ children }) {
  const controls = useAnimation();
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden');
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={motionVariants}
      className='w-full sm:w-auto'
    >
      {children}
    </motion.div>
  );
}
