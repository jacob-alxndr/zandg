/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react";
import Button from "../../UtilityComponents/Button";
import styles from "@styles/GlobalNavigation/index.module.scss";
import clsx from "clsx";
import { useStore } from "@lib/store";
import { IconAbout, IconLogo } from "@components/UtilityComponents/Icons";
import { gsap } from "gsap";
import CustomEase from "gsap/dist/CustomEase";
const GlobalNavigation = (props) => {
  const { classes } = props;
  const navigationData = useStore(({ navigationData }) => navigationData);
  const drawerData = useStore(({ drawerData }) => drawerData);
  const navRef = useRef();
  useEffect(() => {
    const navElement = navRef?.current;

    const tl = gsap.timeline({ default: { ease: CustomEase.create("custom", ".86, 0, .07, 1") } });

    tl.set(navElement, { opacity: 1, y: -200 });
    tl.to(navElement, { delay: 1.8, duration: 0.3, y: 0 });
  }, []);
  return (
    <div className={clsx(styles.header, classes, "padding-x-sm")} ref={navRef}>
      <nav className={clsx(styles.nav)}>
        <div className={clsx(styles.navContent)}>
          <Button
            data={{
              buttonUrl: "/",
              buttonType: "internal",
            }}
            classes={clsx(styles.iconLogo)}
          >
            <IconLogo />
          </Button>
          <Button
            data={{
              buttonType: "content-drawer",
              drawer: drawerData,
              openInDrawer: true,
            }}
            classes={clsx(styles.iconAbout)}
          >
            <IconAbout />
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default GlobalNavigation;
