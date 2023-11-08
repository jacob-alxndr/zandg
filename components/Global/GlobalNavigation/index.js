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
  const drawerData = useStore(({ drawerData }) => drawerData);
  const navRef = useRef();
  const tittleRef = useRef();
  const arcRef = useRef();
  const crossBarRef = useRef();
  gsap.registerPlugin(CustomEase);

  useEffect(() => {
    const navElement = navRef?.current;
    const tittle = tittleRef?.current;
    const crossBar = crossBarRef?.current;
    const arc = arcRef?.current;
    const tl = gsap.timeline({ default: { ease: CustomEase.create("custom", ".86, 0, .07, 1") } });

    tl.set(navElement, { opacity: 1, y: -200 })
      .set(tittle, { opacity: 0, translateY: -200 })
      .set(arc, { opacity: 0, rotate: 180 })
      .set(crossBar, { opacity: 0, translateX: 100 })
      .to(navElement, { delay: 1.8, duration: 0.3, y: 0 })
      .to(arc, { delay: 0.2, opacity: 1, rotate: 0 }, "-=.4")
      .to(crossBar, { opacity: 1, translateX: 0 }, "-=.4")
      .to(tittle, { opacity: 1, translateY: 0 }, "-=.6");
  }, []);
  return (
    <div className={clsx(styles.header, classes, "padding-x-md")} ref={navRef}>
      <nav className={clsx(styles.nav)}>
        <div className={clsx(styles.navContent)}>
          <Button
            data={{
              buttonUrl: "/",
              buttonType: "internal",
            }}
            classes={clsx(styles.iconLogo)}
          >
            <IconLogo tittleRef={tittleRef} arcRef={arcRef} crossBarRef={crossBarRef} />
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
