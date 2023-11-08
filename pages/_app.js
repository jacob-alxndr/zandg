import "../styles/app.globals.scss";
import Head from "next/head";
import { useEffect, useState, useLayoutEffect } from "react";
import { mobileDetect } from "@utils/mobileDetect";
import GlobalNavigation from "@components/Global/GlobalNavigation";
import GlobalFooter from "@components/Global/GlobalFooter";
import { workSans } from "@lib/fonts";
import { useStore } from "@lib/store";
import { useFrame } from "@studio-freight/hamo";
import Lenis from "@studio-freight/lenis";
import GlobalDrawer from "@components/Global/GlobalDrawer";

export default function App({ Component, pageProps }) {
  const isTouch = useStore(({ isTouch }) => isTouch);
  const setIsTouch = useStore((state) => state.setIsTouch);
  const [lenis, setLenis] = useStore((state) => [state.lenis, state.setLenis]);
  const drawerData = useStore(({ drawerData }) => drawerData);
  const drawerIsOpen = useStore(({ drawerIsOpen }) => drawerIsOpen);
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1.2,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //     orientation: "vertical",
  //     gestureOrientation: "vertical",
  //     smoothWheel: true,
  //     wheelMultiplier: 1,
  //     smoothTouch: false,
  //     touchMultiplier: 4,
  //     infinite: false,
  //   });

  //   window.lenis = lenis;
  //   setLenis(lenis);
  //   // lenis.on("scroll", (e) => {
  //   //   console.log(e.targetScroll);
  //   // });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useFrame((time) => {
  //   lenis?.raf(time);
  // }, []);

  useEffect(() => {
    if (isTouch) {
      document.body.classList.add("is-touch");
    } else {
      document.body.classList.remove("is-touch");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTouch]);
  useEffect(() => {
    if (drawerIsOpen) {
      document.body.classList.add("is-locked");
    } else {
      document.body.classList.remove("is-locked");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawerIsOpen]);

  useEffect(() => {
    setIsTouch(mobileDetect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="preconnect" href={`https://graphql.datocms.com`}></link>
        <link rel="dns-preconnect" href="https://datocms-assets.com"></link>
        <link rel="dns-prefetch" href="https://datocms-assets.com"></link>
        <link rel="icon" href="/favicon.ico" />
        {/* EXAMPLE:: Adobe typekit integration */}
        {/* <link
          rel="stylesheet"
          href="https://use.typekit.net/fqk8hnt.css"
        ></link> */}
        <style>{`
          :root {
            --font-primary: ${workSans.style.fontFamily};
          }
        `}</style>
      </Head>
      <GlobalNavigation />
      <GlobalDrawer {...drawerData} />
      <Component {...pageProps} />
    </>
  );
}
