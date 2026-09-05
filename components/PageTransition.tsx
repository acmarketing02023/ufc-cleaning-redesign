'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, [pathname]);

  const variants = {
    exit: {
      opacity: 0,
      filter: 'blur(10px)',
      transition: { duration: 0.4 },
    },
    enter: {
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      key={pathname}
      initial="exit"
      animate="enter"
      exit="exit"
      variants={variants}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
