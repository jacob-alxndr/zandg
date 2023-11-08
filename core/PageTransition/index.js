import React from "react";
import { motion as m } from "framer-motion";

function PageTransition({ children }, ref) {
  const hidden = { opacity: 0 };
  const visible = { opacity: 1 };
  const transition = { duration: 0.8, delay: 0.5 };

  return (
    <m.div
      ref={ref}
      initial={hidden}
      animate={visible}
      transition={transition}
      exit={hidden}
      key="modal"
      //   style={{ maxHeight: "100%", overflowY: "auto" }}
    >
      {children}
    </m.div>
  );
}

export default PageTransition;
