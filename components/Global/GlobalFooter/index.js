import React from "react";
import styles from "@styles/GlobalFooter/index.module.scss";
import clsx from "clsx";

const GlobalFooter = () => {
  return (
    <footer className={clsx(styles.container, "padding-x-md")}>
      <div className={styles.content}>
        <div className={clsx(styles.legal, "u-heading--h2")}>
          &copy; {process.env.NEXT_PUBLIC_SITE_NAME} {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;
